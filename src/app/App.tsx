import { Header } from '../widgets/Header';
import { Hero } from '../widgets/Hero';
import { About } from '../widgets/About';

import { Projects } from '../widgets/Projects';
import { Contact } from '../widgets/Contact';
import { Footer } from '../widgets/Footer';
import '../shared/styles/index.scss';

export function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="about">
          <Hero />
        </section>
        <section id="skills">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
