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
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
