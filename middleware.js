import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET); 

export function middleware(req) {
  const token = req.cookies.get('token'); 

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));  
  }

  try {
    jwtVerify(token.value, SECRET_KEY);
    return NextResponse.next();  
  } catch (error) {
    console.error('Invalid token', error);
    return NextResponse.redirect(new URL('/login', req.url)); 
  }
}

export const config = {
  matcher: ['/dashboard'],
};