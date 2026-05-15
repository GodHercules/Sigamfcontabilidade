import { BarChart3, Building2, FileText, HandCoins, Handshake } from 'lucide-react';

import { services } from '../../data/home-content';

const serviceIcons = [Building2, HandCoins, FileText, Handshake, BarChart3];

export function Services() {
  return (
    <section className="services section-reveal" id="servicos">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker">Como podemos ajudar</p>
          <h2>Nossos ServiÃ§os</h2>
        </div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article key={service.title} className="service-card">
                <div className="service-icon" aria-hidden="true">
                  <Icon size={30} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contato">Saiba mais</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


