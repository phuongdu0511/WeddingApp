using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService _messageService;
        public MessageController(IMessageService messageService)
        {
            _messageService = messageService;
        }

        [HttpPost]
        public async Task<IActionResult> SendMessage(SendMessageViewModel model)
        {
            await _messageService.SendMessage(model);
            return Ok();
        }
    }
}
