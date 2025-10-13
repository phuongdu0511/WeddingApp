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
        private readonly IUnitOfWork _unitOfWork;
        public ReportService(IRepositoryBase<LogView, Guid> viewRepository,
            IUnitOfWork unitOfWork)
        {
            _viewRepository = viewRepository;
            _unitOfWork = unitOfWork;
        }

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

        public TotalViewViewModel ReportView()
        {
            var result = _viewRepository.FindAll()
                .GroupBy(x => 1)
                .Select(g => new TotalViewViewModel
                {
                    TotalJustViewed = g.Count(),
                    TotalFullyViewed = g.Sum(x => x.FullyViewed)
                })
                .FirstOrDefault();

            return result ?? new TotalViewViewModel();
        }
    }
}
