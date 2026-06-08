import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const stats = [
  { v: '5+', l: 'Years Experience', sub: 'Production AI & Engineering' },
  { v: '20+', l: 'Projects Delivered', sub: 'Fintech · Logistics · Enterprise' },
  { v: '2', l: 'Operating Bases', sub: 'Ethiopia Office · USA Remote' },
  { v: '$2.5K+', l: 'Monthly Rate', sub: 'Net · Remote & Contract' },
];

const domains = [
  { name: 'Fintech & Banking',         years: '5 yrs',  color: '#00FFB2', pct: 95 },
  { name: 'AI & Automation',           years: '3+ yrs', color: '#00D4FF', pct: 88 },
  { name: 'Business Intelligence',     years: '5 yrs',  color: '#FFB800', pct: 92 },
  { name: 'Enterprise Software',       years: '5 yrs',  color: '#A78BFA', pct: 88 },
  { name: 'Transportation Technology', years: '3+ yrs', color: '#FF6B6B', pct: 80 },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ab-left > *',
        { opacity:0, x:-40 },
        { opacity:1, x:0, stagger:0.1, duration:0.8, ease:'power3.out',
          scrollTrigger:{trigger:ref.current, start:'top 70%'} }
      );
      gsap.fromTo('.stat-card',
        { opacity:0, y:30, scale:0.94 },
        { opacity:1, y:0, scale:1, stagger:0.1, duration:0.6, ease:'power3.out',
          scrollTrigger:{trigger:'.stats-grid', start:'top 80%'} }
      );
      document.querySelectorAll<HTMLElement>('.domain-bar-fill').forEach(bar=>{
        const w = bar.getAttribute('data-w')!;
        gsap.fromTo(bar,{width:'0%'},{width:`${w}%`,duration:1.1,ease:'power3.out',
          scrollTrigger:{trigger:bar,start:'top 90%'}});
      });
    }, ref);
    return ()=>ctx.revert();
  },[]);

  return (
    <section ref={ref} id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Subtle background shape */}
      <div className="absolute right-0 top-0 w-[40vw] h-full bg-gradient-to-l from-[#00FFB2]/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="section-label">
          <span>01 — About</span><div/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <div className="ab-left">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-theme-primary leading-[1.05] mb-8">
              Bridging continents.<br />
              <span className="text-gradient">Engineering AI that delivers.</span>
            </h2>

            <p className="prose-lead mb-5">
              I'm Mesay Kebbede — a production AI Engineer trusted by financial institutions in Ethiopia and technology companies in the United States.
            </p>
            <p className="prose-body mb-5">
              With <span className="text-highlight">5+ years</span> in applied AI, I architect systems that move real metrics: faster lending decisions, automated enterprise workflows, and platform infrastructure built to last.
            </p>
            <p className="prose-body mb-4">
              <span className="text-accent-et">Ethiopia (Office)</span> — on-site at Cooperative Bank of Oromia's DX-Valley Hub, leading AI and software engineering for digital banking.{' '}
              <span className="text-accent-us">United States (Remote)</span> — architecting backend systems and mobile platforms for ODA Transportation LLC. Select international consulting via Upwork.
            </p>

            {/* Domain bars */}
            <div className="mt-10 space-y-4">
              <p className="prose-caption mb-5">Domain Experience</p>
              {domains.map(d=>(
                <div key={d.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:d.color}} />
                      <span className="font-body text-base md:text-lg text-theme-secondary">{d.name}</span>
                    </div>
                    <span className="font-mono text-sm font-medium" style={{color:d.color}}>{d.years}</span>
                  </div>
                  <div className="h-0.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                    <div className="domain-bar-fill h-full rounded-full" data-w={d.pct}
                      style={{width:'0%', background:`linear-gradient(90deg,${d.color}60,${d.color})`, boxShadow:`0 0 8px ${d.color}50`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Stats */}
            <div className="stats-grid grid grid-cols-2 gap-4 mb-10">
              {stats.map(s=>(
                <div key={s.v} className="stat-card card-glass rounded-2xl p-6 group card-hover border border-theme hover:border-[color-mix(in_srgb,var(--accent)_25%,transparent)]">
                  <div className="font-display text-4xl font-extrabold text-accent-et mb-2">{s.v}</div>
                  <div className="font-display text-lg font-semibold text-theme-primary">{s.l}</div>
                  <div className="font-mono text-sm text-theme-secondary mt-1.5">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Current engagements */}
            <p className="prose-caption mb-4">Current Engagements</p>
            <div className="space-y-3">
              {[
                { co:'Cooperative Bank of Oromia', role:'AI & Software Engineer', loc:'Addis Ababa, Ethiopia', mode:'Office-Based · On-Site', color:'#00FFB2' },
                { co:'ODA Transportation LLC', role:'Backend & Platform Engineer', loc:'United States', mode:'Remote · Project Delivery', color:'#00D4FF' },
                { co:'Upwork / Freelance', role:'AI & Analytics Consultant', loc:'Global Clients', mode:'Remote · Contract', color:'#A78BFA' },
              ].map(r=>(
                <div key={r.co} className="flex items-start gap-3 p-5 rounded-xl border border-theme hover:border-[color-mix(in_srgb,var(--accent)_20%,transparent)] transition-all duration-300 group card-hover">
                  <div className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{background:r.color}} />
                  <div>
                    <div className="font-display text-lg font-bold text-theme-primary group-hover:text-accent-et transition-colors">{r.co}</div>
                    <div className="font-body text-base text-theme-secondary mt-1">{r.role}</div>
                    <div className="font-mono text-sm text-theme-muted mt-0.5">{r.loc}</div>
                    <div className="font-mono text-sm mt-1.5 tracking-wide uppercase font-medium" style={{color:r.color}}>{r.mode}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-6 p-4 rounded-xl border border-white/5 bg-[#0e0e1a]/50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FFB800]/10 border border-[#FFB800]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                </div>
                <div>
                  <div className="font-display text-base font-bold text-theme-primary">B.Sc. Electrical & Computer Engineering</div>
                  <div className="font-body text-sm text-theme-secondary">Computer Engineering Focus · Jimma University</div>
                  <div className="font-mono text-sm text-theme-muted mt-1">2016 — 2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
