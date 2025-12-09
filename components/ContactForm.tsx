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
      <div className="bg-white p-5 rounded-4 shadow-lg border-top border-4 border-success text-center py-5">
        <div className="mx-auto bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
          <CheckCircle className="text-success" size={32} />
        </div>
        <h3 className="h3 fw-bold text-dark mb-2">Message Sent!</h3>
        <p className="text-secondary mb-4">Thank you for contacting TechNovation360. Our team will get back to you shortly.</p>
        <button onClick={() => setStatus('idle')} className="btn btn-link text-brand-primary fw-bold text-decoration-none">Send another message</button>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 p-md-5 rounded-4 shadow-lg border-top border-4 border-info">
      <div className="d-flex align-items-center gap-2 mb-4 text-secondary small">
        <ShieldCheck size={16} className="text-success" />
        <span>Secure 256-bit Encrypted Connection</span>
      </div>
      
      <h3 className="h3 fw-bold text-brand-dark mb-4">Request a Free Consultation</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="name" className="form-label text-secondary small fw-bold">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              required 
              value={formData.name}
              onChange={handleChange}
              className="form-control form-control-lg fs-6"
              placeholder="John Doe"
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="phone" className="form-label text-secondary small fw-bold">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone"
              required 
              value={formData.phone}
              onChange={handleChange}
              className="form-control form-control-lg fs-6"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-secondary small fw-bold">Business Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            required 
            value={formData.email}
            onChange={handleChange}
            className="form-control form-control-lg fs-6"
            placeholder="john@company.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label text-secondary small fw-bold">Interest</label>
          <select 
            name="subject" 
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-select form-select-lg fs-6"
          >
            <option value="">Select a solution...</option>
            <option value="cloud">Cloud Solutions</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="automation">Operations Automation</option>
            <option value="digital">Digital Presence</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label text-secondary small fw-bold">Message</label>
          <textarea 
            name="message" 
            id="message"
            rows={4} 
            required
            value={formData.message}
            onChange={handleChange}
            className="form-control form-control-lg fs-6"
            placeholder="Tell us about your business needs..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className={`btn btn-brand-accent w-100 py-3 rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2 ${status === 'submitting' ? 'opacity-75' : ''}`}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={18} />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;