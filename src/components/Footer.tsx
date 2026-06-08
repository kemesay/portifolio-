export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-theme bg-app">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg border flex items-center justify-center" style={{ borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)', background: 'color-mix(in srgb, var(--accent) 6%, transparent)' }}>
            <span className="font-display text-xs font-bold text-accent-et">MK</span>
          </div>
          <span className="font-mono text-xs text-theme-muted">Mesay Kebbede · AI Engineer · ET Office · US Remote</span>
        </div>
        <div className="font-mono text-xs text-theme-muted">
          © {new Date().getFullYear()} · React + TypeScript + GSAP + Tailwind
        </div>
        <div className="flex items-center gap-4">
          {[
            {l:'Experience',h:'#work', internal:true},
            {l:'Live Projects',h:'#projects', internal:true},
            {l:'LinkedIn',h:'https://www.linkedin.com/in/mesay-kebbede-93a48623b/', internal:false},
            {l:'Upwork',h:'https://www.upwork.com/freelancers/~01eda1aeba270d233c?mp_source=share', internal:false},
          ].map(s=>(
            s.internal ? (
              <button key={s.l} onClick={() => document.querySelector(s.h)?.scrollIntoView({ behavior: 'smooth' })}
                className="font-mono text-xs text-theme-muted hover:text-accent-et transition-colors font-semibold">
                {s.l}
              </button>
            ) : (
              <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs text-theme-muted hover:text-accent-et transition-colors">
                {s.l}
              </a>
            )
          ))}
          <div className="flex items-center gap-1.5 font-mono text-xs text-accent-et">
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"/>
            Available
          </div>
        </div>
      </div>
    </footer>
  );
}
