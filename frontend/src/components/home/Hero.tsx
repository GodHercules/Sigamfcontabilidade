import Image from 'next/image';
import { MessageCircle, ShieldCheck, Timer, TrendingUp, Users } from 'lucide-react';

import { features, whatsappUrl } from '../../data/home-content';
import { mascotHero } from './assets';
import { SectionLink } from './SectionLink';

const featureIcons = [ShieldCheck, Timer, TrendingUp, Users];

export function Hero() {
  return (
    <section className="hero" id="inicio">
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
            <SectionLink className="btn-secondary" sectionId="servicos">
              Nossos serviços
            </SectionLink>
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
            width={620}
            height={610}
            sizes="(max-width: 680px) 70vw, (max-width: 1024px) 420px, (max-width: 1180px) 540px, 620px"
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


