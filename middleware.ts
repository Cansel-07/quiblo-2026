import { NextRequest } from 'next/server';
import { auth0 } from '@/app/lib/auth0';

export default async function middleware(request: NextRequest) {
  return await auth0.middleware(request);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};