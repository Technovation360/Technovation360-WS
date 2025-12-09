import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { SOLUTIONS_DATA, ICON_MAP } from '../constants';
import StatsSection from '../components/StatsSection';
import Reveal from '../components/Reveal';

const Home: React.FC = () => {
  // Calculate positioning for 3D slider
  const itemCount = SOLUTIONS_DATA.length;
  // Increased radius by 20% (280 * 1.2 = 336) to increase horizontal width of slider
  const radius = 336; 
  const angleStep = 360 / itemCount;

  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-bg text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        {/* Adjusted padding to move content up (10%) and reduced bottom padding */}
        <div className="container mx-auto px-4 pt-10 pb-12 md:pt-14 md:pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Reveal width="fit-content">
                <div className="inline-block bg-brand-accent/20 border border-brand-accent/50 rounded-full px-4 py-1 text-sm font-medium text-brand-accent backdrop-blur-sm">
                  Solution Integration & Digital Transformation
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-xl md:text-2xl font-bold text-brand-accent mb-2 uppercase tracking-widest">
                  Digitally Transforming Businesses
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                  TechNovation<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">360</span>
                </h1>
              </Reveal>
              <Reveal delay={400}>
                <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed">
                  Empowering small and medium enterprises with secure, scalable, and innovative technology solutions to automate operations and drive growth.
                </p>
              </Reveal>
              <Reveal delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap">
                  <Link to="/contact" className="bg-brand-accent hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1 text-center">
                    Request Consultation
                  </Link>
                  <Link to="/solutions" className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-semibold py-3 px-8 rounded-full transition-all text-center">
                    Explore Solutions
                  </Link>
                  <Link to="/services/operation-digitalization" className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md text-white font-semibold py-3 px-8 rounded-full transition-all text-center">
                    Explore Services
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="hidden lg:block relative">
               <Reveal delay={500} variant="zoom-in">
                 {/* Resize Lottie container to 350x250px */}
                 <div className="relative z-10 w-[350px] h-[250px] mx-auto">
                    <iframe 
                      src="https://lottie.host/embed/5a7f4103-24bc-4ab3-88e7-6ea822269c1f/NEoSCMXRgU.lottie"
                      className="w-full h-full border-0 pointer-events-none"
                      title="Digital Transformation Animation"
                    ></iframe>
                 </div>
                 {/* Adjusted blurs for smaller container */}
                 <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-brand-accent rounded-full opacity-20 blur-3xl"></div>
                 <div className="absolute -top-5 -right-5 w-48 h-48 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions 3D Slider Section - Shifted up accordingly (pt-12) */}
      <section className="pt-12 pb-14 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">Our Core Solutions</h2>
               <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full mb-8"></div>
               <p className="text-gray-600 max-w-2xl mx-auto">
                 Explore our comprehensive suite of solutions designed to drive efficiency and security. 
                 Click on any card to view full details.
               </p>
            </div>
          </Reveal>
          
          <div className="py-6">
             {/* Reduced height for perspective container (h-[250px] md:h-[280px]) */}
            <div className="slider-perspective h-[250px] md:h-[280px]">
              {/* Added top: 5% style to move cards lower by 5% */}
              <div className="slider-rotator" style={{ top: '5%' }}>
                {SOLUTIONS_DATA.map((solution, idx) => {
                  const Icon = ICON_MAP[solution.iconName] || ArrowRight;
                  const angle = idx * angleStep;
                  return (
                    <div 
                      key={solution.slug} 
                      className="slider-item bg-brand-light rounded-xl shadow-lg border border-gray-100 p-3 flex flex-col group hover:border-brand-accent transition-all duration-300 overflow-hidden"
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                      }}
                    >
                      {/* Background Watermark Graphic */}
                      <div className="absolute -top-6 -right-6 p-4 opacity-5 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                        <Icon size={100} />
                      </div>

                      <Link to={`/solutions#${solution.slug}`} className="w-full h-full flex flex-col relative z-10 text-left">
                        <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-primary mb-2 group-hover:bg-brand-primary group-hover:text-white transition-colors flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        
                        <h3 className="text-sm font-bold text-brand-dark mb-1 leading-tight group-hover:text-brand-primary transition-colors">{solution.title}</h3>
                        
                        <p className="text-[10px] text-gray-500 line-clamp-4 leading-relaxed mb-2 flex-grow">
                          {solution.description}
                        </p>
                        
                        <span className="mt-auto text-brand-accent font-semibold flex items-center gap-1 text-[10px]">
                          Learn More <ArrowRight size={12} />
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Mobile Fallback / Hint */}
            <div className="text-center mt-12 text-gray-400 text-sm md:hidden">
              <p>Swipe or rotate device for better view</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-20 pb-12 bg-brand-light">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-brand-dark mb-6">Your Trusted Technology Partner</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              TechNovation360 is dedicated to empowering businesses with the tools they need to automate, scale, and grow. 
              We bridge the gap between traditional challenges and modern digital ecosystems by offering end-to-end solutions 
              across cloud, security, automation, and digital presence.
            </p>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12 mb-8">
             <Reveal delay={100}>
               <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 h-full">
                 <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-primary">
                   <Shield size={24} />
                 </div>
                 <h3 className="font-bold text-lg mb-2">Secure by Design</h3>
                 <p className="text-gray-500 text-sm">Security is integrated into every solution we provide, from cloud to endpoints.</p>
               </div>
             </Reveal>
             <Reveal delay={200}>
               <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-accent h-full">
                 <div className="bg-sky-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-accent">
                   <CheckCircle2 size={24} />
                 </div>
                 <h3 className="font-bold text-lg mb-2">Tailored Strategy</h3>
                 <p className="text-gray-500 text-sm">Solutions designed specifically for your business goals and operational needs.</p>
               </div>
             </Reveal>
             <Reveal delay={300}>
               <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 h-full">
                 <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-brand-primary">
                   <ArrowRight size={24} />
                 </div>
                 <h3 className="font-bold text-lg mb-2">Future Ready</h3>
                 <p className="text-gray-500 text-sm">Adopting scalable technologies that grow with you and drive innovation.</p>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Reveal>
        <StatsSection />
      </Reveal>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full filter blur-[100px] opacity-30"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent rounded-full filter blur-[100px] opacity-20"></div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Schedule a free consultation with our experts to discover how we can secure, automate, and grow your operations.
              </p>
              <Link to="/contact" className="inline-block bg-brand-accent hover:bg-sky-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
                Get Started Today
              </Link>
            </Reveal>
         </div>
      </section>
    </>
  );
};

export default Home;