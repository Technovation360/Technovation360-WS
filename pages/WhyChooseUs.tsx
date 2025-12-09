import React from 'react';
import { WHY_CHOOSE_US_POINTS, INDUSTRIES, ICON_MAP } from '../constants';
import { Star, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

const WhyChooseUs: React.FC = () => {
  return (
    <div>
       {/* Header */}
       <div className="bg-brand-dark py-5 text-center text-white position-relative overflow-hidden">
        <div className="hero-bg-pattern"></div>
        <div className="container position-relative z-1 py-4">
          <Reveal>
            <h1 className="display-4 fw-bold mb-3">Why Choose TechNovation360?</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead text-blue-200">Excellence in every solution we deliver.</p>
          </Reveal>
        </div>
      </div>

      <div className="container py-5">
        
        {/* Core Differentiators */}
        <section className="mb-5 py-4">
          <Reveal>
            <div className="text-center mb-5">
              <h2 className="h2 fw-bold text-brand-dark">Our Core Differentiators</h2>
              <div className="bg-brand-accent mx-auto mt-3 rounded-pill" style={{ width: '60px', height: '4px' }}></div>
            </div>
          </Reveal>

          <div className="row g-4 justify-content-center">
             {WHY_CHOOSE_US_POINTS.map((point, index) => (
               <div className="col-12 col-md-6" key={index}>
                   <Reveal delay={index * 100}>
                    <div className="d-flex gap-3 bg-white p-4 rounded-4 shadow-sm border-start border-4 border-primary h-100 hover-translate-up transition-all">
                    <div className="flex-shrink-0">
                        <div className="bg-primary bg-opacity-10 text-brand-primary rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '40px', height: '40px' }}>
                            {index + 1}
                        </div>
                    </div>
                    <p className="text-secondary fw-medium mb-0">{point}</p>
                    </div>
                   </Reveal>
               </div>
             ))}
          </div>
        </section>

        {/* Industries */}
        <section className="bg-white py-5 px-3 rounded-5 shadow-sm my-5">
          <Reveal>
            <div className="text-center mb-5">
              <h2 className="h2 fw-bold text-brand-dark">Industries Experienced In</h2>
              <p className="text-secondary mt-2">Tailored solutions for diverse sectors.</p>
            </div>
          </Reveal>

          <div className="container">
            <div className="row g-4 justify-content-center">
                {INDUSTRIES.map((ind, idx) => {
                const Icon = ICON_MAP[ind.iconName] || Briefcase;
                return (
                    <div className="col-6 col-md-4 col-lg-2" key={idx}>
                        <Reveal delay={idx * 100}>
                            <div className="p-4 rounded-4 bg-light text-center h-100 hover-bg-brand-primary transition-all group">
                                <div className="bg-white rounded-circle mx-auto d-flex align-items-center justify-content-center text-secondary mb-3 shadow-sm" style={{ width: '64px', height: '64px' }}>
                                    <Icon size={32} />
                                </div>
                                <h3 className="h6 fw-bold text-dark mb-0">{ind.name}</h3>
                            </div>
                        </Reveal>
                    </div>
                );
                })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-5 text-center">
           <Reveal delay={200}>
             <div className="bg-brand-dark rounded-4 p-5 text-white shadow-lg position-relative overflow-hidden mx-auto" style={{ maxWidth: '900px' }}>
               <div className="position-absolute top-0 end-0 bg-white opacity-10 rounded-circle" style={{ width: '200px', height: '200px', transform: 'translate(30%, -30%)' }}></div>
               <div className="position-relative z-1">
                 <h2 className="h2 fw-bold mb-3">Partner with Us for Success</h2>
                 <p className="lead text-blue-100 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                   Experience the difference of working with a partner who truly understands your business goals.
                 </p>
                 <Link to="/contact" className="btn btn-brand-accent rounded-pill px-5 py-3 fw-bold shadow">
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