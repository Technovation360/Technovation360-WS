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
        if (ref.current) observer.unobserve(ref.current);
      }
    }, { 
      threshold: 0.1, 
      rootMargin: "0px 0px -50px 0px"
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  const getVariantClasses = () => {
    if (isVisible) {
      switch (variant) {
        case 'zoom-in': return 'reveal-visible-zoom-in';
        case 'fade-in': return 'reveal-visible-fade-in';
        case 'fade-up': default: return 'reveal-visible-fade-up';
      }
    } else {
      switch (variant) {
        case 'zoom-in': return 'reveal-hidden-zoom-in';
        case 'fade-in': return 'reveal-hidden-fade-in';
        case 'fade-up': default: return 'reveal-hidden-fade-up';
      }
    }
  };

  return (
    <div 
      ref={ref} 
      style={{ width, transitionDelay: `${delay}ms` }}
      className={`reveal-base ${getVariantClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;