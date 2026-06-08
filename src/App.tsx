import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Cursor  from './components/Cursor';
import Loader  from './components/Loader';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

import Hero     from './sections/Hero';
import About    from './sections/About';
import Skills   from './sections/Skills';
import Work     from './sections/Work';
import Projects from './sections/Projects';
import Contact  from './sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { document.body.style.overflow = 'hidden'; }, []);

  const onDone = () => {
    setLoaded(true);
    document.body.style.overflow = '';
    setTimeout(() => ScrollTrigger.refresh(), 100);
  };

  return (
    <div className="noise-overlay min-h-screen bg-app text-theme-primary">
      <Cursor />
      {!loaded && <Loader onComplete={onDone} />}
      {loaded && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Work />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
