import { NextRequest, NextResponse } from 'next/server';
import { gatewayClient } from '@/lib/server/gateway-client';
import { setAccessToken } from '@/lib/server/auth';
import { LoginRequest, LoginResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();

    // Validate input
    if (!body.email || !body.password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Call backend gateway
    const response = await gatewayClient.post<LoginResponse>(
      '/api/auth/login',
      body
    );

    if (!response.success || !response.data) {
      return NextResponse.json(
        { success: false, error: response.error || 'Login failed' },
        { status: 401 }
      );
    }

    // Set httpOnly cookie
    await setAccessToken(response.data.accessToken);

    // Return user data (không trả token về client)
    return NextResponse.json({
      success: true,
      data: { user: response.data.user },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      },
      { status: 500 }
    );
  }
}
