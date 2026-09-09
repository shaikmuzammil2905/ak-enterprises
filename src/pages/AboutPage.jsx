import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Target,
  Compass,
  HeartHandshake,
  Globe,
  Award,
  Clock,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function AboutPage() {
  const values = [
    { title: 'Quality', desc: 'Strict inspection protocols to ensure only verified, high-performance goods reach our clients.', icon: Award },
    { title: 'Trust', desc: 'Open, transparent trade terms and clear pricing with zero hidden intermediary markups.', icon: ShieldCheck },
    { title: 'Reliability', desc: 'Dependable delivery timelines and consistent container freight logistics coordination.', icon: Clock },
    { title: 'Transparency', desc: 'Direct communications, certified documentation, and ethical business conduct in every deal.', icon: HeartHandshake },
    { title: 'Customer Satisfaction', desc: 'Dedicated client support for wholesale buyers, retailers, and end-consumers.', icon: Target },
    { title: 'Global Reach', desc: 'Connecting domestic Indian commerce with vetted international manufacturing corridors.', icon: Globe }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero */}
      <section className="bg-brand-navy text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
            About AK Enterprises
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Quality Products. Trusted Global Trade.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Based in Vijayawada, Andhra Pradesh, AK Enterprises is an import & export firm dedicated to sourcing premium merchandise and streamlining international trade.
          </p>
        </div>
      </section>

      {/* Who We Are & Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
              A Forward-Looking Commercial Trade Partner
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              AK Enterprises was established with a singular focus: bridging global manufacturing excellence with Indian businesses and consumers. We specialize in import coordination, export facilitation, and curated e-commerce retail.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              With <strong>1 Year</strong> of foundational operational experience, we have prioritized building transparent relationships, strict product inspection benchmarks, and dependable freight channels over shortcuts.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div className="border-l-4 border-brand-cyan pl-4">
                <span className="text-2xl font-black text-brand-navy block">1 Year</span>
                <span className="text-xs text-slate-500 font-semibold">Active Commercial Operations</span>
              </div>
              <div className="border-l-4 border-brand-cyan pl-4">
                <span className="text-2xl font-black text-brand-navy block">Vijayawada, AP</span>
                <span className="text-xs text-slate-500 font-semibold">Headquarters & Trade Hub</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-card bg-slate-50">
            {/* Sky visual patch on left side */}
            <div className="absolute left-0 bottom-0 w-1/3 h-2/3 bg-gradient-to-tr from-sky-300/40 via-sky-200/25 to-transparent rounded-br-3xl pointer-events-none z-10" />
            <div className="absolute left-0 bottom-0 w-1/4 h-1/2 bg-gradient-to-t from-sky-400/20 to-transparent rounded-br-3xl pointer-events-none z-10" />
            <img
              src="/assets/image-copy-3.png"
              alt="AK Enterprises Trade & Logistics"
              className="w-full h-auto object-cover relative z-0"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-slate-50/70 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic">
                "To build a trusted business connecting quality products with customers and markets through reliable global trade."
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic">
                "To provide quality products and dependable import/export solutions with a strong focus on customer satisfaction."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-1">
            Our Foundation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-cyan flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">{v.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
