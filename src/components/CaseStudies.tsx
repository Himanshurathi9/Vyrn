import React, { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

const CASE_STUDIES = [
  {
    title: "How we scaled a local cafe to 1M+ organic views in 30 days.",
    metric: "1M+",
    metricLabel: "Organic Views",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    tags: ["Reels", "Local Business"]
  },
  {
    title: "E-commerce brand sees 300% ROAS on first Meta Ads campaign.",
    metric: "300%",
    metricLabel: "ROAS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["Meta Ads", "D2C"]
  },
  {
    title: "Fitness coach books out 3 months of clients from one viral reel.",
    metric: "3 Months",
    metricLabel: "Fully Booked",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
    tags: ["Personal Brand", "Reels"]
  }
];

export function CaseStudies() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-16 md:py-[100px] bg-white">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="font-mono text-blue uppercase tracking-widest text-xs mb-4 block">
              CASE STUDIES
            </span>
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[1.1] text-black font-bold">
              Proof is in the <span className="text-blue">data.</span>
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center justify-center h-12 px-6 rounded-full font-display font-bold text-navy bg-transparent border-2 border-navy transition-all duration-300 hover:bg-navy hover:text-white">
            View All Work &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <AnimatedSection 
              key={i} 
              delay={i * 100} 
              className="group relative rounded-3xl overflow-hidden cursor-pointer h-[400px] md:h-[500px]"
              as="div"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${study.image})` }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex gap-2 mb-4">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-[11px] font-bold tracking-wider uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-display text-[24px] text-white font-bold leading-tight mb-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {study.title}
                </h3>
                
                <div className="flex items-center justify-between border-t border-white/20 pt-4 transform transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:translate-y-0">
                  <div>
                    <div className="font-display text-[32px] font-bold text-blue leading-none">{study.metric}</div>
                    <div className="text-[12px] text-white/70 uppercase tracking-wider">{study.metricLabel}</div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue">
                    <span className="text-navy group-hover:text-white transition-colors">→</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <a href="#contact" className="md:hidden mt-8 w-full inline-flex items-center justify-center h-12 px-6 rounded-full font-display font-bold text-navy bg-transparent border-2 border-navy transition-all duration-300 hover:bg-navy hover:text-white">
          View All Work &rarr;
        </a>
      </div>
    </section>
  );
}
