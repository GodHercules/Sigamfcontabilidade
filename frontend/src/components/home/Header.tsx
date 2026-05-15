import Image from 'next/image';
import { LockKeyhole, Menu } from 'lucide-react';

import { navItems } from '../../data/home-content';
import { logoHeader } from './assets';

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#inicio" className="brand" aria-label="MF Contabilidade - início">
          <Image
            src={logoHeader}
            alt="MF Contabilidade"
            width={220}
            height={126}
            className="brand-logo"
            sizes="178px"
            priority
          />
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          {navItems.map((item, index) => (
            <a href={item.href} key={item.label} className={index === 0 ? 'is-active' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="client-link" href="#contato">
          <LockKeyhole size={16} />
          <span>Área do Cliente</span>
        </a>

        <details className="mobile-nav">
          <summary aria-label="Abrir menu">
            <Menu size={22} />
          </summary>
          <div className="mobile-nav-panel">
            {navItems.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
            <a href="#contato">
              <LockKeyhole size={16} />
              <span>Área do Cliente</span>
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}



