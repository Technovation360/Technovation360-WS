import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SOLUTIONS_DATA, ICON_MAP } from '../constants';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

const Solutions: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-brand-dark py-5 text-white position-relative overflow-hidden">
        <div className="hero-bg-pattern"></div>
        <div className="container position-relative z-1 py-4">
          <div className="text-center mb-5">
            <Reveal>
              <h1 className="display-4 fw-bold mb-3">Our Solutions</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="lead text-blue-200 mx-auto" style={{ maxWidth: '700px' }}>
                Discover our comprehensive range of services designed to elevate your business.
                Select a solution below to learn more.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="row g-3 justify-content-center">
              {SOLUTIONS_DATA.map((item) => {
                const Icon = ICON_MAP[item.iconName] || ArrowRight;
                return (
                  <div className="col-6 col-md-4 col-lg-3" key={item.slug}>
                      <Link
                        to={`/solutions/${item.slug}`}
                        className="btn btn-outline-light w-100 h-100 p-4 rounded-4 d-flex flex-column align-items-center gap-2 hover-bg-brand-accent transition-all border-opacity-25 text-decoration-none"
                      >
                        <Icon size={24} className="text-brand-accent mb-1" />
                        <span className="fw-semibold small">{item.title}</span>
                      </Link>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-white">
        {SOLUTIONS_DATA.map((item, idx) => {
          const Icon = ICON_MAP[item.iconName] || ArrowRight;
          const isEven = idx % 2 === 0;
          
          return (
            <div key={item.slug} className={`py-5 border-bottom border-light ${isEven ? 'bg-white' : 'bg-brand-light'}`}>
              <div className="container py-4">
                <div className={`row g-5 align-items-center ${!isEven ? 'flex-lg-row-reverse' : ''}`}>
                  
                  {/* Content Side */}
                  <div className="col-lg-6">
                    <div className="d-flex flex-column gap-3">
                        <Reveal>
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <div className="bg-white p-2 rounded-circle text-brand-primary shadow-sm">
                                <Icon size={28} />
                                </div>
                                <h2 className="h2 fw-bold text-brand-dark mb-0">{item.title}</h2>
                            </div>
                            {item.subtitle && <p className="h5 text-brand-accent fw-medium">{item.subtitle}</p>}
                        </Reveal>
                        
                        <Reveal delay={100}>
                        <p className="text-secondary fs-5 lh-base">
                            {item.description}
                        </p>
                        </Reveal>

                        <Reveal delay={200}>
                        <div className="row g-2 mt-2">
                            {item.features?.map((feature, fIdx) => (
                            <div key={fIdx} className="col-sm-6">
                                <div className="d-flex align-items-start gap-2">
                                    <CheckCircle size={18} className="text-success mt-1 flex-shrink-0" />
                                    <span className="text-dark small fw-medium">{feature}</span>
                                </div>
                            </div>
                            ))}
                        </div>
                        </Reveal>

                        <Reveal delay={300}>
                            <Link to={`/solutions/${item.slug}`} className="btn btn-outline-primary rounded-pill px-4 py-2 mt-3 fw-bold align-self-start">
                                Learn More <ArrowRight size={16} className="ms-1" />
                            </Link>
                        </Reveal>
                    </div>
                  </div>

                  {/* Media Side */}
                  <div className="col-lg-6">
                    <Reveal delay={300} variant="zoom-in">
                       {item.lottieUrl ? (
                         <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg border border-light bg-white">
                            <iframe 
                              src={item.lottieUrl} 
                              className="border-0"
                              title={`${item.title} Animation`}
                              loading="lazy"
                            ></iframe>
                         </div>
                       ) : (
                         <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
                            <img src={item.image} alt={item.title} className="object-cover" />
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
      <div className="bg-brand-dark py-5 text-center">
         <div className="container">
            <Reveal>
              <h2 className="display-5 fw-bold text-white mb-4">Need a custom solution?</h2>
              <div className="mx-auto" style={{ maxWidth: '600px' }}>
                 <ContactForm />
              </div>
            </Reveal>
         </div>
      </div>
    </div>
  );
};

export default Solutions;