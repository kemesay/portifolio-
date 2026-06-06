import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const links = ['About', 'Skills', 'Work', 'Projects', 'Contact'];

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
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && window.scrollY >= s.offsetTop - 160) { setActive(links[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-[#080810]/92 backdrop-blur-2xl border-b border-white/5' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg border border-[#00FFB2]/30 flex items-center justify-center bg-[#00FFB2]/5">
            <span className="font-display text-sm font-bold text-[#00FFB2]">MK</span>
          </div>
          <span className="font-mono text-xs text-[#4A4A6A] hidden sm:block">Mesay Kebbede</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className={`relative px-4 py-2 font-display text-sm font-medium tracking-wide transition-colors duration-300 rounded-lg
                ${active === l ? 'text-[#00FFB2]' : 'text-[#8888AA] hover:text-[#E8E8F2]'}`}
            >
              {active === l && (
                <span className="absolute inset-0 rounded-lg bg-[#00FFB2]/8 border border-[#00FFB2]/15" />
              )}
              {l}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.upwork.com/freelancers/~01eda1aeba270d233c?mp_source=share"
            target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs text-[#8888AA] hover:text-[#00FFB2] transition-colors hline">
            Upwork
          </a>
          <a href="mailto:mesaykebbede@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-[#00FFB2] text-[#080810] font-display font-bold text-xs tracking-wider rounded-lg hover:bg-[#00FFB2]/90 transition-all duration-200">
            <span className="w-1.5 h-1.5 rounded-full bg-[#080810] animate-pulse" />
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-5 h-px bg-[#E8E8F2] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-[#E8E8F2] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#E8E8F2] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0e0e1a]/98 backdrop-blur-2xl border-b border-white/5 px-6 py-6 flex flex-col gap-2">
          {links.map(l => (
            <button key={l} onClick={() => go(l)}
              className={`text-left px-4 py-3 rounded-lg font-display text-base font-medium transition-colors ${active===l ? 'text-[#00FFB2] bg-[#00FFB2]/8' : 'text-[#8888AA]'}`}>
              {l}
            </button>
          ))}
          <a href="mailto:mesaykebbede@gmail.com" className="mt-3 flex items-center justify-center gap-2 py-3 bg-[#00FFB2] text-[#080810] font-bold rounded-lg font-display text-sm">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
