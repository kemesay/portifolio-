import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Props { onComplete: () => void; }

export default function Loader({ onComplete }: Props) {
  const rootRef   = useRef<HTMLDivElement>(null);
  const fillRef   = useRef<HTMLDivElement>(null);
  const numRef    = useRef<HTMLSpanElement>(null);
  const topRef    = useRef<HTMLDivElement>(null);
  const botRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl
      .to(fillRef.current, { width: '100%', duration: 2, ease: 'power2.inOut' })
      .to(numRef.current,  { innerHTML: '100', duration: 2, ease: 'power2.inOut', snap: { innerHTML: 1 } }, '<')
      .to('.loader-items', { opacity: 0, y: -16, duration: 0.4, ease: 'power2.in' })
      // split reveal — top goes up, bottom goes down
      .to(topRef.current, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' })
      .to(botRef.current, { yPercent:  100, duration: 0.9, ease: 'expo.inOut', onComplete }, '<');
  }, [onComplete]);

  return (
    <div ref={rootRef} className="fixed inset-0 z-[9999]" style={{ pointerEvents: 'all' }}>
      {/* Top half */}
      <div ref={topRef} className="absolute inset-x-0 top-0 h-1/2 bg-[#080810] flex flex-col items-center justify-end pb-10 z-10">
        <div className="loader-items flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="relative w-16 h-16 border border-[#00FFB2]/30 rounded-lg flex items-center justify-center">
            <span className="font-display text-2xl font-bold text-[#00FFB2]">MK</span>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00FFB2] rounded-full animate-ping" />
          </div>
          <div className="text-center">
            <p className="font-mono text-[10px] text-[#4A4A6A] tracking-[0.4em] uppercase">Ethiopia Office · USA Remote · AI Engineer</p>
          </div>
        </div>
      </div>

      {/* Center seam */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3" style={{ marginTop: -1 }}>
        <div className="scan-bar w-screen" />
        <div className="flex items-baseline gap-1">
          <span ref={numRef} className="font-mono text-5xl font-light text-[#00FFB2]" style={{ lineHeight: 1 }}>0</span>
          <span className="font-mono text-sm text-[#4A4A6A]">%</span>
        </div>
        <div className="w-40 h-px bg-[#1a1a2e] relative overflow-hidden">
          <div ref={fillRef} className="absolute left-0 top-0 h-full bg-[#00FFB2] w-0" style={{ boxShadow: '0 0 8px #00FFB2' }} />
        </div>
      </div>

      {/* Bottom half */}
      <div ref={botRef} className="absolute inset-x-0 bottom-0 h-1/2 bg-[#080810] z-10" />
    </div>
  );
}
