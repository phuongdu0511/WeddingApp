using WeddingAppAPI.Abstractions;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Applications.Implements
{
    public class MessageService : IMessageService
    {
        private readonly IRepositoryBase<Message, Guid> _messageRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly TelegramService _telegramService;
        public MessageService(IRepositoryBase<Message, Guid> messageRepository
            , IUnitOfWork unitOfWork
            , TelegramService telegramService)
        {
            _messageRepository = messageRepository;
            _unitOfWork = unitOfWork;
            _telegramService = telegramService;
        }
        public async Task SendMessage(SendMessageViewModel model)
        {
            Message message = new Message();
            message.Id = new Guid();
            message.MessageInfo = model.MessageInfo;
            message.GuestId = Guid.Parse(model.GuestId);
            _messageRepository.Add(message);
            _unitOfWork.Commit();

            await _telegramService.SendMessageAsync($"New Message: {model.GuestName} đã gửi lời chúc: {message.MessageInfo}");
        }
    }
}
