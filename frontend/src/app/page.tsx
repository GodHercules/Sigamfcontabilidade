import Image from 'next/image';
import {
  Award,
  BarChart3,
  Building2,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  HandCoins,
  Handshake,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Timer,
  TrendingUp,
  Users,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import logoHeader from '../../public/assets/Marca_MF.pdf__1_-removebg-preview.png';
import logoFooter from '../../public/assets/Marca_MF.pdf-removebg-preview.png';
import mascotHero from '../../public/assets/mascote-hero.png';
import mascotFooter from '../../public/assets/mascote-footer.png';
import officePhoto from '../../public/assets/1000314053.jpg';

const navItems = [
  ['Início', '#inicio'],
  ['Quem Somos', '#quem-somos'],
  ['Serviços', '#servicos'],
  ['Clientes', '#clientes'],
  ['Blog', '#blog'],
  ['Contato', '#contato'],
];

const services = [
  {
    icon: Building2,
    title: 'Contabilidade Completa',
    text: 'Gestão contábil completa para sua empresa com precisão, segurança e conformidade.',
  },
  {
    icon: HandCoins,
    title: 'Departamento Pessoal',
    text: 'Folha de pagamento, encargos e rotinas trabalhistas conduzidas com eficiência.',
  },
  {
    icon: FileText,
    title: 'Fiscal e Tributário',
    text: 'Planejamento tributário e gestão fiscal para reduzir custos e evitar riscos.',
  },
  {
    icon: Handshake,
    title: 'Abertura de Empresas',
    text: 'Abertura rápida e segura do seu negócio com todas as orientações necessárias.',
  },
  {
    icon: BarChart3,
    title: 'Consultoria Empresarial',
    text: 'Consultoria estratégica para impulsionar resultados e sustentabilidade.',
  },
];

const features = [
  { icon: ShieldCheck, title: 'Segurança', text: 'e conformidade' },
  { icon: Timer, title: 'Agilidade', text: 'nos processos' },
  { icon: TrendingUp, title: 'Estratégia', text: 'para crescer' },
  { icon: Users, title: 'Atendimento', text: 'humanizado' },
];

const depoimentos = [
  [
    'A MF Contabilidade é sinônimo de competência e confiança. Sempre prontos para nos atender e esclarecer dúvidas.',
    'Carlos Menezes',
    'CEO - Construtora Solidez',
  ],
  [
    'Profissionais excelentes, atendimento humanizado e soluções que realmente fazem a diferença no nosso negócio.',
    'Juliana Pimentel',
    'Diretora - Clin Saúde',
  ],
  [
    'Estamos juntos há anos e só temos a agradecer pela parceria e pelo suporte em todas as etapas da nossa empresa.',
    'Roberto Freitas',
    'Sócio - R&F Distribuidora',
  ],
];

export default function Home() {
  return (
    <main id="inicio">
      <section className="topbar" aria-label="Canais de atendimento">
        <div className="wrap topbar-inner">
          <div className="top-left">
            <a href="tel:+557130333455"><Phone size={14} /> 71 3037-3455</a>
            <a href="https://wa.me/5571986046407"><MessageCircle size={14} /> 71 9 8604-6407</a>
            <a href="mailto:atendimento@mfcontabilidadeba.com.br"><Mail size={14} /> atendimento@mfcontabilidadeba.com.br</a>
          </div>
          <div className="top-right">
            <span><Clock size={14} /> Segunda a Quinta: 07:30h às 17:30h | Sexta: 07:30h às 16:30h</span>
            <a href="https://www.facebook.com/sigamfcontabilidade" aria-label="Facebook"><FaFacebookF size={16} /></a>
            <a href="https://www.instagram.com/sigamfcontabilidade" aria-label="Instagram"><FaInstagram size={16} /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
          </div>
        </div>
      </section>

      <header className="nav wrap">
        <a href="#inicio" className="brand" aria-label="MF Contabilidade - início">
          <Image
            src={logoHeader}
            alt="MF Contabilidade"
            width={220}
            height={126}
            priority
            className="logo"
            placeholder="blur"
          />
        </a>
        <nav className="links" aria-label="Navegação principal">
          {navItems.map(([label, href], index) => (
            <a className={index === 0 ? 'active' : undefined} href={href} key={label}>{label}</a>
          ))}
        </nav>
        <a className="client" href="#contato"><LockKeyhole size={16} /> Área do Cliente</a>
        <details className="mobile-nav">
          <summary aria-label="Abrir menu">
            <Menu size={25} />
          </summary>
          <div className="mobile-panel">
            {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
            <a href="#contato"><LockKeyhole size={16} /> Área do Cliente</a>
          </div>
        </details>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Contabilidade em Salvador</p>
            <h1>Soluções integradas em <span>gestão empresarial</span></h1>
            <p className="lead">Contabilidade completa, consultoria especializada e atendimento humanizado para o crescimento seguro da sua empresa.</p>
            <div className="actions">
              <a className="primary" href="https://wa.me/5571986046407"><MessageCircle size={18} /> Falar com especialista</a>
              <a className="secondary" href="#servicos">Nossos serviços</a>
            </div>
            <div className="hero-inline-mascot" aria-hidden="true">
              <Image
                src={mascotHero}
                alt=""
                width={220}
                height={207}
                sizes="220px"
                placeholder="blur"
                priority
              />
            </div>
            <div className="features" aria-label="Diferenciais">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}>
                    <Icon />
                    <b>{item.title}</b>
                    <small>{item.text}</small>
                  </div>
                );
              })}
            </div>

          </div>
          <div className="hero-art" aria-label="Mascote Mister Freire">
            <div className="triangle" />
            <Image
              src={mascotHero}
              alt="Mister Freire"
              width={420}
              height={395}
              priority
              placeholder="blur"
              sizes="(max-width: 900px) 360px, 420px"
            />
            <div className="bubble">
              <b>Mister Freire</b>
              <p>Nosso especialista está pronto para te ajudar.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services scroll-reveal" id="servicos">
        <div className="wrap">
          <p className="section-kicker">Como podemos ajudar</p>
          <h2>Nossos Serviços</h2>
          <button className="arrow left" aria-label="Serviço anterior"><ChevronLeft /></button>
          <div className="cards">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="card" key={service.title}>
                  <div className="circle"><Icon size={42} /></div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contato">Saiba mais</a>
                </article>
              );
            })}
          </div>
          <button className="arrow right" aria-label="Próximo serviço"><ChevronRight /></button>
        </div>
      </section>

      <section className="about wrap scroll-reveal" id="quem-somos">
        <div className="office">
          <Image
            src={officePhoto}
            alt="Escritório MF Contabilidade"
            width={760}
            height={452}
            sizes="(max-width: 900px) 100vw, 48vw"
            placeholder="blur"
            quality={80}
          />
        </div>
        <div className="about-copy">
          <p className="section-kicker dark">Por que escolher a MF?</p>
          <h2>Mais que contabilidade, somos parceiros do seu negócio.</h2>
          <p>Há mais de 10 anos no mercado, a MF Contabilidade e Gestão Empresarial oferece soluções completas e personalizadas para empresas de diversos segmentos. Nosso compromisso é com excelência, ética e resultados.</p>
          <div className="stats">
            <div><Users /><b>+10</b><small>Anos de experiência</small></div>
            <div><Users /><b>+500</b><small>Clientes atendidos</small></div>
            <div><Award /><b>100%</b><small>Compromisso com o seu sucesso</small></div>
          </div>
        </div>
      </section>

      <section className="testimonials wrap scroll-reveal" id="clientes">
        <p className="section-kicker dark">Quem confia, recomenda</p>
        <h2>Depoimentos de Clientes</h2>
        <div className="test-grid">
          {depoimentos.map((depoimento) => (
            <article key={depoimento[1]} className="test">
              <Quote />
              <p>{depoimento[0]}</p>
              <b>{depoimento[1]}</b>
              <small>{depoimento[2]}</small>
            </article>
          ))}
        </div>
        <div className="dots" aria-hidden="true"><i className="on" /><i /><i /><i /></div>
      </section>

      <section className="cta scroll-reveal">
        <div className="wrap cta-inner">
          <div className="cta-mascotWrap">
            <Image
              src={mascotFooter}
              alt="Mister Freire"
              width={220}
              height={290}
              placeholder="blur"
              className="cta-mascot"
              sizes="(max-width: 680px) 170px, 280px"
              priority
            />
          </div>
          <div>
            <h2>Fale com um especialista agora mesmo!</h2>
            <p>Estamos prontos para entender o seu negócio e oferecer a melhor solução.</p>
          </div>
          <a className="whats" href="https://wa.me/5571986046407"><MessageCircle /> 71 9 8604-6407</a>
        </div>
      </section>

      <footer className="footer" id="contato">
        <div className="wrap footer-grid">
          <div>
            <Image
              src={logoFooter}
              alt="MF Contabilidade"
              width={180}
              height={180}
              placeholder="blur"
              className="footer-logo"
              sizes="(max-width: 680px) 160px, 180px"
            />
            <div className="social">
              <a href="https://www.facebook.com/sigamfcontabilidade" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.instagram.com/sigamfcontabilidade" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
          <div>
            <h4>Navegação</h4>
            {navItems.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
          </div>
          <div>
            <h4>Serviços</h4>
            {services.map((service) => <a href="#servicos" key={service.title}>{service.title}</a>)}
          </div>
          <div>
            <h4>Contato</h4>
            <p><Phone size={15} /> 71 3037-3455</p>
            <p><MessageCircle size={15} /> 71 9 8604-6407</p>
            <p><Mail size={15} /> atendimento@mfcontabilidadeba.com.br</p>
            <p><MapPin size={15} /> Hangar Business Park, Torre 4, Sala 12, São Cristovão <br />Salvador - BA, 41500-300</p>
            <p><Clock size={15} /> Segunda a Quinta: 07:30h às 17:30h | Sexta: 7:30 às 16:30</p>
          </div>
        </div>
        <div className="copy wrap">
          <span>© 2026 MF Contabilidade. Todos os direitos reservados.</span>
          <span>Desenvolvido para MF Contabilidade</span>
        </div>
      </footer>
    </main>
  );
}
