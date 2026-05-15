import { ArrowUpRight } from 'lucide-react';

import { blogCards } from '../../data/home-content';

export function BlogHighlights() {
  return (
    <section className="blog section-reveal" id="blog">
      <div className="container">
        <div className="section-head section-head-inline">
          <div>
            <p className="section-kicker">ConteÃºdo estratÃ©gico</p>
            <h2>Insights para decisÃµes mais inteligentes</h2>
          </div>
          <a href="#contato" className="text-link">
            Receber novidades
            <ArrowUpRight size={16} />
          </a>
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


