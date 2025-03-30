using Telegram.Bot;
using WeddingAppAPI.Applications.Interfaces;

namespace WeddingAppAPI.Applications.Implements
{
    public class TelegramService
    {
        private readonly string _botToken;
        private readonly string _chatId;
        private readonly TelegramBotClient _botClient;
        public TelegramService(
            string botToken,
            string chatId)
        {
            _botToken= botToken;
            _chatId = chatId;
            _botClient = new TelegramBotClient(_botToken);
        }
        
        public async Task SendMessageAsync(string message)
        {
            await _botClient.SendMessage(_chatId, message);
        }
    }
}
