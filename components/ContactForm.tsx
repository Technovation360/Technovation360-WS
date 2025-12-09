import React, { useState } from 'react';
import { ShieldCheck, Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500 text-center py-16">
        <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">Thank you for contacting TechNovation360. Our team will get back to you shortly.</p>
        <button onClick={() => setStatus('idle')} className="text-brand-primary font-semibold hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-accent">
      <div className="flex items-center gap-2 mb-6 text-gray-500 text-sm">
        <ShieldCheck size={16} className="text-green-500" />
        <span>Secure 256-bit Encrypted Connection</span>
      </div>
      
      <h3 className="text-2xl font-bold text-brand-dark mb-6">Request a Free Consultation</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              required 
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone"
              required 
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            required 
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Interest</label>
          <select 
            name="subject" 
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Select a solution...</option>
            <option value="cloud">Cloud Solutions</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="automation">Operations Automation</option>
            <option value="digital">Digital Presence</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            name="message" 
            id="message"
            rows={4} 
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
            placeholder="Tell us about your business needs..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className={`w-full bg-brand-accent hover:bg-sky-600 text-white font-bold py-3 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;