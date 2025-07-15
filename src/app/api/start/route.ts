// app/api/start/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const fastApiUrl = 'http://127.0.0.1:8000/start';

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
