namespace api_gateway.Configuration;

public static class HealthCheckConfiguration
{
    public static IServiceCollection AddHealthCheckServices(this IServiceCollection services, IConfiguration configuration)
    {
        var userServiceUrl = configuration["ServiceUrls:UserService"];
        var socialServiceUrl = configuration["ServiceUrls:SocialService"];

        services.AddHealthChecks()
            .AddUrlGroup(new Uri($"{userServiceUrl}/health"), "user-service")
            .AddUrlGroup(new Uri($"{socialServiceUrl}/health"), "social-service");

        return services;
    }
}
