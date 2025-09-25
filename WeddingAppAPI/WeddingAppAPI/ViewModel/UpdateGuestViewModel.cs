using System.ComponentModel.DataAnnotations;

namespace WeddingAppAPI.ViewModel
{
    public class UpdateGuestViewModel
    {
        public string Id { get; set; }
        [Required]
        public string GuestName { get; set; }
        [Required]
        public string GuestPath { get; set; }
        public string? Comment { get; set; }
        [Required]
        public int Type { get; set; }
        public bool? Vow { get; set; }
        public int? Partner { get; set; }
        public bool? Status { get; set; }
        public decimal? Donate { get; set; }
        // Phân biệt là khách tự update hay mình update
        public bool? IsGuest { get; set; }
        public string RowVersion { get; set; }
    }
}
