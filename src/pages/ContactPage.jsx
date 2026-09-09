import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact AK Enterprises
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have questions about product orders, container imports, or wholesale procurement? Our team in Vijayawada is here to assist you.
          </p>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-28 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 hover:border-brand-cyan/40 transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 block uppercase">Call Directly</span>
              <h3 className="font-extrabold text-slate-900 text-base group-hover:text-brand-cyan transition-colors">
                +91 {BUSINESS_INFO.primaryPhone}
              </h3>
            </div>
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 hover:border-emerald-500/40 transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 block uppercase">Instant WhatsApp</span>
              <h3 className="font-extrabold text-slate-900 text-base group-hover:text-emerald-600 transition-colors">
                +91 {BUSINESS_INFO.whatsapp}
              </h3>
            </div>
          </a>

          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="bg-white rounded-3xl p-6 shadow-card border border-slate-100 hover:border-brand-cyan/40 transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white flex items-center justify-center transition-colors shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold text-slate-400 block uppercase">Email Us</span>
              <h3 className="font-extrabold text-slate-900 text-sm group-hover:text-brand-cyan transition-colors truncate">
                {BUSINESS_INFO.email}
              </h3>
            </div>
          </a>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                Office Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mt-1">
                AK ENTERPRISES
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Registered import and export commercial trade office located in Arundelpet, Vijayawada.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-cyan shrink-0 mt-1" />
                <div className="text-sm">
                  <h4 className="font-bold text-slate-900">Commercial Address</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    {BUSINESS_INFO.address.street},<br />
                    {BUSINESS_INFO.address.city},<br />
                    {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode},<br />
                    {BUSINESS_INFO.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Phone className="w-5 h-5 text-brand-cyan shrink-0 mt-1" />
                <div className="text-sm">
                  <h4 className="font-bold text-slate-900">Contact Phones</h4>
                  <p className="text-slate-600 mt-1">
                    Primary: <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="hover:text-brand-cyan font-semibold">+91 {BUSINESS_INFO.phones[0]}</a><br />
                    Secondary: <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="hover:text-brand-cyan font-semibold">+91 {BUSINESS_INFO.phones[1]}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                <Clock className="w-5 h-5 text-brand-cyan shrink-0 mt-1" />
                <div className="text-sm">
                  <h4 className="font-bold text-slate-900">Business Hours</h4>
                  <p className="text-slate-600 mt-1">
                    Monday to Saturday: 9:00 AM - 7:30 PM<br />
                    Sunday: Closed (Emergency Cargo support via WhatsApp)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-card">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Send an Enquiry</h3>
            <p className="text-slate-500 text-sm mb-6">
              Fill out the form below and we will get back to you within one business day.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Enquiry Submitted!</h4>
                <p className="text-sm text-emerald-700">
                  Thank you, {formData.name}. Your message has been sent to AK Enterprises trade desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bulk order enquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your requirement or question in detail..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
