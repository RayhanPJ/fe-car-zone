import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isTokenExpired } from "./lib/token";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const url = new URL(request.url);
  
  const token = cookies().get("token");
  const role = cookies().get("role");
  const tokenValue = token?.value;

  const redirectTo = (path) => NextResponse.redirect(new URL(path, url));

  // Handle sign-in and sign-up redirects
  if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
    if (tokenValue && !isTokenExpired(tokenValue)) {
      return redirectTo('/');
    }
    return NextResponse.next();
  }

  if(pathname.startsWith('/change-password') || pathname.startsWith('/profile') || pathname.startsWith('/order-list')){
    if (tokenValue && !isTokenExpired(tokenValue)) {
      return NextResponse.next();
    }
    return redirectTo('/');
  }

  if(pathname.startsWith("/checkout")){
    if (tokenValue && !isTokenExpired(tokenValue)) {
      return NextResponse.next();
    }
    return redirectTo('/');
  }
  

  // Handle dashboard redirects
  if (pathname.startsWith('/dashboard')) {
    if (!tokenValue || isTokenExpired(tokenValue)) {
      return redirectTo('/sign-in');
    }

    const roleValue = role?.value;
    if (!roleValue || roleValue !== "admin") {
      return redirectTo('/');
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/profile',
    '/change-password',
    '/order-list',
    '/sign-in',
    '/sign-up',
    '/checkout/:path*'
  ],
};
