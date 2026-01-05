namespace api_gateway.Configuration;

public static class HealthCheckConfiguration
{
    public static IServiceCollection AddHealthCheckServices(this IServiceCollection services, IConfiguration configuration)
    {
        var userServiceUrl = Environment.GetEnvironmentVariable("USER_SERVICE_URL")
            ?? configuration["ServiceUrls:UserService"];
        var socialServiceUrl = Environment.GetEnvironmentVariable("SOCIAL_SERVICE_URL")
            ?? configuration["ServiceUrls:SocialService"];

        if (!string.IsNullOrEmpty(userServiceUrl) && !string.IsNullOrEmpty(socialServiceUrl))
        {
            services.AddHealthChecks()
                .AddUrlGroup(new Uri($"{userServiceUrl}/health"), "user-service")
                .AddUrlGroup(new Uri($"{socialServiceUrl}/health"), "social-service");
        }
        else
        {
            services.AddHealthChecks();
        }

        return services;
    }
}
