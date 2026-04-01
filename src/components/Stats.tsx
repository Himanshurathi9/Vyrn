import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedSection } from './AnimatedSection';
import SriYantra from './SriYantra';

function Counter({ end, suffix = '', duration = 1500 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(end * easeOutExpo(percentage));
      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const SECONDARY_STATS = [
  "Avg. reel completion rate: 87%",
  "Accounts reached this week: 2.3M",
  "Most-viewed reel runtime: 23 seconds",
  "Peak posting time for clients: 7PM IST",
  "Client DMs generated this month: 4,892",
  "Viral velocity: 1.2M views/48h",
  "Audience retention: +42% MoM"
];

export function Stats() {
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentStat = SECONDARY_STATS[activeStatIndex];

    if (isTyping) {
      if (displayText.length < currentStat.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentStat.slice(0, displayText.length + 1));
        }, 30);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setActiveStatIndex((prev) => (prev + 1) % SECONDARY_STATS.length);
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, activeStatIndex]);

  return (
    <section className="relative py-16 md:py-[100px] bg-navy overflow-hidden border-y border-white/5">
      {/* Sacred Geometry Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 pointer-events-none opacity-5 flex items-center justify-center">
        <SriYantra className="w-full h-full text-blue" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        
        {/* Dashboard Container */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Dashboard Header */}
          <div className="bg-[#111] border-b border-white/10 px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <span className="font-mono text-green-500 text-[11px] tracking-widest uppercase">
                VYRN LIVE DASHBOARD — UPDATED CONTINUOUSLY
              </span>
            </div>
            <div className="hidden md:block font-mono text-white/30 text-[11px]">
              SYS.STATUS: <span className="text-blue">OPTIMAL</span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8 md:p-12 relative">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
              <AnimatedSection delay={0} className="flex flex-col">
                <div className="text-[clamp(48px,5vw,64px)] text-white leading-none mb-2 font-display font-bold tracking-tight">
                  <Counter end={14} suffix="M+" />
                </div>
                <div className="text-[13px] text-white/50 font-mono uppercase tracking-wider">Total organic views</div>
              </AnimatedSection>
              
              <AnimatedSection delay={100} className="flex flex-col">
                <div className="text-[clamp(48px,5vw,64px)] text-white leading-none mb-2 font-display font-bold tracking-tight">
                  <Counter end={98} suffix="%" />
                </div>
                <div className="text-[13px] text-white/50 font-mono uppercase tracking-wider">Client retention</div>
              </AnimatedSection>
              
              <AnimatedSection delay={200} className="flex flex-col">
                <div className="text-[clamp(48px,5vw,64px)] text-white leading-none mb-2 font-display font-bold tracking-tight">
                  <Counter end={6} suffix=" days" />
                </div>
                <div className="text-[13px] text-white/50 font-mono uppercase tracking-wider">Avg time to viral</div>
              </AnimatedSection>
              
              <AnimatedSection delay={300} className="flex flex-col">
                <div className="text-[clamp(48px,5vw,64px)] text-white leading-none mb-2 font-display font-bold tracking-tight">
                  <Counter end={150} suffix="%" />
                </div>
                <div className="text-[13px] text-white/50 font-mono uppercase tracking-wider">Avg sales growth</div>
              </AnimatedSection>
            </div>

            {/* Live Secondary Stats Feed */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
              <div className="font-mono text-[12px] text-white/50 flex items-center h-5">
                <span className="text-blue mr-2">&gt;</span>
                <span className="transition-opacity duration-300" style={{ opacity: isTyping ? 1 : 0 }}>
                  {displayText}
                </span>
                <span className="w-1.5 h-3.5 bg-white/70 ml-1 animate-blink"></span>
              </div>
              
              <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest flex gap-4">
                <span>DATA.STREAM_ACTIVE</span>
                <span className="text-cosmic-gold">LATENCY: 12ms</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
