import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'MF Contabilidade | Soluções integradas em gestão empresarial',
  description: 'Landing page institucional da MF Contabilidade.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Script id="scroll-effects" strategy="afterInteractive">
          {`
(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  let latestY = 0;
  let ticking = false;
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const apply = () => {
    ticking = false;
    const y = clamp(latestY, 0, 220);
    root.style.setProperty('--scrollY', String(y));
    if (latestY > 8) root.setAttribute('data-scrolled', '1');
    else root.removeAttribute('data-scrolled');
  };

  const onScroll = () => {
    latestY = window.scrollY || 0;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(apply);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
          `}
        </Script>
      </body>
    </html>
  );
}
