import { NextResponse } from 'next/server';

export async function POST(req) {
  const response = NextResponse.json({ message: 'Logout successful' });

  response.cookies.set('token', '', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    expires: new Date(0),
  });

  return response;
}