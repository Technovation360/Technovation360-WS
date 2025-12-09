import React from 'react';
import { WHY_CHOOSE_US_POINTS, INDUSTRIES, ICON_MAP } from '../constants';
import { Star, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const WhyChooseUs: React.FC = () => {
  return (
    <div>
       {/* Header */}
       <div className="bg-brand-dark py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h1 className="text-4xl font-extrabold mb-4">Why Choose TechNovation360?</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-blue-200">Excellence in every solution we deliver.</p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Core Differentiators */}
        <section className="mb-20">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark">Our Core Differentiators</h2>
              <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
             {WHY_CHOOSE_US_POINTS.map((point, index) => (
               <Reveal key={index} delay={index * 100}>
                 <div className="flex gap-4 bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-primary hover:translate-x-1 transition-transform h-full">
                   <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-brand-primary font-bold">
                        {index + 1}
                      </div>
                   </div>
                   <p className="text-gray-700 font-medium leading-relaxed">{point}</p>
                 </div>
               </Reveal>
             ))}
          </div>
        </section>

        {/* Industries */}
        <section className="bg-gray-50 py-16 rounded-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark">Industries Experienced In</h2>
              <p className="text-gray-600 mt-2">Tailored solutions for diverse sectors.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
             {INDUSTRIES.map((ind, idx) => {
               const Icon = ICON_MAP[ind.iconName] || Briefcase;
               return (
                 <Reveal key={idx} delay={idx * 100}>
                   <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all text-center group cursor-default h-full">
                      <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center text-gray-500 mb-4 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                        <Icon size={32} />
                      </div>
                      <h3 className="font-bold text-gray-800 group-hover:text-brand-primary transition-colors">{ind.name}</h3>
                   </div>
                 </Reveal>
               );
             })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
           <Reveal delay={200}>
             <div className="bg-gradient-to-r from-brand-dark to-blue-800 rounded-2xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
               <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-4">Partner with Us for Success</h2>
                 <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                   Experience the difference of working with a partner who truly understands your business goals.
                 </p>
                 <Link to="/contact" className="inline-block bg-brand-accent hover:bg-white hover:text-brand-accent text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg">
                   Schedule Your Consultation
                 </Link>
               </div>
             </div>
           </Reveal>
        </section>

      </div>
    </div>
  );
};

export default WhyChooseUs;