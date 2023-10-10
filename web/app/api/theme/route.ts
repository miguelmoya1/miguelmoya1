import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const cookiesStore = cookies();

  const isRetroMode = cookiesStore.has('retroMode');

  isRetroMode ? cookiesStore.delete('retroMode') : cookiesStore.set('retroMode', 'true');

  return NextResponse.json({ isRetroMode: !isRetroMode });
}
