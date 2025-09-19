using System.ComponentModel.DataAnnotations;

namespace WeddingAppAPI.ViewModel
{
    public class AddOrUpdateGuestViewModel
    {
        [Required]
        public string GuestName { get; set; }
        public string? GuestPath { get; set; }
        public bool Status { get; set; }
        public int? Partner { get; set; }
    }
}
