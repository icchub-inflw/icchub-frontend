// app/api/start/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  // const fastApiUrl = 'http://127.0.0.1:8000/start';
  const fastApiUrl = 'https://web-production-8c33f.up.railway.app/api/v1/start'


  try {
    const response = await fetch(fastApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('Error calling FastAPI /start:', err);
    return NextResponse.json({ error: 'Failed to start conversation' }, { status: 500 });
  }
}
