export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5" style={{background:'#080810'}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg border border-[#00FFB2]/25 flex items-center justify-center bg-[#00FFB2]/5">
            <span className="font-display text-xs font-bold text-[#00FFB2]">MK</span>
          </div>
          <span className="font-mono text-xs text-[#4A4A6A]">Mesay Kebbede · AI Engineer</span>
        </div>
        <div className="font-mono text-xs text-[#4A4A6A]">
          © {new Date().getFullYear()} · React + TypeScript + GSAP + Tailwind
        </div>
        <div className="flex items-center gap-4">
          {[
            {l:'LinkedIn',h:'https://www.linkedin.com/in/mesay-kebbede-93a48623b/'},
            {l:'Upwork',h:'https://www.upwork.com/freelancers/~01eda1aeba270d233c?mp_source=share'},
            {l:'Email',h:'mailto:mesaykebbede@gmail.com'},
          ].map(s=>(
            <a key={s.l} href={s.h} target={s.h.startsWith('http')?'_blank':undefined} rel="noopener noreferrer"
              className="font-mono text-xs text-[#4A4A6A] hover:text-[#00FFB2] transition-colors">
              {s.l}
            </a>
          ))}
          <div className="flex items-center gap-1.5 font-mono text-xs text-[#00FFB2]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2] animate-pulse"/>
            Available
          </div>
        </div>
      </div>
    </footer>
  );
}
