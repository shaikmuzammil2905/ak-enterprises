import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home, ShoppingBag } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32 text-center">
      <div className="w-24 h-24 bg-brand-ice text-brand-cyan rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
        <Compass className="w-12 h-12 animate-spin-slow" />
      </div>

      <span className="text-sm font-bold uppercase tracking-wider text-brand-cyan bg-brand-sky/60 px-3 py-1 rounded-full">
        404 Error
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mt-3 mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-600 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
        The destination you were charting has moved, been renamed, or does not exist on AK Enterprises.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          to="/shop"
          className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold py-3.5 px-8 rounded-xl shadow-sm transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Browse Shop</span>
        </Link>
      </div>
    </div>
  );
}
