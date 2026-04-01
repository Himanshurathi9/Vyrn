import React from 'react';

interface OmSymbolProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const OmSymbol: React.FC<OmSymbolProps> = ({ className = '', ...props }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      <path d="M 35 45 C 35 30, 55 30, 55 45 C 55 55, 45 60, 45 70 C 45 80, 55 85, 65 80 C 75 75, 75 60, 65 55 C 55 50, 45 50, 35 45 Z" />
      <path d="M 65 55 C 75 50, 85 55, 85 65 C 85 75, 75 80, 65 80" />
      <path d="M 60 25 C 70 15, 85 15, 95 25" />
      <circle cx="77.5" cy="10" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
};

export default OmSymbol;
