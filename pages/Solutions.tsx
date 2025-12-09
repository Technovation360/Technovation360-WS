import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SOLUTIONS_DATA, ICON_MAP } from '../constants';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

const Solutions: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section with Static Grid */}
      <div className="bg-brand-dark py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Solutions</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                Discover our comprehensive range of services designed to elevate your business.
                Select a solution below to learn more.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {SOLUTIONS_DATA.map((item) => {
                const Icon = ICON_MAP[item.iconName] || ArrowRight;
                return (
                  <button
                    key={item.slug}
                    onClick={() => scrollToSection(item.slug)}
                    className="bg-white/10 hover:bg-brand-accent backdrop-blur-sm border border-white/20 p-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3 group"
                  >
                    <Icon size={24} className="text-brand-accent group-hover:text-white" />
                    <span className="font-semibold text-sm md:text-base leading-tight">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Consolidated Content Sections */}
      <div className="bg-gray-50">
        {SOLUTIONS_DATA.map((item, idx) => {
          const Icon = ICON_MAP[item.iconName] || ArrowRight;
          const isEven = idx % 2 === 0;
          
          return (
            <div key={item.slug} id={item.slug} className={`py-20 border-b border-gray-200 ${isEven ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="container mx-auto px-4">
                <div className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="flex-1 space-y-6">
                    <Reveal>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-brand-light p-3 rounded-full text-brand-primary">
                          <Icon size={28} />
                        </div>
                        <h2 className="text-3xl font-bold text-brand-dark">{item.title}</h2>
                      </div>
                      {item.subtitle && <p className="text-xl text-brand-accent font-medium">{item.subtitle}</p>}
                    </Reveal>
                    
                    <Reveal delay={100}>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </Reveal>

                    <Reveal delay={200}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                        {item.features?.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </Reveal>
                  </div>

                  {/* Media Side */}
                  <div className="flex-1 w-full">
                    <Reveal delay={300} variant="zoom-in">
                       {item.lottieUrl ? (
                         <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100 relative">
                            <iframe 
                              src={item.lottieUrl} 
                              className="w-full h-full border-0 absolute inset-0"
                              title={`${item.title} Animation`}
                              loading="lazy"
                            ></iframe>
                         </div>
                       ) : (
                         <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                         </div>
                       )}
                    </Reveal>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Final CTA */}
      <div className="bg-brand-dark py-16 text-center">
         <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-3xl font-bold text-white mb-6">Need a custom solution?</h2>
              <div className="max-w-xl mx-auto">
                 <ContactForm />
              </div>
            </Reveal>
         </div>
      </div>
    </div>
  );
};

export default Solutions;