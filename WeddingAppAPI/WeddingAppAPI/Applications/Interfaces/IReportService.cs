using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Applications.Interfaces
{
    public interface IReportService
    {
        LogView JustViewed(LogViewViewModel view);
        void FullyViewed(string id);

        void UpdateViewer(string id, string guestName);
        ReportViewModel ReportAdmin();
    }
}
