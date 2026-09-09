import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Globe,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  Package
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { CATEGORIES, BUSINESS_INFO } from '../data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { cartCount, wishlistCount, addSearchTerm } = useShop();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addSearchTerm(searchQuery.trim());
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-brand-navy text-white text-xs sm:text-sm py-2 px-4 border-b border-brand-navy-light/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <Globe className="w-3.5 h-3.5 text-brand-cyan animate-spin-slow shrink-0" />
            <span className="truncate">Global Trade • Quality Products • Better Tomorrow</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-300 font-normal">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-cyan shrink-0" />
              Based in Vijayawada, India | Import & Export Business
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none py-2">
            <img
              src="/assets/logo.png"
              alt="AK Enterprises Logo"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link
              to="/"
              className={`transition-colors hover:text-brand-cyan ${
                isActive('/') ? 'text-brand-cyan font-bold' : ''
              }`}
            >
              Home
            </Link>

            <Link
              to="/shop"
              className={`transition-colors hover:text-brand-cyan ${
                isActive('/shop') ? 'text-brand-cyan font-bold' : ''
              }`}
            >
              Shop
            </Link>

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCategoriesDropdownOpen(true)}
              onMouseLeave={() => setCategoriesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors hover:text-brand-cyan py-2 ${
                  isActive('/categories') ? 'text-brand-cyan font-bold' : ''
                }`}
                onClick={() => navigate('/categories')}
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${categoriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {categoriesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-card border border-slate-100 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-bold px-3 py-1.5">
                    Browse Categories
                  </div>
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/categories/${cat.slug}`}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-brand-ice hover:text-brand-cyan transition-colors text-slate-700 font-medium group"
                      onClick={() => setCategoriesDropdownOpen(false)}
                    >
                      <span>{cat.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-cyan group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                    <Link
                      to="/categories"
                      className="text-xs text-brand-cyan font-semibold hover:underline flex items-center gap-1"
                      onClick={() => setCategoriesDropdownOpen(false)}
                    >
                      View All Categories →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`transition-colors hover:text-brand-cyan ${
                isActive('/about') ? 'text-brand-cyan font-bold' : ''
              }`}
            >
              About Us
            </Link>

            <Link
              to="/import-export"
              className={`transition-colors hover:text-brand-cyan ${
                isActive('/import-export') ? 'text-brand-cyan font-bold' : ''
              }`}
            >
              Import & Export
            </Link>

            <Link
              to="/contact"
              className={`transition-colors hover:text-brand-cyan ${
                isActive('/contact') ? 'text-brand-cyan font-bold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right Action Icons */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Quick Search Bar / Icon */}
            <div className="relative">
              {searchOpen ? (
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-56 pl-3 pr-8 py-1.5 text-sm bg-slate-50 border border-brand-cyan rounded-full focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                  />
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="absolute right-2.5 text-slate-400 hover:text-slate-600"
                    aria-label="Close search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="p-2 text-slate-700 hover:text-brand-cyan hover:bg-slate-50 rounded-full transition-colors"
                  aria-label="Search"
                  title="Search products"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Account Icon */}
            <Link
              to="/account"
              className="p-2 text-slate-700 hover:text-brand-cyan hover:bg-slate-50 rounded-full transition-colors"
              aria-label="Account"
              title="My Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Wishlist Icon with count */}
            <Link
              to="/wishlist"
              className="p-2 text-slate-700 hover:text-brand-cyan hover:bg-slate-50 rounded-full transition-colors relative"
              aria-label="Wishlist"
              title="Saved Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-scale">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon with live badge */}
            <Link
              to="/cart"
              className="p-2 text-slate-700 hover:text-brand-cyan hover:bg-slate-50 rounded-full transition-colors relative"
              aria-label="Shopping Cart"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 ? (
                <span className="absolute -top-1 -right-1 bg-brand-cyan text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              ) : (
                <span className="absolute -top-1 -right-1 bg-slate-200 text-slate-600 text-[10px] font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Header Right Icons */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/search"
              className="p-2 text-slate-700 hover:text-brand-cyan rounded-lg transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Link>

            <Link
              to="/cart"
              className="p-2 text-slate-700 hover:text-brand-cyan rounded-lg transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute 1 top-1 right-1 bg-brand-cyan text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-navy rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-28 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity">
          <div className="bg-white h-full max-h-[calc(100vh-7rem)] overflow-y-auto px-6 py-6 flex flex-col justify-between shadow-2xl border-t border-slate-100">
            <div className="space-y-4">
              <div className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                Navigation
              </div>
              <div className="flex flex-col space-y-3 font-semibold text-slate-800 text-base">
                <Link
                  to="/"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/shop"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/shop') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </Link>

                <Link
                  to="/categories"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/categories') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Categories
                </Link>

                <Link
                  to="/import-export"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/import-export') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Import & Export
                </Link>

                <Link
                  to="/services"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/services') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  to="/about"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/about') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/contact') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  to="/faq"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/faq') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </Link>

                <Link
                  to="/account"
                  className={`py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors ${
                    isActive('/account') ? 'text-brand-cyan bg-brand-ice font-bold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  My Account
                </Link>
              </div>
            </div>

            {/* Mobile Contact Quick Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-100 text-brand-navy rounded-xl font-semibold text-sm hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
                Call +91 {BUSINESS_INFO.primaryPhone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
