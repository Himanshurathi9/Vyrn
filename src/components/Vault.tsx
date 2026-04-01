import React, { useState, useRef, useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';
import SriYantra from './SriYantra';

function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel, afterLabel }: { beforeImage: string, afterImage: string, beforeLabel: string, afterLabel: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none group"
      onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
      onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img src={afterImage} alt="After" className="w-full h-full object-cover" draggable={false} />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-white/10">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <div 
        className="absolute inset-0 border-r-2 border-white/50"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover" draggable={false} />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border border-white/10">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black rotate-180">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function Vault() {
  return (
    <section className="py-16 md:py-[100px] bg-navy relative overflow-hidden">
      {/* Cosmic Dust Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue/8 blur-[120px] animate-drift-2"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-cosmic-purple/6 blur-[150px] animate-drift-1"></div>
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] rounded-full bg-cosmic-gold/4 blur-[100px] animate-drift-3"></div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 z-0"
           style={{
             backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      {/* Sacred Geometry Watermark (Cropped bottom-right) */}
      <div className="absolute -bottom-[200px] -right-[200px] w-[800px] h-[800px] z-0 pointer-events-none opacity-10 flex items-center justify-center">
        <SriYantra className="w-full h-full text-white" />
      </div>
      
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <span className="font-mono text-blue uppercase tracking-widest text-xs mb-4 block">
            THE VYRN VAULT
          </span>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.1] text-white font-bold mb-6">
            Real Results. <span className="text-blue">No Fluff.</span>
          </h2>
          <p className="text-white/60 text-[16px] max-w-[600px] mx-auto">
            Drag the slider to see the transformation. We don't just post content; we build empires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Case Study 1 */}
          <AnimatedSection delay={0} className="flex flex-col gap-6">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" // Placeholder for "Before" IG profile
              afterImage="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop"  // Placeholder for "After" IG profile
              beforeLabel="Month 1: 2.4k Followers"
              afterLabel="Month 6: 142k Followers"
            />
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Fitness Brand Scaling</h3>
              <p className="text-white/60 text-sm mb-4">Transforming a local gym into a national online fitness brand through viral short-form content and strategic community building.</p>
              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1">
                  <div className="text-blue font-bold text-xl">+5,800%</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Follower Growth</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1">
                  <div className="text-blue font-bold text-xl">12M+</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Organic Views</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Case Study 2 */}
          <AnimatedSection delay={200} className="flex flex-col gap-6">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1000&auto=format&fit=crop" // Placeholder for "Before" E-commerce
              afterImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop"  // Placeholder for "After" E-commerce
              beforeLabel="Pre-Launch: 0 Sales"
              afterLabel="Day 30: ₹1.2M Revenue"
            />
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">D2C E-commerce Launch</h3>
              <p className="text-white/60 text-sm mb-4">A complete go-to-market strategy leveraging high-converting UGC ads and a highly optimized landing page funnel.</p>
              <div className="flex gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1">
                  <div className="text-cosmic-gold font-bold text-xl">4.2x</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">ROAS</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex-1">
                  <div className="text-cosmic-gold font-bold text-xl">₹1.2M</div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Revenue Generated</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
