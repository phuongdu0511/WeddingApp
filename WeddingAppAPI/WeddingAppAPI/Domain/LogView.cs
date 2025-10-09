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
        public int? Type { get; set; }
        public int JustViewd { get; set; }
        public int FullyViewd { get; set; }
        public DateTime UpdatedAt { get; set; }

    }
}
