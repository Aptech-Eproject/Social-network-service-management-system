# ============================================
# API GATEWAY CI IMAGE - Production Build
# ============================================
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /src

COPY *.csproj ./
RUN dotnet restore

COPY . .
RUN dotnet publish -c Release -o /app/publish

# ============================================
# RUNTIME
# ============================================
FROM mcr.microsoft.com/dotnet/aspnet:8.0

WORKDIR /app

# Install curl for healthcheck
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/publish .

ENV ASPNETCORE_ENVIRONMENT=Production
ENV ASPNETCORE_URLS=http://+:8000

EXPOSE 8000

ENTRYPOINT ["dotnet", "api-gateway.dll"]
