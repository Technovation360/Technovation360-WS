import React from 'react';
import { Construction, ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const CaseStudies: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-brand-dark py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h1 className="text-4xl font-extrabold mb-4">Case Studies</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-blue-200">Real World Success Stories</p>
          </Reveal>
        </div>
      </div>

      <div className="min-h-[60vh] bg-gray-50 flex flex-col items-center justify-center text-center px-4 py-16">
        <Reveal>
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl max-w-3xl border border-gray-100 mx-auto">
             <div className="relative mb-8 inline-block">
               <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mx-auto text-brand-primary animate-pulse">
                 <Construction size={48} />
               </div>
               <div className="absolute -bottom-2 -right-2 bg-brand-accent text-white p-2 rounded-full border-4 border-white">
                 <Clock size={20} />
               </div>
             </div>
             
             <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Site Under Development</h2>
             <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-6"></div>
             
             <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
               We are currently curating detailed case studies to showcase our digital transformation success stories. 
               This section will be available soon with in-depth analysis of how we help businesses grow.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Link to="/" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors">
                 <ArrowLeft size={18} /> Return Home
               </Link>
               <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                 Contact Us for Portfolio
               </Link>
             </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default CaseStudies;