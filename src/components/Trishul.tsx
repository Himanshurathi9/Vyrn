import React from 'react';

interface TrishulProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Trishul: React.FC<TrishulProps> = ({ className = '', ...props }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      {/* Central spear */}
      <line x1="12" y1="3" x2="12" y2="21" />
      {/* Outer prongs */}
      <path d="M 5 9 C 5 15, 19 15, 19 9" />
      <line x1="5" y1="9" x2="5" y2="5" />
      <line x1="19" y1="9" x2="19" y2="5" />
    </svg>
  );
};

export default Trishul;
