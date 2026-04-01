import React from 'react';
import OmSymbol from './OmSymbol';

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-10 border-t border-white/10">
      <div className="w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-20">
        
        {/* Cosmic Closing Statement */}
        <div className="flex flex-col items-center justify-center mb-20 text-center">
          <h2 className="font-display text-[clamp(28px,4vw,40px)] text-white font-bold mb-12">
            Stop posting. <span className="text-blue">Start dominating.</span>
          </h2>
          
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-16 h-[1px] bg-white/20"></div>
            <OmSymbol className="w-12 h-12 text-blue opacity-40" />
            <div className="w-16 h-[1px] bg-white/20"></div>
          </div>
          
          <div className="font-display font-extrabold text-2xl text-white tracking-widest mb-6">
            VYRN
          </div>
          
          <p className="font-mono text-white/30 text-[12px] md:text-[14px]">
            <span className="font-cosmic text-cosmic-gold/50 mr-2">ॐ</span> असतो मा सद्गमय — Lead us from the unreal to the real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 border-t border-white/10 pt-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="font-display font-extrabold text-3xl text-white mb-6 inline-block">
              VYRN<span className="text-blue">.</span>
            </a>
            <p className="text-white/50 text-[14px] max-w-[250px] mb-6">
              We build brands the algorithm cannot ignore. Reel management, web design, and Meta ads.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-blue hover:text-white transition-colors">
                  <span className="sr-only">{social}</span>
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Reel Management', 'Web Design', 'Meta Ads', 'SEO Optimization', 'Brand Strategy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-[14px]">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Case Studies', 'Pricing', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-[14px]">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-[14px]">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-[13px]">
            © {new Date().getFullYear()} VYRN Media. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-[13px]">
            Designed with <span className="text-blue">♥</span> in India
          </div>
        </div>
      </div>
    </footer>
  );
}
