using WeddingAppAPI.Domain;

namespace WeddingAppAPI.Applications.Interfaces
{
    public interface IGuestService
    {
        List<Guest> GetGuests(string name);
        Task<Guest> FindByIdAsync(Guid Id, CancellationToken cancellationToken = default);
        Task<Guest> FindByConditionAsync(Guid Id, CancellationToken cancellationToken = default);
        void AddGuest(Guest guest);

        void RemoveGuest(Guest guest);
        void UpdateGuest(Guest guest);
    }
}
