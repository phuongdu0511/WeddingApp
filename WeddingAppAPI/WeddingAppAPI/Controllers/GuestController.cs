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
            Guest guest = new Guest();
            guest.Id = new Guid();
            guest.Comment = model.Comment;
            guest.GuestName = model.GuestName;
            _guestService.AddGuest(guest);
            return Ok(guest);
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
            var guestUpdate = _guestService.FindByIdAsync(Guid.Parse(model.Id)).Result;
            if (guestUpdate == null)
                return NotFound();
            guestUpdate.GuestName = model.GuestName;
            guestUpdate.Comment = model.Comment;
            _guestService.UpdateGuest(guestUpdate);
            return Ok(guestUpdate);
        }
    }
}
