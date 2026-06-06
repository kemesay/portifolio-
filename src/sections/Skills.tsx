import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface Skill { n: string; lvl: number; }
interface Group { cat: string; color: string; icon: string; skills: Skill[]; }

const groups: Group[] = [
  { cat:'AI & Machine Learning', color:'#00FFB2', icon:'🤖', skills:[
    {n:'LLM Applications & RAG',lvl:90},{n:'AI Agents & Multi-Agent',lvl:88},{n:'Machine Learning',lvl:86},
    {n:'Prompt Engineering',lvl:95},{n:'Computer Vision',lvl:80},{n:'MLOps',lvl:78},
  ]},
  { cat:'AI Frameworks & Tooling', color:'#00D4FF', icon:'⚙️', skills:[
    {n:'LangGraph',lvl:90},{n:'CrewAI',lvl:88},{n:'FastAPI',lvl:92},
    {n:'OpenAI / Claude APIs',lvl:95},{n:'Ollama / Local LLMs',lvl:84},{n:'Vector Databases',lvl:86},
  ]},
  { cat:'Backend & Data Engineering', color:'#FFB800', icon:'🛠️', skills:[
    {n:'Python',lvl:95},{n:'Node.js',lvl:88},{n:'Spring Boot',lvl:82},
    {n:'PostgreSQL / SQL',lvl:90},{n:'ETL Pipelines',lvl:86},{n:'Business Intelligence',lvl:88},
  ]},
  { cat:'Mobile & Frontend', color:'#A78BFA', icon:'📱', skills:[
    {n:'Flutter / Dart',lvl:88},{n:'React',lvl:80},{n:'Android & iOS Dev',lvl:82},{n:'REST APIs',lvl:90},
  ]},
];

const tools = ['LangGraph','CrewAI','Ollama','OpenAI API','Claude','FastAPI','PostgreSQL',
  'Flutter','React','Spring Boot','Node.js','Docker','Git','Linux','TensorFlow','PyTorch',
  'Kafka','Spark','Hadoop','CI/CD','Cursor','Claude Code'];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(()=>{
    const ctx = gsap.context(()=>{
      gsap.fromTo('.sk-group',{opacity:0,y:40},{opacity:1,y:0,stagger:0.12,duration:0.8,ease:'power3.out',
        scrollTrigger:{trigger:'.sk-grid',start:'top 75%'}});
      document.querySelectorAll<HTMLElement>('.sk-bar').forEach(bar=>{
        const w = bar.getAttribute('data-w')!;
        gsap.fromTo(bar,{width:'0%'},{width:`${w}%`,duration:1.2,ease:'power3.out',
          scrollTrigger:{trigger:bar,start:'top 92%'}});
      });
    },ref);
    return ()=>ctx.revert();
  },[]);

  return (
    <section ref={ref} id="skills" className="py-32 px-6 relative" style={{background:'#0c0c18'}}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00FFB2]/18 to-transparent"/>
      <div className="max-w-7xl mx-auto">
        <div className="section-label"><span>02 — Skills</span><div/></div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#E8E8F2]">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="font-body text-[#4A4A6A] text-sm max-w-sm">5+ years of hands-on production experience across AI, ML, data engineering & full-stack platforms.</p>
        </div>

        <div className="sk-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {groups.map(g=>(
            <div key={g.cat} className="sk-group card-glass rounded-2xl p-6 border border-white/5 card-hover hover:border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                  style={{background:`${g.color}12`,border:`1px solid ${g.color}25`}}>
                  {g.icon}
                </div>
                <h3 className="font-display text-base font-bold" style={{color:g.color}}>{g.cat}</h3>
              </div>
              <div className="space-y-4">
                {g.skills.map(s=>(
                  <div key={s.n}>
                    <div className="flex justify-between mb-1.5">
                      <span className="font-body text-sm text-[#8888AA]">{s.n}</span>
                      <span className="font-mono text-xs" style={{color:g.color}}>{s.lvl}%</span>
                    </div>
                    <div className="h-0.5 bg-[#1a1a2e] rounded-full overflow-hidden">
                      <div className="sk-bar h-full rounded-full" data-w={s.lvl}
                        style={{width:'0%',background:`linear-gradient(90deg,${g.color}60,${g.color})`,boxShadow:`0 0 6px ${g.color}40`}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Agentic coding tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            {tool:'Cursor',dur:'2 Years',col:'#00FFB2',desc:'AI-assisted development, refactoring, architecture exploration, test generation & rapid prototyping across complex codebases.'},
            {tool:'Claude Code',dur:'1 Year',col:'#00D4FF',desc:'Code generation, system design reviews, AI workflow development & technical documentation for production systems.'},
          ].map(a=>(
            <div key={a.tool} className="card-glass rounded-xl p-5 border card-hover" style={{borderColor:`${a.col}18`}}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{background:a.col}}/>
                  <span className="font-display font-bold text-[#E8E8F2]">{a.tool}</span>
                  <span className="font-mono text-[10px] text-[#4A4A6A]">Agentic Coding</span>
                </div>
                <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border"
                  style={{color:a.col,borderColor:`${a.col}30`,background:`${a.col}08`}}>{a.dur}</span>
              </div>
              <p className="font-body text-sm text-[#8888AA] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div>
          <p className="font-mono text-[10px] text-[#4A4A6A] tracking-widest uppercase mb-5">Full Tech Stack</p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#0c0c18] to-transparent z-10 pointer-events-none"/>
            <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#0c0c18] to-transparent z-10 pointer-events-none"/>
            <div className="marquee-track">
              {[...tools,...tools].map((t,i)=><span key={i} className="skill-pill mx-1.5 flex-shrink-0">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00FFB2]/18 to-transparent"/>
    </section>
  );
}
