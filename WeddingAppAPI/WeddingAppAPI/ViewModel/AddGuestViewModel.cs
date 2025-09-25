using System.ComponentModel.DataAnnotations;

namespace WeddingAppAPI.ViewModel
{
    public class AddGuestViewModel
    {
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
        // Phân biệt là khách tự add hay mình add
        public bool? IsGuest { get; set; }
    }
}
