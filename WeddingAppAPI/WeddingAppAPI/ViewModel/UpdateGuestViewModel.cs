using System.ComponentModel.DataAnnotations;

namespace WeddingAppAPI.ViewModel
{
    public class UpdateGuestViewModel
    {
        public string Id { get; set; }
        [Required]
        public string GuestName { get; set; }

        public string Comment { get; set; }
    }
}
