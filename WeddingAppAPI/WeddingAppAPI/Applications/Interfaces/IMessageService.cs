using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Applications.Interfaces
{
    public interface IMessageService
    {
        Task SendMessage(SendMessageViewModel model);
    }
}
