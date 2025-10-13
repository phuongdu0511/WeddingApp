namespace WeddingAppAPI.ViewModel
{
    public class ReportViewModel
    {
        public TotalViewViewModel TotalView { get; set; }
        /// <summary>
        /// Tổng số khách mời
        /// </summary>
        public int TotalGuestInvited {  get; set; }
        /// <summary>
        /// Tổng số khách xác nhận tham dự
        /// </summary>
        public int TotalGuestAccepted { get; set; }
        /// <summary>
        /// Tổng số khách nhà trai tham dự
        /// </summary>
        public int TotalGroomGuest { get; set; }
        /// <summary>
        /// Tổng số khách nhà gái tham dự
        /// </summary>
        public int TotalBrideGuest { get; set; }
        /// <summary>
        /// Tổng số khách Vow đã mời
        /// </summary>
        public int TotalVowInvited { get; set; }
        /// <summary>
        /// Tổng số khách Vow xác nhận tham dự
        /// </summary>
        public int TotalVowAccepted { get; set; }
        /// <summary>
        /// Tổng số khách Vow nhà trai
        /// </summary>
        public int TotalGroomVow { get; set; }
        /// <summary>
        /// Tổng số khách Vow nhà gái
        /// </summary>
        public int TotalBrideVow { get; set; }
    }
}
