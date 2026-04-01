import React from 'react';

interface MandalaRingProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const MandalaRing: React.FC<MandalaRingProps> = ({ className = '', ...props }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      className={className}
      {...props}
    >
      <circle cx="100" cy="100" r="90" />
      <circle cx="100" cy="100" r="85" />
      
      {/* 16 Petals */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <path 
            key={`petal-${i}`}
            d="M 100 15 C 110 30, 110 70, 100 85 C 90 70, 90 30, 100 15 Z"
            transform={`rotate(${angle} 100 100)`} 
          />
        );
      })}
    </svg>
  );
};

export default MandalaRing;
