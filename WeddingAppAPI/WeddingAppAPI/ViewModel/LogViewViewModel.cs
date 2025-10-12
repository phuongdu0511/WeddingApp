using System.ComponentModel.DataAnnotations;

namespace WeddingAppAPI.ViewModel
{
    public class LogViewViewModel
    {
        public string Id { get; set; }
        public string? GuestName { get; set; }
        public string? GuestPath { get; set; }
        public int? Type { get; set; }
    }
}
