import { config } from '@/lib/config';
import { ApiResponse } from '@/types';

interface FetchOptions extends RequestInit {
  timeout?: number;
}

export class GatewayClient {
  private baseURL: string;
  private timeout: number;
  private apiKey: string;

  constructor() {
    this.baseURL = config.server.internalApiGatewayUrl;
    this.timeout = config.server.apiTimeout;
    this.apiKey = config.server.internalApiKey;
  }

  private async request<T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<ApiResponse<T>> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'X-Internal-API-Key': this.apiKey,
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        return {
          success: false,
          error: `HTTP ${response.status}: ${response.statusText}`,
        };
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      clearTimeout(timeoutId);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  async get<T>(endpoint: string, accessToken?: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'GET',
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    });
  }

  async post<T>(
    endpoint: string,
    body?: unknown,
    accessToken?: string
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    });
  }

  async put<T>(
    endpoint: string,
    body?: unknown,
    accessToken?: string
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    });
  }

  async delete<T>(endpoint: string, accessToken?: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
      headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
    });
  }
}

export const gatewayClient = new GatewayClient();
