# 🚪 API Gateway Architecture

## 📋 Tổng Quan

**API Gateway** là điểm vào duy nhất cho tất cả requests từ frontend đến backend services.

**Technology Stack**:
- .NET 8
- YARP (Yet Another Reverse Proxy)
- Rate Limiting
- Health Checks
- CORS

---

## 📁 Cấu Trúc Thư Mục

```
backend/api-gateway/
├── Configuration/
│   ├── CorsConfiguration.cs           # CORS policy
│   ├── HealthCheckConfiguration.cs    # Health check setup
│   ├── RateLimitConfiguration.cs      # Rate limiting rules
│   └── ReverseProxyConfiguration.cs   # YARP routing
├── Extensions/
│   └── HealthCheckEndpoints.cs        # Health check endpoints
├── Properties/
│   └── launchSettings.json
├── Program.cs                         # Entry point
├── appsettings.json                   # Routing config
├── appsettings.Development.json       # Dev settings
└── api-gateway.csproj                 # Project file
```

---

## 🔀 Routing Configuration

### **Routes Defined** (appsettings.json)

| Route | Target Service | Path Transform |
|-------|---------------|----------------|
| `/api/v1/users/**` | User Service (8081) | Remove `/api/v1/users` prefix |
| `/api/v1/social/**` | Social Service (8082) | Remove `/api/v1/social` prefix |
| `/health/user` | User Service | Transform to `/health` |
| `/health/social` | Social Service | Transform to `/health` |

### **Example Routing**

```
Frontend Request: GET /api/v1/users/profile
                    ↓
API Gateway: http://localhost:8000/api/v1/users/profile
                    ↓
User Service: http://user-service:8081/profile
```

---

## 🛡️ Security Features

### **1. CORS Configuration**

**File**: `Configuration/CorsConfiguration.cs`

**Settings**:
```csharp
AllowedOrigins: From CORS_ORIGINS env var
AllowedMethods: Any
AllowedHeaders: Any
AllowCredentials: true
```

**Environment Variable**:
```bash
CORS_ORIGINS=http://localhost:3000 || http://example-frontend.com
```

---

### **2. Rate Limiting**

**File**: `Configuration/RateLimitConfiguration.cs`

**Policy**: Fixed Window
- **Limit**: 100 requests
- **Window**: 1 minute
- **Response**: 429 Too Many Requests

**Applied to**:
- `/api/v1/users/**`
- `/api/v1/social/**`

---

## 🏥 Health Checks

### **Endpoints**

| Endpoint | Purpose | Response |
|----------|---------|----------|
| `/health` | Gateway health | `{"status":"healthy","service":"api-gateway"}` |
| `/health/check` | All services health | Detailed status of user-service + social-service |
| `/health/user` | User service health | Proxied to user-service `/health` |
| `/health/social` | Social service health | Proxied to social-service `/health` |

### **Active Health Checks**

**User Service**:
- Interval: 5 minutes 10 seconds
- Timeout: 30 seconds
- Policy: ConsecutiveFailures

**Social Service**:
- Interval: 10 seconds
- Timeout: 5 seconds
- Policy: ConsecutiveFailures

---

## 🔧 Configuration Files

### **appsettings.json**

**ReverseProxy Section**:
```json
{
  "Routes": {
    "user-service-v1": { ... },
    "social-service-v1": { ... }
  },
  "Clusters": {
    "user-cluster": {
      "Destinations": {
        "user-service-1": {
          "Address": "http://user-service:8081"
        }
      }
    }
  }
}
```

---

### **.env File**

**Required Variables**:
```bash
CORS_ORIGINS=http://localhost:3000
USER_SERVICE_URL=http://user-service:8081
SOCIAL_SERVICE_URL=http://social-service:8082
```

---

## 🐳 Docker Configuration

### **Dev Image** (`dev-base.Dockerfile`)

**Contains**:
- .NET SDK 8.0
- NuGet packages (restored)
- Project file (*.csproj)

**Excludes**:
- Source code (mounted via volumes)

### **Volume Mounts**

```yaml
volumes:
  - ../../backend/api-gateway:/app        # Full source code
  - gateway_bin:/app/bin                  # Build output
  - gateway_obj:/app/obj                  # Build cache
```

**Hot Reload**: ✅ Enabled
- Edit `Program.cs` → Auto restart (2-3s)
- Edit `Configuration/*.cs` → Auto restart
- Edit `appsettings.json` → Auto restart

---

## 🚀 Development Workflow

### **Start Gateway**
```bash
npm run dev
# or
npm run restart:gateway
```

### **View Logs**
```bash
npm run logs:gateway
```

### **Test Endpoints**
```bash
# Gateway health
curl http://localhost:8000/health

# All services health
curl http://localhost:8000/health/check

# User service (proxied)
curl http://localhost:8000/api/v1/users/health

# Social service (proxied)
curl http://localhost:8000/api/v1/social/health
```

---

## 📝 Adding New Route

### **Step 1: Update appsettings.json**

```json
"Routes": {
  "new-service-v1": {
    "ClusterId": "new-cluster",
    "Match": { "Path": "/api/v1/new/{**catch-all}" },
    "Transforms": [
      { "PathRemovePrefix": "/api/v1/new" }
    ],
    "RateLimiterPolicy": "fixed"
  }
}
```

### **Step 2: Add Cluster**

```json
"Clusters": {
  "new-cluster": {
    "Destinations": {
      "new-service-1": {
        "Address": "http://new-service:8083"
      }
    }
  }
}
```

### **Step 3: Save & Test**

```bash
# Hot reload tự động restart gateway (2-3s)
# Test route
curl http://localhost:8000/api/v1/new/test
```

---

## 🐛 Troubleshooting

### **CORS Error**
```bash
# Check CORS_ORIGINS in .env
cat backend/api-gateway/.env | grep CORS_ORIGINS

# Should include frontend URL
CORS_ORIGINS=http://localhost:3000
```

### **Service Not Found (502)**
```bash
# Check service is running
npm run ps

# Check health
curl http://localhost:8000/health/check

# Check logs
npm run logs:gateway
```

### **Rate Limit (429)**
```bash
# Wait 1 minute or adjust limit in RateLimitConfiguration.cs
# Edit: opt.PermitLimit = 1000;
# Save → Auto restart
```

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│ Frontend (localhost:3000)                               │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ API Gateway (localhost:8000)                            │
│  ├─ CORS Check                                          │
│  ├─ Rate Limiting                                       │
│  ├─ Routing (YARP)                                      │
│  └─ Health Checks                                       │
└─────────────────────────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                                 ▼
┌──────────────────┐            ┌──────────────────┐
│ User Service     │            │ Social Service   │
│ (8081)           │            │ (8082)           │
└──────────────────┘            └──────────────────┘
```

---

## 🔑 Key Features

**Load Balancing**: RoundRobin (ready for multiple instances)

**Health Monitoring**: Active health checks every 10s-5m

**Rate Protection**: 100 req/min per route

**CORS**: Configurable allowed origins

**Hot Reload**: ✅ All configuration changes auto-reload

---

