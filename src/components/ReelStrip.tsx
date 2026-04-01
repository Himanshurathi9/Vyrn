import React from 'react';

export function ReelStrip() {
  const frames = [
    { type: 'metric', value: '1.2M Views' },
    { type: 'category', value: 'Restaurant Chain' },
    { type: 'bold', value: 'VIRAL' },
    { type: 'count', value: '8 Reels/mo' },
    { type: 'stat', value: '150% Growth' },
    { type: 'metric', value: '500K Likes' },
    { type: 'category', value: 'E-commerce' },
    { type: 'bold', value: 'DOMINATE' },
  ];

  return (
    <div className="w-full h-[140px] bg-[#0a0a0a] overflow-hidden relative flex items-center border-y border-white/5" style={{ perspective: '1000px' }}>
      <div className="flex w-[200%] animate-marquee" style={{ transform: 'rotateX(3deg)' }}>
        {[...frames, ...frames, ...frames].map((frame, i) => (
          <div key={i} className="flex-shrink-0 w-[240px] h-[100px] mx-2 relative bg-[#1a1a1a] rounded-sm border border-white/10 flex flex-col justify-between p-1">
            {/* Top Sprockets */}
            <div className="flex justify-between px-2">
              {[...Array(6)].map((_, j) => (
                <div key={`top-${j}`} className="w-3 h-2 bg-[#0a0a0a] rounded-sm"></div>
              ))}
            </div>
            
            {/* Content Frame */}
            <div className="flex-grow my-1 bg-[#222] rounded flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent pointer-events-none mix-blend-overlay"></div>
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>
              
              <span className={`font-display font-bold text-center z-10 ${
                frame.type === 'bold' ? 'text-blue text-2xl tracking-widest' :
                frame.type === 'metric' ? 'text-white text-xl' :
                'text-white/70 text-sm uppercase tracking-wider'
              }`}>
                {frame.value}
              </span>
            </div>

            {/* Bottom Sprockets */}
            <div className="flex justify-between px-2">
              {[...Array(6)].map((_, j) => (
                <div key={`bot-${j}`} className="w-3 h-2 bg-[#0a0a0a] rounded-sm"></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
