import { Quote } from 'lucide-react';

import { testimonials } from '../../data/home-content';

export function Testimonials() {
  return (
    <section className="testimonials section-reveal" id="clientes">
      <div className="container">
        <div className="section-head">
          <p className="section-kicker section-kicker-dark">Quem confia, recomenda</p>
          <h2>Depoimentos de Clientes</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="testimonial-card">
              <Quote aria-hidden="true" />
              <p>{testimonial.quote}</p>
              <strong>{testimonial.name}</strong>
              <small>{testimonial.role}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


