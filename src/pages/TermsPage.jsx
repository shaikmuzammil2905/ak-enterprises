import React from 'react';
import { BUSINESS_INFO } from '../data/products';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
          Terms of Service
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-400 mt-2">Last Updated: January 2026</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or transacting on the AK Enterprises website, you acknowledge and agree to comply with these terms of commercial trade and online sales.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Commercial Trade & Sourcing Orders</h2>
          <p>
            All wholesale orders, container freight, and custom overseas imports are subject to pro-forma invoice agreements, milestone payments, and verified port documentation. AK Enterprises verifies product specifications prior to loading.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Pricing & Currency</h2>
          <p>
            All domestic retail prices are quoted in Indian National Rupees (INR / ₹) and are inclusive of standard GST unless stated otherwise. Export quotes are priced on standard Incoterms (e.g. FOB, CIF).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Jurisdiction</h2>
          <p>
            Any disputes arising in connection with trade agreements are subject to the exclusive jurisdiction of the competent courts in Vijayawada, Andhra Pradesh, India.
          </p>
        </section>
      </div>
    </div>
  );
}
