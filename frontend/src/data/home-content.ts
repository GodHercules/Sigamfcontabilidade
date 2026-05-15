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
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
];

export const services: ServiceItem[] = [
  {
    title: 'Contabilidade Completa',
    text: 'Gestão contábil completa para sua empresa com precisão, segurança e conformidade.',
  },
  {
    title: 'Departamento Pessoal',
    text: 'Folha de pagamento, encargos e rotinas trabalhistas conduzidas com eficiência.',
  },
  {
    title: 'Fiscal e Tributário',
    text: 'Planejamento tributário e gestão fiscal para reduzir custos e evitar riscos.',
  },
  {
    title: 'Abertura de Empresas',
    text: 'Abertura rápida e segura do seu negócio com todas as orientações necessárias.',
  },
  {
    title: 'Consultoria Empresarial',
    text: 'Consultoria estratégica para impulsionar resultados e sustentabilidade.',
  },
];

export const features: FeatureItem[] = [
  { title: 'Segurança', text: 'e conformidade total' },
  { title: 'Agilidade', text: 'em cada processo' },
  { title: 'Estratégia', text: 'com visão de crescimento' },
  { title: 'Atendimento', text: 'humanizado e próximo' },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'A MF Contabilidade é sinônimo de competência e confiança. Sempre prontos para nos atender e esclarecer dúvidas.',
    name: 'Carlos Menezes',
    role: 'CEO - Construtora Solidez',
  },
  {
    quote:
      'Profissionais excelentes, atendimento humanizado e soluções que realmente fazem a diferença no nosso negócio.',
    name: 'Juliana Pimentel',
    role: 'Diretora - Clin Saúde',
  },
  {
    quote:
      'Estamos juntos há anos e só temos a agradecer pela parceria e pelo suporte em todas as etapas da nossa empresa.',
    name: 'Roberto Freitas',
    role: 'Sócio - R&F Distribuidora',
  },
];

export const blogCards: BlogCard[] = [
  {
    tag: 'Planejamento',
    title: 'Como reduzir riscos fiscais com estratégia contábil',
    text: 'Boas práticas para manter conformidade tributária e proteger seu caixa.',
  },
  {
    tag: 'Gestão',
    title: 'Indicadores financeiros que todo gestor deve acompanhar',
    text: 'Um guia objetivo para decisões mais seguras no dia a dia da empresa.',
  },
  {
    tag: 'Trabalhista',
    title: 'Rotinas de departamento pessoal sem retrabalho',
    text: 'Processos que aumentam eficiência e reduzem passivos trabalhistas.',
  },
];

export const phoneLabel = '71 3037-3455';
export const whatsappLabel = '71 9 8604-6407';
export const emailLabel = 'atendimento@mfcontabilidadeba.com.br';
export const businessHoursLabel = 'Segunda a Quinta: 07:30h às 17:30h | Sexta: 07:30h às 16:30h';
export const addressLabel =
  'Hangar Business Park, Torre 4, Sala 12, São Cristóvão, Salvador - BA, 41500-300';
export const whatsappUrl = 'https://wa.me/5571986046407';
export const phoneUrl = 'tel:+557130333455';
export const emailUrl = 'mailto:atendimento@mfcontabilidadeba.com.br';
export const facebookUrl = 'https://www.facebook.com/sigamfcontabilidade';
export const instagramUrl = 'https://www.instagram.com/sigamfcontabilidade';



