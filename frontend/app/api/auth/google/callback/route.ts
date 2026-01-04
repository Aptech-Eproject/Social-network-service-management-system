import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(new URL('/auth/login?error=google_auth_failed', request.url));
  }

  try {
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback';
    
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID || '',
        client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await tokenResponse.json();
    
    const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });

    const userInfo = await userInfoResponse.json();

    // Gửi thông tin user đến backend .NET qua gateway
    const backendResponse = await fetch(`${process.env.GATEWAY_INTERNAL_URL}/api/auth/google`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        googleId: userInfo.id,
      }),
    });

    if (backendResponse.ok) {
      const data = await backendResponse.json();
      const response = NextResponse.redirect(new URL('/dashboard', request.url));
      response.cookies.set('token', data.token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
      return response;
    }

    return NextResponse.redirect(new URL('/auth/login?error=backend_error', request.url));
  } catch (error) {
    console.error('Google auth error:', error);
    return NextResponse.redirect(new URL('/auth/login?error=auth_failed', request.url));
  }
}
