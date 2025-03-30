using Telegram.Bot.Types;
using WeddingAppAPI.Abstractions;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Common;
using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

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
        public List<Guest> GetGuests(string name)
        {
            List<Guest> result = new List<Guest>();
            if (!string.IsNullOrEmpty(name))
            {
                result = _guestRepository.FindAll(g => g.GuestName.Contains(name)).ToList();
            }
            else { 
                result = _guestRepository.FindAll().ToList();
            }
            return result;
        }

        public async Task<Guest> FindByConditionAsync(Guid Id, CancellationToken cancellationToken = default)
        {
            return await _guestRepository.FindSingleAsync(x => x.Id.Equals(Id), cancellationToken);
        }

        public async Task<Guest> FindByIdAsync(Guid Id, CancellationToken cancellationToken = default)
        {
            return await _guestRepository.FindByIdAsync(Id, cancellationToken);
        }


        public async Task AddGuest(AddGuestViewModel model)
        {
            Guest guest = new Guest();
            guest.Id = new Guid();
            guest.Comment = model.Comment;
            guest.GuestName = model.GuestName;
            guest.Type = model.Type;
            _guestRepository.Add(guest);
            _unitOfWork.Commit();
        }

        public void RemoveGuest(Guest guest)
        {
            _guestRepository.Remove(guest);
            _unitOfWork.Commit();
        }

        public async Task UpdateGuest(UpdateGuestViewModel model)
        {
            try
            {
                var guest = FindByIdAsync(Guid.Parse(model.Id)).Result;
                if (guest != null)
                {
                    var type = CodeConst.FriendTypes.FirstOrDefault(x => x.Key == guest.Type).Value;
                    var acceptStatus = CodeConst.AcceptStatus.FirstOrDefault(x => x.Key == model.Status).Value;
                    guest.Status = model.Status;
                    guest.UpdatedAt = DateTime.Now;
                    if (!model.UpdateStatusFlag)
                    {
                        guest.GuestName = model.GuestName;
                        guest.Comment = model.Comment;
                        guest.Type = model.Type;
                    }

                    _guestRepository.Update(guest);
                    _unitOfWork.Commit();

                    if (model.UpdateStatusFlag)
                    {
                        await _telegramService.SendMessageAsync($"{type}: {guest.GuestName} {acceptStatus} ");
                    }
                }
            }
            catch (Exception ex)
            {
                await _telegramService.SendMessageAsync($"Lỗi ở UpdateGuest: {ex.Message}, {DateTime.Now}");
                throw new Exception(ex.Message);
            }
        }
    }
}
