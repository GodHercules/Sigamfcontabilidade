export type NavItem = {
  label: string;
  sectionId: string;
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
  { label: 'In\u00edcio', sectionId: 'inicio' },
  { label: 'Quem Somos', sectionId: 'quem-somos' },
  { label: 'Servi\u00e7os', sectionId: 'servicos' },
  { label: 'Clientes', sectionId: 'clientes' },
  { label: 'Blog', sectionId: 'blog' },
  { label: 'Contato', sectionId: 'contato' },
];

export const services: ServiceItem[] = [
  {
    title: 'Contabilidade Completa',
    text: 'Gest\u00e3o cont\u00e1bil completa para sua empresa com precis\u00e3o, seguran\u00e7a e conformidade.',
  },
  {
    title: 'Departamento Pessoal',
    text: 'Folha de pagamento, encargos e rotinas trabalhistas conduzidas com efici\u00eancia.',
  },
  {
    title: 'Fiscal e Tribut\u00e1rio',
    text: 'Planejamento tribut\u00e1rio e gest\u00e3o fiscal para reduzir custos e evitar riscos.',
  },
  {
    title: 'Abertura de Empresas',
    text: 'Abertura r\u00e1pida e segura do seu neg\u00f3cio com todas as orienta\u00e7\u00f5es necess\u00e1rias.',
  },
  {
    title: 'Consultoria Empresarial',
    text: 'Consultoria estrat\u00e9gica para impulsionar resultados e sustentabilidade.',
  },
];

export const features: FeatureItem[] = [
  { title: 'Seguran\u00e7a', text: 'e conformidade total' },
  { title: 'Agilidade', text: 'em cada processo' },
  { title: 'Estrat\u00e9gia', text: 'com vis\u00e3o de crescimento' },
  { title: 'Atendimento', text: 'humanizado e pr\u00f3ximo' },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'A MF Contabilidade \u00e9 sin\u00f4nimo de compet\u00eancia e confian\u00e7a. Sempre prontos para nos atender e esclarecer d\u00favidas.',
    name: 'Carlos Menezes',
    role: 'CEO - Construtora Solidez',
  },
  {
    quote:
      'Profissionais excelentes, atendimento humanizado e solu\u00e7\u00f5es que realmente fazem a diferen\u00e7a no nosso neg\u00f3cio.',
    name: 'Juliana Pimentel',
    role: 'Diretora - Clin Sa\u00fade',
  },
  {
    quote:
      'Estamos juntos h\u00e1 anos e s\u00f3 temos a agradecer pela parceria e pelo suporte em todas as etapas da nossa empresa.',
    name: 'Roberto Freitas',
    role: 'S\u00f3cio - R&F Distribuidora',
  },
];

export const blogCards: BlogCard[] = [
  {
    tag: 'Planejamento',
    title: 'Como reduzir riscos fiscais com estrat\u00e9gia cont\u00e1bil',
    text: 'Boas pr\u00e1ticas para manter conformidade tribut\u00e1ria e proteger seu caixa.',
  },
  {
    tag: 'Gest\u00e3o',
    title: 'Indicadores financeiros que todo gestor deve acompanhar',
    text: 'Um guia objetivo para decis\u00f5es mais seguras no dia a dia da empresa.',
  },
  {
    tag: 'Trabalhista',
    title: 'Rotinas de departamento pessoal sem retrabalho',
    text: 'Processos que aumentam efici\u00eancia e reduzem passivos trabalhistas.',
  },
];

export const phoneLabel = '71 3037-3455';
export const whatsappLabel = '71 9 8604-6407';
export const emailLabel = 'atendimento@mfcontabilidadeba.com.br';
export const businessHoursLabel =
  'Segunda a Quinta: 07:30h \u00e0s 17:30h | Sexta: 07:30h \u00e0s 16:30h';
export const addressLabel =
  'Hangar Business Park, Torre 4, Sala 12, S\u00e3o Crist\u00f3v\u00e3o, Salvador - BA, 41500-300';
export const whatsappUrl = 'https://wa.me/5571986046407';
export const phoneUrl = 'tel:+557130333455';
export const emailUrl = 'mailto:atendimento@mfcontabilidadeba.com.br';
export const facebookUrl = 'https://www.facebook.com/sigamfcontabilidade';
export const instagramUrl = 'https://www.instagram.com/sigamfcontabilidade';
