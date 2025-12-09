import React from 'react';
import ContactForm from '../components/ContactForm';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin } from 'lucide-react';
import Reveal from '../components/Reveal';
import LottieAnimation from '../components/LottieAnimation';

const Contact: React.FC = () => {
  return (
    <div>
       {/* Header */}
       <div className="bg-brand-dark py-5 text-center text-white">
        <div className="container py-4">
          <Reveal>
            <h1 className="display-4 fw-bold mb-2">Contact Us</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead text-blue-200">We'd love to hear from you</p>
          </Reveal>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Info Side */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
                <Reveal delay={100}>
                    <div className="d-flex flex-column flex-md-row gap-4 align-items-center align-items-md-start">
                        <div className="flex-grow-1">
                        <h2 className="h2 fw-bold text-brand-dark mb-3">Get in Touch</h2>
                        <p className="text-secondary lh-base mb-4">
                            Have a question about our services? Need a custom solution for your business? 
                            Reach out to us today and let's start a conversation about your digital transformation.
                        </p>
                        </div>
                        <div className="flex-shrink-0" style={{ width: '180px' }}>
                            <LottieAnimation 
                            url="https://assets2.lottiefiles.com/packages/lf20_in4cufsz.json"
                            className="w-100 h-auto"
                            />
                        </div>
                    </div>
                </Reveal>

                <div className="d-flex flex-column gap-3">
                    <Reveal delay={200}>
                        <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 border border-light shadow-sm">
                            <div className="bg-light p-3 rounded-circle text-brand-accent">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="h6 fw-bold text-dark mb-1">Phone</h3>
                                <p className="text-muted small mb-1">Mon-Fri from 9am to 6pm</p>
                                <a href={`tel:${CONTACT_INFO.phone}`} className="text-brand-primary fw-bold text-decoration-none fs-5">{CONTACT_INFO.phone}</a>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={300}>
                        <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 border border-light shadow-sm">
                            <div className="bg-light p-3 rounded-circle text-brand-accent">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="h6 fw-bold text-dark mb-1">Email</h3>
                                <p className="text-muted small mb-1">Our friendly team is here to help.</p>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-primary fw-bold text-decoration-none fs-5">{CONTACT_INFO.email}</a>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="d-flex align-items-start gap-3 p-3 bg-white rounded-3 border border-light shadow-sm">
                            <div className="bg-light p-3 rounded-circle text-brand-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="h6 fw-bold text-dark mb-1">Office</h3>
                                <p className="text-secondary mb-0">Mumbai, India</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
                
                <Reveal delay={500}>
                    <div className="p-4 bg-primary text-white rounded-4 text-center mt-3">
                        <h3 className="h5 fw-bold mb-2">Founder Direct Line</h3>
                        <p className="opacity-75 small mb-3">For strategic partnerships and urgent inquiries.</p>
                        <div className="d-inline-block bg-white bg-opacity-25 px-4 py-2 rounded-pill border border-white border-opacity-25">
                            {CONTACT_INFO.founder}
                        </div>
                    </div>
                </Reveal>
            </div>
          </div>

          {/* Form Side */}
          <div className="col-lg-6">
            <Reveal delay={300}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;