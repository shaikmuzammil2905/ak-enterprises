import React from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Ship,
  Plane,
  Boxes,
  Headphones,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function ServicesPage() {
  const services = [
    {
      id: 's-1',
      title: 'Product Sourcing',
      desc: 'Quality products sourced from trusted global suppliers. We identify verified production lines, negotiate competitive volume tiers, and conduct pre-shipment quality assurance.',
      icon: Search,
      benefits: ['Verified international suppliers', 'Factory price negotiation', 'Sample validation & inspection']
    },
    {
      id: 's-2',
      title: 'Import Services',
      desc: 'Reliable import coordination for Indian business requirements. Full management of ocean container freight, air shipments, and port customs clearance protocols.',
      icon: Ship,
      benefits: ['Customs tariff assessment', 'Documentation & Bill of Lading', 'Port-to-warehouse inland transit']
    },
    {
      id: 's-3',
      title: 'Export Services',
      desc: 'Professional export support for selected quality products. Helping Indian manufacturers connect with global buyers and adhere to international shipping norms.',
      icon: Plane,
      benefits: ['Global buyer matching', 'Export packaging compliance', 'International freight insurance']
    },
    {
      id: 's-4',
      title: 'Bulk & Wholesale Orders',
      desc: 'Dedicated procurement pipeline for retailers, corporate offices, and institutional distributors requiring container or pallet-level shipments.',
      icon: Boxes,
      benefits: ['Wholesale volume pricing', 'Scheduled recurring deliveries', 'Flexible commercial payment modes']
    },
    {
      id: 's-5',
      title: 'Global Trade Support',
      desc: 'Continuous trade coordination and international supplier communication. We bridge language, time-zone, and legal hurdles for frictionless trade.',
      icon: Headphones,
      benefits: ['Multilingual supplier liaison', 'Real-time shipment tracking', 'Dedicated Vijayawada trade desk']
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
            Our Trade Solutions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Commercial Sourcing & Global Trade Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            AK Enterprises offers dependable, end-to-end import, export, and product procurement services designed to accelerate business operations.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                  <div className="space-y-2 mb-6">
                    {s.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="pt-4 border-t border-slate-100 text-brand-cyan hover:text-brand-cyan-dark font-bold text-xs flex items-center gap-1 group"
                >
                  <span>Enquire About Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-brand-ice rounded-3xl border border-brand-cyan/20 p-8 sm:p-12 space-y-4">
          <h2 className="text-2xl font-bold text-brand-navy">
            Need a Custom Trade Solution?
          </h2>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            Contact our trade specialists directly to discuss your specific consignment sizes, timeline requirements, or customized sourcing.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
