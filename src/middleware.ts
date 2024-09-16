import { NextResponse, type NextRequest } from 'next/server';
import { auth } from './server/auth';

const privateRoutes = ['/dashboard'];

export async function middleware(request: NextRequest) {
    const session = await auth();

    if (privateRoutes.includes(request.nextUrl.pathname) && !session) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }
}

export const config = { matcher: ['/dashboard'] };
