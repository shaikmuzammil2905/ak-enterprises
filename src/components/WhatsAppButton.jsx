import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 group">
      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with AK Enterprises"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-current text-white stroke-none" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-100"></span>
          </span>
        </span>
        <span className="hidden sm:inline-block font-semibold text-sm tracking-wide pr-1">
          Chat with Us
        </span>
      </a>
    </aside>
  );
}
