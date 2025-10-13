using WeddingAppAPI.Abstractions;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Common;
using WeddingAppAPI.Domain;
using WeddingAppAPI.ViewModel;

namespace WeddingAppAPI.Applications.Implements
{
    public class ReportService : IReportService
    {
        private readonly IRepositoryBase<LogView, Guid> _viewRepository;
        private readonly IRepositoryBase<Guest, Guid> _guestRepository;
        private readonly IUnitOfWork _unitOfWork;
        public ReportService(IRepositoryBase<LogView, Guid> viewRepository,
            IRepositoryBase<Guest, Guid> guestRepository,
            IUnitOfWork unitOfWork)
        {
            _viewRepository = viewRepository;
            _guestRepository = guestRepository;
            _unitOfWork = unitOfWork;
        }

        public List<int> GroomGuestList = new List<int>() { 1, 2, 5 };
        public List<int> BridgeGuestList = new List<int>() { 3, 4, 6, 7 };

        public LogView JustViewed(LogViewViewModel view)
        {
            int? type = 0;
            if (view.Type == 0) {
                switch (view.GuestPath)
                {
                    case CodeConst.BAN_BO_PHUONG:
                        type = 1;
                        break;
                    case CodeConst.BAN_ME_GIANG:
                        type = 2;
                        break;
                    case CodeConst.BAN_BO_LONG:
                        type = 3;
                        break;
                    case CodeConst.BAN_ME_VAN:
                        type = 4;
                        break;
                    default:
                        break;
                }
            } else
            {
                type = view.Type;
            }

            LogView logView = new LogView();
            logView.Id = new Guid(view.Id);
            logView.GuestName = view.GuestName;
            logView.GuestPath = view.GuestPath;
            logView.Type = type;
            _viewRepository.Add(logView);
            _unitOfWork.Commit();
            return logView;
        }

        public void FullyViewed(string viewId)
        {
            var view = _viewRepository.FindAll(x => x.Id.Equals(new Guid(viewId))).FirstOrDefault();
            if (view != null) {
                view.FullyViewed = 1;
                _viewRepository.Update(view);
                _unitOfWork.Commit();
            }
        }

        public void UpdateViewer(string viewId, string guestName)
        {
            var view = _viewRepository.FindAll(x => x.Id.Equals(new Guid(viewId))).FirstOrDefault();
            if (view != null)
            {
                view.GuestName = guestName;
                _viewRepository.Update(view);
                _unitOfWork.Commit();
            }
        }

        public ReportViewModel ReportAdmin()
        {
            var result = new ReportViewModel();

            // --- Tổng view ---
            result.TotalView = _viewRepository.FindAll()
                .GroupBy(_ => 1)
                .Select(g => new TotalViewViewModel
                {
                    TotalJustViewed = g.Count(),
                    TotalFullyViewed = g.Sum(x => x.FullyViewed)
                })
                .FirstOrDefault() ?? new TotalViewViewModel();

            // --- Thống kê khách mời ---
            var guests = _guestRepository.FindAll()?.ToList() ?? new List<Guest>();

            if (guests.Count == 0) return result;

            var acceptedGuests = guests.Where(x => x.Status == true).ToList();
            var vowGuests = guests.Where(x => x.Vow == true).ToList();

            result.TotalGuestInvited = guests.Count;
            result.TotalGuestAccepted = acceptedGuests.Count + acceptedGuests.Sum(x => x.Partner ?? 0);

            result.TotalGroomGuest = acceptedGuests.Count(x => GroomGuestList.Contains(x.Type));
            result.TotalBrideGuest = acceptedGuests.Count(x => BridgeGuestList.Contains(x.Type));

            result.TotalVowInvited = vowGuests.Count;
            result.TotalVowAccepted = vowGuests.Count(x => x.Status == true);
            result.TotalGroomVow = vowGuests.Count(x => x.Status == true && GroomGuestList.Contains(x.Type));
            result.TotalBrideVow = vowGuests.Count(x => x.Status == true && BridgeGuestList.Contains(x.Type));

            return result;
        }
    }
}
