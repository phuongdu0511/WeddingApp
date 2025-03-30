using System.ComponentModel.DataAnnotations;

namespace WeddingAppAPI.ViewModel
{
    public class UpdateGuestViewModel
    {
        public string Id { get; set; }
        [Required]
        public string GuestName { get; set; }
        public bool Status { get; set; }
        [Required]
        public int Type { get; set; }
        public string Comment { get; set; }

        public bool UpdateStatusFlag { get; set; }
    }
}
