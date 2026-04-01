import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export function ContactBanner() {
  return (
    <section id="contact" className="py-16 md:py-[100px] bg-blue relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <AnimatedSection delay={0} className="bg-navy rounded-[40px] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
          
          <h2 className="font-display text-[clamp(40px,6vw,64px)] leading-[1.1] text-white font-bold mb-6 relative z-10">
            Ready to break the <br className="hidden md:block"/>
            <span className="text-blue text-shadow-glow">algorithm?</span>
          </h2>
          
          <p className="text-white/70 text-[18px] max-w-[600px] mx-auto mb-10 relative z-10">
            Stop posting into the void. Let's build a brand that commands attention and drives revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a href="mailto:hello@vyrn.com" className="inline-flex items-center justify-center h-16 px-10 rounded-full font-display font-bold text-navy bg-white transition-all duration-300 ease-spring hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_30px_rgba(255,255,255,0.3)] text-[18px]">
              Book a Discovery Call
            </a>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-white/50 text-[14px] relative z-10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Currently accepting 3 new clients this month
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
