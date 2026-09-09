import React, { useState } from 'react';
import {
  Ship,
  Plane,
  Truck,
  Globe,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Building2,
  ArrowRight,
  Send
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function ImportExportPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    tradeType: 'import',
    productCategory: 'Electronics',
    estimatedQuantity: '',
    requirements: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        tradeType: 'import',
        productCategory: 'Electronics',
        estimatedQuantity: '',
        requirements: ''
      });
    }, 4000);
  };

  const steps = [
    {
      step: '01',
      title: 'Product Requirement',
      desc: 'You share your technical specifications, required volume, and compliance targets with our trade team.',
      icon: FileCheck
    },
    {
      step: '02',
      title: 'Global Sourcing',
      desc: 'We identify and negotiate directly with pre-vetted, certified manufacturers across international industrial zones.',
      icon: Globe
    },
    {
      step: '03',
      title: 'Quality Check & QC',
      desc: 'Strict on-ground inspection, sample verification, and factory compliance before any consignment is loaded.',
      icon: ShieldCheck
    },
    {
      step: '04',
      title: 'Logistics & Customs',
      desc: 'End-to-end multi-modal freight handling (Ocean / Air / Road) with full port customs clearance.',
      icon: Ship
    },
    {
      step: '05',
      title: 'Final Delivery',
      desc: 'Safe domestic transport directly to your warehouse or commercial facility with complete trade documentation.',
      icon: Truck
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-brand-navy text-white pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cyan bg-white/10 px-3 py-1 rounded-full">
              <Globe className="w-3.5 h-3.5" />
              <span>International Trade & Cargo Operations</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Connecting Quality Products With Global Markets
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              AK Enterprises delivers complete, transparent, and dependable import & export solutions.
              From direct factory sourcing to maritime container logistics and domestic delivery, we simplify global trade.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#enquiry"
                className="bg-brand-cyan hover:bg-brand-cyan-light text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all active:scale-95"
              >
                Submit Trade Enquiry
              </a>
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-8 rounded-xl transition-all"
              >
                Call Trade Desk
              </a>
            </div>
          </div>
        </div>

        {/* Visual decoration */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 hidden lg:block pointer-events-none">
          <img
            src="/assets/hero-bg.png"
            alt="Logistics background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 2. Core Trade Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-1">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            Our Import & Export Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center">
              <Ship className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Import Services</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Comprehensive import assistance for businesses in India. We manage foreign supplier communications, port clearance, tariff verification, and customs documentation.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Export Facilitation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Structured export pathways for selected domestic commodities and manufactured products seeking international buyer access and compliant overseas transit.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Factory Sourcing & QC</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Direct producer matchmaking without middlemen markups. Independent on-site inspection protocols to safeguard your order quality before bill of lading issuance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 5-Step Process */}
      <section className="bg-slate-50/80 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Our 5-Step Trade Execution Process
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every shipment follows rigorous milestone checkpoints ensuring reliability and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between relative group hover:border-brand-cyan/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-brand-cyan/30 group-hover:text-brand-cyan transition-colors">
                        {s.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-brand-cyan flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Business Enquiry Form */}
      <section id="enquiry" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-card space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Commercial Enquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Request an Import or Export Quotation
            </h2>
            <p className="text-sm text-slate-500">
              Submit your trade specifications and our Vijayawada desk will prepare a feasibility analysis and quote within 24 hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-emerald-900">Enquiry Received!</h3>
              <p className="text-sm text-emerald-700">
                Thank you, {formData.name || 'valued partner'}. Our trade manager will contact you promptly at {formData.email || 'your email'}.
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
                  <label className="text-xs font-bold text-slate-700 block mb-1">Company / Business Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
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

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Trade Direction</label>
                  <select
                    value={formData.tradeType}
                    onChange={(e) => setFormData({ ...formData, tradeType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  >
                    <option value="import">Import (Sourcing into India)</option>
                    <option value="export">Export (Shipping Overseas)</option>
                    <option value="bulk">Bulk Domestic Procurement</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Target Product Category</label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  >
                    <option value="Electronics">Electronics & Tech</option>
                    <option value="Home & Kitchen">Home & Kitchenware</option>
                    <option value="Industrial Products">Industrial Machinery & Tools</option>
                    <option value="Office Supplies">Office Supplies & Furniture</option>
                    <option value="General Merchandise">General Merchandise</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Detailed Requirements & Specifications</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide volume requirements, destination port, specifications, or timelines..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-md transition-all active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit Trade Enquiry</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
