import React from 'react';
import { CORE_VALUES, CONTACT_INFO } from '../constants';
import { Target, Eye, User } from 'lucide-react';
import Reveal from '../components/Reveal';
import LottieAnimation from '../components/LottieAnimation';

const WhoAreWe: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-brand-dark py-5 text-center text-white position-relative overflow-hidden">
        <div className="hero-bg-pattern"></div>
        <div className="container position-relative z-1 py-4">
          <Reveal>
            <h1 className="display-4 fw-bold mb-3">Who Are We</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead text-blue-200">Our Identity, Mission, and Vision</p>
          </Reveal>
        </div>
      </div>

      <div className="container py-5">
        
        {/* Introduction */}
        <section className="row align-items-center g-5 mb-5 py-4">
          <div className="col-12 col-lg-6">
            <Reveal>
              <h2 className="h2 fw-bold text-brand-dark mb-4 border-start border-5 border-info ps-3">Introduction</h2>
              <div className="text-secondary-dark fs-5">
                <p className="mb-3">
                  TechNovation360 is a Solution Integration and Digital Transformation company dedicated to empowering small and medium businesses. 
                  We provide the essential tools and technologies needed to automate workflows, scale operations, and drive sustainable growth.
                </p>
                <p className="mb-3">
                  We bridge the gap between traditional business challenges and modern digital ecosystems. Our end-to-end solutions span cloud infrastructure, 
                  collaboration, automation, security, and digital presence.
                </p>
                <p className="fw-bold text-brand-primary">
                  "We don't want to be just another technology provider; we aim and strive to be your trusted technology partner."
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={200}>
                <div className="position-relative">
                   <div className="rounded-4 shadow-lg overflow-hidden bg-white">
                     <LottieAnimation 
                        url="https://assets5.lottiefiles.com/packages/lf20_5w2kxo8s.json"
                        fallbackImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                        className="w-100 h-auto"
                     />
                   </div>
                   <div className="position-absolute bottom-0 end-0 bg-brand-primary text-white p-4 rounded-3 shadow-lg d-none d-md-block m-n4">
                     <p className="fw-bold fs-3 mb-0">360°</p>
                     <p className="small mb-0">Digital Solutions</p>
                   </div>
                </div>
            </Reveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="row g-4 mb-5 py-4">
          <div className="col-12 col-md-6">
            <Reveal delay={100}>
                <div className="bg-white rounded-4 p-5 border-top border-4 border-primary shadow-sm h-100">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="bg-brand-primary text-white p-2 rounded-circle">
                      <Target size={32} />
                    </div>
                    <h2 className="h2 fw-bold text-brand-dark mb-0">Our Mission</h2>
                  </div>
                  <p className="text-secondary fs-5">
                    To empower businesses with innovative, secure, and scalable digital solutions that automate operations, simplify workflows, 
                    and enhance productivity, driving true digital transformation for every client.
                  </p>
                </div>
            </Reveal>
          </div>

          <div className="col-12 col-md-6">
            <Reveal delay={300}>
                <div className="bg-white rounded-4 p-5 border-top border-4 border-dark shadow-sm h-100">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="bg-brand-dark text-white p-2 rounded-circle">
                      <Eye size={32} />
                    </div>
                    <h2 className="h2 fw-bold text-brand-dark mb-0">Our Vision</h2>
                  </div>
                  <p className="text-secondary fs-5">
                    To be a trusted global technology partner for small and medium enterprises by providing 360° digital innovation from cloud to automation, 
                    enabling organizations to thrive in the digital era.
                  </p>
                </div>
            </Reveal>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-5 py-4">
          <Reveal>
            <div className="text-center mb-5">
              <h2 className="h2 fw-bold text-brand-dark">Core Values</h2>
              <div className="bg-brand-accent mx-auto mt-3 rounded-pill" style={{ width: '60px', height: '4px' }}></div>
            </div>
          </Reveal>
          <div className="row g-4 justify-content-center">
            {CORE_VALUES.map((value, idx) => (
              <div className="col-12 col-md-6 col-lg-4 col-xl-2.4" key={idx}>
                  <Reveal delay={idx * 100}>
                    <div className="bg-white p-4 rounded-4 shadow-sm border border-light text-center h-100 hover-text-accent transition-all">
                      <h3 className="h5 fw-bold text-brand-primary mb-3">{value.title}</h3>
                      <p className="text-secondary small mb-0">{value.desc}</p>
                    </div>
                  </Reveal>
              </div>
            ))}
          </div>
        </section>

        {/* Founder */}
        <Reveal>
          <section className="bg-brand-dark text-white rounded-4 p-4 p-md-5 position-relative overflow-hidden">
            <div className="position-absolute top-0 end-0 bg-primary opacity-25 rounded-circle" style={{ width: '300px', height: '300px', filter: 'blur(80px)' }}></div>
            <div className="position-relative z-1 d-flex flex-column flex-md-row align-items-center gap-5">
               <div className="flex-shrink-0">
                 <div className="bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center border border-4 border-info overflow-hidden" style={{ width: '180px', height: '180px' }}>
                    <User size={80} className="text-light opacity-50" />
                 </div>
               </div>
               <div className="text-center text-md-start">
                 <h2 className="h2 fw-bold mb-1">{CONTACT_INFO.founder}</h2>
                 <p className="text-brand-accent fw-bold fs-5 mb-4">Founder</p>
                 <div className="text-light opacity-75">
                    <p className="mb-1">Email: {CONTACT_INFO.email}</p>
                    <p className="mb-0">Phone: {CONTACT_INFO.phone}</p>
                 </div>
               </div>
            </div>
          </section>
        </Reveal>

      </div>
    </div>
  );
};

export default WhoAreWe;