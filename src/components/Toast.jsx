import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Toast() {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className="fixed top-24 right-4 sm:right-6 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex items-center gap-3 bg-brand-navy text-white px-4 py-3 rounded-xl shadow-float border border-brand-cyan/40 max-w-sm">
        {toast.type === 'info' ? (
          <Info className="w-5 h-5 text-brand-cyan shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        )}
        <span className="text-sm font-medium text-slate-100">{toast.message}</span>
      </div>
    </div>
  );
}
