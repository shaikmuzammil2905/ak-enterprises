import React from 'react';
import { Truck, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
          Logistics & Fulfillment
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
          Shipping & Freight Policy
        </h1>
        <p className="text-xs text-slate-400 mt-2">Dispatches from Vijayawada Logistics Hub</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
          <Truck className="w-6 h-6 text-brand-cyan mx-auto mb-2" />
          <h4 className="font-bold text-slate-800 text-sm">Pan-India Courier</h4>
          <p className="text-xs text-slate-500 mt-1">2-5 Business Days</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
          <Clock className="w-6 h-6 text-brand-cyan mx-auto mb-2" />
          <h4 className="font-bold text-slate-800 text-sm">Same-Day Dispatch</h4>
          <p className="text-xs text-slate-500 mt-1">Orders before 1:00 PM</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
          <ShieldCheck className="w-6 h-6 text-brand-cyan mx-auto mb-2" />
          <h4 className="font-bold text-slate-800 text-sm">Insured Freight</h4>
          <p className="text-xs text-slate-500 mt-1">Full Transit Protection</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 shadow-sm space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">1. Domestic Order Shipping</h2>
          <p>
            Standard retail orders are dispatched from our central warehouse in Vijayawada, Andhra Pradesh. We offer FREE delivery on all orders above ₹1,999. For orders below ₹1,999, a nominal flat shipping fee of ₹99 applies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">2. Commercial Container & Bulk Freight</h2>
          <p>
            Bulk commercial orders and import consignments are handled via specialized multimodal transport (road container freight and rail). Transit times and customs clearance schedules are detailed on each trade quotation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900">3. Real-Time Tracking</h2>
          <p>
            Every dispatch receives an automated consignment tracking number viewable in your Customer Account portal.
          </p>
        </section>
      </div>
    </div>
  );
}
