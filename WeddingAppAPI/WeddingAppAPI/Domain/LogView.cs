using System.ComponentModel.DataAnnotations.Schema;
using WeddingAppAPI.Abstractions;

namespace WeddingAppAPI.Domain
{
    [Table("LogView")]
    public class LogView : DomainEntity<Guid>
    {
        [Column("ViewId")]
        public override Guid Id { get; set; }
        public string? GuestName { get; set; }
        public string? GuestPath { get; set; }
        public int? Type { get; set; }
        public int JustViewed { get; set; }
        public int FullyViewed { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
