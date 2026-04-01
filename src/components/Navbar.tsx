import React, { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 flex items-center ${scrolled ? 'bg-white/80 backdrop-blur-[20px] border-b border-blue/20' : ''}`}>
        <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 flex justify-between items-center">
          <a href="#" className={`font-display font-extrabold text-2xl relative inline-block ${scrolled ? 'text-navy' : 'text-white'}`}>
            VYRN
            {mounted && (
              <span className="absolute -bottom-[2px] left-0 h-[2px] bg-blue origin-left animate-[drawLine_0.6s_cubic-bezier(0.23,1,0.32,1)_forwards]" style={{ width: '100%', transform: 'scaleX(0)' }}>
                <style>{`@keyframes drawLine { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }`}</style>
              </span>
            )}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {['Services', 'Packages', 'Case Studies', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className={`font-medium relative py-2 group ${scrolled ? 'text-navy' : 'text-white'}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue transition-all duration-300 ease-out group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="relative overflow-hidden inline-flex items-center justify-center h-12 px-8 rounded-full font-display font-bold text-white bg-blue transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,71,255,0.4)] group">
              Book a Call
              <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 group-hover:animate-shimmer"></span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-12 h-12 relative z-[1001]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] mx-auto transition-all duration-300 ${mobileMenuOpen ? 'bg-white rotate-45 translate-y-[7px]' : scrolled ? 'bg-navy' : 'bg-white'}`}></span>
            <span className={`block w-6 h-[2px] mx-auto my-[5px] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : scrolled ? 'bg-navy' : 'bg-white'}`}></span>
            <span className={`block w-6 h-[2px] mx-auto transition-all duration-300 ${mobileMenuOpen ? 'bg-white -rotate-45 -translate-y-[7px]' : scrolled ? 'bg-navy' : 'bg-white'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-navy z-[999] flex flex-col justify-center items-center gap-8 transition-opacity duration-400 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {['Services', 'Packages', 'Case Studies', 'Contact'].map((item, i) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase().replace(' ', '-')}`} 
            onClick={() => setMobileMenuOpen(false)}
            className={`font-display text-4xl text-white transition-all duration-400 ease-out ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}
