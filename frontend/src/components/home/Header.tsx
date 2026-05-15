'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { LockKeyhole, Menu } from 'lucide-react';

import { navItems } from '../../data/home-content';
import { logoHeader } from './assets';
import { SectionLink } from './SectionLink';

export function Header() {
  const mobileNavRef = useRef<HTMLDetailsElement>(null);

  const closeMobileMenu = () => {
    mobileNavRef.current?.removeAttribute('open');
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <SectionLink sectionId="inicio" className="brand" aria-label="MF Contabilidade - início">
          <Image
            src={logoHeader}
            alt="MF Contabilidade"
            width={220}
            height={126}
            className="brand-logo"
            sizes="178px"
            priority
          />
        </SectionLink>

        <nav className="nav-links" aria-label="Navegação principal">
          {navItems.map((item, index) => (
            <SectionLink
              sectionId={item.sectionId}
              key={item.label}
              className={index === 0 ? 'is-active' : undefined}
            >
              {item.label}
            </SectionLink>
          ))}
        </nav>

        <SectionLink sectionId="contato" className="client-link">
          <LockKeyhole size={16} />
          <span>Área do Cliente</span>
        </SectionLink>

        <details className="mobile-nav" ref={mobileNavRef}>
          <summary aria-label="Abrir menu">
            <Menu size={22} />
          </summary>
          <div className="mobile-nav-panel">
            {navItems.map((item) => (
              <SectionLink sectionId={item.sectionId} key={item.label} onNavigate={closeMobileMenu}>
                {item.label}
              </SectionLink>
            ))}
            <SectionLink sectionId="contato" onNavigate={closeMobileMenu}>
              <LockKeyhole size={16} />
              <span>Área do Cliente</span>
            </SectionLink>
          </div>
        </details>
      </div>
    </header>
  );
}
