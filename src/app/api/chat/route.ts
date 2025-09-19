// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  // const fastApiUrl = 'http://127.0.0.1:8000/chat';
  const fastApiUrl = 'https://web-production-8c33f.up.railway.app/api/v1/chat'

  try {
    const response = await fetch(fastApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('Error calling FastAPI /chat:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
