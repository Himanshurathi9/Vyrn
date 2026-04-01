import React from 'react';

interface ChakraDividerProps {
  className?: string;
  theme?: 'dark' | 'light';
}

const ChakraDivider: React.FC<ChakraDividerProps> = ({ className = '', theme = 'dark' }) => {
  const colors = [
    '#991B1B', // Red (Root)
    '#9A3412', // Orange (Sacral)
    '#854D0E', // Yellow (Solar Plexus)
    '#166534', // Green (Heart)
    '#1E40AF', // Blue (Throat)
    '#3730A3', // Indigo (Third Eye)
    '#6B21A8', // Purple (Crown)
  ];

  const baseOpacity = theme === 'dark' ? 'opacity-30' : 'opacity-20';
  const lineColor = theme === 'dark' ? 'bg-white' : 'bg-navy';

  return (
    <div className={`w-full flex justify-center items-center py-16 ${className}`}>
      <div className="relative flex items-center justify-between w-64">
        {/* Connecting Line */}
        <div className={`absolute left-0 right-0 h-[1px] ${lineColor} ${baseOpacity} z-0`} />
        
        {/* Chakra Dots */}
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 rounded-full z-10 relative"
            style={{ 
              backgroundColor: color,
              animation: `pulseWave 2s infinite`,
              animationDelay: `${index * 0.2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ChakraDivider;
