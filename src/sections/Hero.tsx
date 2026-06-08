import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import profilePhoto from '../assets/images/mesay.jpg';
import { liveProjects } from '../data/liveProjects';

const roles = ['AI Engineer', 'Production ML Architect', 'Multi-Agent Systems Lead', 'Fintech AI Engineer', 'ET–US Platform Engineer'];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLDivElement>(null);
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-x-hidden grid-bg">
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-[#00FFB2]/4 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#00D4FF]/4 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00FFB2]/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center min-h-[80vh]">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">

            {/* Status badge */}
            <div className="inline-flex w-fit items-center gap-2.5 px-4 py-2.5 rounded-full border badge-accent mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-current"></span>
              </span>
              <span className="font-mono text-sm md:text-base tracking-widest uppercase font-medium">Available · Ethiopia Office · USA Remote</span>
            </div>

            {/* Greeting */}
            <p className="prose-caption mb-4">
              Mesay Kebbede — <span className="text-accent-et">Production AI Engineer</span>
            </p>

            {/* Big headline — 4 lines, no horizontal clip */}
            <h1 ref={headlineRef} className="mb-6 max-w-full">
              {[
                { t: 'Engineering', cls: 'hero-headline text-theme-primary' },
                { t: 'Intelligent', cls: 'hero-headline text-gradient-hero' },
                { t: 'Systems', cls: 'hero-headline text-theme-primary' },
                { t: 'at Scale', cls: 'hero-headline hero-headline-sm' },
              ].map((w, i) => (
                <span key={i} className="hero-line">
                  <span className={`word block ${w.cls}`} style={{ transform: 'translateY(115%)', opacity: 0 }}>{w.t}</span>
                </span>
              ))}
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-3 mb-8 min-h-[2rem]">
              <span className="w-8 h-px flex-shrink-0 bg-current opacity-40 text-accent-et" />
              <p className="font-mono text-accent-et text-lg md:text-xl font-medium tracking-wide">
                {display}<span className="caret" />
              </p>
            </div>

            {/* Bio */}
            <div ref={subRef} className="space-y-5 mb-10 max-w-[680px]" style={{ opacity: 0 }}>
              <p className="prose-lead">
                I build AI that ships — trusted by banks in Ethiopia and enterprises across the United States.
              </p>
              <p className="prose-body">
                <span className="text-highlight">5+ years</span> delivering production multi-agent systems, RAG platforms, and enterprise ML —
                from <span className="text-accent-et">on-site fintech innovation in Addis Ababa</span> to{' '}
                <span className="text-accent-us">remote platform engineering for US clients</span>.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <span className="value-chip text-accent-et border-[#00FFB2]/20">
                  <span className="w-2 h-2 rounded-full bg-[#00FFB2]" />
                  Ethiopia · Office-Based
                </span>
                <span className="value-chip text-accent-us border-[#00D4FF]/20">
                  <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
                  USA · Remote Delivery
                </span>
              </div>
            </div>

            {/* CTAs — Experience & Live Projects focus */}
            <div ref={ctaRef} className="space-y-5 mb-10" style={{ opacity: 0 }}>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-live btn-live-primary px-8 py-4 text-base md:text-lg"
                >
                  Explore Live Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-live btn-live-secondary px-8 py-4 text-base md:text-lg"
                >
                  View My Experience
                </button>
              </div>

              <div>
                <p className="prose-caption mb-3">Jump to live work</p>
                <div className="flex flex-wrap gap-2">
                  {liveProjects.map(p => (
                    <a
                      key={p.id}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-chip"
                      style={{ borderColor: `${p.color}40` }}
                    >
                      <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: p.color }} />
                      {p.title}
                      <svg className="w-3 h-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="https://www.upwork.com/freelancers/~01eda1aeba270d233c?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm text-theme-muted hover:text-accent-et transition-colors"
              >
                <svg className="w-4 h-4 text-[#6FDA44]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
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
                  className="hero-social group flex items-center gap-2.5 text-theme-muted hover:text-accent-et transition-colors duration-300 font-mono text-sm md:text-base"
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
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center lg:items-end gap-6 w-full">
            <div ref={photoWrap} className="relative w-full max-w-[340px] mx-auto lg:mx-0 lg:ml-auto" style={{ opacity: 0 }}>
              {/* Glow halo */}
              <div className="absolute inset-[-8%] rounded-3xl bg-gradient-to-b from-[#00FFB2]/12 to-[#00D4FF]/6 blur-3xl pointer-events-none glow-pulse" />

              {/* Corner brackets */}
              {['-top-3 -left-3 border-t-2 border-l-2 rounded-tl-xl','-top-3 -right-3 border-t-2 border-r-2 rounded-tr-xl','-bottom-3 -left-3 border-b-2 border-l-2 rounded-bl-xl','-bottom-3 -right-3 border-b-2 border-r-2 rounded-br-xl'].map((c,i)=>(
                <div key={i} className={`absolute w-7 h-7 border-[#00FFB2] ${c}`} />
              ))}

              {/* Photo */}
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/8 bg-[#111118]">
                <img
                  src={profilePhoto}
                  alt="Mesay Kebbede — AI Engineer"
                  className="w-full h-full object-cover object-[center_12%]"
                  style={{ filter: 'brightness(0.96) contrast(1.04)' }}
                  loading="eager"
                  decoding="async"
                />
                {/* Gradient overlay bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080810]/80 via-transparent to-transparent pointer-events-none" />
                {/* Name card */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="rounded-xl px-3 py-2.5" style={{ background:'rgba(8,8,16,0.78)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.07)' }}>
                    <div className="font-display text-lg font-bold text-[#E8E8F2]">Mesay Kebbede</div>
                    <div className="font-mono text-sm text-[#00FFB2] mt-1 font-medium">🇪🇹 Office · Addis Ababa, ET</div>
                    <div className="font-mono text-sm text-[#00D4FF] mt-0.5 font-medium">🇺🇸 Remote · United States</div>
                  </div>
                </div>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute left-2 sm:-left-12 lg:-left-14 top-8 sm:top-10 rounded-xl px-3 py-2.5 border border-[#00FFB2]/20 z-10" style={{ background:'rgba(8,8,16,0.9)', backdropFilter:'blur(20px)' }}>
                <p className="font-mono text-xs text-[#4A4A6A] mb-0.5 uppercase tracking-wider">Experience</p>
                <p className="font-display text-2xl font-extrabold text-[#00FFB2]">5+ Yrs</p>
              </div>

              {/* Floating badge — projects */}
              <div className="absolute right-2 sm:-right-10 lg:-right-12 bottom-24 sm:bottom-20 rounded-xl px-4 py-3 border border-[#00D4FF]/20 z-10" style={{ background:'rgba(8,8,16,0.9)', backdropFilter:'blur(20px)' }}>
                <p className="font-mono text-xs text-[#4A4A6A] mb-0.5 uppercase tracking-wider">Delivered</p>
                <p className="font-display text-2xl font-extrabold text-[#00D4FF]">20+</p>
              </div>
            </div>

            {/* Floating stats under photo */}
            <div ref={statsRef} className="grid grid-cols-3 gap-3 w-full max-w-[360px]">
              {[
                { v: 'ET', l: 'On-Site · Office', c: '#00FFB2' },
                { v: 'US', l: 'Remote · Projects', c: '#00D4FF' },
                { v: 'C1/C2', l: 'English Fluent', c: '#E8E8F2' },
              ].map(s => (
                <div key={s.v} className="rounded-xl py-3 px-3 text-center border border-white/6" style={{ background:'rgba(18,18,28,0.7)' }}>
                  <div className="font-display font-extrabold text-lg" style={{ color: s.c }}>{s.v}</div>
                  <div className="font-mono text-xs md:text-sm text-[#8888AA] mt-1 leading-tight">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom tech bar */}
        <div className="mt-8 pt-6 border-t border-theme flex flex-wrap gap-2 items-center">
          <span className="font-mono text-xs tracking-[0.35em] uppercase text-theme-muted mr-2">Core Stack</span>
          {['LangGraph','CrewAI','RAG','FastAPI','Python','Flutter','PostgreSQL','OpenAI API'].map(t=>(
            <span key={t} className="skill-pill">{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
        <span className="font-mono text-xs text-theme-muted tracking-[0.35em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[color-mix(in_srgb,var(--text-muted)_80%,transparent)] to-transparent" />
      </div>
    </section>
  );
}
