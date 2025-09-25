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
            Guest? guest = null;
            if (!string.IsNullOrEmpty(path)) 
            { 
                var result = _guestRepository.FindAll(g => g.GuestPath.Equals(path)).FirstOrDefault();
                if (result != null)
                {
                    guest = result;
                }
            }
            return guest;
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
            try
            {
                Guest guest = new Guest();
                guest.Id = new Guid();
                guest.GuestName = model.GuestName;
                guest.GuestPath = model.GuestPath;
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
                    string partner = "";
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

        public async Task<Guest?> UpdateGuest(UpdateGuestViewModel model)
        {
            try
            {
                // Trường hợp khách tự update
                if (model.IsGuest == true) {
                    var guest = _guestRepository.FindAll(x => x.GuestPath.Equals(model.GuestPath)).FirstOrDefault();
                    if (guest != null)
                    {
                        var type = CodeConst.FriendTypes.FirstOrDefault(x => x.Key == guest.Type).Value;
                        var acceptStatus = CodeConst.AcceptStatus.FirstOrDefault(x => x.Key == model.Status).Value;
                        string partner = "";
                        if (model.Status == true)
                        {
                            partner = model.Partner == 0 ? "đi một mình" : $"cùng {model.Partner} người";
                        }
                        guest.Status = model.Status;
                        guest.Partner = model.Partner;
                        guest.UpdatedAt = DateTime.Now;

                        _guestRepository.Update(guest, guest.RowVersion);
                        _unitOfWork.Commit();

                        //await _telegramService.SendMessageAsync($"{type}: {guest.GuestName} {acceptStatus} {partner}");
                    }
                    return guest;
                }
                // Trường hợp mình update
                else
                {
                    var guest = FindByIdAsync(Guid.Parse(model.Id)).Result;
                    if (guest != null) {
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
            }
            catch (DbUpdateConcurrencyException)
            {
                throw new Exception("Bản ghi đã được cập nhật trước đó, vui lòng tải lại.");
            }
            catch (Exception ex)
            {
                await _telegramService.SendMessageAsync($"Lỗi ở UpdateGuest: {ex.Message}, {DateTime.Now}");
                throw new Exception(ex.Message);
            }
        }

        public async Task AddOrUpdateGuest(AddOrUpdateGuestViewModel model)
        {
            try
            {
                var guest = _guestRepository.FindAll(x => x.GuestPath.Equals(model.GuestPath)).FirstOrDefault();
                if (guest != null)
                {
                    // Update nếu tìm thấy pathName
                    UpdateGuestViewModel updateModel = new UpdateGuestViewModel();
                    updateModel.IsGuest = true;
                    updateModel.Status = model.Status;
                    updateModel.Partner = model.Partner;
                    updateModel.GuestPath = model.GuestPath;
                    await UpdateGuest(updateModel);
                }
                else {
                    // Trường hợp là bạn bố mẹ sẽ add thêm khách
                    string pathName = RemoveVietnameseDiacritics(model.GuestName);

                    AddGuestViewModel addModel = new AddGuestViewModel();
                    addModel.GuestName = model.GuestName;
                    addModel.GuestPath = pathName;
                    addModel.Status = model.Status;
                    addModel.IsGuest = true;
                    if (model.Status)
                    {
                        addModel.Partner = model.Partner;
                    }
                    switch (model.GuestPath)
                    {
                        case CodeConst.BAN_BO_PHUONG:
                            addModel.Type = 1;
                            break;
                        case CodeConst.BAN_ME_GIANG:
                            addModel.Type = 2;
                            break;
                        case CodeConst.BAN_BO_LONG:
                            addModel.Type = 3;
                            break;
                        case CodeConst.BAN_ME_VAN:
                            addModel.Type = 4;
                            break;
                        default:
                            break;
                    }
                    await AddGuest(addModel);
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
