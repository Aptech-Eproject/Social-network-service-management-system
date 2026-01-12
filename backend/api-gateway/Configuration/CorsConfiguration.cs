namespace api_gateway.Configuration;

public static class CorsConfiguration
{
    public const string FrontendPolicy = "FrontendOnly";

    public static IServiceCollection AddCorsConfiguration(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        var origins = configuration
            .GetSection("Cors:AllowedOrigins")
            .Get<string[]>();

        if (origins is null || origins.Length == 0)
        {
            throw new InvalidOperationException(
                "Cors:AllowedOrigins is not configured.");
        }

        services.AddCors(options =>
        {
            options.AddPolicy(FrontendPolicy, policy =>
            {
                policy
                    .WithOrigins(origins)
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
        });
        return services;
    }

    public static WebApplication UseCorsConfiguration(
        this WebApplication app)
    {
        app.UseCors(FrontendPolicy);
        return app;
    }
}
