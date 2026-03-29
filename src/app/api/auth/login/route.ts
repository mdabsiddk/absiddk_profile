import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // The hardcoded credentials as requested by the user
    if (email === 'mdabsiddk@gmail.com' && password === 'Ab  siddk') {
      
      const oneDay = 24 * 60 * 60 * 1000;
      
      const cookieStore = await cookies();
      cookieStore.set({
        name: 'admin_session',
        value: 'authenticated_user_mdabsiddk', // A basic token for simplicity (No JWT overhead since CF Workers Edge issues with jsonwebtoken package can occur)
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: oneDay,
        path: '/',
      });

      return NextResponse.json({ success: true, message: 'Logged in successfully' });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials. Please try again.' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}
