# ============================================
# FRONTEND DEV-BASE IMAGE
# Contains: Runtime + Dependencies
# Excludes: Source code
# ============================================
FROM node:20-slim

WORKDIR /app

# Install system dependencies for native modules
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency files only
COPY package.json package-lock.json ./

# Install dependencies (baked into image)
RUN npm ci

# Dev environment
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
ENV WATCHPACK_POLLING=true
ENV CHOKIDAR_USEPOLLING=true

EXPOSE 3000

# No CMD - defined in docker-compose
