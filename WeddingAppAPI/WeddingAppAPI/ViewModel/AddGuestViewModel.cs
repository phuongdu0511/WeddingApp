using System.ComponentModel.DataAnnotations;

namespace WeddingAppAPI.ViewModel
{
    public class AddGuestViewModel
    {
        [Required(ErrorMessage = "Cần nhập Tên")]
        public string GuestName { get; set; }
        [Required(ErrorMessage = "Cần nhập Link")]
        public string GuestPath { get; set; }
        public string? Comment { get; set; }
        [Required]
        [Range(1, 7, ErrorMessage = "Cần chọn loại khách")]
        public int Type { get; set; }
        public bool? Vow { get; set; }
        public int? Partner { get; set; }
        public int? ExpectedPartner { get; set; }
        public bool? Status { get; set; }
        // Phân biệt là khách tự add hay mình add
        public bool? IsGuest { get; set; }

        public string? Language { get; set; }
    }
}
