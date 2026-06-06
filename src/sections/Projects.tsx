import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id:'01', featured:true,
    title:'AI Credit Scoring Platform',
    sub:'Michu Kiyya · Michu Mizan · RBF Engine',
    desc:'Production multi-source AI credit scoring engine integrating credit bureau records, bank statements, Letters of Credit, audited financials, and agricultural datasets — enabling intelligent lending decisions at scale for thousands of applicants.',
    highlights:[
      'Feature engineering pipeline spanning 10+ data source types',
      'Improved prediction accuracy & model stability across loan products',
      'GPU-optimized preprocessing pipeline for real-time scoring',
      'Integrated risk assessment driving automated lending decisions',
    ],
    tags:['Python','TensorFlow','FastAPI','PostgreSQL','LLMs','Feature Engineering','MLOps'],
    color:'#00FFB2', cat:'Fintech · AI', status:'Production',
    link:'https://t.me/michudigitallending', linkLabel:'View Bot →',
  },
  {
    id:'02',
    title:'ODA Transportation Platform',
    sub:'ODA Transportation LLC — USA',
    desc:'Full-stack logistics platform with production iOS & Android apps, web dashboard, and backend APIs. Includes Square payment gateway integration for seamless in-app transactions.',
    highlights:[
      'Native iOS & Android apps built with Flutter',
      'Square payment integration for in-app transactions',
      'Real-time tracking and operational dashboards',
      'Node.js microservices with Docker & CI/CD',
    ],
    tags:['Flutter','iOS','Android','Node.js','Square Payments','Docker','PostgreSQL'],
    color:'#00D4FF', cat:'Transportation · Mobile', status:'Production',
    link:'https://odatransportation.com/', linkLabel:'Visit Website →',
  },
  {
    id:'03',
    title:'Multi-Agent AI Automation',
    sub:'LangGraph + CrewAI Architecture',
    desc:'Enterprise intelligent workflow automation using LLMs, AI agents, and orchestration frameworks to automate complex document workflows and decision support at scale.',
    highlights:[
      'Multi-agent orchestration with LangGraph & CrewAI',
      'RAG-based enterprise knowledge retrieval',
      'Human-in-the-loop decision control',
    ],
    tags:['LangGraph','CrewAI','RAG','FastAPI','Vector DB','Ollama'],
    color:'#FFB800', cat:'AI Agents · Automation', status:'Production',
  },
  {
    id:'04',
    title:'Satellite Image Cloud Removal',
    sub:'Computer Vision Research — ESSTI',
    desc:'Cloud removal using Denoising Autoencoder neural networks to improve satellite imagery quality for downstream earth observation analytics.',
    highlights:[
      'Denoising Autoencoder for cloud detection & removal',
      'Large-scale satellite dataset preprocessing pipeline',
      'High accuracy enabling better geospatial analytics',
    ],
    tags:['TensorFlow','Autoencoders','Computer Vision','Python','Big Data'],
    color:'#A78BFA', cat:'Computer Vision · Research', status:'Completed',
  },
  {
    id:'05',
    title:'Souqpass Digital Lending',
    sub:'Cooperative Bank of Oromia',
    desc:'Full-stack digital lending platform with React dashboard, Flutter mobile apps, Spring Boot backend, and real-time reconciliation system for automated loan processing.',
    highlights:[
      'Flutter iOS/Android customer-facing app',
      'Spring Boot microservices + PostgreSQL',
      'Real-time central switch reconciliation',
    ],
    tags:['Flutter','Spring Boot','React','PostgreSQL','Microservices'],
    color:'#FF6B6B', cat:'Fintech · Full-Stack', status:'Production',
    link:'https://souqpass.coopbankoromiasc.com/', linkLabel:'Visit Platform →',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.fromTo('.pj-card',{opacity:0,y:50},{opacity:1,y:0,stagger:0.13,duration:0.8,ease:'power3.out',
        scrollTrigger:{trigger:'.pj-grid',start:'top 75%'}});
    },ref);
    return ()=>ctx.revert();
  },[]);

  const featured = projects.find(p=>p.featured)!;
  const rest      = projects.filter(p=>!p.featured);

  return (
    <section ref={ref} id="projects" className="py-32 px-6 relative" style={{background:'#0c0c18'}}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00FFB2]/18 to-transparent"/>
      <div className="max-w-7xl mx-auto">
        <div className="section-label"><span>04 — Projects</span><div/></div>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#E8E8F2] mb-14">
          Key <span className="text-gradient">Accomplishments</span>
        </h2>

        <div className="pj-grid space-y-6">
          {/* Featured */}
          <div className="pj-card card-glass rounded-2xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8 group card-hover border border-white/5 hover:border-[#00FFB2]/12"
            style={{borderColor:`${featured.color}10`}}>
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-xs text-[#4A4A6A]">{featured.id}</span>
                <span className="font-mono text-xs px-2 py-0.5 rounded-full" style={{background:`${featured.color}12`,color:featured.color}}>{featured.cat}</span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>{featured.status}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-[#00FFB2]/10 text-[#00FFB2] border border-[#00FFB2]/20">⭐ Featured</span>
              </div>
              <h3 className="font-display text-2xl font-extrabold text-[#E8E8F2] mb-1 group-hover:text-[#00FFB2] transition-colors">{featured.title}</h3>
              <p className="font-mono text-sm text-[#4A4A6A] mb-4">{featured.sub}</p>
              <p className="font-body text-[#8888AA] text-sm leading-relaxed mb-6">{featured.desc}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map(t=><span key={t} className="skill-pill">{t}</span>)}
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between">
              <ul className="space-y-2.5 mb-6">
                {featured.highlights.map((h,i)=>(
                  <li key={i} className="flex gap-3 p-3 rounded-xl bg-[#080810]/60 border border-white/4">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{background:featured.color}}/>
                    <span className="font-body text-xs text-[#8888AA] leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
              {featured.link && (
                <a href={featured.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs hover:opacity-80 transition-opacity font-semibold"
                  style={{color:featured.color}}>
                  {featured.linkLabel}
                </a>
              )}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map(p=>(
              <div key={p.id} className="pj-card card-glass rounded-2xl p-6 group card-hover border border-white/4 hover:border-white/8 flex flex-col"
                style={{borderColor:`${p.color}08`}}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#4A4A6A]">{p.id}</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded-full" style={{background:`${p.color}12`,color:p.color}}>{p.cat}</span>
                  </div>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-emerald-400">
                    <span className="w-1 h-1 rounded-full bg-emerald-400"/>{p.status}
                  </span>
                </div>
                <h3 className="font-display text-lg font-extrabold text-[#E8E8F2] mb-1 group-hover:text-[#00FFB2] transition-colors">{p.title}</h3>
                <p className="font-mono text-xs text-[#4A4A6A] mb-3">{p.sub}</p>
                <p className="font-body text-[#8888AA] text-sm leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tags.slice(0,5).map(t=><span key={t} className="skill-pill">{t}</span>)}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-xs font-semibold hover:opacity-80 transition-opacity"
                    style={{color:p.color}}>
                    {p.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00FFB2]/18 to-transparent"/>
    </section>
  );
}
