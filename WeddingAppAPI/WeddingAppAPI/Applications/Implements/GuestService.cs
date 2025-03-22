using WeddingAppAPI.Abstractions;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Domain;

namespace WeddingAppAPI.Applications.Implements
{
    public class GuestService : IGuestService
    {
        private readonly IRepositoryBase<Guest, Guid> _guestRepository;
        private readonly IUnitOfWork _unitOfWork;

        public GuestService(IRepositoryBase<Guest, Guid> guestRepository,
            IUnitOfWork unitOfWork)
        {
            _guestRepository = guestRepository;
            _unitOfWork = unitOfWork;
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


        public void AddGuest(Guest guest)
        {
            _guestRepository.Add(guest);
        }

        public void RemoveGuest(Guest guest)
        {
            _guestRepository.Remove(guest);
        }

        public void UpdateGuest(Guest guest)
        {
            _guestRepository.Update(guest);
        }
    }
}
