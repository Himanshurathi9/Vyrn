import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import MandalaRing from './MandalaRing';

const STACK_OPTIONS = [
  { id: 'reels', name: 'Reel Management', price: 10000, icon: '🎬' },
  { id: 'web', name: 'Web Design', price: 15000, icon: '🌐' },
  { id: 'ads', name: 'Meta Ads', price: 8000, icon: '📊' },
  { id: 'seo', name: 'SEO Optimization', price: 5000, icon: '🔍' },
];

export function StackBuilder() {
  const [selected, setSelected] = useState<string[]>(['reels']);

  const toggleOption = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const total = STACK_OPTIONS.filter(opt => selected.includes(opt.id)).reduce((sum, opt) => sum + opt.price, 0);

  return (
    <section className="py-16 md:py-[100px] bg-[#F8FAFC]">
      <div className="w-full max-w-[800px] mx-auto px-5 md:px-10">
        <AnimatedSection delay={0} className="text-center mb-12 relative z-10">
          <span className="font-mono text-blue uppercase tracking-widest text-xs mb-4 block">
            <span className="font-cosmic text-cosmic-gold/70 mr-1">ॐ</span> SYSTEM BOOT — INITIALIZE YOUR COSMIC STACK
          </span>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-black font-bold">
            Build your own <span className="text-blue">stack.</span>
          </h2>
          <p className="text-gray-500 text-[16px] mt-4">
            Don't need a full package? Select exactly what you need and get a custom estimate instantly.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="relative">
          {/* Mandala Ring Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] max-w-[800px] max-h-[800px] z-0 pointer-events-none flex items-center justify-center">
            <div className={`absolute inset-0 bg-blue/20 blur-[100px] rounded-full transition-all duration-1000 ${selected.length > 0 ? 'opacity-100' : 'opacity-0'}`}></div>
            <MandalaRing 
              className={`w-full h-full text-blue transition-all duration-1000 ${
                selected.length === STACK_OPTIONS.length 
                  ? 'opacity-100 animate-breathe animate-spin-fast' 
                  : selected.length > 0 
                    ? 'opacity-60 animate-spin-fast' 
                    : 'opacity-20 animate-spin-medium'
              }`} 
            />
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {STACK_OPTIONS.map(opt => {
              const isSelected = selected.includes(opt.id);
              return (
                <div 
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-4 ${isSelected ? 'border-blue bg-blue/5' : 'border-gray-100 hover:border-blue/30'}`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-blue bg-blue' : 'border-gray-300'}`}>
                    {isSelected && <span className="text-white text-[12px]">✓</span>}
                  </div>
                  <div>
                    <div className="font-display font-bold text-navy text-[16px] flex items-center gap-2">
                      <span>{opt.icon}</span> {opt.name}
                    </div>
                    <div className="text-gray-500 text-[13px] mt-1">+₹{opt.price.toLocaleString()}/mo</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-navy rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-white/60 text-[12px] uppercase tracking-widest mb-1">Estimated Total</div>
              <div className="font-display text-[36px] font-bold text-white leading-none">
                ₹{total.toLocaleString()}<span className="text-[16px] text-white/50 font-normal">/mo</span>
              </div>
            </div>
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full font-display font-bold text-navy bg-white transition-all duration-300 hover:scale-105">
              Claim This Stack
            </a>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
