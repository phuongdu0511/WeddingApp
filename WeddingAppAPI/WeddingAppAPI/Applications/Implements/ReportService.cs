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
            int? parentType = 0;
            switch (view.GuestPath)
            {
                case CodeConst.BAN_BO_PHUONG:
                    parentType = 1;
                    break;
                case CodeConst.BAN_ME_GIANG:
                    parentType = 2;
                    break;
                case CodeConst.BAN_BO_LONG:
                    parentType = 3;
                    break;
                case CodeConst.BAN_ME_VAN:
                    parentType = 4;
                    break;
                default:
                    break;
            }

            LogView logView = new LogView();
            logView.Id = new Guid(view.Id);
            logView.GuestName = view.GuestName;
            logView.GuestPath = view.GuestPath;
            logView.Type = parentType;
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
