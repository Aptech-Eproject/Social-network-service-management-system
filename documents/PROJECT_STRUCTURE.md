# 📁 Cấu Trúc Project

## 🏗️ Tổng Quan Kiến Trúc

Project sử dụng kiến trúc **Microservices** với:
- **Backend**: .NET 8 (ASP.NET Core)
- **Frontend**: Next.js 15 (React, TypeScript)
- **Database**: MySql
- **Cache**: Redis 7
- **Container**: Docker + Docker Compose
- **CI/CD**: GitHub Actions

---

## 📂 Cấu Trúc Thư Mục

```
Social-network-service-management-system/
├── .github/                    # GitHub workflows & templates
├── backend/                    # Backend services (.NET)
├── container/                  # Docker configs
├── documents/                  # Documentation
├── frontend/                   # Next.js frontend
├── package.json               # Root package.json (scripts)
└── README.md                  # Project overview
```

---

## 🔧 Backend (`/backend`)

### **Cấu trúc**
```
backend/
├── api-gateway/               # API Gateway (YARP)
├── user-service/              # User & Auth Service
├── social-service/            # Social Features Service
└── Social-network-service-management-system.sln
```

### **1. API Gateway** (`/backend/api-gateway`)
**Vai trò**: Reverse proxy, routing, load balancing

**Files chính**:
- `Program.cs` - Entry point, YARP config
- `appsettings.json` - Routes, clusters, CORS
- `api-gateway.csproj` - Dependencies
- `appsettings.Development/Production.json` - Environment variables

**Port**: 8000

**Dependencies**:
- Yarp.ReverseProxy
- Microsoft.AspNetCore.OpenApi

---

### **2. User Service** (`/backend/user-service`)
**Vai trò**: Authentication, user management

**Files chính**:
- `Program.cs` - Entry point, JWT config
- `appsettings.json` - Database, JWT settings
- `user-service.csproj` - Dependencies
- `.env` - Database credentials

**Port**: 8001

**Database**: `SNMS_UserDB` (SQL Server)

**Dependencies**:
- Microsoft.EntityFrameworkCore.SqlServer
- Microsoft.AspNetCore.Authentication.JwtBearer
- BCrypt.Net-Next

**APIs**:
- `POST /api/auth/register` - Đăng ký
- `POST /api/auth/login` - Đăng nhập
- `GET /api/users/me` - Get user info

---

### **3. Social Service** (`/backend/social-service`)
**Vai trò**: Posts, comments, likes, follows

**Files chính**:
- `Program.cs` - Entry point
- `appsettings.json` - Database, Redis config
- `social-service.csproj` - Dependencies
- `.env` - Database, Redis credentials

**Port**: 8002

**Database**: `SNMS_SocialDB` (SQL Server)

**Cache**: Redis

**Dependencies**:
- Microsoft.EntityFrameworkCore.SqlServer
- StackExchange.Redis



## 🐳 Container (`/container`)

### **Cấu trúc**
```
container/
├── compose/                   # Docker Compose files
│   ├── docker-compose.dev.yml
│   ├── docker-compose.prod.yml
│   └── docker-compose.ci.yml
├── dockerfiles/              # Dockerfiles
│   ├── dev/                 # Development images
│   ├── prod/                # Production images
│   └── ci/                  # CI images
├── env/                      # Environment templates
│   ├── api-gateway/
│   ├── user-service/
│   ├── social-service/
│   └── frontend/
└── script/
    └── setup-env.js          # Setup script
```

### **1. Docker Compose** (`/container/compose`)

**docker-compose.dev.yml**:
- API Gateway (port 8000)
- User Service (port 8001)
- Social Service (port 8002)
- Redis (port 6379)

**docker-compose.prod.yml**:
- Production config
- Frontend included
- Optimized settings

**docker-compose.ci.yml**:
- CI/CD testing
- Lightweight config

---

### **2. Dockerfiles** (`/container/dockerfiles`)

**dev/** - Development images:
- `gateway.dev-base.Dockerfile` - Gateway với dependencies
- `user.dev-base.Dockerfile` - User service với dependencies
- `social.dev-base.Dockerfile` - Social service với dependencies
- `frontend.dev-base.Dockerfile` - Frontend với node_modules

**Đặc điểm**:
- Pre-install dependencies
- Hot reload support
- Volume mount source code

**prod/** - Production images:
- Multi-stage builds
- Optimized size
- No dev dependencies

**ci/** - CI images:
- Testing environment
- Fast build

---

### **3. Environment Templates** (`/container/env`)

Mỗi service có `.env.example`:
- `api-gateway/.env.example` - Gateway config
- `user-service/.env.example` - Database, JWT secrets
- `social-service/.env.example` - Database, Redis config
- `frontend/.env.example` - API URLs

**Setup**: `npm run setup:dev` copy sang `.env`

---

### **4. Scripts** (`/container/script`)

**setup-env.js**:
- Copy `.env.example` → `.env`
- Tự động cho tất cả services
- Chạy qua `npm run setup:dev`

---

## 📚 Documents (`/documents`)

```
documents/
├── COMMANDS.md               # Command reference
└── PROJECT_STRUCTURE.md      # File này
```

**COMMANDS.md**: Hướng dẫn sử dụng npm scripts, Docker commands

---

## 🔄 GitHub Actions (`/.github`)

### **Workflows**
```
.github/
├── workflows/
│   ├── build-dev-base.yml       # Build dev images
│   ├── ci-test.yml              # Run tests
│   ├── code-quality-check.yml   # Linting, formatting
│   └── frontend-ci.yml          # Frontend tests
└── PULL_REQUEST_TEMPLATE.md
```

**build-dev-base.yml**:
- Trigger: Push dependency files
- Build dev-base images
- Push to GitHub Container Registry

**ci-test.yml**:
- Trigger: Pull request
- Run unit tests
- Integration tests

**code-quality-check.yml**:
- Trigger: Pull request
- Linting (.NET, TypeScript)
- Code formatting check

**frontend-ci.yml**:
- Trigger: Frontend changes
- Build Next.js
- Run tests

---

## 📦 Root Files

### **package.json**
Root package.json chứa npm scripts:
- Development: `dev:pull`, `dev:build`, `dev:logs`
- Docker: `docker:ps`, `docker:prune`
- Utilities: `sync`, `health`, `setup:dev`

**Không có dependencies** - chỉ scripts

---

### **README.md**
Project overview, quick start guide

---

## 🔐 Environment Variables

### **API Gateway** (`appsettings.Development/Production.json`)
```json
{
  "Cors": {
    "AllowedOrigins": [
      "http://localhost:3000"
    ]
  }
}

```

### **User Service** (`appsettings.Development/Production.json`)
```json
{
    "Database": {
        "AutoMigrate": true
    },
    "ConnectionStrings": {
        "Default": "Server=mysql-db;Port=3306;Database=user_lsmi;User=root;Password=root"
    }

}
```

### **Social Service** (`appsettings.Development/Production.json`)
```json
{
    "Database": {
        "AutoMigrate": true
    },
    "ConnectionStrings": {
        "Default": "Server=mysql-db;Port=3306;Database=cocial_lsmi;User=root;Password=root"
    }

}
```

### **Frontend** (`.env`)
```env
NEXT_PUBLIC_APP_NAME=lsmi
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
NEXT_PUBLIC_ENV=local


GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret

```

---

## 🌐 Network Architecture

```
┌─────────────────────────────────────────────┐
│           Frontend (Next.js)                │
│           Port: 3000                        │
└─────────────────┬───────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────┐
│        API Gateway (YARP)                   │
│        Port: 8000                           │
└─────────┬───────────────────┬───────────────┘
          │                   │
          ▼                   ▼
┌─────────────────┐  ┌─────────────────────┐
│  User Service   │  │  Social Service     │
│  Port: 8001     │  │  Port: 8002         │
└────────┬────────┘  └──────────┬──────────┘
         │______________________│
         ▼                      ▼
┌─────────────────┐  ┌─────────────────────┐
│                 │  │  Redis              │
│     DATABASE    |  │  Port: 6379         │
│                 │  │  - Cache            │
│                 │  │                     │
└─────────────────┘  └─────────────────────┘
```

**Docker Network**: `snms-network` (bridge)

---

## 🚀 Development Flow

### **1. Code Changes**

**Backend (.NET)**:
```
Sửa code → Hot reload → Test API
```

**Frontend (Next.js)**:
```
Sửa code → Fast refresh → Test UI
```

### **2. Add Dependencies**

**Backend**:
```bash
cd backend/user-service
dotnet add package PackageName
git commit → CI build → Pull image
```

**Frontend**:
```bash
cd frontend
npm install package-name
git commit → Restart dev server
```

### **3. Database Changes**

```bash
# Sửa models → Run migrations
dotnet ef migrations add MigrationName
dotnet ef database update
```

---

## 📊 File Types

### **Backend**
- `.cs` - C# source files
- `.csproj` - Project files
- `.sln` - Solution file
- `.http` - HTTP test files
- `appsettings.json` - Configuration

### **Frontend**
- `.tsx` - TypeScript + JSX
- `.ts` - TypeScript
- `.css` - Stylesheets
- `.json` - Config files

### **Container**
- `.yml` - Docker Compose
- `.Dockerfile` - Docker images
- `.env` - Environment variables

### **Docs**
- `.md` - Markdown documentation

---

## 🔍 Key Directories

| Directory | Purpose | Hot Reload |
|-----------|---------|------------|
| `/backend/*/` | Service source code | ✅ Yes |
| `/frontend/app/` | Next.js pages | ✅ Yes |
| `/frontend/components/` | React components | ✅ Yes |
| `/container/compose/` | Docker configs | ❌ No |
| `/container/dockerfiles/` | Image definitions | ❌ No |
| `/.github/workflows/` | CI/CD pipelines | ❌ No |

---

## 📝 Naming Conventions

### **Services**
- `api-gateway` - Kebab case
- `user-service` - Kebab case
- `social-service` - Kebab case

### **Files**
- `Program.cs` - PascalCase (.NET)
- `login-form.tsx` - Kebab case (React)
- `api-client.ts` - Kebab case (TypeScript)

### **Docker**
- `gateway.dev-base.Dockerfile` - Descriptive
- `docker-compose.dev.yml` - Environment suffix

### **Environment**
- `.env.example` - Template
- `.env` - Actual (gitignored)

---

## 🎯 Quick Reference

### **Ports**
- 3000 - Frontend
- 8000 - API Gateway
- 8001 - User Service
- 8002 - Social Service
- 6379 - Redis

### **Databases**
- `SNMS_UserDB` - User data (SQL Server - External)
- `SNMS_SocialDB` - Social data (SQL Server - External)

### **Networks**
- `snms-network` - Docker bridge

### **Volumes**
- `redis-data` - Redis persistence

---

## 📖 Related Docs

- [COMMANDS.md](./COMMANDS.md) - Command reference
- [README.md](../README.md) - Project overview
- [PULL_REQUEST_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md) - PR template
