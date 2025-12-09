import React from 'react';
import { CORE_VALUES, CONTACT_INFO } from '../constants';
import { Target, Eye, User } from 'lucide-react';
import Reveal from '../components/Reveal';
import LottieAnimation from '../components/LottieAnimation';

const WhoAreWe: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-brand-dark py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h1 className="text-4xl font-extrabold mb-4">Who Are We</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-blue-200">Our Identity, Mission, and Vision</p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-20">
        
        {/* Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6 border-l-8 border-brand-accent pl-4">Introduction</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  TechNovation360 is a Solution Integration and Digital Transformation company dedicated to empowering small and medium businesses. 
                  We provide the essential tools and technologies needed to automate workflows, scale operations, and drive sustainable growth.
                </p>
                <p className="mb-4">
                  We bridge the gap between traditional business challenges and modern digital ecosystems. Our end-to-end solutions span cloud infrastructure, 
                  collaboration, automation, security, and digital presence.
                </p>
                <p className="font-semibold text-brand-primary">
                  "We don't want to be just another technology provider; we aim and strive to be your trusted technology partner."
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative">
               <div className="rounded-2xl shadow-xl overflow-hidden bg-white">
                 <LottieAnimation 
                    url="https://assets5.lottiefiles.com/packages/lf20_5w2kxo8s.json"
                    fallbackImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                    className="w-full h-auto"
                 />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 rounded-xl shadow-lg hidden md:block">
                 <p className="font-bold text-2xl">360°</p>
                 <p className="text-sm">Digital Solutions</p>
               </div>
            </div>
          </Reveal>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal delay={100}>
            <div className="bg-blue-50 rounded-2xl p-10 border-t-4 border-brand-primary shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-primary text-white p-3 rounded-full">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To empower businesses with innovative, secure, and scalable digital solutions that automate operations, simplify workflows, 
                and enhance productivity, driving true digital transformation for every client.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="bg-gray-50 rounded-2xl p-10 border-t-4 border-brand-dark shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-dark text-white p-3 rounded-full">
                  <Eye size={32} />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be a trusted global technology partner for small and medium enterprises by providing 360° digital innovation from cloud to automation, 
                enabling organizations to thrive in the digital era.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Core Values */}
        <section>
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-dark">Core Values</h2>
              <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((value, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center hover:border-brand-accent transition-colors h-full">
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Founder */}
        <Reveal>
          <section className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full filter blur-[80px] opacity-40"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
               <div className="flex-shrink-0">
                 <div className="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center border-4 border-brand-accent overflow-hidden">
                    <User size={80} className="text-gray-400" />
                    {/* Replace with actual image if available */}
                 </div>
               </div>
               <div className="text-center md:text-left">
                 <h2 className="text-3xl font-bold mb-2">{CONTACT_INFO.founder}</h2>
                 <p className="text-brand-accent font-semibold text-xl mb-6">Founder</p>
                 <div className="space-y-2 text-gray-300">
                    <p>Email: {CONTACT_INFO.email}</p>
                    <p>Phone: {CONTACT_INFO.phone}</p>
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