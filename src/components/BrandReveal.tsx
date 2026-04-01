import React, { useEffect, useState } from 'react';

export function BrandReveal() {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('vyrn_reveal_played');
    if (hasPlayed) {
      setIsVisible(false);
      return;
    }

    sessionStorage.setItem('vyrn_reveal_played', 'true');

    setTimeout(() => setStage(1), 300); // Expand dot
    setTimeout(() => setStage(2), 600); // Show text
    setTimeout(() => setStage(3), 1400); // Fade out
    setTimeout(() => setIsVisible(false), 1800); // Remove from DOM
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-400 ${stage === 3 ? 'opacity-0' : 'opacity-100'}`}>
      {stage >= 0 && stage < 2 && (
        <div 
          className="w-2 h-2 bg-blue rounded-full transition-transform duration-300 ease-in-out"
          style={{ transform: stage === 1 ? 'scale(300)' : 'scale(1)' }}
        />
      )}
      {stage >= 2 && (
        <div className="absolute inset-0 bg-blue flex items-center justify-center">
          <div className="flex gap-2 font-display font-bold text-[72px] text-white tracking-widest">
            {['V', 'Y', 'R', 'N'].map((letter, i) => (
              <span 
                key={i} 
                className="animate-spring-in" 
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
