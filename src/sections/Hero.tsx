import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const roles = ['AI Engineer', 'Multi-Agent Architect', 'LLM Developer', 'Data & ML Engineer', 'Fintech Innovator'];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const photoWrap   = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const [roleIdx, setRoleIdx]   = useState(0);
  const [display, setDisplay]   = useState('');
  const [typing, setTyping]     = useState(true);

  // Typewriter
  useEffect(() => {
    const role = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (display.length < role.length) t = setTimeout(() => setDisplay(role.slice(0, display.length + 1)), 55);
      else t = setTimeout(() => setTyping(false), 2400);
    } else {
      if (display.length > 0) t = setTimeout(() => setDisplay(display.slice(0, -1)), 28);
      else { setRoleIdx(i => (i + 1) % roles.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [display, typing, roleIdx]);

  useEffect(() => {
    const delay = 2.65;

    // Photo entrance
    gsap.fromTo(photoWrap.current,
      { opacity: 0, scale: 0.88, rotateY: 12 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 1.5, ease: 'expo.out', delay: delay + 0.1 }
    );
    gsap.to(photoWrap.current, { y: -14, duration: 5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: delay + 1.6 });

    // Text lines
    const tl = gsap.timeline({ delay });
    const words = headlineRef.current?.querySelectorAll('.word') ?? [];
    tl.fromTo(words,
      { y: '115%', opacity: 0, skewY: 5 },
      { y: '0%', opacity: 1, skewY: 0, stagger: 0.07, duration: 1, ease: 'expo.out' }
    )
    .fromTo(subRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
    .fromTo(ctaRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .fromTo('.hero-social', { opacity: 0, x: -16 }, { opacity: 1, x: 0, stagger: 0.07, duration: 0.5 }, '-=0.4')
    .fromTo(statsRef.current?.children ? Array.from(statsRef.current.children) : [],
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.5'
    );
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-[#00FFB2]/4 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#00D4FF]/4 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00FFB2]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center min-h-[80vh]">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">

            {/* Status badge */}
            <div className="inline-flex w-fit items-center gap-2.5 px-3.5 py-2 rounded-full border border-[#00FFB2]/22 bg-[#00FFB2]/5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB2] opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFB2]"></span>
              </span>
              <span className="font-mono text-[11px] text-[#00FFB2] tracking-widest uppercase">Available for Work</span>
            </div>

            {/* Greeting */}
            <p className="font-mono text-[#8888AA] text-sm tracking-wider mb-3">
              Hello — I'm <span className="text-[#00FFB2]">Mesay Kebbede</span>
            </p>

            {/* Big headline */}
            <h1 ref={headlineRef} className="font-display font-extrabold leading-[0.86] tracking-tight mb-5">
              {[
                { t: 'Architect of', cls: 'text-[#E8E8F2] text-5xl md:text-6xl lg:text-7xl' },
                { t: 'Intelligent', cls: 'text-gradient text-5xl md:text-6xl lg:text-7xl' },
                { t: 'AI Systems', cls: 'text-[#E8E8F2] text-5xl md:text-6xl lg:text-7xl' },
              ].map((w, i) => (
                <span key={i} className="block overflow-hidden py-0.5">
                  <span className={`word block ${w.cls}`} style={{ transform: 'translateY(115%)', opacity: 0 }}>{w.t}</span>
                </span>
              ))}
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-3 mb-6 h-8">
              <span className="w-6 h-px bg-[#00FFB2]/50 flex-shrink-0" />
              <p className="font-mono text-[#00FFB2] text-sm md:text-base">
                {display}<span className="caret" />
              </p>
            </div>

            {/* Bio */}
            <p ref={subRef} className="font-body text-[#8888AA] text-lg leading-relaxed max-w-[520px] mb-10" style={{ opacity: 0 }}>
              AI Engineer with <span className="text-[#E8E8F2] font-medium">5+ years</span> building production-grade 
              intelligent systems across fintech, automation & enterprise platforms. 
              From multi-agent pipelines to ML at scale — I architect intelligence, not just code.
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-10" style={{ opacity: 0 }}>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden flex items-center gap-3 px-7 py-3.5 bg-[#00FFB2] text-[#080810] font-display font-bold text-sm tracking-wide rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,178,0.35)]"
              >
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12" />
                View Projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <a href="https://www.upwork.com/freelancers/~01eda1aeba270d233c?mp_source=share"
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2.5 px-7 py-3.5 border border-white/10 text-[#E8E8F2] font-display font-medium text-sm tracking-wide rounded-xl hover:border-[#00FFB2]/35 hover:text-[#00FFB2] hover:bg-[#00FFB2]/5 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-[#6FDA44]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703 2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366C12.082 7.754 11.209 6.2 10.566 4.5H7.545V13.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5V4.5H0v9c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5V17h3v-5.5c0 2.9 2.333 5.5 5.561 5.5C22.667 17 24 14.833 24 12c0-3.867-2.433-6.982-5.439-6.982z"/>
                </svg>
                Hire on Upwork
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-5">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mesay-kebbede-93a48623b/', icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                )},
                { label: 'Email', href: 'mailto:mesaykebbede@gmail.com', icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                )},
                { label: 'Phone', href: 'tel:+251911709546', icon: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                )},
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="hero-social group flex items-center gap-2 text-[#4A4A6A] hover:text-[#00FFB2] transition-colors duration-300 font-mono text-xs"
                  style={{ opacity: 0 }}
                >
                  <span className="w-8 h-8 rounded-lg border border-white/8 group-hover:border-[#00FFB2]/30 flex items-center justify-center transition-colors">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6">
            <div ref={photoWrap} className="relative" style={{ opacity: 0 }}>
              {/* Glow halo */}
              <div className="absolute inset-[-10%] rounded-3xl bg-gradient-to-b from-[#00FFB2]/12 to-[#00D4FF]/6 blur-3xl pointer-events-none glow-pulse" />

              {/* Corner brackets */}
              {['-top-3 -left-3 border-t-2 border-l-2 rounded-tl-xl','-top-3 -right-3 border-t-2 border-r-2 rounded-tr-xl','-bottom-3 -left-3 border-b-2 border-l-2 rounded-bl-xl','-bottom-3 -right-3 border-b-2 border-r-2 rounded-br-xl'].map((c,i)=>(
                <div key={i} className={`absolute w-7 h-7 border-[#00FFB2] ${c}`} />
              ))}

              {/* Photo */}
              <div className="relative w-[260px] h-[320px] md:w-[300px] md:h-[380px] lg:w-[320px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/8">
                <img src="/mesay.jpg" alt="Mesay Kebbede" className="w-full h-full object-cover object-top scale-[1.02]" style={{ filter: 'brightness(0.96) contrast(1.04)' }} />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/75 via-transparent to-transparent" />
                {/* Name card */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="rounded-xl px-3 py-2.5" style={{ background:'rgba(8,8,16,0.78)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.07)' }}>
                    <div className="font-display text-sm font-bold text-[#E8E8F2]">Mesay Kebbede</div>
                    <div className="font-mono text-[11px] text-[#00FFB2] mt-0.5">AI Engineer · Addis Ababa, ET</div>
                  </div>
                </div>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute -left-16 top-10 rounded-xl px-3 py-2.5 border border-[#00FFB2]/20" style={{ background:'rgba(8,8,16,0.9)', backdropFilter:'blur(20px)' }}>
                <p className="font-mono text-[10px] text-[#4A4A6A] mb-0.5">Experience</p>
                <p className="font-display text-xl font-extrabold text-[#00FFB2]">5+ Yrs</p>
              </div>

              {/* Floating badge — projects */}
              <div className="absolute -right-14 bottom-20 rounded-xl px-3 py-2.5 border border-[#00D4FF]/20" style={{ background:'rgba(8,8,16,0.9)', backdropFilter:'blur(20px)' }}>
                <p className="font-mono text-[10px] text-[#4A4A6A] mb-0.5">Projects</p>
                <p className="font-display text-xl font-extrabold text-[#00D4FF]">20+</p>
              </div>
            </div>

            {/* Floating stats under photo */}
            <div ref={statsRef} className="grid grid-cols-3 gap-2 w-full max-w-[320px]">
              {[
                { v: '3', l: 'Active Roles' },
                { v: 'ET · US', l: 'Locations' },
                { v: 'C1/C2', l: 'English' },
              ].map(s => (
                <div key={s.v} className="rounded-xl py-2 px-3 text-center border border-white/6" style={{ background:'rgba(18,18,28,0.7)' }}>
                  <div className="font-display font-bold text-[#00FFB2] text-sm">{s.v}</div>
                  <div className="font-mono text-[10px] text-[#4A4A6A] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom tech bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2 items-center">
          <span className="font-mono text-[10px] text-[#4A4A6A] mr-2 tracking-widest uppercase">Stack</span>
          {['LangGraph','CrewAI','RAG','FastAPI','Python','Flutter','PostgreSQL','OpenAI API'].map(t=>(
            <span key={t} className="skill-pill">{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <span className="font-mono text-[10px] text-[#8888AA] tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#8888AA] to-transparent" />
      </div>
    </section>
  );
}
