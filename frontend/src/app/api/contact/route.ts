import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  let data: unknown = null;
  try {
    data = await req.json();
  } catch {
    data = null;
  }

  return NextResponse.json({ ok: true, message: 'Contato recebido', data });
}
