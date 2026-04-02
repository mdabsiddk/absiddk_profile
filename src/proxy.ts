import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginRoute = request.nextUrl.pathname === '/admin/login';

  if (isAdminRoute) {
    // Check if the auth cookie exists
    const authCookie = request.cookies.get('admin_session');

    // If user is not logged in and trying to access /admin/* (but not /admin/login)
    if (!authCookie && !isLoginRoute) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // If user is logged in and trying to access /admin/login, redirect to /admin
    if (authCookie && isLoginRoute) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
