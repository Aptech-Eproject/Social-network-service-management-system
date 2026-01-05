using api_gateway.Configuration;
using api_gateway.Extensions;
using DotNetEnv;

Env.Load();

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddReverseProxyServices(builder.Configuration);
builder.Services.AddRateLimiting();
builder.Services.AddHealthCheckServices(builder.Configuration);

var app = builder.Build();

app.UseRateLimiter();
app.MapHealthCheckEndpoints();
app.MapReverseProxy();
app.Run();
