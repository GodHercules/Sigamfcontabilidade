import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

import { whatsappLabel, whatsappUrl } from '../../data/home-content';
import { mascotFooter } from './assets';

export function Cta() {
  return (
    <section className="cta section-reveal" aria-label="Chamada para contato">
      <div className="container cta-shell">
        <div className="cta-mascot-wrap">
          <Image
            src={mascotFooter}
            alt="Mister Freire"
            width={220}
            height={290}
            className="cta-mascot"
            sizes="(max-width: 680px) 170px, 220px"
          />
        </div>

        <div className="cta-copy">
          <h2>Fale com um especialista agora mesmo</h2>
          <p>Estamos prontos para entender seu negÃ³cio e oferecer a melhor soluÃ§Ã£o.</p>
        </div>

        <a className="cta-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle />
          <span>{whatsappLabel}</span>
        </a>
      </div>
    </section>
  );
}


