import React, { useEffect, useState } from 'react';

export function LiquidCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('button') || target.closest('a')) {
        setIsHoveringButton(true);
      } else {
        setIsHoveringButton(false);
      }

      if (target.closest('.group') || target.closest('.card-hover')) {
        setIsHoveringCard(true);
      } else {
        setIsHoveringCard(false);
      }

      if (target.tagName.match(/^H[1-6]$/) || target.closest('h1, h2, h3, h4, h5, h6')) {
        const heading = target.closest('h1, h2, h3, h4, h5, h6') as HTMLElement;
        const text = heading.innerText;
        if (!heading.dataset.wrapped) {
          heading.dataset.wrapped = 'true';
          heading.innerHTML = text.split('').map(char => 
            `<span class="transition-colors duration-500 hover:text-blue hover:text-shadow-glow">${char}</span>`
          ).join('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let animationFrame: number;
    const updateCursor = () => {
      setPos(prev => ({
        x: prev.x + (targetPos.x - prev.x) * 0.15,
        y: prev.y + (targetPos.y - prev.y) * 0.15
      }));
      animationFrame = requestAnimationFrame(updateCursor);
    };
    animationFrame = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, [targetPos, isVisible]);

  if (!isVisible || window.innerWidth < 1024) return null;

  return (
    <div 
      className="fixed top-0 left-0 pointer-events-none z-[10000]"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    >
      {isHoveringCard ? (
        <div className="relative -left-1/2 -top-1/2 w-6 h-6">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-blue shadow-[0_0_5px_#0047FF]"></div>
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-blue shadow-[0_0_5px_#0047FF]"></div>
        </div>
      ) : isHoveringButton ? (
        <div className="relative -left-1/2 -top-1/2 w-[60px] h-[60px] rounded-full border border-blue shadow-[0_0_10px_rgba(0,71,255,0.5)] transition-all duration-300"></div>
      ) : (
        <div className="relative -left-1/2 -top-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-blue to-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
      )}
    </div>
  );
}
