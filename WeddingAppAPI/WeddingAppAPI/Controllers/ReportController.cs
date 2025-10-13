using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeddingAppAPI.Applications.Implements;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly IReportService _reportService;
        public ReportController(IReportService reportService)
        {
            _reportService = reportService;
        }

        [HttpPost("enter")]
        public IActionResult JustViewed([FromBody] LogViewViewModel model)
        {
            var result = _reportService.JustViewed(model);
            return Ok(result);
        }

        [HttpPost("complete")]
        public IActionResult FullyViewed(string id)
        {
            _reportService.FullyViewed(id);
            return Ok();
        }

        [HttpPost("update")]
        public IActionResult UpdateViewer(string id, string name)
        {
            _reportService.UpdateViewer(id, name);
            return Ok();
        }

        [HttpGet("report")]
        public IActionResult ReportView()
        {
            var result = _reportService.ReportAdmin();
            return Ok(result);
        }
    }
}
