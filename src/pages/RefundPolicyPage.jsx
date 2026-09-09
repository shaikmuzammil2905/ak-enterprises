import React from 'react';
import { RotateCcw, CheckCircle2, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
          Assurance & Returns
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
          Refund & Replacement Policy
        </h1>
        <p className="text-xs text-slate-400 mt-2">7-Day Inspection Guarantee</p>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. 7-Day Return Eligibility</h2>
          <p>
            At <strong>{BUSINESS_INFO.name}</strong>, we stand behind the quality of our sourced items. If you receive a product that is damaged during transit, defective, or materially different from the catalog listing, you may request a return or replacement within 7 calendar days of delivery.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Condition for Return</h2>
          <p>
            The item must be unused, in its original packaging with tags, manuals, and accessories intact. Proof of purchase (Order ID or invoice) is required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Refund Processing</h2>
          <p>
            Once the returned consignment arrives at our Vijayawada inspection center and undergoes QC verification, refunds are approved within 48 hours to the original payment mode (or UPI/bank account for Cash on Delivery orders).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">4. Bulk Trade Orders</h2>
          <p>
            Custom import/export consignments manufactured or sourced against bespoke commercial contracts follow pre-shipment factory inspection terms and pro-forma service agreements.
          </p>
        </section>
      </div>
    </div>
  );
}
