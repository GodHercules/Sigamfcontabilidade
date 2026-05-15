import { Clock, Mail, MessageCircle, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import {
  businessHoursLabel,
  emailLabel,
  emailUrl,
  facebookUrl,
  instagramUrl,
  phoneLabel,
  phoneUrl,
  whatsappLabel,
  whatsappUrl,
} from '../../data/home-content';

export function TopBar() {
  return (
    <section className="topbar" aria-label="Canais de atendimento">
      <div className="container topbar-inner">
        <div className="topbar-contact">
          <a href={phoneUrl}>
            <Phone size={14} />
            <span>{phoneLabel}</span>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={14} />
            <span>{whatsappLabel}</span>
          </a>
          <a href={emailUrl}>
            <Mail size={14} />
            <span>{emailLabel}</span>
          </a>
        </div>
        <div className="topbar-meta">
          <span>
            <Clock size={14} />
            <span>{businessHoursLabel}</span>
          </span>
          <div className="topbar-social">
            <a href={facebookUrl} aria-label="Facebook" target="_blank" rel="noreferrer">
              <FaFacebookF size={14} />
            </a>
            <a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer">
              <FaInstagram size={14} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


