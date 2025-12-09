import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail as MailIcon, Linkedin, Facebook, Instagram, Youtube, Home, MapPin, Hexagon } from 'lucide-react';
import { CONTACT_INFO, SOLUTIONS_DATA, SERVICES_DATA } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showHomeBtn, setShowHomeBtn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowHomeBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const Logo: React.FC = () => (
    <div className="d-flex align-items-center gap-2">
      <div className="bg-white p-1 rounded-2 d-flex align-items-center justify-center text-brand-primary shadow-sm">
        <Hexagon size={32} strokeWidth={2} fill="#F0F9FF" />
      </div>
    </div>
  );

  return (
    <div className="d-flex flex-column min-h-screen bg-brand-light">
      {/* Floating Header */}
      <header 
        className={`fixed-top transition-all duration-500 ${isScrolled ? 'py-3' : 'py-0'}`}
        style={{ zIndex: 1050 }}
      >
        <div className={`container-fluid px-0 transition-all duration-500`}>
            <div className={`mx-auto transition-all ${isScrolled 
                ? 'bg-brand-dark bg-opacity-75 backdrop-blur border border-white border-opacity-10 rounded-pill shadow-lg px-4' 
                : 'gradient-bg shadow w-100 px-3'}`}
                style={{ maxWidth: isScrolled ? '1400px' : '100%' }}
            >
                <div className="d-flex align-items-center justify-content-between" style={{ height: isScrolled ? '70px' : '96px' }}>
                    
                    {/* Desktop Left Nav */}
                    <nav className="d-none d-lg-flex align-items-center justify-content-end flex-grow-1 pe-4 gap-3">
                        <div className="position-relative nav-item-group">
                            <Link to="/solutions" className="nav-link-custom">
                                Solutions <ChevronDown size={14} />
                            </Link>
                            <div className="dropdown-menu-custom">
                                {SOLUTIONS_DATA.map((item) => (
                                    <NavLink key={item.slug} to={`/solutions#${item.slug}`} className="dropdown-item px-3 py-2 text-secondary hover-text-accent">
                                        {item.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="position-relative nav-item-group">
                             <span className="nav-link-custom cursor-pointer">
                                Services <ChevronDown size={14} />
                            </span>
                             <div className="dropdown-menu-custom">
                                {SERVICES_DATA.map((item) => (
                                    <NavLink key={item.slug} to={`/services/${item.slug}`} className="dropdown-item px-3 py-2 text-secondary hover-text-accent">
                                        {item.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <NavLink to="/case-studies" className={({isActive}) => `nav-link-custom ${isActive ? 'text-brand-accent' : ''}`}>
                            Case Studies
                        </NavLink>
                    </nav>

                    {/* Logo Center */}
                    <Link to="/" className="d-flex flex-column align-items-center text-decoration-none px-3">
                        <Logo />
                        {!isScrolled && <small className="text-white text-uppercase mt-1" style={{ fontSize: '0.6rem', opacity: 0.8, letterSpacing: '1px' }}>Digitally Transforming Businesses</small>}
                    </Link>

                     {/* Desktop Right Nav */}
                     <nav className="d-none d-lg-flex align-items-center justify-content-start flex-grow-1 ps-4 gap-3">
                        <NavLink to="/who-are-we" className={({isActive}) => `nav-link-custom ${isActive ? 'text-brand-accent' : ''}`}>
                            Who Are We
                        </NavLink>
                        <NavLink to="/why-choose-us" className={({isActive}) => `nav-link-custom ${isActive ? 'text-brand-accent' : ''}`}>
                            Why Choose Us
                        </NavLink>
                        <NavLink to="/contact" className="btn btn-light text-brand-primary fw-bold rounded-pill px-4 py-2 ms-2 shadow-sm">
                            Contact Us
                        </NavLink>
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="d-lg-none">
                        <button className="btn text-white p-1 border-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
             position-absolute top-100 start-0 end-0 mx-3 mt-2 rounded-4 overflow-hidden mobile-menu border border-white border-opacity-10 shadow-lg
             ${isMobileMenuOpen ? 'd-block' : 'd-none'}
        `} style={{ transition: 'all 0.3s' }}>
            <div className="py-3 px-2" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <button onClick={() => toggleDropdown('solutions')} className="btn text-white w-100 text-start d-flex justify-content-between align-items-center py-3 border-bottom border-secondary border-opacity-25">
                     Solutions <ChevronDown size={16} />
                </button>
                {activeDropdown === 'solutions' && (
                    <div className="bg-dark bg-opacity-25 py-2">
                        {SOLUTIONS_DATA.map(item => (
                             <NavLink key={item.slug} to={`/solutions#${item.slug}`} className="d-block text-white text-decoration-none py-2 px-4 fs-6 opacity-75">
                                {item.title}
                            </NavLink>
                        ))}
                    </div>
                )}

                <button onClick={() => toggleDropdown('services')} className="btn text-white w-100 text-start d-flex justify-content-between align-items-center py-3 border-bottom border-secondary border-opacity-25">
                     Services <ChevronDown size={16} />
                </button>
                 {activeDropdown === 'services' && (
                    <div className="bg-dark bg-opacity-25 py-2">
                        {SERVICES_DATA.map(item => (
                             <NavLink key={item.slug} to={`/services/${item.slug}`} className="d-block text-white text-decoration-none py-2 px-4 fs-6 opacity-75">
                                {item.title}
                            </NavLink>
                        ))}
                    </div>
                )}
                
                <NavLink to="/case-studies" className="d-block text-white text-decoration-none py-3 px-3 border-bottom border-secondary border-opacity-25">Case Studies</NavLink>
                <NavLink to="/who-are-we" className="d-block text-white text-decoration-none py-3 px-3 border-bottom border-secondary border-opacity-25">Who Are We</NavLink>
                <NavLink to="/why-choose-us" className="d-block text-white text-decoration-none py-3 px-3 border-bottom border-secondary border-opacity-25">Why Choose Us</NavLink>
                <NavLink to="/contact" className="d-block text-white text-decoration-none py-3 px-3">Contact Us</NavLink>
            </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div style={{ height: '120px' }}></div>

      <main className="flex-grow-1">
        <div key={location.pathname} className="page-transition h-100">
           {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-5 pb-4 border-top border-4 border-info">
        <div className="container">
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="d-flex align-items-center gap-3 mb-3">
                 <div className="bg-white p-1 rounded-2 d-flex align-items-center justify-center text-brand-primary">
                    <Hexagon size={24} strokeWidth={2} fill="#F0F9FF" />
                 </div>
                 <span className="fw-bold fs-5">TechNovation360</span>
              </div>
              <p className="text-secondary small mb-4">
                Empowering small and medium businesses with the tools and technologies they need to automate, scale, and grow.
              </p>
              <div className="d-flex gap-2">
                <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2"><Linkedin size={16}/></a>
                <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2"><Facebook size={16}/></a>
                <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2"><Instagram size={16}/></a>
                <a href="#" className="btn btn-sm btn-outline-light rounded-circle p-2"><Youtube size={16}/></a>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
                <h5 className="fw-bold mb-3 border-start border-4 border-info ps-2">Quick Links</h5>
                <ul className="list-unstyled d-flex flex-column gap-2">
                    <li><Link to="/" className="footer-link">Home</Link></li>
                    <li><Link to="/who-are-we" className="footer-link">Who Are We</Link></li>
                    <li><Link to="/case-studies" className="footer-link">Case Studies</Link></li>
                    <li><Link to="/solutions#cloud-solutions" className="footer-link">Cloud Solutions</Link></li>
                    <li><Link to="/why-choose-us" className="footer-link">Why Choose Us</Link></li>
                    <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
                </ul>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
                <h5 className="fw-bold mb-3 border-start border-4 border-info ps-2">Our Services</h5>
                <ul className="list-unstyled d-flex flex-column gap-2">
                    <li><Link to="/services/operation-digitalization" className="footer-link">Operation Digitalization</Link></li>
                    <li><Link to="/services/strategy-roadmapping" className="footer-link">Technology Strategy</Link></li>
                    <li><Link to="/services/digital-transformation" className="footer-link">Digital Transformation</Link></li>
                    <li><Link to="/services/grc" className="footer-link">IT GRC</Link></li>
                    <li><Link to="/services/bcdr" className="footer-link">BC/DR</Link></li>
                </ul>
            </div>

             <div className="col-12 col-md-6 col-lg-3">
                <h5 className="fw-bold mb-3 border-start border-4 border-info ps-2">Contact Info</h5>
                <ul className="list-unstyled d-flex flex-column gap-3 text-secondary">
                    <li className="d-flex gap-2 align-items-start">
                        <MapPin size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                        <span>{CONTACT_INFO.address}</span>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <Phone size={20} className="text-brand-accent flex-shrink-0" />
                        <a href={`tel:${CONTACT_INFO.phone}`} className="footer-link">{CONTACT_INFO.phone}</a>
                    </li>
                    <li className="d-flex gap-2 align-items-center">
                        <MailIcon size={20} className="text-brand-accent flex-shrink-0" />
                        <a href={`mailto:${CONTACT_INFO.email}`} className="footer-link text-break">{CONTACT_INFO.email}</a>
                    </li>
                </ul>
            </div>
          </div>
          
          <div className="border-top border-secondary border-opacity-25 pt-4 text-center text-secondary small">
            <p>&copy; {new Date().getFullYear()} TechNovation360. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Floating Home Button */}
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`position-fixed bottom-0 end-0 m-4 btn btn-brand-accent rounded-circle p-3 shadow-lg ${showHomeBtn ? 'd-block' : 'd-none'}`}
        style={{ zIndex: 1040 }}
        aria-label="Back to Home"
      >
        <Home size={24} />
      </Link>
    </div>
  );
};

export default Layout;