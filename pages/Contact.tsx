import React from 'react';
import ContactForm from '../components/ContactForm';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Reveal from '../components/Reveal';
import LottieAnimation from '../components/LottieAnimation';

const Contact: React.FC = () => {
  return (
    <div>
       {/* Header */}
       <div className="bg-brand-dark py-12 text-center text-white">
        <div className="container mx-auto px-4">
          <Reveal>
            <h1 className="text-4xl font-extrabold mb-2">Contact Us</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-blue-200">We'd love to hear from you</p>
          </Reveal>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-10">
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                 <div className="flex-1">
                   <h2 className="text-2xl font-bold text-brand-dark mb-6">Get in Touch</h2>
                   <p className="text-gray-600 leading-relaxed mb-8">
                     Have a question about our services? Need a custom solution for your business? 
                     Reach out to us today and let's start a conversation about your digital transformation.
                   </p>
                 </div>
                 <div className="w-48 h-48 flex-shrink-0">
                    <LottieAnimation 
                      url="https://assets2.lottiefiles.com/packages/lf20_in4cufsz.json"
                      className="w-full h-full"
                    />
                 </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6">
               <Reveal delay={200}>
                 <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="bg-white p-3 rounded-full shadow-sm text-brand-accent">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Phone</h3>
                      <p className="text-gray-600 mb-1">Mon-Fri from 9am to 6pm</p>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-brand-primary font-semibold hover:underline text-lg">{CONTACT_INFO.phone}</a>
                    </div>
                 </div>
               </Reveal>

               <Reveal delay={300}>
                 <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="bg-white p-3 rounded-full shadow-sm text-brand-accent">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600 mb-1">Our friendly team is here to help.</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-primary font-semibold hover:underline text-lg">{CONTACT_INFO.email}</a>
                    </div>
                 </div>
               </Reveal>

               <Reveal delay={400}>
                 <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="bg-white p-3 rounded-full shadow-sm text-brand-accent">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Office</h3>
                      <p className="text-gray-600">Mumbai, India</p>
                    </div>
                 </div>
               </Reveal>
            </div>
            
            <Reveal delay={500}>
              <div className="p-6 bg-blue-900 rounded-xl text-white text-center">
                <h3 className="font-bold text-xl mb-2">Founder Direct Line</h3>
                <p className="opacity-90 mb-4">For strategic partnerships and urgent inquiries.</p>
                <div className="inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20">
                  {CONTACT_INFO.founder}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form Side */}
          <div>
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