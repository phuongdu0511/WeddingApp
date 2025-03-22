using System.ComponentModel.DataAnnotations.Schema;
using WeddingAppAPI.Abstractions;

namespace WeddingAppAPI.Domain
{
    [Table("Message")]
    public class Message : DomainEntity<Guid>
    {
        [Column("MessageId")]
        public override Guid Id { get; set; }
        public string MessageInfo { get; set; }
        public Guid GuestId { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
