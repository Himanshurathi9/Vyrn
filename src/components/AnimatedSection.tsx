import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function AnimatedSection({ children, className = '', delay = 0, as: Component = 'div', style = {}, ...props }: { children: React.ReactNode, className?: string, delay?: number, as?: any, style?: React.CSSProperties, [key: string]: any }) {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <Component 
      ref={ref} 
      className={`fade-up ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
