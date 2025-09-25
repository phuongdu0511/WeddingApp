using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GuestController : ControllerBase
    {
        private readonly IGuestService _guestService;
        public GuestController(IGuestService guestService)
        {
                _guestService = guestService;
        }
        [HttpGet("list")]
        public IActionResult GetGuest()
        {
            var result = _guestService.GetGuests();
            if (result == null)
                return Ok(new List<Guest>());
            return Ok(result);
        }

        [HttpGet("path")]
        public IActionResult GetGuestByPath(string path)
        {
            var result = _guestService.GetGuestByPath(path);
            if (result == null)
                // Trả về Guest chỉ có Path để tiếp tục logic với Path là Parent
                return Ok(new Guest() { GuestPath = path});
            return Ok(result);
        }

        [HttpGet("guest")]
        public async Task<IActionResult> GuestById(string id)
        {
            var result = await _guestService.FindByIdAsync(Guid.Parse(id));
            if (result == null)
                return NotFound();
            return Ok(result);
        }

        [HttpPost("add")]
        public IActionResult AddGuest([FromBody] AddGuestViewModel model) {
            var result = _guestService.AddGuest(model);
            return Ok(result);
        }

        [HttpPost("delete")]
        public IActionResult DeleteGuest(string id) {
            var guestDelete = _guestService.FindByIdAsync(Guid.Parse(id)).Result;
            if(guestDelete == null)
                return NotFound();
            _guestService.RemoveGuest(guestDelete);
            return Ok(guestDelete);
        }

        [HttpPost("update")]
        public IActionResult UpdateGuest([FromBody] UpdateGuestViewModel model) {
            var result = _guestService.UpdateGuest(model);
            return Ok(result);
        }

        [HttpPost("addOrUpdate")]
        public async Task<IActionResult> AddOrUpdateGuest([FromBody] AddOrUpdateGuestViewModel model)
        {
            await _guestService.AddOrUpdateGuest(model);
            return Ok();
        }
    }
}
