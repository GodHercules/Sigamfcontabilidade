import type { Metadata } from 'next';
import { Manrope, Sora } from 'next/font/google';

import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'MF Contabilidade | SoluÃ§Ãµes Integradas em GestÃ£o Empresarial',
  description:
    'A MF Contabilidade oferece soluÃ§Ãµes contÃ¡beis, fiscais e estratÃ©gicas para empresas que buscam crescimento com seguranÃ§a.',
  openGraph: {
    title: 'MF Contabilidade | SoluÃ§Ãµes Integradas em GestÃ£o Empresarial',
    description:
      'Contabilidade completa, consultoria especializada e atendimento humanizado para o crescimento seguro da sua empresa.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${sora.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}


