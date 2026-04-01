import React, { useState, useEffect } from 'react';

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approx 600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`md:hidden fixed bottom-5 left-5 right-5 z-50 transition-all duration-500 ease-spring ${visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
      <a href="#contact" className="flex items-center justify-center h-14 w-full rounded-full font-display font-bold text-white bg-blue shadow-[0_10px_25px_rgba(0,71,255,0.4)] relative overflow-hidden group">
        Book a Call Now
        <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 animate-shimmer"></span>
      </a>
    </div>
  );
}
