import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.fromTo('.ct-item',{opacity:0,y:30},{opacity:1,y:0,stagger:0.1,duration:0.7,ease:'power3.out',
        scrollTrigger:{trigger:ref.current,start:'top 70%'}});
    },ref);
    return ()=>ctx.revert();
  },[]);

  return (
    <section ref={ref} id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#00FFB2]/4 blur-[100px] pointer-events-none rounded-full"/>

      <div className="max-w-7xl mx-auto">
        <div className="section-label"><span>05 — Contact</span><div/></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="ct-item font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-theme-primary leading-[0.95] mb-8">
              Ready to build<br/>
              production-grade<br/>
              <span className="text-gradient">AI together?</span>
            </h2>

            <p className="ct-item prose-body mb-4 max-w-xl">
              <span className="text-accent-et">Office-based in Addis Ababa</span> with proven{' '}
              <span className="text-accent-us">remote delivery to US clients</span> — I partner with teams that need AI engineered for production, not prototypes.
            </p>
            <p className="ct-item prose-body mb-10 max-w-xl">
              Senior AI engineering · architecture consulting · product partnerships. Serious inquiries receive a response within 24 hours.
            </p>

            {/* Availability */}
            <div className="ct-item inline-flex items-center gap-4 px-6 py-4 rounded-2xl border badge-accent mb-10">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-60"/>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-current"/>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-accent-et">Available for Engagement</div>
                <div className="font-mono text-base text-theme-secondary mt-0.5">ET Office · US Remote · $2,500+ Net / Month</div>
              </div>
            </div>

            {/* Contact info */}
            <div className="ct-item space-y-3">
              {[
                {icon:'✉', label:'Primary Email', val:'mesaykebbede@gmail.com', href:'mailto:mesaykebbede@gmail.com'},
                {icon:'📞', label:'Phone', val:'+251 911 709 546', href:'tel:+251911709546'},
                {icon:'📍', label:'Operating Bases', val:'Ethiopia (Office · Addis Ababa) · USA (Remote Projects)', href:null},
              ].map(c=>(
                <div key={c.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl border border-theme flex items-center justify-center text-base group-hover:border-[color-mix(in_srgb,var(--accent)_30%,transparent)] transition-colors flex-shrink-0" style={{ background: 'var(--chip-bg)' }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="prose-caption mb-1">{c.label}</div>
                    {c.href
                      ? <a href={c.href} className="font-body text-theme-primary hover:text-accent-et transition-colors text-lg font-medium">{c.val}</a>
                      : <span className="font-body text-theme-primary text-lg font-medium">{c.val}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {/* What I'm looking for */}
            <div className="ct-item card-glass rounded-2xl p-7 border border-white/5">
              <h3 className="font-display text-xl font-bold text-accent-et mb-5">Ideal Engagements</h3>
              <ul className="space-y-3">
                {['Production AI & multi-agent architecture for enterprise scale','Cross-border delivery — ET office operations, US remote clients',
                  'Fintech, logistics & platform engineering with live deployments','Technical leadership on high-stakes, revenue-critical AI products',
                  'Teams that value engineering rigor, clear communication & shipping','Partners who measure success in production outcomes, not demos'].map((item,i)=>(
                  <li key={i} className="flex items-start gap-3 font-body text-base md:text-lg text-theme-secondary leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 mt-2.5 text-accent-et"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="ct-item card-glass rounded-2xl p-7 border border-white/5">
              <h3 className="font-display text-xl font-bold text-theme-primary mb-5">Live Work & Profiles</h3>
              <div className="space-y-3">
                {[
                  {name:'Upwork Profile',url:'https://www.upwork.com/freelancers/~01eda1aeba270d233c?mp_source=share',desc:'Freelance AI & Data Consulting',icon:'🟢'},
                  {name:'LinkedIn',url:'https://www.linkedin.com/in/mesay-kebbede-93a48623b/',desc:'Professional Network',icon:'🔵'},
                  {name:'Michu Digital Lending',url:'https://t.me/michudigitallending',desc:'AI Lending Bot — Live',icon:'🤖'},
                  {name:'ODA Transportation',url:'https://odatransportation.com/',desc:'Logistics Platform — Live',icon:'🚗'},
                  {name:'Souqpass Platform',url:'https://souqpass.coopbankoromiasc.com/',desc:'Digital Banking — Live',icon:'🏦'},
                ].map(l=>(
                  <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-theme hover:border-[color-mix(in_srgb,var(--accent)_25%,transparent)] hover:bg-[color-mix(in_srgb,var(--accent)_6%,transparent)] transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <span className="text-base">{l.icon}</span>
                      <div>
                        <div className="font-display text-base font-semibold text-theme-primary group-hover:text-accent-et transition-colors">{l.name}</div>
                        <div className="font-mono text-sm text-theme-muted">{l.desc}</div>
                      </div>
                    </div>
                    <svg className="w-3.5 h-3.5 text-theme-muted group-hover:text-accent-et transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Big CTA */}
            <a href="mailto:mesaykebbede@gmail.com"
              className="ct-item group relative overflow-hidden flex items-center justify-center gap-3 w-full py-5 btn-live btn-live-primary text-base md:text-lg tracking-wide rounded-2xl">
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"/>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              Send Me an Email
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
