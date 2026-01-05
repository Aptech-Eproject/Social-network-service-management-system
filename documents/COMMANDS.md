# 📘 Hướng Dẫn Sử Dụng Commands

## 📋 Mục Lục
- [Setup Ban Đầu](#setup-ban-đầu)
- [Development Commands](#development-commands)
- [Service Shell Access](#service-shell-access)
- [Logs Management](#logs-management)
- [Database Operations](#database-operations)
- [Frontend Commands](#frontend-commands)
- [Production Commands](#production-commands)
- [Docker Utilities](#docker-utilities)
- [Workflow Hàng Ngày](#workflow-hàng-ngày)
- [Troubleshooting](#troubleshooting)

---

## 🚀 Setup Ban Đầu

### **Lần đầu clone project**

```bash
# 1. Clone repository
git clone <repo-url>
cd Social-network-service-management-system

# 2. Setup file .env
npm run setup:dev

# 3. Pull images từ registry
npm run dev:pull

# 4. Start backend services
npm run dev:up

# 5. Start frontend (terminal mới)
npm run frontend:dev

# 6. Kiểm tra trạng thái
npm run dev:ps
```

**Kết quả**: 
- Backend services: http://localhost:8000
- Frontend: http://localhost:3000

---

## 💻 Development Commands

### **`npm run setup:dev`**
Setup file `.env` cho tất cả services

**Khi dùng**: Lần đầu setup hoặc khi file .env bị mất

---

### **`npm run dev`**
Start backend services với logs (foreground)

**Tương đương**: `docker compose -p snms -f container/compose/docker-compose.dev.yml up`

---

### **`npm run dev:up`**
Start backend services background

**Khi dùng**: Làm việc hàng ngày (recommended)

---

### **`npm run dev:down`**
Stop và xóa containers (giữ volumes)

---

### **`npm run dev:build`**
Build và start với logs

**Khi dùng**: Test Dockerfile changes

---

### **`npm run dev:rebuild`**
Build và start background

**Khi dùng**: Sau khi sửa Dockerfile, cần rebuild nhanh

---

### **`npm run dev:stop`**
Stop services (giữ containers)

---

### **`npm run dev:restart`**
Restart tất cả backend services

**Khi dùng**: Sau khi pull images mới hoặc thay đổi .env

---

### **`npm run dev:pull`**
Pull images mới từ registry

**Khi dùng**: Sau khi CI build xong dependency changes

---

### **`npm run dev:ps`**
Xem trạng thái services

---

## 🔧 Service Shell Access

### **`npm run dev:gateway`**
Vào shell của API Gateway container

```bash
npm run dev:gateway
# Inside container
ls -la /app
exit
```

---

### **`npm run dev:user`**
Vào shell của User Service container

---

### **`npm run dev:social`**
Vào shell của Social Service container

---

### **`npm run dev:redis`**
Vào Redis CLI

```bash
npm run dev:redis
# Inside Redis
KEYS *
GET key_name
exit
```

---

## 📊 Logs Management

### **`npm run dev:logs`**
Xem logs tất cả services (200 dòng cuối)

**Thoát**: `Ctrl + C`

---

### **`npm run dev:log:gateway`**
Logs của API Gateway

**Khi dùng**: Debug routing, YARP proxy issues

---

### **`npm run dev:log:user`**
Logs của User Service

**Khi dùng**: Debug authentication, user APIs

---

### **`npm run dev:log:social`**
Logs của Social Service

**Khi dùng**: Debug social features, posts, comments

---

### **`npm run dev:log:redis`**
Logs của Redis

**Khi dùng**: Debug cache issues

---

## 🗄️ Database Operations

### **`npm run dev:db:reset`**
Reset database migrations

**⚠️ CẢNH BÁO**: Mất tất cả data

```bash
npm run dev:db:reset
# Run migrations lại
```

---

### **`npm run dev:db:backup`**
Backup database với timestamp

```bash
npm run dev:db:backup
# Output: backup_20240115_143022.sql
```

---

## ⚛️ Frontend Commands

### **`npm run frontend:dev`**
Start Next.js dev server (host)

**Port**: 3000

**Hot reload**: Tự động khi sửa code

---

### **`npm run frontend:build`**
Build production

---

### **`npm run frontend:start`**
Start production server

---

### **`npm run frontend:lint`**
Lint code

---

### **`npm run frontend:install`**
Install dependencies

**Khi dùng**: Sau khi pull code có thay đổi package.json

---

## 🚀 Production Commands

### **`npm run prod`**
Start production với logs

---

### **`npm run prod:up`**
Start production background

---

### **`npm run prod:down`**
Stop production

---

### **`npm run prod:build`**
Build và start production

---

### **`npm run prod:logs`**
Xem logs production

---

## 🐳 Docker Utilities

### **`npm run docker:ps`**
Xem tất cả containers

---

### **`npm run docker:stop-all`**
Stop tất cả containers (không chỉ project)

---

### **`npm run docker:rm-all`**
Xóa tất cả containers

---

### **`npm run docker:prune`**
Xóa tất cả unused data (containers, images, volumes)

**⚠️ CẢNH BÁO**: Mất tất cả data

---

### **`npm run docker:images`**
Xem tất cả images

---

### **`npm run docker:rmi-unused`**
Xóa unused images

---

### **`npm run docker:volume-list`**
Xem tất cả volumes

---

### **`npm run docker:volume-prune`**
Xóa unused volumes

---

### **`npm run docker:network-list`**
Xem tất cả networks

---

### **`npm run docker:network-prune`**
Xóa unused networks

---

### **`npm run docker:reset`**
Reset Docker (stop + remove + prune)

**⚠️ NUCLEAR OPTION**: Xóa mọi thứ

---

### **`npm run docker:clean-cache`**
Xóa build cache

---

## 🔨 Build & Sync

### **`npm run build:local`**
Build dev-base images locally

**Khi dùng**: Test Dockerfile changes, không có internet

**Thời gian**: 5-10 phút

---

### **`npm run sync`**
Sync toàn bộ (git pull + pull images + start)

**Recommended**: Dùng mỗi sáng

---

### **`npm run health`**
Kiểm tra services có chạy không

```bash
npm run health
# Output: OK nếu services healthy
```

---

## 📅 Workflow Hàng Ngày

### **Sáng - Bắt đầu làm việc**

```bash
# Terminal 1: Backend
npm run sync

# Terminal 2: Frontend
npm run frontend:dev

# Check status
npm run health
```

---

### **Trong ngày - Coding**

**Backend (.NET)**:
```bash
# Sửa code → Hot reload tự động
vim backend/user-service/Program.cs
vim backend/api-gateway/appsettings.json

# KHÔNG CẦN restart
```

**Frontend (Next.js)**:
```bash
# Sửa code → Hot reload tự động
vim frontend/app/page.tsx
vim frontend/components/Header.tsx

# KHÔNG CẦN restart
```

---

### **Thêm dependency - Backend**

```bash
cd backend/user-service

# Thêm NuGet package
dotnet add package Serilog.AspNetCore

# Commit
git add user-service.csproj
git commit -m "feat: add Serilog"
git push

# Đợi CI build (3-5 phút)

# Pull image mới
npm run dev:pull
npm run dev:restart

# Dùng ngay
vim Program.cs
# using Serilog; ✅
```

---

### **Thêm dependency - Frontend**

```bash
cd frontend

# Install dependency
npm install axios

# Commit
git add package.json package-lock.json
git commit -m "feat: add axios"
git push

# Restart dev server
# Ctrl+C trong terminal frontend
npm run frontend:dev

# Dùng ngay
vim app/api/client.ts
# import axios from 'axios'; ✅
```

---

### **Debug Issues**

```bash
# Xem logs
npm run dev:log:gateway
npm run dev:log:user

# Vào container
npm run dev:gateway
npm run dev:user

# Restart service
npm run dev:restart
```

---

### **Tối - Kết thúc**

```bash
# Option 1: Stop (giữ containers)
npm run dev:stop

# Option 2: Down (xóa containers)
npm run dev:down

# Option 3: Để chạy
# (không làm gì)
```

---

## 🐛 Troubleshooting

### **Hot reload không hoạt động**

**Backend**:
```bash
npm run dev:restart
```

**Frontend**:
```bash
# Ctrl+C
npm run frontend:dev
```

---

### **Service không start**

```bash
# 1. Check logs
npm run dev:log:gateway

# 2. Check status
npm run dev:ps

# 3. Restart
npm run dev:restart

# 4. Reset nếu cần
npm run dev:down
npm run dev:up
```

---

### **Port conflict**

```bash
# Port 3000 (Frontend)
lsof -ti:3000 | xargs kill -9

# Port 8000 (Gateway)
lsof -ti:8000 | xargs kill -9

# Restart
npm run dev:up
npm run frontend:dev
```

---

### **Database issues**

```bash
# Check logs
npm run dev:log:user
npm run dev:log:social

# Reset migrations
npm run dev:db:reset
```

---

### **Dependency không tìm thấy**

**Backend**:
```bash
# Pull image mới
npm run dev:pull
npm run dev:restart
```

**Frontend**:
```bash
# Install lại
npm run frontend:install

# Restart
npm run frontend:dev
```

---

### **Docker issues**

```bash
# Clean everything
npm run docker:reset

# Setup lại
npm run setup:dev
npm run dev:pull
npm run dev:up
```

---

## 📊 Command Cheat Sheet

| Command | Mục đích | Thời gian |
|---------|----------|-----------|
| `npm run setup:dev` | Setup .env | 1s |
| `npm run dev:up` | Start backend | 10s |
| `npm run frontend:dev` | Start frontend | 5s |
| `npm run dev:pull` | Pull images | 30s-2m |
| `npm run sync` | Git pull + update | 1-3m |
| `npm run dev:logs` | View logs | Instant |
| `npm run dev:restart` | Restart backend | 10s |
| `npm run dev:down` | Stop backend | 5s |
| `npm run dev:ps` | Show status | Instant |
| `npm run health` | Check health | Instant |

---

## ⚠️ Lưu Ý Quan Trọng

### **✅ NÊN**
- Dùng `npm run sync` mỗi sáng
- Dùng `npm run dev:up` cho backend
- Dùng `npm run frontend:dev` cho frontend (terminal riêng)
- Commit dependency changes

### **❌ KHÔNG NÊN**
- Chạy `npm install` trong backend folders
- Edit code trong containers
- Xóa volumes khi không cần

### **🚫 TUYỆT ĐỐI KHÔNG**
- Commit file `.env`
- Commit `node_modules` hoặc `bin/obj`
- Sửa code trực tiếp trong container

---

## 🎯 Quick Reference

### **Start Development**
```bash
npm run dev:up && npm run frontend:dev
```

### **Stop Development**
```bash
npm run dev:down
# Ctrl+C trong terminal frontend
```

### **Full Reset**
```bash
npm run docker:reset
npm run setup:dev
npm run dev:pull
npm run dev:up
npm run frontend:dev
```

### **Daily Sync**
```bash
npm run sync
npm run frontend:dev
```

---

**Cập nhật**: 2024  
**Version**: 2.0.0
