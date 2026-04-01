import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import Trishul from './Trishul';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-[100px] bg-navy">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        <h2 className="font-display text-[clamp(36px,5vw,56px)] text-center leading-[1.1] text-white font-bold">
          Three weapons.<br/>
          <span className="text-blue">One unstoppable brand.</span>
        </h2>
        <p className="text-white/60 text-center max-w-[600px] mx-auto mt-4 text-[15px] md:text-[16px]">
          We specialize so deeply in these three areas that we have made them an art form.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          
          <AnimatedSection delay={0} className="bg-white rounded-3xl p-8 md:p-10 relative transition-all duration-300 ease-spring hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,71,255,0.1)] overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue to-blue"></div>
            <span className="text-[32px] mb-6 inline-block">🎬</span>
            <h3 className="font-display text-[22px] text-navy mb-3 font-bold flex items-center gap-2">
              <Trishul className="w-4 h-4 text-blue" />
              Reel Management
            </h3>
            <p className="text-[15px] text-gray-500 mb-6">Professional short-form content designed to capture attention and build authority.</p>
            <ul className="space-y-3">
              {['On-site or remote monthly shooting', 'Trend-spotting and strategic planning', 'Professional editing and VFX', 'Custom music and voiceover', 'Captions, hashtags and engagement', 'AI-powered content creation', 'Monthly strategy call'].map((item, i) => (
                <li key={i} className="text-[14px] text-gray-700 flex items-start gap-2">
                  <span className="text-blue font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={100} className="bg-white rounded-3xl p-8 md:p-10 relative transition-all duration-300 ease-spring hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,71,255,0.1)] overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-indigo-600 to-blue"></div>
            <span className="text-[32px] mb-6 inline-block">🌐</span>
            <h3 className="font-display text-[22px] text-navy mb-3 font-bold flex items-center gap-2">
              <Trishul className="w-4 h-4 text-blue" />
              Web Design
            </h3>
            <p className="text-[15px] text-gray-500 mb-6">Premium, high-converting websites that turn your new audience into paying clients.</p>
            <ul className="space-y-3">
              {['Mobile-responsive design', 'SEO optimization', 'E-commerce integration', 'CMS setup (Webflow or WordPress)', 'Hosting and domain setup', 'Performance optimization', 'Ongoing support'].map((item, i) => (
                <li key={i} className="text-[14px] text-gray-700 flex items-start gap-2">
                  <span className="text-blue font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={200} className="bg-white rounded-3xl p-8 md:p-10 relative transition-all duration-300 ease-spring hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,71,255,0.1)] overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-500 to-blue"></div>
            <span className="text-[32px] mb-6 inline-block">📊</span>
            <h3 className="font-display text-[22px] text-navy mb-3 font-bold flex items-center gap-2">
              <Trishul className="w-4 h-4 text-blue" />
              Meta Ads
            </h3>
            <p className="text-[15px] text-gray-500 mb-6">Targeted paid campaigns to pour gasoline on your organic growth fire.</p>
            <ul className="space-y-3">
              {['Campaign strategy and setup', 'Audience research and targeting', 'Ad creative direction', 'A/B testing', 'Campaign optimization', 'Weekly performance reports', 'ROAS tracking'].map((item, i) => (
                <li key={i} className="text-[14px] text-gray-700 flex items-start gap-2">
                  <span className="text-blue font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
