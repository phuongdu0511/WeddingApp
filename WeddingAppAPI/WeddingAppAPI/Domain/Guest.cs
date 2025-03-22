using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WeddingAppAPI.Abstractions;

namespace WeddingAppAPI.Domain
{
    [Table("Guest")]
    public class Guest : DomainEntity<Guid>
    {
        [Column("GuestId")]
        public override Guid Id { get; set; }

        [Required]
        public string GuestName { get; set; }

        public string Comment { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }
    }
}
