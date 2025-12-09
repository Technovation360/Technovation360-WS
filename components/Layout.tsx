import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail as MailIcon, Linkedin, Facebook, Instagram, Youtube, Home, MapPin } from 'lucide-react';
import { CONTACT_INFO, SOLUTIONS_DATA, SERVICES_DATA } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showHomeBtn, setShowHomeBtn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Handle Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      // Toggle floating state
      setIsScrolled(window.scrollY > 20);
      
      // Toggle back-to-home button
      if (window.scrollY > 400) {
        setShowHomeBtn(true);
      } else {
        setShowHomeBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const NavItemClass = "text-white hover:text-brand-accent transition-colors duration-200 font-medium px-3 py-2 text-sm uppercase tracking-wide cursor-pointer flex items-center gap-1";
  const MobileNavItemClass = "block px-4 py-3 text-white border-b border-blue-900 hover:bg-blue-900 transition-colors";

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      {/* Floating Header */}
      <header 
        className={`fixed left-0 right-0 z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isScrolled ? 'top-4 px-4' : 'top-0 px-0'
        }`}
      >
        <div className={`mx-auto transition-all duration-500 ${
          isScrolled 
            ? 'bg-brand-dark/85 backdrop-blur-md border border-white/10 rounded-full shadow-2xl max-w-[90rem] px-6' 
            : 'gradient-bg shadow-lg w-full px-4'
        }`}>
          {/* Desktop Navigation Layout */}
          <div className="hidden lg:flex items-center justify-between h-24">
            
            {/* Left Navigation Group: Solutions, Services, Case Studies */}
            <nav className="flex items-center gap-1 xl:gap-2 flex-1 justify-end pr-4 xl:pr-8">
              {/* Solutions Dropdown */}
              <div className="relative group">
                <Link to="/solutions" className={NavItemClass}>
                  Solutions <ChevronDown size={14} />
                </Link>
                <div className="absolute right-0 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-2xl py-2 overflow-hidden border-t-4 border-brand-accent ring-1 ring-black/5">
                    {SOLUTIONS_DATA.map((item) => (
                      <NavLink 
                        key={item.slug} 
                        to={`/solutions#${item.slug}`} 
                        className="block px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary text-sm border-b border-gray-100 last:border-0 transition-colors"
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className={NavItemClass}>
                  Services <ChevronDown size={14} />
                </button>
                <div className="absolute right-0 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-2xl py-2 overflow-hidden border-t-4 border-brand-accent ring-1 ring-black/5">
                    {SERVICES_DATA.map((item) => (
                      <NavLink 
                        key={item.slug} 
                        to={`/services/${item.slug}`} 
                        className="block px-4 py-3 text-gray-700 hover:bg-brand-light hover:text-brand-primary text-sm border-b border-gray-100 last:border-0 transition-colors"
                      >
                        {item.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <NavLink to="/case-studies" className={({ isActive }) => `${NavItemClass} ${isActive ? 'text-brand-accent' : ''}`}>Case Studies</NavLink>
            </nav>

            {/* Center Logo */}
            <Link to="/" className="flex flex-col items-center gap-1 group flex-shrink-0 px-4">
              <img 
                src="https://technovation360.in/wp-content/uploads/2025/12/Just-Logo_Latest.jpg" 
                alt="TechNovation360 Logo" 
                className="h-14 w-auto object-contain rounded-md group-hover:scale-105 transition-transform duration-300 bg-white p-0.5"
              />
              <div className="flex flex-col text-white items-center">
                {/* Slogan hidden on scroll to save space if needed, or kept small */}
                <span className={`text-[9px] uppercase tracking-wider opacity-80 ${isScrolled ? 'hidden' : 'block'}`}>Digitally Transforming Businesses</span>
              </div>
            </Link>

            {/* Right Navigation Group: Who Are We, Why Choose Us, Contact Us */}
            <nav className="flex items-center gap-1 xl:gap-2 flex-1 justify-start pl-4 xl:pl-8">
              <NavLink to="/who-are-we" className={({ isActive }) => `${NavItemClass} ${isActive ? 'text-brand-accent' : ''}`}>Who Are We</NavLink>
              <NavLink to="/why-choose-us" className={({ isActive }) => `${NavItemClass} ${isActive ? 'text-brand-accent' : ''}`}>Why Choose Us</NavLink>
              <NavLink to="/contact" className="ml-2 bg-brand-accent hover:bg-sky-600 text-white font-bold py-2 px-6 rounded-full transition-all shadow-md transform hover:-translate-y-0.5 text-sm">
                Contact Us
              </NavLink>
            </nav>
          </div>

          {/* Mobile Header Layout */}
          <div className="lg:hidden flex justify-between items-center h-20">
             <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="https://technovation360.in/wp-content/uploads/2025/12/Just-Logo_Latest.jpg" 
                alt="TechNovation360 Logo" 
                className="h-10 w-auto object-contain rounded-md bg-white p-0.5"
              />
            </Link>
            <button className="text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          lg:hidden absolute left-4 right-4 top-full mt-2 
          bg-brand-dark/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden
          transition-all duration-300 origin-top
          ${isMobileMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-4 pointer-events-none'}
        `}>
          <div className="py-2 max-h-[70vh] overflow-y-auto">
            {/* Removed Home Link */}
            
            <button onClick={() => toggleDropdown('solutions')} className={`${MobileNavItemClass} w-full text-left flex justify-between items-center`}>
              Solutions <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'solutions' && (
              <div className="bg-black/20">
                {SOLUTIONS_DATA.map((item) => (
                  <NavLink key={item.slug} to={`/solutions#${item.slug}`} className="block px-8 py-2 text-gray-300 hover:text-white text-sm border-l-2 border-transparent hover:border-brand-accent ml-2">
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}

            <button onClick={() => toggleDropdown('services')} className={`${MobileNavItemClass} w-full text-left flex justify-between items-center`}>
              Services <ChevronDown size={16} className={`transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'services' && (
              <div className="bg-black/20">
                {SERVICES_DATA.map((item) => (
                  <NavLink key={item.slug} to={`/services/${item.slug}`} className="block px-8 py-2 text-gray-300 hover:text-white text-sm border-l-2 border-transparent hover:border-brand-accent ml-2">
                    {item.title}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink to="/case-studies" className={MobileNavItemClass}>Case Studies</NavLink>
            <NavLink to="/who-are-we" className={MobileNavItemClass}>Who Are We</NavLink>
            <NavLink to="/why-choose-us" className={MobileNavItemClass}>Why Choose Us</NavLink>
            <NavLink to="/contact" className={MobileNavItemClass}>Contact Us</NavLink>
          </div>
        </div>
      </header>

      {/* Main Content Spacer */}
      <div className="h-32 bg-brand-light"></div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <img 
                   src="https://technovation360.in/wp-content/uploads/2025/12/Just-Logo_Latest.jpg" 
                   alt="TechNovation360 Logo" 
                   className="h-12 w-auto object-contain rounded-md"
                 />
                 <span className="font-bold text-xl">TechNovation360</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering small and medium businesses with the tools and technologies they need to automate, scale, and grow. Your trusted technology partner.
              </p>
              <div className="flex gap-4">
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-accent transition-colors"><Linkedin size={18}/></a>
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-accent transition-colors"><Facebook size={18}/></a>
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-accent transition-colors"><Instagram size={18}/></a>
                <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-accent transition-colors"><Youtube size={18}/></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/" className="hover:text-brand-accent transition-colors">Home</Link></li>
                <li><Link to="/who-are-we" className="hover:text-brand-accent transition-colors">Who Are We</Link></li>
                <li><Link to="/case-studies" className="hover:text-brand-accent transition-colors">Case Studies</Link></li>
                <li><Link to="/solutions#cloud-solutions" className="hover:text-brand-accent transition-colors">Cloud Solutions</Link></li>
                <li><Link to="/solutions#cybersecurity" className="hover:text-brand-accent transition-colors">Cybersecurity</Link></li>
                <li><Link to="/why-choose-us" className="hover:text-brand-accent transition-colors">Why Choose Us</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/services/operation-digitalization" className="hover:text-brand-accent transition-colors">Operation Digitalization</Link></li>
                <li><Link to="/services/strategy-roadmapping" className="hover:text-brand-accent transition-colors">Technology Strategy</Link></li>
                <li><Link to="/services/digital-transformation" className="hover:text-brand-accent transition-colors">Digital Transformation</Link></li>
                <li><Link to="/services/grc" className="hover:text-brand-accent transition-colors">IT GRC</Link></li>
                <li><Link to="/services/bcdr" className="hover:text-brand-accent transition-colors">BC/DR</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 border-l-4 border-brand-accent pl-3">Contact Info</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-brand-accent flex-shrink-0" />
                  <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon size={20} className="text-brand-accent flex-shrink-0" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all">{CONTACT_INFO.email}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} TechNovation360. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Floating Home/Scroll-Top Button */}
      <Link 
        to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 bg-brand-accent hover:bg-sky-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${showHomeBtn ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'}`}
        aria-label="Back to Home"
      >
        <Home size={24} />
      </Link>
    </div>
  );
};

export default Layout;