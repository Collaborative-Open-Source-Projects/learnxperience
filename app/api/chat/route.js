import { NextResponse } from 'next/server';
import { getChatCompletion } from '../../lib/getChatCompletion';

export async function POST(req) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }

  try {
    const response = await getChatCompletion(message);
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}