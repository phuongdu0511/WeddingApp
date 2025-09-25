using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WeddingAppAPI.Domain;

namespace WeddingAppAPI.Infrastructure.Configurations
{
    public class GuestConfiguration : IEntityTypeConfiguration<Guest>
    {
        public void Configure(EntityTypeBuilder<Guest> builder)
        {
            builder.ToTable("Guest");
            builder.Property(g => g.Id)
            .HasColumnName("GuestId")
            .ValueGeneratedOnAdd();

            builder.Property(g => g.GuestName)
            .IsRequired()
            .HasMaxLength(40);

            builder.Property(g => g.GuestPath)
            .IsRequired()
            .HasMaxLength(40);

            builder.Property(g => g.Comment)
            .IsRequired(false)
            .HasColumnType("nvarchar(max)");

            builder.Property(g => g.CreatedAt)
            .HasDefaultValueSql("GETDATE()")
            .ValueGeneratedOnAdd();

            builder.Property(g => g.UpdatedAt)
            .HasDefaultValueSql("GETDATE()")
            .ValueGeneratedOnAdd();

            builder.Property(g => g.Type)
            .IsRequired()
            .HasColumnType("int");

            builder.Property(g => g.Status)
            .IsRequired(false)
            .HasColumnType("bit");

            builder.Property(g => g.Vow)
            .IsRequired(false)
            .HasColumnType("bit")
            .HasDefaultValueSql("0");

            builder.Property(g => g.Partner)
            .IsRequired(false)
            .HasColumnType("int")
            .HasDefaultValueSql("0");

            builder.Property(g => g.Donate)
            .IsRequired(false)
            .HasColumnType("decimal")
            .HasDefaultValueSql("0");
        }
    }
}
