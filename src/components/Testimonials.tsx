import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export function Testimonials() {
  return (
    <section className="py-16 md:py-[100px] bg-[#F0F4FF] relative overflow-hidden">
      {/* Cosmic Purple Haze */}
      <div className="absolute inset-0 bg-cosmic-purple/4 pointer-events-none z-0"></div>
      
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <span className="font-mono text-blue uppercase tracking-widest text-xs mb-4 block text-center md:text-left">
          WHAT CLIENTS SAY
        </span>
        <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-black font-bold text-center md:text-left">
          Real results. Real <span className="text-blue">words.</span>
        </h2>

        <div className="mt-12 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 gap-6 md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:pb-0">
          
          <AnimatedSection delay={0} className="snap-center shrink-0 w-[85%] md:w-auto bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full">
            <div className="font-display text-[72px] text-blue leading-[0.5] mb-4">"</div>
            <div className="text-cosmic-gold tracking-[2px] mb-4">★★★★★</div>
            <p className="text-[16px] italic text-navy flex-grow mb-6">
              "Vyrn completely transformed how our restaurant shows up online. Within 6 weeks our reels were getting 50,000 views and new customers were mentioning Instagram when they walked in."
            </p>
            <div className="h-px bg-gray-100 mb-4"></div>
            <div className="font-display font-bold text-[16px]">Rahul M.</div>
            <div className="text-[13px] text-gray-500">Restaurant Owner</div>
          </AnimatedSection>

          <AnimatedSection delay={100} className="snap-center shrink-0 w-[85%] md:w-auto bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full">
            <div className="font-display text-[72px] text-blue leading-[0.5] mb-4">"</div>
            <div className="text-cosmic-gold tracking-[2px] mb-4">★★★★★</div>
            <p className="text-[16px] italic text-navy flex-grow mb-6">
              "I was skeptical about spending on social media. Vyrn changed my mind in the first month. My coaching program went from 3 inquiries a week to 20. The reels they make actually convert."
            </p>
            <div className="h-px bg-gray-100 mb-4"></div>
            <div className="font-display font-bold text-[16px]">Priya S.</div>
            <div className="text-[13px] text-gray-500">Online Coach</div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="snap-center shrink-0 w-[85%] md:w-auto bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full">
            <div className="font-display text-[72px] text-blue leading-[0.5] mb-4">"</div>
            <div className="text-cosmic-gold tracking-[2px] mb-4">★★★★★</div>
            <p className="text-[16px] italic text-navy flex-grow mb-6">
              "The website they built for my brand looks like something a Fortune 500 company would have. My competitors have no idea how a local business has a site like this."
            </p>
            <div className="h-px bg-gray-100 mb-4"></div>
            <div className="font-display font-bold text-[16px]">Arjun K.</div>
            <div className="text-[13px] text-gray-500">E-commerce Brand</div>
          </AnimatedSection>

        </div>
        
        {/* Mobile Dots */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          <div className="w-2 h-2 rounded-full bg-blue"></div>
          <div className="w-2 h-2 rounded-full bg-blue/30"></div>
          <div className="w-2 h-2 rounded-full bg-blue/30"></div>
        </div>
      </div>
    </section>
  );
}
