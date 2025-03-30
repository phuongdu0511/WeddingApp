using Microsoft.EntityFrameworkCore;
using WeddingAppAPI.Abstractions;
using WeddingAppAPI.Applications.Implements;
using WeddingAppAPI.Applications.Interfaces;
using WeddingAppAPI.Infrastructure;
using WeddingAppAPI.Repositories;

namespace WeddingAppAPI.DependencyInjection.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AddSqlConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                    options.UseSqlServer(configuration.GetConnectionString("sqlConnection"),
                        options => options.MigrationsAssembly("WeddingAppAPI")
                        .UseQuerySplittingBehavior(QuerySplittingBehavior.SplitQuery)
                        ));
        }
        public static void AddServiceConfiguration(this IServiceCollection services)
        {
            services.AddTransient(typeof(IUnitOfWork), typeof(EFUnitOfWork));
            services.AddTransient(typeof(IRepositoryBase<,>), typeof(RepositoryBase<,>));

            services.AddTransient<IGuestService, GuestService>();
            services.AddTransient<IMessageService, MessageService>();

            // Configuration Telegram
            var botToken = "8096236457:AAFGjf4QjwYlm_scCyxuKqsz173r3iLGIu0";
            var chatId = "-4601427799";
            services.AddSingleton(new TelegramService(botToken, chatId));
            services.AddScoped<MessageService>();
        }
    }
}
