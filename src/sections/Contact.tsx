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
            <h2 className="ct-item font-display text-5xl md:text-6xl font-extrabold text-[#E8E8F2] leading-[0.9] mb-6">
              Let's Build<br/>
              Something<br/>
              <span className="text-gradient">Intelligent.</span>
            </h2>

            <p className="ct-item font-body text-[#8888AA] text-lg leading-relaxed mb-8 max-w-md">
              Open to remote AI engineering roles, consulting, and product collaborations. 
              Serious opportunities get a response within 24 hours.
            </p>

            {/* Availability */}
            <div className="ct-item inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-[#00FFB2]/20 bg-[#00FFB2]/5 mb-10">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB2] opacity-60"/>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FFB2]"/>
              </div>
              <div>
                <div className="font-display text-sm font-bold text-[#00FFB2]">Available Now</div>
                <div className="font-mono text-xs text-[#8888AA]">$1,500+ Net / Month · Remote Preferred</div>
              </div>
            </div>

            {/* Contact info */}
            <div className="ct-item space-y-3">
              {[
                {icon:'✉', label:'Primary Email', val:'mesaykebbede@gmail.com', href:'mailto:mesaykebbede@gmail.com'},
                {icon:'📞', label:'Phone', val:'+251 911 709 546', href:'tel:+251911709546'},
                {icon:'📍', label:'Location', val:'Addis Ababa, Ethiopia (Remote OK)', href:null},
              ].map(c=>(
                <div key={c.label} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[#0e0e1a] border border-white/6 flex items-center justify-center text-base group-hover:border-[#00FFB2]/25 transition-colors flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-[#4A4A6A] mb-0.5 uppercase tracking-widest">{c.label}</div>
                    {c.href
                      ? <a href={c.href} className="font-body text-[#E8E8F2] hover:text-[#00FFB2] transition-colors text-sm">{c.val}</a>
                      : <span className="font-body text-[#E8E8F2] text-sm">{c.val}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {/* What I'm looking for */}
            <div className="ct-item card-glass rounded-2xl p-6 border border-white/5">
              <h3 className="font-display text-base font-bold text-[#00FFB2] mb-4">What I'm Looking For</h3>
              <ul className="space-y-2">
                {['Scalable AI & data architecture design','AI-powered product & automation systems',
                  'Technical innovation leadership','High-performing collaborative teams',
                  'Modern AI tech & engineering best practices','Measurable, production-grade business value'].map((item,i)=>(
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-[#8888AA]">
                    <span className="w-1 h-1 rounded-full bg-[#00FFB2] flex-shrink-0"/>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="ct-item card-glass rounded-2xl p-6 border border-white/5">
              <h3 className="font-display text-base font-bold text-[#E8E8F2] mb-4">Profiles & Live Work</h3>
              <div className="space-y-3">
                {[
                  {name:'Upwork Profile',url:'https://www.upwork.com/freelancers/~01eda1aeba270d233c?mp_source=share',desc:'Freelance AI & Data Consulting',icon:'🟢'},
                  {name:'LinkedIn',url:'https://www.linkedin.com/in/mesay-kebbede-93a48623b/',desc:'Professional Network',icon:'🔵'},
                  {name:'Michu Digital Lending',url:'https://t.me/michudigitallending',desc:'AI Lending Bot — Live',icon:'🤖'},
                  {name:'ODA Transportation',url:'https://odatransportation.com/',desc:'Logistics Platform — Live',icon:'🚗'},
                  {name:'Souqpass Platform',url:'https://souqpass.coopbankoromiasc.com/',desc:'Digital Banking — Live',icon:'🏦'},
                ].map(l=>(
                  <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl border border-white/5 hover:border-[#00FFB2]/20 hover:bg-[#00FFB2]/4 transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <span className="text-base">{l.icon}</span>
                      <div>
                        <div className="font-display text-sm font-semibold text-[#E8E8F2] group-hover:text-[#00FFB2] transition-colors">{l.name}</div>
                        <div className="font-mono text-[11px] text-[#4A4A6A]">{l.desc}</div>
                      </div>
                    </div>
                    <svg className="w-3.5 h-3.5 text-[#4A4A6A] group-hover:text-[#00FFB2] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Big CTA */}
            <a href="mailto:mesaykebbede@gmail.com"
              className="ct-item group relative overflow-hidden flex items-center justify-center gap-3 w-full py-4 bg-[#00FFB2] text-[#080810] font-display font-extrabold text-sm tracking-wide rounded-2xl hover:shadow-[0_0_40px_rgba(0,255,178,0.3)] transition-all duration-300">
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
