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
      // Duration of animation in ms
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
    <div ref={ref} className="text-center p-6 rounded-xl group hover:-translate-y-1 transition-transform duration-300">
      <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300 backdrop-blur-sm border border-white/10 shadow-lg">
        <Icon size={32} />
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-blue-200 font-medium uppercase tracking-wider text-sm">
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
    <section className="py-16 gradient-bg relative overflow-hidden border-y border-white/10">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
             <StatItem key={idx} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;