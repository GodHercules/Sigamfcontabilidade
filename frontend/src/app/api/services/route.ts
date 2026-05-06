import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export function GET() {
  return NextResponse.json([
    'Contabilidade Completa',
    'Departamento Pessoal',
    'Fiscal e Tributário',
    'Abertura de Empresas',
    'Consultoria Empresarial',
  ]);
}

