import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface Job {
  co: string;
  sub: string;
  role: string;
  period: string;
  loc: string;
  type: string;
  color: string;
  points: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
}

const jobs: Job[] = [
  {
    co:'Cooperative Bank of Oromia', sub:'DX-Valley Innovation Hub',
    role:'Software Engineer / IT Officer', period:'06/2022 — Present',
    loc:'Addis Ababa, Ethiopia · Office-Based', type:'On-Site', color:'#00FFB2',
    link:'https://souqpass.coopbankoromiasc.com/',
    linkLabel:'Launch Souqpass Platform →',
    points:[
      'Architected multi-source AI credit scoring engines (Michu Kiyya, Michu Mizan, RBF) integrating bank statements, KYC data, Letters of Credit, and agricultural datasets',
      'Led development of the Michu digital lending chatbot serving thousands of customers with loan automation workflows',
      'Designed intelligent workflow automation using LLMs, AI agents (LangGraph/CrewAI), and orchestration frameworks for enterprise decision support',
      'Engineered fast transaction reconciliation system at central banking switches, dramatically improving operational efficiency',
      'Built comprehensive full-stack platforms with React frontends, Spring Boot backends, and PostgreSQL databases',
      'Expanded feature engineering pipeline after major business requirement changes, improving model stability and prediction accuracy',
    ],
    stack:['Python','LangGraph','FastAPI','PostgreSQL','React','Spring Boot','TensorFlow','LLMs'],
  },
  {
    co:'ODA Transportation LLC', sub:'Remote — United States',
    role:'Backend & Platform Engineer', period:'2022 — Present',
    loc:'United States · Remote Delivery', type:'Remote Contract', color:'#00D4FF',
    link:'https://odatransportation.com/',
    linkLabel:'Visit Live Platform →',
    points:[
      'Developing backend infrastructure and APIs powering ODA Transportation\'s logistics platform',
      'Built native iOS and Android apps with Flutter featuring real-time tracking and Square payment integration',
      'Architected microservices with Node.js, containerized via Docker, and deployed with CI/CD pipelines',
      'Integrated Square payment gateway enabling seamless in-app transactions across mobile platforms',
    ],
    stack:['Flutter','iOS','Android','Node.js','Square Payments','Docker','PostgreSQL','REST APIs'],
  },
  {
    co:'Upwork / Freelance', sub:'Global Remote Consulting',
    role:'AI & Analytics Consultant', period:'2022 — Present',
    loc:'Global Remote', type:'Contract', color:'#FFB800',
    link:'https://www.upwork.com/freelancers/~01eda1aeba270d233c?mp_source=share',
    linkLabel:'View Upwork Profile →',
    points:[
      'Delivering AI, analytics, entity resolution, automation, and video analysis projects for international clients',
      'Building RAG-based knowledge systems and enterprise AI assistants for diverse business domains',
      'Consulting on data engineering pipelines, business intelligence dashboards, and MLOps infrastructure',
    ],
    stack:['Python','RAG','LangGraph','FastAPI','Analytics','Power BI','PostgreSQL'],
  },
  {
    co:'Oromia Tourism Commission', sub:'',
    role:'Junior Software Engineer', period:'01/2022 — 06/2022',
    loc:'Addis Ababa, Ethiopia', type:'Contract', color:'#A78BFA',
    points:[
      'Developed AI-powered tourism chatbot with intelligent destination, hotel, and services recommendations',
      'Integrated NLP for multi-language tourist support across Ethiopian destinations',
    ],
    stack:['Python','NLP','Chatbot','Telegram API'],
  },
  {
    co:'Ethiopia Space Science & Technology Institute', sub:'Research',
    role:'Junior Software Engineer', period:'02/2021 — 06/2021',
    loc:'Addis Ababa, Ethiopia', type:'Research', color:'#FF6B6B',
    points:[
      'Resolved complex satellite image processing challenges using Denoising Autoencoder neural networks for cloud removal',
      'Preprocessed and managed large-scale satellite imagery datasets achieving high cloud detection accuracy',
    ],
    stack:['Python','TensorFlow','Computer Vision','Denoising Autoencoders','Big Data'],
  },
];

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.fromTo('.wk-tab',{opacity:0,x:-20},{opacity:1,x:0,stagger:0.08,duration:0.6,ease:'power3.out',
        scrollTrigger:{trigger:ref.current,start:'top 70%'}});
    },ref);
    return ()=>ctx.revert();
  },[]);

  useEffect(()=>{
    gsap.fromTo('.wk-content',{opacity:0,x:16},{opacity:1,x:0,duration:0.4,ease:'power3.out'});
  },[active]);

  const j = jobs[active];

  return (
    <section ref={ref} id="work" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="section-label"><span>03 — Experience</span><div/></div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-theme-primary">
            Where I've <span className="text-gradient">Made Impact</span>
          </h2>
          <p className="prose-body max-w-md text-theme-secondary">
            Click a role to explore the work — live platforms open in a new tab.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab list */}
          <div className="lg:w-72 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 flex-shrink-0">
            {jobs.map((jb,i)=>(
              <button
                key={i}
                type="button"
                onClick={()=>setActive(i)}
                className={`wk-tab flex-shrink-0 lg:flex-shrink text-left px-4 py-4 rounded-xl transition-all duration-300 border w-full
                  ${active===i ? 'border-l-[3px] card-glass' : 'border-transparent text-theme-muted hover:text-theme-secondary hover:bg-[color-mix(in_srgb,var(--bg-elevated)_80%,transparent)]'}`}
                style={{borderLeftColor: active===i ? jb.color : 'transparent'}}
              >
                <div className={`font-display text-base font-semibold whitespace-nowrap ${active===i?'text-theme-primary':'inherit'}`}>
                  {jb.co.split(' ').slice(0,3).join(' ')}
                </div>
                <div className="font-mono text-sm text-theme-muted mt-1">{jb.period.split('—')[0].trim()}</div>
                {jb.link && (
                  <span className="inline-flex items-center gap-1 mt-2 font-mono text-xs status-live">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                    Live link
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="wk-content flex-1 card-glass rounded-2xl p-6 lg:p-8 border border-theme">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-2xl font-extrabold" style={{color:j.color}}>{j.role}</h3>
                <div className="font-display text-xl font-semibold text-theme-primary mt-1">{j.co}</div>
                {j.sub && <div className="font-mono text-sm text-theme-muted mt-1">{j.sub}</div>}
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-mono text-sm text-theme-secondary">{j.period}</div>
                <div className="font-mono text-sm text-theme-muted mt-1">{j.loc}</div>
                <span className="inline-block mt-2 px-3 py-1 rounded-full font-mono text-xs font-medium"
                  style={{background:`${j.color}15`,color:j.color,border:`1px solid ${j.color}35`}}>
                  {j.type}
                </span>
              </div>
            </div>

            {j.link && (
              <a
                href={j.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-launch mb-6 w-full sm:w-auto justify-center sm:justify-start"
                style={{ color: j.color, background: `${j.color}10` }}
              >
                {j.linkLabel}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            <ul className="space-y-3 mb-6">
              {j.points.map((p,i)=>(
                <li key={i} className="flex gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{background:j.color}}/>
                  <span className="font-body text-theme-secondary text-base leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <div className="pt-5 border-t border-theme flex flex-wrap gap-2">
              {j.stack.map(s=>(
                <span key={s} className="font-mono text-sm px-3 py-1.5 rounded-lg border"
                  style={{borderColor:`${j.color}35`,color:j.color,background:`${j.color}10`}}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
