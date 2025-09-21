using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Applications.Interfaces
{
    public interface IGuestService
    {
        Guest? GetGuestByPath(string path);
        List<Guest> GetGuests();
        Task<Guest> FindByIdAsync(Guid Id, CancellationToken cancellationToken = default);
        Task<Guest> FindByConditionAsync(Guid Id, CancellationToken cancellationToken = default);
        Task AddGuest(AddGuestViewModel model);

        void RemoveGuest(Guest guest);
        Task UpdateGuest(UpdateGuestViewModel guest);
        Task AddOrUpdateGuest(AddOrUpdateGuestViewModel model);
    }
}
