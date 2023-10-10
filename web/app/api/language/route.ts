import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const cookiesStore = cookies();

  const body = await req.json();

  if (!Object.hasOwn(body, 'lang')) {
    return NextResponse.json(null, { status: 400 });
  }

  const language = body.lang;

  cookiesStore.set('lang', language);

  return NextResponse.json({ language });
}
