namespace api_gateway.Configuration;

public static class HealthCheckConfiguration
{
    public static IServiceCollection AddHealthCheckServices(this IServiceCollection services, IConfiguration configuration)
    {
        var userServiceUrl = Environment.GetEnvironmentVariable("USER_SERVICE_URL") ?? "http://user-service:8081";
        var socialServiceUrl = Environment.GetEnvironmentVariable("SOCIAL_SERVICE_URL") ?? "http://social-service:8082";

        services.AddHealthChecks()
            .AddUrlGroup(new Uri($"{userServiceUrl}/health"), "user-service")
            .AddUrlGroup(new Uri($"{socialServiceUrl}/health"), "social-service");

        return services;
    }
}
