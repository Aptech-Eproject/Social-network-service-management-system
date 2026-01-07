using api_gateway.Configuration;
using api_gateway.Extensions;
using DotNetEnv;

Env.Load();

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddEnvironmentVariables();
builder.Services.AddCorsConfiguration(builder.Configuration);
builder.Services.AddReverseProxyServices(builder.Configuration);
builder.Services.AddRateLimiting();
builder.Services.AddHealthCheckServices(builder.Configuration);

var app = builder.Build();
app.UseRouting();
app.UseCorsConfiguration();
app.UseRateLimiter();
app.MapHealthCheckEndpoints();
app.MapReverseProxy();
app.Run();
