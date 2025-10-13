using System.Globalization;
using System.Text.RegularExpressions;
using System.Text;
using Telegram.Bot.Types;
using WeddingAppAPI.Abstractions;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Common;
using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;
using Microsoft.EntityFrameworkCore;

namespace WeddingAppAPI.Applications.Implements
{
    public class GuestService : IGuestService
    {
        private readonly IRepositoryBase<Guest, Guid> _guestRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly TelegramService _telegramService;

        public GuestService(IRepositoryBase<Guest, Guid> guestRepository,
            IUnitOfWork unitOfWork,
            TelegramService telegramService)
        {
            _guestRepository = guestRepository;
            _unitOfWork = unitOfWork;
            _telegramService = telegramService;
        }

        public Guest? GetGuestByPath(string path)
        {
            return _guestRepository.FindAll(g => g.GuestPath.Equals(path)).FirstOrDefault(); ;
        }

        public List<Guest> GetGuests()
        {
            return _guestRepository.FindAll().OrderByDescending(x => x.UpdatedAt).ToList();
        }

        public async Task<Guest> FindByConditionAsync(Guid Id, CancellationToken cancellationToken = default)
        {
            return await _guestRepository.FindSingleAsync(x => x.Id.Equals(Id), cancellationToken);
        }

        public async Task<Guest> FindByIdAsync(Guid Id, CancellationToken cancellationToken = default)
        {
            return await _guestRepository.FindByIdAsync(Id, cancellationToken);
        }

        public async Task<Guest> AddGuest(AddGuestViewModel model)
        {
            // Trường hợp là mình thêm mới => cần kiểm tra Link đã tồn tại chưa
            if (model.IsGuest == null)
            {
                var guestPathExist = _guestRepository.FindAll(x => x.GuestPath.Equals(model.GuestPath)).FirstOrDefault();
                if (guestPathExist != null)
                {
                    throw new Exception("Link đã tồn tại, vui lòng đổi sang link khác");
                }
            }
            try
            {
                Guest guest = new Guest();
                guest.Id = new Guid();
                guest.GuestName = model.GuestName;
                guest.GuestPath = model.GuestPath.Trim();
                guest.Type = model.Type;
                guest.Comment = model.Comment;
                guest.Status = model.Status;
                guest.Vow = model.Vow;
                guest.Partner = model.Partner;

                _guestRepository.Add(guest);
                _unitOfWork.Commit();

                if (model.IsGuest == true)
                {
                    var type = CodeConst.FriendTypes.FirstOrDefault(x => x.Key == guest.Type).Value;
                    var acceptStatus = CodeConst.AcceptStatus.FirstOrDefault(x => x.Key == model.Status).Value;
                    string partner = string.Empty;
                    if (model.Status == true)
                    {
                        partner = model.Partner == 0 ? "đi một mình" : $"cùng {model.Partner} người";
                    }
                    await _telegramService.SendMessageAsync($"{type}: {guest.GuestName} {acceptStatus} {partner}");
                }
                return guest;
            }
            catch (Exception ex)
            {
                await _telegramService.SendMessageAsync($"Lỗi ở AddGuest: {ex.Message}, {DateTime.Now}");
                throw new Exception(ex.Message);
            }
        }

        public void RemoveGuest(Guest guest)
        {
            _guestRepository.Remove(guest);
            _unitOfWork.Commit();
        }

        /// <summary>
        /// Hàm mình tự update thông tin khách
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public async Task<Guest?> UpdateGuest(UpdateGuestViewModel model)
        {
            var guestPathExist = _guestRepository.FindAll(x => x.GuestPath.Equals(model.GuestPath)).FirstOrDefault();
            if (guestPathExist != null && guestPathExist.Id.ToString() != model.Id)
            {
                throw new Exception("Link đã tồn tại, vui lòng đổi sang link khác");
            }
            try
            {
                // Trường hợp mình update
                var guest = FindByIdAsync(Guid.Parse(model.Id)).Result;
                if (guest != null)
                {
                    guest.GuestName = model.GuestName;
                    guest.Partner = model.Partner;
                    guest.Status = model.Status;
                    guest.GuestPath = model.GuestPath;
                    guest.Vow = model.Vow;
                    guest.Comment = model.Comment;
                    guest.Type = model.Type;
                    guest.Donate = model.Donate;
                    guest.UpdatedAt = DateTime.Now;

                    var originalRowVersion = Convert.FromBase64String(model.RowVersion);

                    _guestRepository.Update(guest, originalRowVersion);
                    _unitOfWork.Commit();
                }
                return guest;
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new Exception("Thông tin đã được cập nhật trước đó, vui lòng tải lại.");
            }
            catch (Exception ex)
            {
                await _telegramService.SendMessageAsync($"Lỗi ở UpdateGuest: {ex.Message}, {DateTime.Now}");
                throw new Exception("Có lỗi xảy ra vui lòng thử lại.");
            }
        }

        /// <summary>
        /// Hàm update bởi khách
        /// </summary>
        /// <param name="guest"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public async Task<Guest?> UpdateByGuest(Guest guest)
        {
            try
            {
                // Trường hợp khách tự update
                var type = CodeConst.FriendTypes.FirstOrDefault(x => x.Key == guest.Type).Value;
                var acceptStatus = CodeConst.AcceptStatus.FirstOrDefault(x => x.Key == guest.Status).Value;
                string partner = string.Empty;
                if (guest.Status == true)
                {
                    partner = guest.Partner == 0 ? "đi một mình" : $"cùng {guest.Partner} người";
                }
                guest.Status = guest.Status;
                guest.Partner = guest.Partner;
                guest.UpdatedAt = DateTime.Now;

                _guestRepository.Update(guest, guest.RowVersion);
                _unitOfWork.Commit();

                await _telegramService.SendMessageAsync($"{type}: {guest.GuestName} {acceptStatus} {partner}");
                return guest;
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new Exception("Thông tin đã được cập nhật trước đó, vui lòng tải lại.");
            }
            catch (Exception ex)
            {
                await _telegramService.SendMessageAsync($"Lỗi ở UpdateByGuest: {ex.Message}, {DateTime.Now}");
                throw new Exception("Có lỗi xảy ra vui lòng thử lại.");
            }
        }

        /// <summary>
        /// Chỉ được gọi khi khách mở được popup xác nhận
        /// Các trường hợp: khách đã được tạo, bạn bố mẹ
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public async Task AddOrUpdateGuest(AddOrUpdateGuestViewModel model)
        {
            try
            {
                List<string> listParent = new List<string>() { CodeConst.BAN_BO_PHUONG, CodeConst.BAN_ME_GIANG, CodeConst.BAN_BO_LONG, CodeConst.BAN_ME_VAN };
                // Trường hợp khách submit từ link bạn bố mẹ
                if (listParent.Contains(model.GuestPath))
                {
                    string pathName = RemoveVietnameseDiacritics(model.GuestName) + model.GuestPath;
                    int parentType = 0;
                    switch (model.GuestPath)
                    {
                        case CodeConst.BAN_BO_PHUONG:
                            parentType = 1;
                            break;
                        case CodeConst.BAN_ME_GIANG:
                            parentType = 2;
                            break;
                        case CodeConst.BAN_BO_LONG:
                            parentType = 3;
                            break;
                        case CodeConst.BAN_ME_VAN:
                            parentType = 4;
                            break;
                        default:
                            break;
                    }

                    // Xét cả type vì bạn bố mẹ có thể cùng tên
                    var guestParent = _guestRepository.FindAll(x => x.GuestPath.Equals(pathName) && x.Type == parentType).FirstOrDefault();
                    if (guestParent != null)
                    {
                        // Update nếu tìm thấy bạn bố mẹ đã từng add
                        guestParent.Status = model.Status;
                        guestParent.Partner = model.Partner;
                        await UpdateByGuest(guestParent);
                    } else
                    {
                        AddGuestViewModel addModel = new AddGuestViewModel();
                        addModel.GuestName = model.GuestName;
                        addModel.GuestPath = pathName;
                        addModel.Status = model.Status;
                        addModel.IsGuest = true;
                        if (model.Status)
                        {
                            addModel.Partner = model.Partner;
                        }
                        addModel.Type = parentType;
                        await AddGuest(addModel);
                    }
                }
                // Trường hợp khách submit là khách đã được tạo trước đó
                else
                {
                    // Xét cả type vì bạn cô dâu và chú rể có thể cùng tên
                    var guest = _guestRepository.FindAll(x => x.GuestPath.Equals(model.GuestPath) && x.Type == model.Type).FirstOrDefault();
                    if (guest != null)
                    {
                        guest.Status = model.Status;
                        guest.Partner = model.Partner;
                        await UpdateByGuest(guest);
                    }
                }
            }
            catch (Exception ex)
            {
                await _telegramService.SendMessageAsync($"Lỗi ở AddOrUpdateGuest: {ex.Message}, {DateTime.Now}");
                throw new Exception(ex.Message);
            }
        }

        // Chuyển từ tên người nhập thành pathName
        public static string RemoveVietnameseDiacritics(string input)
        {
            if (string.IsNullOrWhiteSpace(input))
                return string.Empty;

            // Bước 1: Normalize về FormD để tách ký tự và dấu
            string normalized = input.Normalize(NormalizationForm.FormD);

            // Bước 2: Loại bỏ các ký tự dấu
            var builder = new StringBuilder();
            foreach (char c in normalized)
            {
                UnicodeCategory category = CharUnicodeInfo.GetUnicodeCategory(c);
                if (category != UnicodeCategory.NonSpacingMark)
                {
                    builder.Append(c);
                }
            }

            // Bước 3: Normalize lại về FormC và chuyển thành chữ thường
            string noDiacritics = builder.ToString().Normalize(NormalizationForm.FormC).ToLowerInvariant();

            // Bước 4: Loại bỏ khoảng trắng
            return Regex.Replace(noDiacritics, @"\s+", string.Empty);
        }
    }
}
