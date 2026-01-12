namespace api_gateway.Configuration;

public static class HealthCheckConfiguration
{
    public static IServiceCollection AddHealthCheckServices(
    this IServiceCollection services,
    IConfiguration configuration,
    IWebHostEnvironment env)
    {
        services.AddHealthChecks();

        if (!env.IsDevelopment())
        {
            var userServiceUrl = configuration["Services:User:BaseUrl"];
            var socialServiceUrl = configuration["Services:Social:BaseUrl"];

            services.AddHealthChecks()
                .AddUrlGroup(new Uri($"{userServiceUrl}/health"), "user-service")
                .AddUrlGroup(new Uri($"{socialServiceUrl}/health"), "social-service");
        }

        return services;
    }

}
