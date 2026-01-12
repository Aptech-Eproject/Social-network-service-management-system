using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using System.Text.Json;

namespace api_gateway.Extensions;

public static class HealthCheckEndpoints
{
    public static IEndpointRouteBuilder MapHealthCheckEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/health", () => Results.Ok(new { status = "healthy", service = "api-gateway" }));
        app.MapHealthChecks("/health/check", new HealthCheckOptions
        {
            ResultStatusCodes = {
                [HealthStatus.Healthy] = StatusCodes.Status200OK,
                [HealthStatus.Degraded] = StatusCodes.Status503ServiceUnavailable,
                [HealthStatus.Unhealthy] = StatusCodes.Status503ServiceUnavailable },
            ResponseWriter = async (context, report) =>
            {
                context.Response.ContentType = "application/json";
                var result = JsonSerializer.Serialize(new
                {
                    status = report.Status.ToString(),
                    services = report.Entries.Select(e => new
                    {
                        name = e.Key,
                        status = e.Value.Status.ToString(),
                        description = e.Value.Description
                    })
                });
                await context.Response.WriteAsync(result);
            }
        });

        return app;
    }
}
