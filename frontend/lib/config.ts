// lib/config.ts - Environment configuration loader
export const config = {
  // Server-side only (SSR/API routes)
  server: {
    internalApiGatewayUrl: process.env.INTERNAL_API_GATEWAY_URL || 'http://api-gateway:8000',
    internalApiKey: process.env.INTERNAL_API_KEY || '',
    jwtSecret: process.env.JWT_SECRET_KEY || '',
    nextAuthSecret: process.env.NEXTAUTH_SECRET || '',
    googleClientId: process.env.GOOGLE_CLIENT_ID || '',
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    apiTimeout: parseInt(process.env.API_TIMEOUT_MS || '30000', 10),
  },
  
  // Client-side safe (NEXT_PUBLIC_*)
  client: {
    apiBase: process.env.NEXT_PUBLIC_API_BASE || '/api',
    appName: process.env.NEXT_PUBLIC_APP_NAME || 'SNMS',
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  },
  
  // Environment info
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const;

// Validation function (run at startup)
export function validateConfig() {
  const required = [
    'INTERNAL_API_GATEWAY_URL',
    'INTERNAL_API_KEY', 
    'JWT_SECRET_KEY',
    'NEXTAUTH_SECRET'
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}