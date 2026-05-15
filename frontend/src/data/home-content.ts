export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  text: string;
};

export type FeatureItem = {
  title: string;
  text: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type BlogCard = {
  title: string;
  text: string;
  tag: string;
};

export const navItems: NavItem[] = [
  { label: 'InÃ­cio', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'ServiÃ§os', href: '#servicos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
];

export const services: ServiceItem[] = [
  {
    title: 'Contabilidade Completa',
    text: 'GestÃ£o contÃ¡bil completa para sua empresa com precisÃ£o, seguranÃ§a e conformidade.',
  },
  {
    title: 'Departamento Pessoal',
    text: 'Folha de pagamento, encargos e rotinas trabalhistas conduzidas com eficiÃªncia.',
  },
  {
    title: 'Fiscal e TributÃ¡rio',
    text: 'Planejamento tributÃ¡rio e gestÃ£o fiscal para reduzir custos e evitar riscos.',
  },
  {
    title: 'Abertura de Empresas',
    text: 'Abertura rÃ¡pida e segura do seu negÃ³cio com todas as orientaÃ§Ãµes necessÃ¡rias.',
  },
  {
    title: 'Consultoria Empresarial',
    text: 'Consultoria estratÃ©gica para impulsionar resultados e sustentabilidade.',
  },
];

export const features: FeatureItem[] = [
  { title: 'SeguranÃ§a', text: 'e conformidade total' },
  { title: 'Agilidade', text: 'em cada processo' },
  { title: 'EstratÃ©gia', text: 'com visÃ£o de crescimento' },
  { title: 'Atendimento', text: 'humanizado e prÃ³ximo' },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'A MF Contabilidade Ã© sinÃ´nimo de competÃªncia e confianÃ§a. Sempre prontos para nos atender e esclarecer dÃºvidas.',
    name: 'Carlos Menezes',
    role: 'CEO - Construtora Solidez',
  },
  {
    quote:
      'Profissionais excelentes, atendimento humanizado e soluÃ§Ãµes que realmente fazem a diferenÃ§a no nosso negÃ³cio.',
    name: 'Juliana Pimentel',
    role: 'Diretora - Clin SaÃºde',
  },
  {
    quote:
      'Estamos juntos hÃ¡ anos e sÃ³ temos a agradecer pela parceria e pelo suporte em todas as etapas da nossa empresa.',
    name: 'Roberto Freitas',
    role: 'SÃ³cio - R&F Distribuidora',
  },
];

export const blogCards: BlogCard[] = [
  {
    tag: 'Planejamento',
    title: 'Como reduzir riscos fiscais com estratÃ©gia contÃ¡bil',
    text: 'Boas prÃ¡ticas para manter conformidade tributÃ¡ria e proteger seu caixa.',
  },
  {
    tag: 'GestÃ£o',
    title: 'Indicadores financeiros que todo gestor deve acompanhar',
    text: 'Um guia objetivo para decisÃµes mais seguras no dia a dia da empresa.',
  },
  {
    tag: 'Trabalhista',
    title: 'Rotinas de departamento pessoal sem retrabalho',
    text: 'Processos que aumentam eficiÃªncia e reduzem passivos trabalhistas.',
  },
];

export const phoneLabel = '71 3037-3455';
export const whatsappLabel = '71 9 8604-6407';
export const emailLabel = 'atendimento@mfcontabilidadeba.com.br';
export const businessHoursLabel = 'Segunda a Quinta: 07:30h Ã s 17:30h | Sexta: 07:30h Ã s 16:30h';
export const addressLabel =
  'Hangar Business Park, Torre 4, Sala 12, SÃ£o CristÃ³vÃ£o, Salvador - BA, 41500-300';
export const whatsappUrl = 'https://wa.me/5571986046407';
export const phoneUrl = 'tel:+557130333455';
export const emailUrl = 'mailto:atendimento@mfcontabilidadeba.com.br';
export const facebookUrl = 'https://www.facebook.com/sigamfcontabilidade';
export const instagramUrl = 'https://www.instagram.com/sigamfcontabilidade';


