import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  featured?: boolean;
  title: string;
  sub: string;
  desc: string;
  highlights: string[];
  tags: string[];
  color: string;
  cat: string;
  status: string;
  link?: string;
  linkLabel?: string;
}

const projects: Project[] = [
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
    link:'https://t.me/michudigitallending', linkLabel:'Open Live Bot',
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
    link:'https://odatransportation.com/', linkLabel:'Visit Live Site',
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
    link:'https://souqpass.coopbankoromiasc.com/', linkLabel:'Launch Platform',
  },
];

function ProjectCard({ p, className = '' }: { p: Project; className?: string }) {
  const inner = (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-sm text-theme-muted">{p.id}</span>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full font-medium" style={{background:`${p.color}15`,color:p.color}}>{p.cat}</span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-xs status-live">
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"/>{p.status}
        </span>
      </div>
      <h3 className="font-display text-xl md:text-2xl font-extrabold text-theme-primary mb-1 group-hover:text-accent-et transition-colors">{p.title}</h3>
      <p className="font-mono text-sm text-theme-muted mb-3">{p.sub}</p>
      <p className="font-body text-theme-secondary text-base leading-relaxed mb-5 flex-1">{p.desc}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {p.tags.slice(0, p.featured ? p.tags.length : 5).map(t=><span key={t} className="skill-pill">{t}</span>)}
      </div>
      {p.link ? (
        <span className="btn-launch w-full sm:w-auto justify-center" style={{ color: p.color, background: `${p.color}12` }}>
          {p.linkLabel ?? 'Open Live Project'}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      ) : (
        <span className="font-mono text-sm text-theme-muted">Research / internal deployment</span>
      )}
    </>
  );

  const cardClass = `pj-card card-glass rounded-2xl p-6 lg:p-8 group card-hover border border-theme flex flex-col ${className}`;

  if (p.link) {
    return (
      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`clickable-card ${cardClass}`}
        style={{ borderColor: `color-mix(in srgb, ${p.color} 20%, var(--border-subtle))` }}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={cardClass} style={{ borderColor: `color-mix(in srgb, ${p.color} 12%, var(--border-subtle))` }}>
      {inner}
    </div>
  );
}

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
    <section ref={ref} id="projects" className="py-32 px-6 relative bg-section">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--accent)_25%,transparent)] to-transparent"/>
      <div className="max-w-7xl mx-auto">
        <div className="section-label"><span>04 — Live Projects</span><div/></div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-theme-primary">
            Production work you<br /><span className="text-gradient">can click & explore</span>
          </h2>
          <p className="prose-body max-w-md text-theme-secondary">
            Every card with a launch button opens a live product — tap to verify the work in production.
          </p>
        </div>

        <div className="pj-grid space-y-6">
          {/* Featured — full width clickable */}
          <div className="lg:grid lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3">
              <ProjectCard p={featured} className="h-full hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border-subtle))]" />
            </div>
            <div className="hidden lg:flex lg:col-span-2 flex-col gap-3 mt-0">
              <p className="prose-caption">Quick launch</p>
              {projects.filter(p => p.link).map(p => (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-chip justify-between py-3 px-4 text-base"
                  style={{ borderColor: `${p.color}35` }}
                >
                  <span>
                    <span className="font-display font-bold text-theme-primary block">{p.title}</span>
                    <span className="font-mono text-xs text-theme-muted">{p.sub}</span>
                  </span>
                  <svg className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map(p => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--accent)_25%,transparent)] to-transparent"/>
    </section>
  );
}
