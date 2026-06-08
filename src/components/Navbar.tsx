import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'about', label: 'About', highlight: false },
  { id: 'skills', label: 'Skills', highlight: false },
  { id: 'work', label: 'Experience', highlight: true },
  { id: 'projects', label: 'Live Projects', highlight: true },
  { id: 'contact', label: 'Contact', highlight: false },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 2.6 }
    );
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && window.scrollY >= s.offsetTop - 160) { setActive(links[i].label); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 backdrop-blur-2xl border-b border-theme' : 'py-6'}`}
      style={scrolled ? { background: 'var(--nav-bg)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg border flex items-center justify-center" style={{ borderColor: 'color-mix(in srgb, var(--accent) 35%, transparent)', background: 'color-mix(in srgb, var(--accent) 6%, transparent)' }}>
            <span className="font-display text-sm font-bold text-accent-et">MK</span>
          </div>
          <span className="font-mono text-xs text-theme-muted hidden sm:block">Mesay Kebbede</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`relative px-4 py-2 font-display text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg
                ${l.highlight ? 'nav-highlight font-bold' : ''}
                ${active === l.label && !l.highlight ? 'text-accent-et' : !l.highlight ? 'text-theme-secondary hover:text-theme-primary' : ''}`}
            >
              {active === l.label && !l.highlight && (
                <span className="absolute inset-0 rounded-lg border" style={{ background: 'color-mix(in srgb, var(--accent) 8%, transparent)', borderColor: 'color-mix(in srgb, var(--accent) 18%, transparent)' }} />
              )}
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA + theme */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => go('projects')}
            className="btn-live btn-live-primary text-xs px-4 py-2"
          >
            Live Projects
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-5 h-px bg-theme-primary transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-theme-primary transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-theme-primary transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden backdrop-blur-2xl border-b border-theme px-6 py-6 flex flex-col gap-2" style={{ background: 'var(--nav-bg)' }}>
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`text-left px-4 py-3 rounded-lg font-display text-base font-medium transition-colors
                ${l.highlight ? 'nav-highlight font-bold' : active === l.label ? 'text-accent-et bg-[color-mix(in_srgb,var(--accent)_8%,transparent)]' : 'text-theme-secondary'}`}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => go('projects')} className="mt-3 btn-live btn-live-primary w-full py-3">
            View Live Projects
          </button>
        </div>
      )}
    </nav>
  );
}
