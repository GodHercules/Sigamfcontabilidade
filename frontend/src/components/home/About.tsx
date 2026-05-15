import Image from 'next/image';
import { Award, Users } from 'lucide-react';

import { officePhoto } from './assets';

export function About() {
  return (
    <section className="about section-reveal" id="quem-somos">
      <div className="container about-grid">
        <div className="about-media">
          <Image
            src={officePhoto}
            alt="EscritÃ³rio da MF Contabilidade"
            width={760}
            height={452}
            quality={80}
            sizes="(max-width: 980px) 100vw, 48vw"
          />
        </div>

        <div className="about-copy">
          <p className="section-kicker section-kicker-dark">Por que escolher a MF?</p>
          <h2>Mais que contabilidade, somos parceiros do seu negÃ³cio.</h2>
          <p>
            HÃ¡ mais de 10 anos no mercado, a MF Contabilidade e GestÃ£o Empresarial oferece
            soluÃ§Ãµes completas e personalizadas para empresas de diversos segmentos. Nosso
            compromisso Ã© com excelÃªncia, Ã©tica e resultados.
          </p>
          <div className="stats-grid">
            <article>
              <Users />
              <strong>+10</strong>
              <small>Anos de experiÃªncia</small>
            </article>
            <article>
              <Users />
              <strong>+500</strong>
              <small>Clientes atendidos</small>
            </article>
            <article>
              <Award />
              <strong>100%</strong>
              <small>Compromisso com seu sucesso</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}


