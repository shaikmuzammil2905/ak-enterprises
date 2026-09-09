import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'Where is AK Enterprises located?',
      a: 'AK Enterprises is based in Vijayawada, Andhra Pradesh, India. Our office is located at D.No. 28-6-19, Arundalpet, Jaleel Street, Vijayawada - 520002.'
    },
    {
      q: 'What types of products do you import and sell?',
      a: 'We source consumer electronics, stainless steel kitchenware, commercial and industrial power tools, ergonomic office furniture, and general merchandise from vetted global manufacturers.'
    },
    {
      q: 'How can I place a bulk order or request wholesale pricing?',
      a: 'You can submit an enquiry via our "Bulk Order" banner, our Import & Export page form, or by contacting our Vijayawada office directly at +91 9502947144 / WhatsApp.'
    },
    {
      q: 'Do you offer international shipping or domestic delivery across India?',
      a: 'Yes, we provide pan-India logistics delivery through trusted courier partners, as well as port-to-port and CIF/FOB freight coordination for international trade.'
    },
    {
      q: 'How long does shipping take for online retail orders?',
      a: 'Standard orders dispatched from our Vijayawada facility are typically delivered within 2 to 5 business days depending on your destination city.'
    },
    {
      q: 'What is your return and refund policy?',
      a: 'We offer a 7-day inspection return window for products with manufacturing defects or transit damage. Replacements or full refunds are processed upon QC return inspection.'
    },
    {
      q: 'How do I track my order?',
      a: 'Log in to your account and navigate to "My Orders" or open your order link to view real-time status updates from our hub to your doorstep.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
          Help & Guidance
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          Find fast answers regarding our products, global sourcing capabilities, delivery timelines, and bulk purchase terms.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-800 text-base hover:text-brand-cyan transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand-cyan' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still need help CTA */}
      <div className="bg-brand-ice/80 rounded-3xl border border-brand-cyan/20 p-8 text-center space-y-4">
        <h3 className="text-lg font-bold text-brand-navy">Still have a question?</h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Our team is available Monday to Saturday to clarify your product or trade questions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            className="flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 {BUSINESS_INFO.primaryPhone}</span>
          </a>
          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
