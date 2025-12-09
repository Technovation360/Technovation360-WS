import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { SOLUTIONS_DATA, ICON_MAP } from '../constants';
import StatsSection from '../components/StatsSection';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  const itemCount = SOLUTIONS_DATA.length;
  const radius = 336; 
  const angleStep = 360 / itemCount;

  return (
    <>
      {/* Hero Section */}
      <section className="position-relative gradient-bg text-white overflow-hidden">
        <div className="hero-bg-pattern"></div>
        <div className="container position-relative z-1 pt-5 pb-5">
          <div className="row align-items-center g-5 py-lg-5">
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-3">
                <Reveal width="fit-content">
                    <div className="d-inline-block bg-brand-accent bg-opacity-25 border border-brand-accent border-opacity-50 rounded-pill px-3 py-1 small fw-bold text-brand-accent backdrop-blur">
                        Solution Integration & Digital Transformation
                    </div>
                </Reveal>
                <Reveal delay={100}>
                    <h2 className="h4 fw-bold text-brand-accent text-uppercase ls-1">
                        Digitally Transforming Businesses
                    </h2>
                </Reveal>
                <Reveal delay={200}>
                    <h1 className="display-4 fw-bolder lh-1">
                        TechNovation<span className="text-gradient-light">360</span>
                    </h1>
                </Reveal>
                <Reveal delay={400}>
                    <p className="lead text-blue-100">
                        Empowering small and medium enterprises with secure, scalable, and innovative technology solutions to automate operations and drive growth.
                    </p>
                </Reveal>
                <Reveal delay={600}>
                    <div className="d-flex flex-wrap gap-3 mt-3">
                        <Link to="/contact" className="btn btn-brand-accent rounded-pill px-4 py-3 shadow hover-translate-up">
                            Request Consultation
                        </Link>
                        <Link to="/solutions" className="btn btn-outline-white rounded-pill px-4 py-3">
                            Explore Solutions
                        </Link>
                         <Link to="/services/operation-digitalization" className="btn btn-outline-white rounded-pill px-4 py-3">
                            Explore Services
                        </Link>
                    </div>
                </Reveal>
              </div>
            </div>
            
            <div className="col-12 col-lg-6 d-none d-lg-block position-relative">
               <Reveal delay={500} variant="zoom-in">
                 <div className="position-relative z-1 mx-auto" style={{ width: '350px', height: '250px' }}>
                    <iframe 
                      src="https://lottie.host/embed/5a7f4103-24bc-4ab3-88e7-6ea822269c1f/NEoSCMXRgU.lottie"
                      className="w-100 h-100 border-0 pe-none"
                      title="Digital Transformation Animation"
                    ></iframe>
                 </div>
                 {/* Blurs */}
                 <div className="position-absolute bg-brand-accent opacity-25 rounded-circle" style={{ width: '200px', height: '200px', bottom: '-20px', left: '-20px', filter: 'blur(60px)' }}></div>
                 <div className="position-absolute bg-info opacity-25 rounded-circle" style={{ width: '250px', height: '250px', top: '-20px', right: '-20px', filter: 'blur(60px)' }}></div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions 3D Slider Section */}
      <section className="py-5 bg-white overflow-hidden">
        <div className="container pt-4 pb-5">
          <Reveal>
            <div className="text-center mb-5">
               <h2 className="display-5 fw-bold text-brand-dark mb-3">Our Core Solutions</h2>
               <div className="bg-brand-accent rounded-pill mx-auto mb-4" style={{ width: '80px', height: '4px' }}></div>
               <p className="text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                 Explore our comprehensive suite of solutions designed to drive efficiency and security. 
                 Click on any card to view full details.
               </p>
            </div>
          </Reveal>
          
          <div className="py-3">
            <div className="slider-perspective">
              <div className="slider-rotator" style={{ top: '5%' }}>
                {SOLUTIONS_DATA.map((solution, idx) => {
                  const Icon = ICON_MAP[solution.iconName] || ArrowRight;
                  const angle = idx * angleStep;
                  return (
                    <div 
                      key={solution.slug} 
                      className="slider-item bg-brand-light rounded-4 shadow border border-light p-3 d-flex flex-column hover-border-accent transition-all overflow-hidden"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                      }}
                    >
                      {/* Watermark */}
                      <div className="position-absolute top-0 end-0 p-3 opacity-25 pe-none">
                        <Icon size={100} color="#e5e7eb" />
                      </div>

                      <Link to={`/solutions#${solution.slug}`} className="d-flex flex-column h-100 text-decoration-none text-start position-relative z-1">
                        <div className="bg-white rounded-3 shadow-sm d-flex align-items-center justify-content-center text-brand-primary mb-2" style={{ width: '32px', height: '32px' }}>
                          <Icon size={18} />
                        </div>
                        
                        <h3 className="h6 fw-bold text-brand-dark mb-1">{solution.title}</h3>
                        
                        <p className="text-secondary small flex-grow-1 mb-2" style={{ fontSize: '0.7rem', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                          {solution.description}
                        </p>
                        
                        <span className="mt-auto text-brand-accent fw-bold d-flex align-items-center gap-1" style={{ fontSize: '0.7rem' }}>
                          Learn More <ArrowRight size={12} />
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="text-center mt-5 text-muted small d-md-none">
              <p>Swipe or rotate device for better view</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-5 bg-brand-light">
        <div className="container text-center pt-4">
          <div className="mx-auto" style={{ maxWidth: '900px' }}>
            <Reveal>
                <h2 className="display-6 fw-bold text-brand-dark mb-4">Your Trusted Technology Partner</h2>
                <p className="lead text-secondary mb-5">
                TechNovation360 is dedicated to empowering businesses with the tools they need to automate, scale, and grow. 
                We bridge the gap between traditional challenges and modern digital ecosystems.
                </p>
            </Reveal>
          </div>
          
          <div className="row g-4 text-start mt-4 mb-4">
             <div className="col-12 col-md-4">
                <Reveal delay={100}>
                    <div className="bg-white p-4 rounded-4 shadow-sm h-100 border-top border-4 border-primary">
                        <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                            <Shield size={24} />
                        </div>
                        <h3 className="h5 fw-bold mb-2">Secure by Design</h3>
                        <p className="text-secondary small mb-0">Security is integrated into every solution we provide, from cloud to endpoints.</p>
                    </div>
                </Reveal>
             </div>
             <div className="col-12 col-md-4">
                <Reveal delay={200}>
                    <div className="bg-white p-4 rounded-4 shadow-sm h-100 border-top border-4 border-info">
                        <div className="bg-info bg-opacity-10 text-info rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                            <CheckCircle2 size={24} />
                        </div>
                        <h3 className="h5 fw-bold mb-2">Tailored Strategy</h3>
                        <p className="text-secondary small mb-0">Solutions designed specifically for your business goals and operational needs.</p>
                    </div>
                </Reveal>
             </div>
             <div className="col-12 col-md-4">
                <Reveal delay={300}>
                    <div className="bg-white p-4 rounded-4 shadow-sm h-100 border-top border-4 border-primary">
                        <div className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px' }}>
                            <ArrowRight size={24} />
                        </div>
                        <h3 className="h5 fw-bold mb-2">Future Ready</h3>
                        <p className="text-secondary small mb-0">Adopting scalable technologies that grow with you and drive innovation.</p>
                    </div>
                </Reveal>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Reveal>
        <StatsSection />
      </Reveal>

      {/* CTA Section */}
      <section className="py-5 bg-brand-dark position-relative overflow-hidden">
         <div className="position-absolute top-0 end-0 bg-primary opacity-25 rounded-circle" style={{ width: '400px', height: '400px', filter: 'blur(80px)' }}></div>
         <div className="position-absolute bottom-0 start-0 bg-info opacity-25 rounded-circle" style={{ width: '400px', height: '400px', filter: 'blur(80px)' }}></div>
         
         <div className="container position-relative z-1 text-center py-5">
            <Reveal>
              <h2 className="display-4 fw-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="lead text-blue-100 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
                Schedule a free consultation with our experts to discover how we can secure, automate, and grow your operations.
              </p>
              <Link to="/contact" className="btn btn-brand-accent rounded-pill px-5 py-3 fs-5 shadow-lg hover-scale">
                Get Started Today
              </Link>
            </Reveal>
         </div>
      </section>
    </>
  );
};

export default Home;