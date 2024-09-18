import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const word = searchParams.get('word');

  if (!word) {
    return NextResponse.json({ error: 'Missing parameter' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();

    if (Array.isArray(data) && data.length > 0) {
      return NextResponse.json({ data });
    } else {
      return NextResponse.json(
        { error: 'No data returned for word' },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Server encountered error while fetching' },
      { status: 500 }
    );
  }
}
