import React, { useEffect, useRef, useState } from 'react';

export function SplitSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalScroll = rect.height - windowHeight;
      const currentScroll = -rect.top;
      
      let progress = currentScroll / totalScroll;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openPercentage = scrollProgress < 0.5 
    ? scrollProgress * 2 
    : (1 - scrollProgress) * 2;

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-navy">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
        
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center z-0 px-5 text-center">
          <h2 className="font-display font-bold text-[clamp(32px,6vw,80px)] text-white leading-tight max-w-[1200px]">
            MOST AGENCIES POST CONTENT.<br/>
            <span className="text-blue relative overflow-hidden inline-block group">
              WE BUILD EMPIRES.
              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-cosmic-gold/50 to-transparent skew-x-[-20deg] animate-shimmer"></div>
            </span>
          </h2>
        </div>

        {/* Left/Top Door */}
        <div 
          className="absolute top-0 left-0 w-full h-1/2 md:w-1/2 md:h-full bg-navy z-10 border-b md:border-b-0 md:border-r border-white/10"
          style={{ 
            transform: `translate${window.innerWidth < 768 ? 'Y' : 'X'}(-${openPercentage * 100}%)` 
          }}
        ></div>

        {/* Right/Bottom Door */}
        <div 
          className="absolute bottom-0 right-0 w-full h-1/2 md:w-1/2 md:h-full bg-navy z-10 border-t md:border-t-0 md:border-l border-white/10"
          style={{ 
            transform: `translate${window.innerWidth < 768 ? 'Y' : 'X'}(${openPercentage * 100}%)` 
          }}
        ></div>

      </div>
    </section>
  );
}
