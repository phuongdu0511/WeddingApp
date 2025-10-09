using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeddingAppAPI.Applications.Interfaces;

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
    }
}
