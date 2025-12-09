import React from 'react';
import { Construction, ArrowLeft, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const CaseStudies: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-brand-dark py-5 text-center text-white position-relative overflow-hidden">
        <div className="hero-bg-pattern"></div>
        <div className="container position-relative z-1 py-4">
          <Reveal>
            <h1 className="display-4 fw-bold mb-3">Case Studies</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead text-blue-200">Real World Success Stories</p>
          </Reveal>
        </div>
      </div>

      <div className="bg-brand-light min-vh-50 d-flex flex-column align-items-center justify-content-center text-center p-4 py-5">
        <Reveal>
          <div className="bg-white p-5 rounded-5 shadow-lg mx-auto border border-light" style={{ maxWidth: '800px' }}>
             <div className="position-relative mb-4 d-inline-block">
               <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto text-brand-primary" style={{ width: '96px', height: '96px' }}>
                 <Construction size={48} className="animate-pulse" />
               </div>
               <div className="position-absolute bottom-0 end-0 bg-brand-accent text-white p-2 rounded-circle border border-4 border-white">
                 <Clock size={20} />
               </div>
             </div>
             
             <h2 className="h2 fw-bold text-brand-dark mb-3">Site Under Development</h2>
             <div className="bg-brand-accent mx-auto rounded-pill mb-4" style={{ width: '80px', height: '4px' }}></div>
             
             <p className="text-secondary fs-5 mb-5 mx-auto lh-base" style={{ maxWidth: '500px' }}>
               We are currently curating detailed case studies to showcase our digital transformation success stories. 
               This section will be available soon with in-depth analysis of how we help businesses grow.
             </p>
             
             <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
               <Link to="/" className="btn btn-light rounded-pill px-4 py-3 fw-bold d-flex align-items-center gap-2">
                 <ArrowLeft size={18} /> Return Home
               </Link>
               <Link to="/contact" className="btn btn-brand-accent rounded-pill px-4 py-3 fw-bold shadow hover-translate-up">
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