# API Gateway Documentation

## Tổng quan

API Gateway là điểm truy cập duy nhất (single entry point) cho tất cả client requests đến hệ thống microservices. Gateway xử lý routing, load balancing, rate limiting, và health monitoring cho các downstream services.

## Công nghệ sử dụng

### Core Technologies
- **.NET 8.0** - Framework chính
- **YARP (Yet Another Reverse Proxy)** - Reverse proxy và load balancing
- **ASP.NET Core Rate Limiting** - Giới hạn request
- **DotNetEnv** - Quản lý biến môi trường

### Packages chính
```xml
<PackageReference Include="Yarp.ReverseProxy" Version="2.3.0" />
<PackageReference Include="AspNetCore.HealthChecks.Uris" Version="8.0.1" />
<PackageReference Include="AspNetCore.HealthChecks.UI.Client" Version="8.0.1" />
<PackageReference Include="DotNetEnv" Version="3.1.1" />
<PackageReference Include="Serilog.AspNetCore" Version="8.0.3" />
```

## Kiến trúc

```
┌─────────────┐
│   Client    │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│         API Gateway :8000           │
│  ┌──────────────────────────────┐  │
│  │  Rate Limiter (100 req/min)  │  │
│  └──────────────────────────────┘  │
│  ┌──────────────────────────────┐  │
│  │    YARP Reverse Proxy        │  │
│  │  - Load Balancing            │  │
│  │  - Health Checks             │  │
│  └──────────────────────────────┘  │
└────────┬──────────────┬─────────────┘
         │              │
    ┌────▼────┐    ┌───▼─────┐
    │  User   │    │ Social  │
    │ Service │    │ Service │
    │  :8081  │    │  :8082  │
    └─────────┘    └─────────┘
```

## Chức năng chính

### 1. Reverse Proxy & Routing
Điều hướng requests từ client đến đúng downstream service dựa trên URL pattern.

**Cấu hình:**
- `/api/v1/users/**` → User Service
- `/api/v1/social/**` → Social Service

### 2. Load Balancing
Phân phối traffic đều giữa các instances của service (nếu có nhiều instances).

**Policy:** RoundRobin - Luân phiên giữa các destinations

### 3. Rate Limiting
Giới hạn số lượng requests để bảo vệ hệ thống khỏi abuse và DDoS.

**Cấu hình:**
- **Limit:** 100 requests/phút mỗi IP
- **Response:** HTTP 429 (Too Many Requests)

### 4. Health Checks
Giám sát tình trạng của các downstream services.

**Active Health Check:**
- Interval: 10 giây
- Timeout: 5 giây
- Policy: ConsecutiveFailures

**Passive Health Check:**
- Policy: TransportFailureRate
- Reactivation: 1 phút

## API Endpoints

### Health Check Endpoints

#### Gateway Health
```http
GET /health
```
**Response:**
```json
{
  "status": "healthy",
  "service": "api-gateway"
}
```

#### All Services Health
```http
GET /health/services
```
**Response:**
```json
{
  "status": "Healthy",
  "services": [
    {
      "name": "user-service",
      "status": "Healthy",
      "description": null
    },
    {
      "name": "social-service",
      "status": "Healthy",
      "description": null
    }
  ]
}
```

#### User Service Health (Proxy)
```http
GET /health/user
```

#### Social Service Health (Proxy)
```http
GET /health/social
```

### API Routes (v1)

#### User Service Routes
```http
# Authentication
POST /api/v1/users/auth/login
POST /api/v1/users/auth/register
POST /api/v1/users/auth/refresh

# User Management
GET    /api/v1/users/profile
PUT    /api/v1/users/profile
DELETE /api/v1/users/profile
```

#### Social Service Routes
```http
# Posts
GET    /api/v1/social/posts
POST   /api/v1/social/posts
PUT    /api/v1/social/posts/{id}
DELETE /api/v1/social/posts/{id}

# Comments
GET    /api/v1/social/posts/{id}/comments
POST   /api/v1/social/posts/{id}/comments
```

## Cấu hình

### Environment Variables (.env)

```bash
# Service URLs
USER_SERVICE_URL=http://user-service:8081
SOCIAL_SERVICE_URL=http://social-service:8082

# Rate Limiting
RATE_LIMIT_REQUESTS_PER_MINUTE=100

# Logging
LOG_LEVEL=Information
```

### appsettings.json

```json
{
  "ServiceUrls": {
    "UserService": "${USER_SERVICE_URL}",
    "SocialService": "${SOCIAL_SERVICE_URL}"
  },
  "ReverseProxy": {
    "Routes": {
      "user-service-v1": {
        "ClusterId": "user-cluster",
        "Match": {
          "Path": "/api/v1/users/{**catch-all}"
        },
        "RateLimiterPolicy": "fixed"
      }
    },
    "Clusters": {
      "user-cluster": {
        "LoadBalancingPolicy": "RoundRobin",
        "HealthCheck": {
          "Active": {
            "Enabled": true,
            "Interval": "00:00:10"
          }
        },
        "Destinations": {
          "user-service-1": {
            "Address": "${USER_SERVICE_URL}"
          }
        }
      }
    }
  }
}
```

## Cách sử dụng

### Development (Local)

```bash
# Navigate to gateway directory
cd backend/api-gateway

# Run with hot reload
dotnet watch run

# Gateway sẽ chạy tại: http://localhost:8000
```

### Docker Compose

```bash
# Start all services
docker-compose -f container/compose/docker-compose.dev.yml up

# Gateway URL: http://localhost:8000
```

### Testing với cURL

```bash
# Check gateway health
curl http://localhost:8000/health

# Check all services
curl http://localhost:8000/health/services

# Call user service through gateway
curl -X POST http://localhost:8000/api/v1/users/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'

# Call social service through gateway
curl http://localhost:8000/api/v1/social/posts
```

### Testing với Postman

1. **Base URL:** `http://localhost:8000`
2. **Headers:**
   - `Content-Type: application/json`
   - `Authorization: Bearer {token}` (nếu cần)

**Example Requests:**

```
GET  {{baseUrl}}/health
GET  {{baseUrl}}/health/services
POST {{baseUrl}}/api/v1/users/auth/login
GET  {{baseUrl}}/api/v1/users/profile
GET  {{baseUrl}}/api/v1/social/posts
```

## Monitoring & Troubleshooting

### Logs

Gateway sử dụng Serilog để logging:

```bash
# View logs in console
docker logs -f snms-gateway-dev

# Log levels: Information, Warning, Error
```

### Common Issues

**1. Service Unavailable (503)**
- Kiểm tra downstream service có đang chạy không
- Check health endpoint: `/health/services`

**2. Too Many Requests (429)**
- Rate limit đã vượt quá 100 req/min
- Đợi 1 phút hoặc tăng limit trong config

**3. Gateway Timeout (504)**
- Downstream service phản hồi chậm
- Kiểm tra performance của service

## Best Practices

### Client Integration

1. **Luôn gọi qua Gateway**, không gọi trực tiếp đến services
2. **Xử lý rate limiting** - Implement retry logic với exponential backoff
3. **Check health** trước khi deploy
4. **Sử dụng versioning** trong URL (`/api/v1/...`)

### Configuration

1. **Sử dụng .env** cho các giá trị khác nhau giữa môi trường
2. **Không hardcode URLs** trong code
3. **Monitor health checks** thường xuyên
4. **Adjust rate limits** dựa trên traffic thực tế

## Security

- ✅ Rate limiting để chống DDoS
- ✅ Health checks không expose sensitive data
- ✅ Environment variables cho secrets
- ⚠️ TODO: Implement JWT validation
- ⚠️ TODO: Add CORS configuration
- ⚠️ TODO: Add request/response logging

## Performance

- **Load Balancing:** RoundRobin distribution
- **Health Checks:** Tự động loại bỏ unhealthy instances
- **Rate Limiting:** Bảo vệ downstream services
- **Connection Pooling:** YARP tự động quản lý

## Roadmap

- [ ] JWT Authentication middleware
- [ ] CORS configuration
- [ ] Request/Response transformation
- [ ] Circuit breaker pattern
- [ ] Distributed tracing
- [ ] Metrics & monitoring dashboard
- [ ] API versioning strategy
- [ ] WebSocket support
