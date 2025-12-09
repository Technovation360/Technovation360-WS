import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SOLUTIONS_DATA, ICON_MAP } from '../constants';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

const SolutionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = SOLUTIONS_DATA.find(i => i.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
        <div className="container py-5 text-center mt-5">
            <h1 className="display-4 fw-bold text-dark mb-4">Solution Not Found</h1>
            <Link to="/" className="text-brand-primary fw-bold text-decoration-none">Return Home</Link>
        </div>
    );
  }

  const Icon = ICON_MAP[item.iconName] || ArrowRight;
  const bgImage = item.image || "https://picsum.photos/1200/400?grayscale";

  return (
    <div>
      {/* Hero Banner */}
      <div className="position-relative w-100 overflow-hidden" style={{ height: '320px' }}>
        <img src={bgImage} alt={item.title} className="w-100 h-100 object-cover" />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'linear-gradient(to right, rgba(2,16,36,0.9), rgba(0,86,179,0.8))' }}>
           <div className="container">
              <div className="col-lg-8">
                  <Reveal delay={200}>
                    <h1 className="display-4 fw-bold text-white mb-3">{item.title}</h1>
                  </Reveal>
                  {item.subtitle && (
                    <Reveal delay={400}>
                      <p className="lead text-blue-100">{item.subtitle}</p>
                    </Reveal>
                  )}
              </div>
           </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-5">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-5">
                {/* Split Section: Description and Animation */}
                <div className="d-flex flex-column gap-4">
                    <Reveal>
                        <section>
                            <h2 className="h3 fw-bold text-brand-dark mb-4 d-flex align-items-center gap-3">
                            <Icon className="text-brand-primary" size={28} />
                            Overview
                            </h2>
                            <p className="text-secondary fs-5 lh-base">{item.description}</p>
                        </section>
                    </Reveal>

                    {/* Lottie Animation Embed */}
                    {item.lottieUrl && (
                        <Reveal delay={200} variant="zoom-in">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm border border-light bg-white">
                            <iframe 
                            src={item.lottieUrl} 
                            className="border-0" 
                            title={`${item.title} Animation`}
                            loading="lazy"
                            ></iframe>
                        </div>
                        </Reveal>
                    )}
                </div>

                {/* Features */}
                <section>
                <Reveal>
                    <h2 className="h3 fw-bold text-brand-dark mb-4">Key Features</h2>
                </Reveal>
                <div className="row g-3">
                    {item.features?.map((feature, idx) => (
                    <div className="col-md-6" key={idx}>
                        <Reveal delay={idx * 50}>
                        <div className="d-flex align-items-start gap-3 bg-white p-3 rounded-3 border border-light h-100 shadow-sm hover-border-primary transition-all">
                            <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={18} />
                            <span className="text-secondary fw-medium">{feature}</span>
                        </div>
                        </Reveal>
                    </div>
                    ))}
                </div>
                </section>

                {/* Why This Matters */}
                <Reveal delay={200}>
                <section className="bg-white p-4 p-md-5 rounded-4 border-start border-4 border-primary shadow-sm">
                    <h3 className="h4 fw-bold text-brand-dark mb-3">Why This Matters for Your Business</h3>
                    <p className="text-secondary mb-3">
                    In today's fast-paced digital landscape, {item.title.toLowerCase()} is crucial for maintaining competitive advantage. 
                    Our approach ensures that your infrastructure is not just functional, but a strategic asset driving growth.
                    </p>
                    <ul className="text-secondary mb-0 ps-3">
                        <li className="mb-1">Minimize downtime and operational risks.</li>
                        <li className="mb-1">Enhance productivity through streamlined workflows.</li>
                        <li>Ensure compliance with industry standards.</li>
                    </ul>
                </section>
                </Reveal>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="d-flex flex-column gap-4">
                {/* Quick Navigation */}
                <Reveal delay={100}>
                    <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
                        <h3 className="h5 fw-bold mb-3 text-brand-dark">Explore Other Solutions</h3>
                        <div className="list-group list-group-flush">
                            {SOLUTIONS_DATA.filter(i => i.slug !== slug).slice(0, 5).map(linkItem => (
                                <Link key={linkItem.slug} to={`/solutions/${linkItem.slug}`} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center px-0 text-secondary hover-text-primary border-light">
                                    {linkItem.title}
                                    <ArrowRight size={14} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Contact Form CTA */}
                <Reveal delay={300}>
                    <div className="sticky-top" style={{ top: '100px' }}>
                        <ContactForm />
                    </div>
                </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;