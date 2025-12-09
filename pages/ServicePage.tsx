import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SOLUTIONS_DATA, SERVICES_DATA, ICON_MAP } from '../constants';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

interface ServicePageProps {
  type: 'solution' | 'service';
}

const ServicePage: React.FC<ServicePageProps> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>();
  const dataList = type === 'solution' ? SOLUTIONS_DATA : SERVICES_DATA;
  const item = dataList.find(i => i.slug === slug);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!item) {
    return (
        <div className="container mx-auto py-32 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <Link to="/" className="text-brand-primary hover:underline">Return Home</Link>
        </div>
    );
  }

  const Icon = ICON_MAP[item.iconName] || ArrowRight;
  const bgImage = (item as any).image || "https://picsum.photos/1200/400?grayscale";

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img src={bgImage} alt={item.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-primary/80 flex items-center">
           <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                  <Reveal delay={200}>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{item.title}</h1>
                  </Reveal>
                  {(item as any).subtitle && (
                    <Reveal delay={400}>
                      <p className="text-xl text-blue-100">{(item as any).subtitle}</p>
                    </Reveal>
                  )}
              </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <Reveal>
              <section>
                <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-3">
                  <Icon className="text-brand-primary" size={28} />
                  Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
              </section>
            </Reveal>

            {/* Features */}
            <section>
               <Reveal>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">Key Features</h2>
               </Reveal>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {item.features?.map((feature, idx) => (
                   <Reveal key={idx} delay={idx * 50}>
                     <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors h-full">
                       <CheckCircle className="text-brand-accent mt-1 flex-shrink-0" size={18} />
                       <span className="text-gray-700 font-medium">{feature}</span>
                     </div>
                   </Reveal>
                 ))}
               </div>
            </section>

            {/* Why This Matters */}
            <Reveal delay={200}>
              <section className="bg-blue-50 p-8 rounded-2xl border-l-4 border-brand-primary">
                <h3 className="text-xl font-bold text-brand-dark mb-4">Why This Matters for Your Business</h3>
                <p className="text-gray-700 mb-4">
                  In today's fast-paced digital landscape, {item.title.toLowerCase()} is crucial for maintaining competitive advantage. 
                  Our approach ensures that your infrastructure is not just functional, but a strategic asset driving growth.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Minimize downtime and operational risks.</li>
                  <li>Enhance productivity through streamlined workflows.</li>
                  <li>Ensure compliance with industry standards.</li>
                </ul>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Navigation */}
            <Reveal delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                 <h3 className="font-bold text-lg mb-4 text-brand-dark">Explore More</h3>
                 <ul className="space-y-2">
                   {dataList.filter(i => i.slug !== slug).slice(0, 5).map(linkItem => (
                     <li key={linkItem.slug}>
                       <Link to={`/${type}s/${linkItem.slug}`} className="flex items-center justify-between text-gray-600 hover:text-brand-primary hover:bg-gray-50 px-3 py-2 rounded transition-colors group">
                         <span>{linkItem.title}</span>
                         <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                       </Link>
                     </li>
                   ))}
                 </ul>
              </div>
            </Reveal>

            {/* Contact Form CTA */}
            <Reveal delay={300}>
              <div className="sticky top-24">
                  <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;