import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, Facebook, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block bg-white p-3 rounded-2xl shadow-md">
              <img
                src="/assets/logo.png"
                alt="AK Enterprises Logo"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-brand-cyan text-base font-semibold tracking-wide">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              AK Enterprises is a premier import and export firm based in Vijayawada, India.
              We specialize in sourcing certified products from trusted global manufacturers
              and delivering seamless commercial trade logistics.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AK Enterprises Facebook page"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-cyan hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AK Enterprises Instagram page"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-cyan hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AK Enterprises LinkedIn profile"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-cyan hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AK Enterprises YouTube channel"
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-brand-cyan hover:text-white flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wider uppercase text-xs">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-brand-cyan transition-colors">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-brand-cyan transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-brand-cyan transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Business & Trade */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wider uppercase text-xs">
              Business
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/import-export" className="hover:text-brand-cyan transition-colors">
                  Import & Export
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-cyan transition-colors">
                  Contact & Enquiries
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-cyan transition-colors">
                  Trade FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-brand-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-brand-cyan transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:text-brand-cyan transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-brand-cyan transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white text-base font-bold mb-4 tracking-wider uppercase text-xs">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                <span className="text-slate-300">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}, {BUSINESS_INFO.address.country}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="hover:text-white transition-colors">
                    +91 {BUSINESS_INFO.phones[0]}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phones[1]}`} className="hover:text-white transition-colors">
                    +91 {BUSINESS_INFO.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  WhatsApp: +91 {BUSINESS_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 AK ENTERPRISES. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span>•</span>
            <Link to="/shipping-policy" className="hover:text-white transition-colors">
              Shipping
            </Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
