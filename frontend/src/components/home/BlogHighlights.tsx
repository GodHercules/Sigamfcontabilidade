import { ArrowUpRight } from 'lucide-react';

import { blogCards } from '../../data/home-content';
import { SectionLink } from './SectionLink';

export function BlogHighlights() {
  return (
    <section className="blog section-reveal" id="blog">
      <div className="container">
        <div className="section-head section-head-inline">
          <div>
            <p className="section-kicker">Conteúdo estratégico</p>
            <h2>Insights para decisões mais inteligentes</h2>
          </div>
          <SectionLink sectionId="contato" className="text-link">
            Receber novidades
            <ArrowUpRight size={16} />
          </SectionLink>
        </div>

        <div className="blog-grid">
          {blogCards.map((card) => (
            <article key={card.title} className="blog-card">
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

