import Image from 'next/image';
import { MessageCircle, ShieldCheck, Timer, TrendingUp, Users } from 'lucide-react';

import { features, whatsappUrl } from '../../data/home-content';
import { mascotHero } from './assets';

const featureIcons = [ShieldCheck, Timer, TrendingUp, Users];

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Contabilidade em Salvador</p>
          <h1 className="hero-title">
            Soluções integradas em <span>gestão empresarial</span>
          </h1>
          <p className="hero-lead">
            Contabilidade completa, consultoria especializada e atendimento humanizado para o
            crescimento seguro da sua empresa.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              <span>Falar com especialista</span>
            </a>
            <a className="btn-secondary" href="#servicos">
              Nossos serviços
            </a>
          </div>

          <div className="feature-grid" aria-label="Diferenciais">
            {features.map((feature, index) => {
              const Icon = featureIcons[index];

              return (
                <article key={feature.title} className="feature-card">
                  <Icon aria-hidden="true" />
                  <strong>{feature.title}</strong>
                  <small>{feature.text}</small>
                </article>
              );
            })}
          </div>
        </div>

        <div className="hero-art" aria-label="Mascote Mister Freire">
          <div className="hero-plate" aria-hidden="true" />
          <Image
            src={mascotHero}
            alt="Mister Freire, mascote da MF Contabilidade"
            width={420}
            height={395}
            sizes="(max-width: 1024px) 360px, 420px"
            priority
          />
          <div className="hero-note">
            <strong>Mister Freire</strong>
            <p>Nosso especialista está pronto para te ajudar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}



