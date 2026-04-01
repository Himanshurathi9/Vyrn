import React, { useState, useRef, useEffect } from 'react';
import { AnimatedSection } from './AnimatedSection';
import Trishul from './Trishul';

export function Pricing() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [beamStyle, setBeamStyle] = useState({ top: 0, opacity: 0 });

  const handleFeatureHover = (e: React.MouseEvent<HTMLLIElement>, featureName: string) => {
    if (!containerRef.current) return;
    
    // Only activate on desktop
    if (window.innerWidth < 1024) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const itemRect = e.currentTarget.getBoundingClientRect();
    
    // Calculate relative position within the container
    const relativeTop = itemRect.top - containerRect.top + (itemRect.height / 2);

    setBeamStyle({
      top: relativeTop,
      opacity: 1
    });
    setHoveredFeature(featureName);
  };

  const handleMouseLeave = () => {
    setBeamStyle(prev => ({ ...prev, opacity: 0 }));
    setHoveredFeature(null);
  };

  return (
    <section id="packages" className="py-16 md:py-[100px] bg-white relative overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <span className="font-mono text-blue uppercase tracking-widest text-xs mb-4 block text-center md:text-left">
          PACKAGES
        </span>
        <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.1] text-black font-bold text-center md:text-left">
          Choose Your <span className="text-blue">Orbit.</span>
        </h2>
        <p className="text-gray-500 text-[17px] mt-4 max-w-[600px] text-center md:text-left mx-auto md:mx-0">
          No lock-ins. No fluff. Pure growth — pick the plan that matches your ambition.
        </p>

        <div 
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12 items-start relative"
        >
          
          {/* The Comparison Beam */}
          <div 
            className="hidden xl:block absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue to-transparent z-0 pointer-events-none transition-all duration-300 ease-out"
            style={{ 
              top: `${beamStyle.top}px`, 
              opacity: beamStyle.opacity,
              boxShadow: '0 0 10px rgba(0, 71, 255, 0.5), 0 0 20px rgba(0, 71, 255, 0.3)'
            }}
          />

          {/* Plan 1 */}
          <AnimatedSection delay={0} className="bg-white rounded-3xl p-6 md:p-8 border-l-4 border-blue-400 shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex flex-col h-full relative z-10 transition-transform duration-300 hover:-translate-y-2">
            <div className="flex-grow">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider mb-4 bg-blue-50 text-blue-500">FOUNDATION</span>
              <h3 className="font-display text-[20px] font-bold mb-2">Starter Growth</h3>
              <div className="font-display text-[48px] font-bold text-blue leading-none mb-1">₹6,000<span className="font-sans text-[18px] text-gray-400 font-normal">/mo</span></div>
              <p className="text-[14px] text-gray-500 mb-6 min-h-[42px] flex items-start gap-2">
                <Trishul className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                Best For Small Businesses Starting Online
              </p>
              
              <div className="h-px bg-gray-100 my-6"></div>
              <div className="text-[12px] tracking-widest text-gray-700 mb-4 uppercase">What You Get:</div>
              
              <ul className="space-y-3 mb-6">
                {['12 High Quality Posts', '4 Reels (Basic Editing)', 'Scriptwriting for Reels', 'Captions + Hashtags', 'Content Posting', 'Basic Page Optimization', 'Monthly Content Plan', 'Basic Growth Strategy'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-blue font-bold' : 'text-navy'}`}
                  >
                    <span className="text-blue font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="w-full inline-flex items-center justify-center h-12 px-6 rounded-full font-display font-bold text-blue bg-transparent border-2 border-blue transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-0.5 mt-6">
              Get Started &rarr;
            </a>
          </AnimatedSection>

          {/* Plan 2 - Featured */}
          <AnimatedSection delay={100} className="bg-gradient-to-b from-[#1A3FFF] to-[#0030DD] text-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,71,255,0.2)] flex flex-col h-full relative xl:-translate-y-4 z-20 transition-transform duration-300 hover:-translate-y-6">
            <div className="absolute inset-[10%] bg-blue blur-[40px] -z-10 opacity-50"></div>
            <span className="absolute -top-3 right-6 inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider bg-cosmic-gold/20 text-cosmic-gold backdrop-blur-md border border-cosmic-gold/30">MOST POPULAR <span className="text-cosmic-gold">★</span></span>
            
            <div className="flex-grow">
              <h3 className="font-display text-[20px] font-bold mb-2 mt-2">Growth Performance</h3>
              <div className="font-display text-[48px] font-bold text-white leading-none mb-1">₹10,000<span className="font-sans text-[18px] text-white/70 font-normal">/mo</span></div>
              <p className="text-[14px] text-white/70 mb-6 min-h-[42px] flex items-start gap-2">
                <Trishul className="w-4 h-4 text-cosmic-gold shrink-0 mt-0.5" />
                Best For Businesses Wanting Growth
              </p>
              
              <div className="h-px bg-white/20 my-6"></div>
              <div className="text-[12px] tracking-widest text-white/90 mb-4 uppercase">What You Get:</div>
              
              <ul className="space-y-3 mb-4">
                {['20 High Quality Posts', '8 Professional Reels', 'Professional Video Editing Thumbnails', 'Google Page Management (Guided)', 'AI Posts and Videos (3 AI videos)', 'Competitor Analysis', 'Monthly Strategy Call'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-cosmic-gold font-bold' : 'text-white'}`}
                  >
                    <span className="text-amber-100 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>

              <span className="inline-block px-2 py-1 rounded text-[11px] font-bold bg-white/20 text-white mt-4 mb-2">⚡ Performance Marketing</span>
              <ul className="space-y-3 mb-4">
                {['Meta Ads Setup', 'Audience Research', 'Campaign Structure'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-cosmic-gold font-bold' : 'text-white'}`}
                  >
                    <span className="text-amber-100 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>

              <span className="inline-block px-2 py-1 rounded text-[11px] font-bold bg-amber-100 text-amber-600 mt-2 mb-2">🎁 BONUS</span>
              <ul className="space-y-3">
                <li 
                  onMouseEnter={(e) => handleFeatureHover(e, 'Free Landing Page Website')}
                  className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === 'Free Landing Page Website' ? 'text-cosmic-gold font-bold' : 'text-white'}`}
                >
                  <span className="text-amber-100 font-bold">✓</span> Free Landing Page Website
                </li>
              </ul>
            </div>
            <a href="#contact" className="w-full inline-flex items-center justify-center h-12 px-6 rounded-full font-display font-bold text-blue bg-white transition-all duration-300 hover:bg-blue-50 hover:-translate-y-0.5 mt-6">
              Get Started &rarr;
            </a>
          </AnimatedSection>

          {/* Plan 3 */}
          <AnimatedSection delay={200} className="bg-white rounded-3xl p-6 md:p-8 border-l-4 border-indigo-600 shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex flex-col h-full relative z-10 transition-transform duration-300 hover:-translate-y-2">
            <div className="flex-grow">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider mb-4 bg-indigo-50 text-indigo-600">DOMINATION</span>
              <h3 className="font-display text-[20px] font-bold mb-2">Business Scaling</h3>
              <div className="font-display text-[48px] font-bold text-blue leading-none mb-1">₹15,000<span className="font-sans text-[18px] text-gray-400 font-normal">/mo</span></div>
              <p className="text-[14px] text-gray-500 mb-6 min-h-[42px] flex items-start gap-2">
                <Trishul className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                Best For Serious Businesses
              </p>
              
              <div className="h-px bg-gray-100 my-6"></div>
              <div className="text-[12px] tracking-widest text-gray-700 mb-4 uppercase">What You Get:</div>
              
              <ul className="space-y-3 mb-4">
                {['25 High Quality Posts', '14 Professional Reels', 'Professional Editing', 'BTS Shooting (5 reels)', 'AI Content (6 AI reels)', 'Reel Automation', 'Influencer Marketing (1)'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-blue font-bold' : 'text-navy'}`}
                  >
                    <span className="text-blue font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>

              <span className="inline-block px-2 py-1 rounded text-[11px] font-bold bg-blue-50 text-blue mt-4 mb-2">⚡ Performance Marketing</span>
              <ul className="space-y-3 mb-4">
                {['Meta Ads Management', 'Campaign Optimization', 'Weekly Monitoring'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-blue font-bold' : 'text-navy'}`}
                  >
                    <span className="text-blue font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>

              <span className="inline-block px-2 py-1 rounded text-[11px] font-bold bg-amber-100 text-amber-600 mt-2 mb-2">🎁 BONUS</span>
              <ul className="space-y-3">
                {['Free Business Website', 'Growth Strategy Plan'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-blue font-bold' : 'text-navy'}`}
                  >
                    <span className="text-blue font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="w-full inline-flex items-center justify-center h-12 px-6 rounded-full font-display font-bold text-blue bg-transparent border-2 border-blue transition-all duration-300 hover:bg-blue hover:text-white hover:-translate-y-0.5 mt-6">
              Get Started &rarr;
            </a>
          </AnimatedSection>

          {/* Plan 4 */}
          <AnimatedSection delay={300} className="bg-white rounded-3xl p-6 md:p-8 border-l-4 border-purple-500 shadow-[0_4px_6px_rgba(0,0,0,0.05)] flex flex-col h-full relative z-10 transition-transform duration-300 hover:-translate-y-2" style={{ borderImage: 'linear-gradient(to bottom, #3B82F6, #8B5CF6) 1' }}>
            <div className="flex-grow">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider mb-4 bg-purple-50 text-purple-600">LEGEND</span>
              <h3 className="font-display text-[20px] font-bold mb-2">Premium Brand Authority</h3>
              <div className="font-display text-[48px] font-bold text-blue leading-none mb-1">₹23,000<span className="font-sans text-[18px] text-gray-400 font-normal">/mo</span></div>
              <p className="text-[14px] text-gray-500 mb-6 min-h-[42px] flex items-start gap-2">
                <Trishul className="w-4 h-4 text-blue shrink-0 mt-0.5" />
                Best For Maximum Growth
              </p>
              
              <div className="h-px bg-gray-100 my-6"></div>
              <div className="text-[12px] tracking-widest text-gray-700 mb-4 uppercase">What You Get:</div>
              
              <ul className="space-y-3 mb-4">
                {['35 Premium Posts', '20 Professional Reels', 'Professional Editing', 'BTS Shooting (12 reels)', 'AI Content (12 AI reels)', 'Influencer Marketing (2)', 'Google Page Optimization', 'SEO'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-blue font-bold' : 'text-navy'}`}
                  >
                    <span className="text-blue font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>

              <span className="inline-block px-2 py-1 rounded text-[11px] font-bold bg-blue-50 text-blue mt-4 mb-2">⚡ Performance Marketing</span>
              <ul className="space-y-3 mb-4">
                {['Full Meta Ads Management', 'Retargeting Setup', 'Scaling Strategy'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-blue font-bold' : 'text-navy'}`}
                  >
                    <span className="text-blue font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>

              <span className="inline-block px-2 py-1 rounded text-[11px] font-bold bg-amber-100 text-amber-600 mt-2 mb-2">🎁 BONUS</span>
              <ul className="space-y-3">
                {['Professional Website (3 designs)', 'Brand Positioning', 'Monthly Report'].map((item, i) => (
                  <li 
                    key={i} 
                    onMouseEnter={(e) => handleFeatureHover(e, item)}
                    className={`text-[14px] flex items-start gap-2 transition-colors duration-200 cursor-default ${hoveredFeature === item ? 'text-blue font-bold' : 'text-navy'}`}
                  >
                    <span className="text-blue font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="w-full inline-flex items-center justify-center h-12 px-6 rounded-full font-display font-bold text-white bg-navy transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] mt-6">
              Get Started &rarr;
            </a>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
