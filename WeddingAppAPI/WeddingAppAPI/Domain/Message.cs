using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WeddingAppAPI.Abstractions;

namespace WeddingAppAPI.Domain
{
    [Table("Message")]
    public class Message : DomainEntity<Guid>
    {
        [Column("MessageId")]
        public override Guid Id { get; set; }
        [Length(1,300)]
        public string MessageInfo { get; set; }
        public Guid GuestId { get; set; }
        public string GuestName { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
