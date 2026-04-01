import React from 'react';

const CLIENT_TYPES = [
  "RESTAURANT CHAINS", "ONLINE COACHES", "D2C BRANDS", "LOCAL BUSINESSES", 
  "PERSONAL BRANDS", "E-COMMERCE STORES", "REAL ESTATE AGENTS", "FITNESS STUDIOS",
  "COACHING INSTITUTES", "BOUTIQUE BRANDS"
];

export function Marquee() {
  return (
    <section className="bg-navy-light h-[52px] flex items-center overflow-hidden border-y border-white/5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2].map((group) => (
          <div key={group} className="flex items-center gap-6 pr-6" aria-hidden={group === 2}>
            {CLIENT_TYPES.map((type, i) => (
              <React.Fragment key={i}>
                <span className="font-sans uppercase tracking-widest text-white/70 text-[13px] font-medium">
                  {type}
                </span>
                <span className="text-blue text-[10px]">◆</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
