using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WeddingAppAPI.Domain;

namespace WeddingAppAPI.Infrastructure.Configurations
{
    public class MessageConfiguration : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            builder.ToTable("Message");

            builder.HasKey(m => m.Id);
            builder.Property(m => m.Id)
                .HasColumnName("MessageId")
                .ValueGeneratedOnAdd();

            builder.Property(m => m.MessageInfo)
            .HasColumnType("nvarchar(300)");

            builder.Property(m => m.GuestId)
            .IsRequired();

            builder.Property(m => m.CreatedAt)
            .HasDefaultValueSql("GETDATE()")
            .ValueGeneratedOnAdd();
        }
    }
}
