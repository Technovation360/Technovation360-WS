import React, { useEffect, useState, useRef } from 'react';
import { Briefcase, Clock } from 'lucide-react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  icon: React.ElementType;
}

const StatItem: React.FC<StatProps> = ({ end, label, suffix = '', icon: Icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const totalFrames = duration / 16;
      const increment = end / totalFrames;
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center p-4 rounded-4 hover-translate-up transition-all h-100">
      <div className="d-inline-flex align-items-center justify-content-center bg-white bg-opacity-10 text-brand-accent rounded-circle mb-3 shadow border border-white border-opacity-10" style={{ width: '64px', height: '64px' }}>
        <Icon size={32} />
      </div>
      <div className="fw-bolder text-white mb-2 display-5">
        {count}{suffix}
      </div>
      <div className="text-blue-200 fw-bold text-uppercase small ls-1">
        {label}
      </div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Years Experience', end: 16, suffix: '+', icon: Clock },
    { label: 'Projects Delivered', end: 200, suffix: '+', icon: Briefcase },
  ];

  return (
    <section className="py-5 gradient-bg position-relative overflow-hidden border-top border-bottom border-white border-opacity-10">
      <div className="hero-bg-pattern"></div>
      
      <div className="container position-relative z-1">
        <div className="row g-4 justify-content-center">
          {stats.map((stat, idx) => (
             <div className="col-6 col-md-4" key={idx}>
               <StatItem {...stat} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;