namespace api_gateway.Configuration;

public static class ReverseProxyConfiguration
{
    public static IServiceCollection AddReverseProxyServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddReverseProxy()
            .LoadFromConfig(configuration.GetSection("ReverseProxy"));
        return services;
    }
}
