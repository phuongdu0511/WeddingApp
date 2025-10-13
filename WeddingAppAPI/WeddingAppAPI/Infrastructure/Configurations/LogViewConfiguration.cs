using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WeddingAppAPI.Domain;

namespace WeddingAppAPI.Infrastructure.Configurations
{
    public class LogViewConfiguration : IEntityTypeConfiguration<LogView>
    {
        public void Configure(EntityTypeBuilder<LogView> builder)
        {
            builder.ToTable("LogView");
            builder.Property(g => g.Id)
            .HasColumnName("ViewId")
            .ValueGeneratedOnAdd();

            builder.Property(g => g.GuestName)
            .IsRequired(false);

            builder.Property(g => g.GuestPath)
            .IsRequired(false);

            builder.Property(g => g.Type)
            .IsRequired(false)
            .HasColumnType("int");

            builder.Property(g => g.JustViewed)
            .HasDefaultValueSql("1")
            .IsRequired()
            .HasColumnType("int");

            builder.Property(g => g.FullyViewed)
            .HasDefaultValueSql("0")
            .IsRequired()
            .HasColumnType("int");

            builder.Property(g => g.UpdatedAt)
            .HasDefaultValueSql("GETDATE()")
            .ValueGeneratedOnAdd();
        }
    }
}
