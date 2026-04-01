import React, { useState, useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';
import OmSymbol from './OmSymbol';

const TICKER_MESSAGES = [
  "↑ 147 reels published this month",
  "↑ 3.2M organic views generated",
  "↑ 12 new brands onboarded",
  "↑ 0 rupees spent on paid reach",
  "↑ 98% client retention rate"
];

export function Hero() {
  const [tickerText, setTickerText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [showLightning, setShowLightning] = useState(false);
  const [reelScreen, setReelScreen] = useState(0);
  const [showPill, setShowPill] = useState(0);

  useEffect(() => {
    // Ticker logic
    let timeout: NodeJS.Timeout;
    const currentMessage = TICKER_MESSAGES[messageIndex];

    if (isTyping) {
      if (tickerText.length < currentMessage.length) {
        timeout = setTimeout(() => {
          setTickerText(currentMessage.slice(0, tickerText.length + 1));
        }, 35);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      timeout = setTimeout(() => {
        setTickerText('');
        setMessageIndex((prev) => (prev + 1) % TICKER_MESSAGES.length);
        setIsTyping(true);
      }, 500); // fade out time
    }

    return () => clearTimeout(timeout);
  }, [tickerText, isTyping, messageIndex]);

  useEffect(() => {
    // Parallax scroll listener
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Lightning bolt trigger
    const lightningTimer = setTimeout(() => setShowLightning(true), 1500);

    // Reel screen cycle
    const reelInterval = setInterval(() => {
      setReelScreen(s => (s + 1) % 3);
    }, 3000);

    // Floating pills cycle
    const pillInterval = setInterval(() => {
      setShowPill(p => (p + 1) % 4); // 0 means none
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(lightningTimer);
      clearInterval(reelInterval);
      clearInterval(pillInterval);
    };
  }, []);

  const layer1Style = { transform: `translateY(${scrollY * 0.1}px)` };
  const layer2Style = { transform: `translateY(${scrollY * 0.3}px)` };
  const layer3Style = { transform: `translateY(${scrollY * 0.7}px)` };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-navy">
      {/* Layer 1: Deepest, moves slowest */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={layer1Style}>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-grid-drift"
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      {/* Layer 2: Middle depth, circular rings */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center" style={layer2Style}>
        <div className="absolute w-[600px] h-[600px] rounded-full border border-blue/3 opacity-3 animate-ping" style={{ animationDuration: '8s' }}></div>
        <div className="absolute w-[800px] h-[800px] rounded-full border border-blue/3 opacity-3 animate-ping" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute w-[1000px] h-[1000px] rounded-full border border-blue/3 opacity-3 animate-ping" style={{ animationDuration: '8s', animationDelay: '4s' }}></div>
      </div>

      {/* Cosmic Dust Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue/6 blur-[100px] animate-drift-1"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cosmic-purple/4 blur-[120px] animate-drift-2"></div>
        <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] rounded-full bg-cosmic-gold/3 blur-[80px] animate-drift-3"></div>
      </div>

      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] z-0 pointer-events-none animate-grid-drift"
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Small Decorative Om */}
      <div className="absolute top-24 left-10 z-0 pointer-events-none">
        <OmSymbol className="w-20 h-20 text-blue opacity-6" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left">
        
        {/* Layer 3: Foreground */}
        <div className="relative" style={layer3Style}>
          {/* Massive Background Om */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-h-[70vh] z-[-1] pointer-events-none flex items-center justify-center opacity-4 animate-spin-slow">
            <OmSymbol className="w-full h-full text-white" />
          </div>

          <AnimatedSection delay={200}>
            <h1 className="text-[clamp(44px,6vw,72px)] leading-[1.1] mb-6 font-display font-bold text-white relative">
              D<span className="relative inline-block">
                {showLightning && (
                  <svg className="absolute -top-[120px] left-[-15px] w-[30px] h-[350px] text-blue hidden lg:block z-50 pointer-events-none" viewBox="0 0 30 350" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15,0 L5,150 L25,150 L10,350" strokeDasharray="400" strokeDashoffset="400" className="animate-[drawLightning_1s_ease-out_forwards]" />
                  </svg>
                )}
              </span>ominating<br/>
              <span className="text-blue text-shadow-glow">Instagram.</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={500}>
            <p className="text-[clamp(16px,2vw,18px)] text-white/65 mb-8 max-w-[500px] mx-auto lg:mx-0">
              We build brands the algorithm cannot ignore.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={650}>
            <div className="bg-black/40 border border-blue/30 rounded-full px-4 py-2 inline-flex items-center mb-6 min-h-[38px] transition-opacity duration-500" style={{ opacity: isTyping ? 1 : 0 }}>
              <span className="font-mono text-blue text-sm">{tickerText}</span>
              <span className="w-2 h-4 bg-blue ml-1 animate-pulse"></span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={700}>
            <p className="font-sans italic text-white/50 text-[13px] mb-10">
              <span className="font-cosmic text-cosmic-gold/70 mr-1">ॐ</span> — Every brand has a cosmic frequency. We find yours.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={800} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#packages" className="relative overflow-hidden inline-flex items-center justify-center h-14 px-8 rounded-full font-display font-bold text-white bg-blue transition-all duration-300 ease-spring hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,71,255,0.4)] group w-full sm:w-auto">
              Explore Packages &rarr;
              <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20 group-hover:animate-shimmer"></span>
            </a>
            <a href="#work" className="inline-flex items-center justify-center h-14 px-8 rounded-full font-display font-bold text-white bg-transparent border-2 border-white transition-all duration-300 hover:bg-white hover:text-navy hover:-translate-y-0.5 w-full sm:w-auto">
              See Our Work
            </a>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={700} className="hidden lg:flex relative h-[600px] justify-center items-center">
          
          {/* Animated IG Reel Player Mockup */}
          <div className="w-[280px] h-[560px] bg-[#0a0a0a] rounded-[40px] border-[4px] border-[#222] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
            
            {/* Screen 1 */}
            <div className={`absolute inset-0 bg-[#111] transition-opacity duration-500 flex flex-col justify-end p-4 ${reelScreen === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="text-white font-display font-bold text-2xl mb-10 leading-tight">From 0 to 50K followers in 90 days &rarr;</div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cosmic-gold to-cosmic-purple"></div>
                <div className="text-white text-sm font-bold">@clientbrand</div>
                <div className="px-2 py-1 rounded border border-white/30 text-white text-[10px] uppercase">Follow</div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
                <div className="h-full bg-white animate-[fillProgress_3s_linear_infinite]"></div>
              </div>
            </div>

            {/* Screen 2 */}
            <div className={`absolute inset-0 bg-gradient-to-br from-blue to-cosmic-purple transition-opacity duration-500 flex flex-col items-center justify-center p-4 ${reelScreen === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="text-white font-display font-bold text-4xl mb-2">1,247,893</div>
              <div className="text-white/80 text-sm uppercase tracking-widest">Views</div>
              <div className="absolute bottom-10 text-white/90 text-sm">This reel is still growing.</div>
              <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
                <div className="h-full bg-white animate-[fillProgress_3s_linear_infinite]"></div>
              </div>
            </div>

            {/* Screen 3 */}
            <div className={`absolute inset-0 bg-[#050505] transition-opacity duration-500 flex items-center justify-center p-4 ${reelScreen === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 shadow-lg animate-[slideInRight_3s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue flex items-center justify-center text-[10px]">📩</div>
                  <div className="text-white/50 text-xs">New message</div>
                </div>
                <div className="text-white text-sm">"Hey, saw your reel — we want to order!"</div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
                <div className="h-full bg-white animate-[fillProgress_3s_linear_infinite]"></div>
              </div>
            </div>

          </div>
          
          {/* Floating Notification Pills */}
          <div className={`absolute top-[30%] -right-[20px] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-display font-semibold text-sm flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-500 ${showPill === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            ❤️ +2.4K
          </div>
          <div className={`absolute top-[50%] -right-[40px] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-display font-semibold text-sm flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-500 ${showPill === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            💬 +387
          </div>
          <div className={`absolute top-[70%] -right-[20px] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white font-display font-semibold text-sm flex items-center gap-2 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-500 ${showPill === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            ↗️ +891
          </div>

        </AnimatedSection>

      </div>
    </section>
  );
}
