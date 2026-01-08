namespace api_gateway.Configuration;

public static class CorsConfiguration
{
    private const string FrontendPolicyName = "FrontendOnly";

    public static IServiceCollection AddCorsConfiguration(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        var allowedOriginsRaw =
            configuration["CORS_ORIGINS"]
            ?? Environment.GetEnvironmentVariable("CORS_ORIGINS");

        if (string.IsNullOrWhiteSpace(allowedOriginsRaw))
        {
            throw new InvalidOperationException(
                "CORS_ORIGINS is not configured. CORS cannot be initialized.");
        }

        var allowedOrigins = allowedOriginsRaw
            .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);

        services.AddCors(options =>
        {
            options.AddPolicy(FrontendPolicyName, policy =>
            {
                policy
                    .WithOrigins(allowedOrigins)
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });
        });

        return services;
    }

    public static IApplicationBuilder UseCorsConfiguration(this IApplicationBuilder app)
    {
        app.UseCors(FrontendPolicyName);
        return app;
    }
}
