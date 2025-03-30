using WeddingAppAPI.Abstractions;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Common;
using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Applications.Implements
{
    public class MessageService : IMessageService
    {
        private readonly IRepositoryBase<Message, Guid> _messageRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly TelegramService _telegramService;
        private readonly IGuestService _guestService;
        public MessageService(IRepositoryBase<Message, Guid> messageRepository
            , IUnitOfWork unitOfWork
            , TelegramService telegramService
            , IGuestService guestService)
        {
            _messageRepository = messageRepository;
            _unitOfWork = unitOfWork;
            _telegramService = telegramService;
            _guestService = guestService;
        }
        public async Task SendMessage(SendMessageViewModel model)
        {
            try
            {
                var guest = _guestService.FindByIdAsync(Guid.Parse(model.GuestId)).Result;
                if (guest != null) {
                    var type = CodeConst.FriendTypes.FirstOrDefault(x => x.Key == guest.Type).Value;

                    Message message = new Message();
                    message.Id = new Guid();
                    message.MessageInfo = model.MessageInfo;
                    message.GuestId = Guid.Parse(model.GuestId);
                    message.GuestName = guest.GuestName;
                    _messageRepository.Add(message);
                    _unitOfWork.Commit();
                    await _telegramService.SendMessageAsync($"{type}: {guest.GuestName} đã gửi lời chúc: {message.MessageInfo}");
                }
            }
            catch (Exception ex)
            {
                await _telegramService.SendMessageAsync($"Có lỗi ở SendMessage: {ex.Message}, {DateTime.Now}");
                throw new Exception(ex.Message);
            }
        }
    }
}
