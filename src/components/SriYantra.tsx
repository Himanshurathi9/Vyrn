import React from 'react';

interface SriYantraProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const SriYantra: React.FC<SriYantraProps> = ({ className = '', ...props }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="0.5" 
      className={className}
      {...props}
    >
      {/* Outer Bhupura (Concentric Squares) */}
      <rect x="10" y="10" width="180" height="180" />
      <rect x="15" y="15" width="170" height="170" />
      <rect x="20" y="20" width="160" height="160" />
      
      {/* T-shaped gates */}
      <path d="M 85 10 L 85 0 L 115 0 L 115 10" />
      <path d="M 85 190 L 85 200 L 115 200 L 115 190" />
      <path d="M 10 85 L 0 85 L 0 115 L 10 115" />
      <path d="M 190 85 L 200 85 L 200 115 L 190 115" />

      {/* Outer Circles */}
      <circle cx="100" cy="100" r="75" />
      <circle cx="100" cy="100" r="65" />
      
      {/* 16 Petal Lotus (Simplified as radiating lines for line art) */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line 
            key={`petal16-${i}`}
            x1="100" y1="35" 
            x2="100" y2="25" 
            transform={`rotate(${angle} 100 100)`} 
          />
        );
      })}

      {/* 8 Petal Lotus */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <line 
            key={`petal8-${i}`}
            x1="100" y1="45" 
            x2="100" y2="35" 
            transform={`rotate(${angle} 100 100)`} 
          />
        );
      })}

      {/* Inner Triangles (Simplified representation of the 9 interlocking triangles) */}
      {/* Upward Triangles (Shiva) */}
      <polygon points="100,45 60,120 140,120" />
      <polygon points="100,55 70,110 130,110" />
      <polygon points="100,65 80,100 120,100" />
      <polygon points="100,75 85,95 115,95" />

      {/* Downward Triangles (Shakti) */}
      <polygon points="100,155 50,80 150,80" />
      <polygon points="100,145 65,90 135,90" />
      <polygon points="100,135 75,95 125,95" />
      <polygon points="100,125 85,100 115,100" />
      <polygon points="100,115 90,105 110,105" />

      {/* Central Bindu */}
      <circle cx="100" cy="100" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
};

export default SriYantra;
