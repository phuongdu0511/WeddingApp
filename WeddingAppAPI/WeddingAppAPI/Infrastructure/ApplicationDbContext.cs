using Microsoft.EntityFrameworkCore;
using WeddingAppAPI.Domain;
using WeddingAppAPI.Infrastructure.Configurations;

namespace WeddingAppAPI.Infrastructure
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new GuestConfiguration());
            modelBuilder.ApplyConfiguration(new MessageConfiguration());
            modelBuilder.ApplyConfiguration(new LogViewConfiguration());
        }

        public DbSet<Guest> Guests { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<LogView> LogViews { get; set; }
    }
}
