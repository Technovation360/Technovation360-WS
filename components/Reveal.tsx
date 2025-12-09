import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  width?: "fit-content" | "100%";
  variant?: "fade-up" | "zoom-in" | "fade-in";
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  width = "100%",
  variant = "fade-up"
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Disconnect after triggering once for "enter only" animation
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { 
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px" // Trigger slightly before the bottom of the viewport
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect(); // Clean up on unmount
    };
  }, []);

  const getVariantClasses = () => {
    if (isVisible) return 'opacity-100 translate-y-0 scale-100';
    
    switch (variant) {
      case 'zoom-in':
        return 'opacity-0 scale-95';
      case 'fade-in':
        return 'opacity-0';
      case 'fade-up':
      default:
        return 'opacity-0 translate-y-12';
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ width, transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-1000 cubic-bezier(0.17, 0.55, 0.55, 1) ${getVariantClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;