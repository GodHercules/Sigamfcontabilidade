import { About } from './About';
import { BlogHighlights } from './BlogHighlights';
import { Cta } from './Cta';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { TopBar } from './TopBar';

export function HomePage() {
  return (
    <main id="inicio" className="site-root">
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteÃºdo principal
      </a>
      <TopBar />
      <Header />
      <div id="conteudo-principal">
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <BlogHighlights />
        <Cta />
      </div>
      <Footer />
    </main>
  );
}


