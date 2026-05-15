import Image from 'next/image';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import {
  addressLabel,
  businessHoursLabel,
  emailLabel,
  emailUrl,
  facebookUrl,
  instagramUrl,
  navItems,
  phoneLabel,
  phoneUrl,
  services,
  whatsappLabel,
  whatsappUrl,
} from '../../data/home-content';
import { logoFooter } from './assets';
import { SectionLink } from './SectionLink';

export function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image
            src={logoFooter}
            alt="MF Contabilidade"
            width={180}
            height={180}
            className="footer-logo"
            sizes="(max-width: 680px) 140px, 180px"
          />
          <div className="footer-social">
            <a href={facebookUrl} aria-label="Facebook" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h4>Navegação</h4>
          {navItems.map((item) => (
            <SectionLink sectionId={item.sectionId} key={item.label}>
              {item.label}
            </SectionLink>
          ))}
        </div>

        <div>
          <h4>Serviços</h4>
          {services.map((service) => (
            <SectionLink sectionId="servicos" key={service.title}>
              {service.title}
            </SectionLink>
          ))}
        </div>

        <div>
          <h4>Contato</h4>
          <p>
            <Phone size={15} />
            <span>{phoneLabel}</span>
          </p>
          <p>
            <MessageCircle size={15} />
            <span>{whatsappLabel}</span>
          </p>
          <p>
            <Mail size={15} />
            <span>{emailLabel}</span>
          </p>
          <p>
            <MapPin size={15} />
            <span>{addressLabel}</span>
          </p>
          <p>
            <Clock size={15} />
            <span>{businessHoursLabel}</span>
          </p>
          <p>
            <a href={phoneUrl}>Telefone</a> | <a href={emailUrl}>Email</a> |{' '}
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </p>
        </div>
      </div>

      <div className="container footer-copy">
        <span>© 2026 MF Contabilidade. Todos os direitos reservados.</span>
        <span>Desenvolvido para MF Contabilidade</span>
      </div>
    </footer>
  );
}



