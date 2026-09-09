import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/products';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
          Legal & Compliance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 mt-2">Effective Date: January 1, 2026</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Introduction</h2>
          <p>
            Welcome to <strong>{BUSINESS_INFO.name}</strong>. We value your trust and are committed to protecting your personal information. This Privacy Policy details how we collect, utilize, and protect your information when accessing our e-commerce platform and commercial trade services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
          <p>We may collect personal details necessary to execute retail orders and commercial import/export contracts, including:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
            <li>Contact details (Full name, phone numbers, billing/shipping address, email address).</li>
            <li>Commercial trade enquiry specifics (company name, GST details, purchase volume estimates).</li>
            <li>Transaction reference records (we do not store raw credit card credentials on our servers).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. How Information is Used</h2>
          <p>Your details are used strictly for order processing, logistics coordination, regulatory export/import compliance, warranty assistance, and customer support.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Contact Information</h2>
          <p>
            For privacy inquiries or data requests, contact us at:
            <br />
            <strong>AK Enterprises</strong>
            <br />
            {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
            <br />
            Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-brand-cyan hover:underline">{BUSINESS_INFO.email}</a>
          </p>
        </section>
      </div>
    </div>
  );
}
