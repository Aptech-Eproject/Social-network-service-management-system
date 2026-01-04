# Social Network Service Management System

## 📋 Tổng quan Project

**Edunext .NET** - Hệ thống quản lý mạng xã hội giáo dục được xây dựng theo kiến trúc microservices với .NET 8 và Next.js.

### 🏗️ Kiến trúc Hệ thống

```
Host Machine
    │
    ├── Frontend (Next.js) - Port 3000 [HOST]
    │   └── npm run dev
    │
    └── Docker Network (snms-dev-network)
        ├── API Gateway - Port 8000
        ├── User Service - Port 8081 (internal)
        └── Social Service - Port 8082 (internal)
```

## 🛠️ Stack Công nghệ

### Backend (.NET 8)
- **Framework**: ASP.NET Core 8.0
- **API Gateway**: YARP (Yet Another Reverse Proxy)
- **Architecture**: Microservices
- **Services**:
  - `api-gateway` - Cổng API chính (Port: 8000)
  - `user-service` - Quản lý người dùng (Port: 8081)
  - `social-service` - Tính năng mạng xã hội (Port: 8082)

### Frontend (Next.js)
- **Framework**: Next.js 16.1.1
- **UI**: React 19.2.3 + TailwindCSS 4
- **Language**: TypeScript 5
- **Authentication**: Google OAuth integration

### Infrastructure
- **Backend Containerization**: Docker + Docker Compose
- **Frontend Runtime**: Host (Native Node.js)
- **Database**: MySQL 8.0 (Docker)
- **Cache**: Redis 7 Alpine (Docker)

## 📁 Cấu trúc Project

```
├── backend/                    # .NET Backend Services
│   ├── api-gateway/           # API Gateway (YARP)
│   ├── user-service/          # User Management Service
│   ├── social-service/        # Social Features Service
│   └── Edunext-.Net.sln      # Solution file
├── frontend/                  # Next.js Frontend
│   ├── app/                   # App Router
│   ├── components/            # React Components
│   ├── lib/                   # Utilities & API clients
│   └── types/                 # TypeScript definitions
├── container/                 # DevOps & Containerization
│   ├── compose/               # Docker Compose configs
│   ├── dockerfiles/           # Dockerfile cho từng service
│   └── script/                # Automation scripts
└── documents/                 # Technical documentation
```

## 🚀 Môi trường Development

### Prerequisites
- Docker & Docker Compose (cho backend services)
- Node.js 18+ (cho frontend)
- .NET 8 SDK (optional, cho local backend development)

### Quick Start

1. **Khởi động Backend Services (Docker)**:
```bash
cd container/compose
docker-compose -f docker-compose.dev.yml up -d
```

2. **Khởi động Frontend (Host)**:
```bash
cd frontend
npm install
npm run dev
```

3. **Truy cập ứng dụng**:
- Frontend: http://localhost:3000
- API Gateway: http://localhost:8000

### Development Workflow

**Backend (Docker)**:
```bash
# Xem logs backend services
docker-compose -f container/compose/docker-compose.dev.yml logs -f

# Restart service cụ thể
docker-compose -f container/compose/docker-compose.dev.yml restart api-gateway

# Stop backend services
docker-compose -f container/compose/docker-compose.dev.yml down
```

**Frontend (Host)**:
```bash
cd frontend

# Development với hot reload
npm run dev

# Build production
npm run build

# Lint code
npm run lint
```

📖 **Chi tiết**: Xem [Development Workflow Guide](./documents/DEVELOPMENT_WORKFLOW.md)

## 🔧 Cấu hình Môi trường

### Environment Files Structure
```
├── container/compose/.env          # Docker registry & compose config
├── backend/api-gateway/.env        # API Gateway environment
├── backend/user-service/.env       # User Service environment
├── backend/social-service/.env     # Social Service environment
└── frontend/.env                   # Frontend environment
```

### Required Environment Variables

#### Docker Compose (.env)
```bash
# Docker Registry Configuration
DOCKER_REGISTRY=your-dockerhub-username

# Network Configuration
EDUNEXT_NETWORK=edunext-dev-network

# Database Configuration
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=edunext_db
MYSQL_USER=edunext_user
MYSQL_PASSWORD=edunext_pass

# Redis Configuration
REDIS_PASSWORD=redis_pass
```

#### API Gateway (.env)
```bash
# Service Configuration
ASPNETCORE_ENVIRONMENT=Development
ASPNETCORE_URLS=http://+:8080

# YARP Reverse Proxy Routes
USER_SERVICE_URL=http://user-service:8081
SOCIAL_SERVICE_URL=http://social-service:8082

# Authentication
JWT_SECRET_KEY=your-jwt-secret-key
JWT_ISSUER=edunext-api-gateway
JWT_AUDIENCE=edunext-services

# CORS Configuration
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com
```

#### User Service (.env)
```bash
# Service Configuration
ASPNETCORE_ENVIRONMENT=Development
ASPNETCORE_URLS=http://+:8081

# Database Connection
CONNECTION_STRING=Server=mysql;Database=user_db;Uid=edunext_user;Pwd=edunext_pass;

# Redis Cache
REDIS_CONNECTION_STRING=redis:6379
REDIS_PASSWORD=redis_pass

# External APIs
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# JWT Configuration
JWT_SECRET_KEY=your-jwt-secret-key
JWT_EXPIRY_MINUTES=60
```

#### Social Service (.env)
```bash
# Service Configuration
ASPNETCORE_ENVIRONMENT=Development
ASPNETCORE_URLS=http://+:8082

# Database Connection
CONNECTION_STRING=Server=mysql;Database=social_db;Uid=edunext_user;Pwd=edunext_pass;

# Redis Cache
REDIS_CONNECTION_STRING=redis:6379
REDIS_PASSWORD=redis_pass

# File Storage
FILE_STORAGE_PATH=/app/uploads
MAX_FILE_SIZE_MB=10

# Notification Service
NOTIFICATION_SERVICE_URL=http://notification-service:8083
```

#### Frontend (.env)
```bash
# Next.js Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Development
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
```

### Configuration Management

#### 🔒 Security Best Practices
- **Không commit** file `.env` vào Git
- Sử dụng `.env.example` làm template
- Rotate secrets định kỳ trong production
- Sử dụng Azure Key Vault hoặc AWS Secrets Manager cho production

#### 🏗️ Configuration Loading Order
1. `appsettings.json` (base configuration)
2. `appsettings.{Environment}.json` (environment-specific)
3. Environment variables (highest priority)
4. Docker secrets (production)

#### 📝 Configuration Validation
```csharp
// Backend services validate required configs on startup
builder.Services.Configure<DatabaseOptions>(options =>
{
    options.ConnectionString = builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new InvalidOperationException("Database connection string is required");
});
```

### Network Architecture
```
Host Machine
    │
    ├── Frontend (Next.js) - Port 3000 [HOST]
    │   └── Connects to → http://localhost:8000
    │
    └── Docker Network (snms-dev-network)
        ├── API Gateway - Port 8000 (exposed)
        ├── User Service - Port 8081 (internal)
        └── Social Service - Port 8082 (internal)
```

## 📊 Trạng thái Hiện tại

### ✅ Đã hoàn thành
- [x] **Infrastructure Setup**:
  - [x] Backend containerization với Docker
  - [x] Frontend chạy native trên host
  - [x] Docker Compose cho backend services
  - [x] Hot reload cho cả frontend và backend
  - [x] Internal network configuration
- [x] **CI/CD Pipeline**:
  - [x] Separated CI workflows (Backend Docker, Frontend Host)
  - [x] Backend dev-base image automation
  - [x] Frontend native build và test
- [x] **Backend Architecture**:
  - [x] .NET 8 microservices structure
  - [x] YARP API Gateway setup (basic)
  - [x] Service project templates
  - [x] Solution file organization
- [x] **Frontend Foundation**:
  - [x] Next.js 16 + React 19 setup
  - [x] TypeScript configuration
  - [x] TailwindCSS 4 integration
  - [x] Basic authentication flow structure
  - [x] Native development environment

### 🚧 Đang phát triển
- [ ] **Environment Configuration**:
  - [ ] `.env.example` files cho tất cả services
  - [ ] Configuration validation trong Program.cs
  - [ ] Database connection strings
  - [ ] JWT authentication setup
- [ ] **YARP Configuration**:
  - [ ] Reverse proxy routes trong appsettings.json
  - [ ] Load balancing strategies
  - [ ] Health check endpoints
- [ ] **Database Setup**:
  - [ ] Entity Framework migrations
  - [ ] Database seeding scripts
  - [ ] Connection pooling configuration
- [ ] **Authentication & Authorization**:
  - [ ] Google OAuth implementation
  - [ ] JWT token management
  - [ ] Role-based access control
- [ ] **Logging & Monitoring**:
  - [ ] Structured logging với Serilog
  - [ ] Application Insights integration
  - [ ] Health check endpoints
- [ ] **Testing Infrastructure**:
  - [ ] Unit test projects
  - [ ] Integration test setup
  - [ ] Test containers configuration

### 📋 Cần làm
- [ ] **Configuration Management**:
  - [ ] Tạo `.env.example` templates
  - [ ] Implement configuration validation
  - [ ] Setup Azure Key Vault integration
  - [ ] Environment-specific appsettings files
- [ ] **Backend Services**:
  - [ ] Database connection configuration
  - [ ] JWT authentication setup
  - [ ] YARP routing configuration
  - [ ] Health check endpoints
- [ ] **Production Environment**:
  - [ ] Production Docker images cho backend
  - [ ] Frontend deployment strategy (Vercel/Static hosting)
  - [ ] SSL/TLS certificates
  - [ ] Load balancer configuration
  - [ ] Database migrations

## 🔍 Monitoring & Debugging

### Health Checks
```bash
# Check backend services
docker ps

# Backend service logs
docker logs -f snms-gateway-dev
docker logs -f snms-user-dev
docker logs -f snms-social-dev

# Frontend logs
# Xem trực tiếp trong terminal đang chạy npm run dev
```

### Common Issues
1. **Port conflicts**: 
   - Frontend (3000): `lsof -ti:3000 | xargs kill -9`
   - Backend (8000): `lsof -ti:8000 | xargs kill -9`
2. **Frontend không connect Backend**: Kiểm tra `NEXT_PUBLIC_API_URL` trong `frontend/.env`
3. **Hot reload không hoạt động**: 
   - Frontend: Restart `npm run dev`
   - Backend: `docker-compose restart <service-name>`

## 🚀 Deployment

### Development
- **Backend**: Docker Compose (`docker-compose.dev.yml`)
- **Frontend**: Native Node.js (`npm run dev`)
- Hot reload enabled cho cả hai

### Production (Planned)
- **Backend**: Docker images với `docker-compose.prod.yml`
- **Frontend**: Static export hoặc Vercel deployment
- Optimized builds
- Health checks
- Resource limits

## 📚 Documentation

- [Development Workflow Guide](./documents/DEVELOPMENT_WORKFLOW.md) ⭐ **NEW**
- [Container Setup Guide](./container/README.md)
- [Frontend Architecture](./documents/FRONTEND_ARCHITECTURE.md)
- [Backend API Documentation](./backend/readme.md)

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Implement changes với hot reload
4. Test trong Docker environment
5. Submit pull request

## 📞 Support

- **Repository**: https://github.com/Aptech-Eproject/Edunext-.Net
- **Issues**: https://github.com/Aptech-Eproject/Edunext-.Net/issues

---

**DevOps Status**: ✅ Development Ready | 🎯 Hybrid Architecture (Frontend Host + Backend Docker)