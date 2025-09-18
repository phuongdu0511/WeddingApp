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
        public IActionResult GetGuest(string name)
        {
            var result = _guestService.GetGuests(name);
            if (result == null)
                return Ok(new List<Guest>());
            return Ok(result);
        }

        [HttpGet("path")]
        public IActionResult GetGuestByPath(string path)
        {
            var result = _guestService.GetGuestByPath(path);
            if (result == null)
                return Ok(new Guest());
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
        public IActionResult AddGuest(AddGuestViewModel model) {
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
        public IActionResult UpdateGuest(UpdateGuestViewModel model) {
            _guestService.UpdateGuest(model);
            return Ok();
        }
    }
}
