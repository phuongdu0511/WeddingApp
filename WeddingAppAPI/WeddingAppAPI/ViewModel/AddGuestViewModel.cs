using System.ComponentModel.DataAnnotations;

namespace WeddingAppAPI.ViewModel
{
    public class AddGuestViewModel
    {
        [Required]
        public string GuestName { get; set; }

        public string Comment { get; set; }
    }
}
