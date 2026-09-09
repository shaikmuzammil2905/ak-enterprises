import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Ship,
  Plane,
  Truck,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Headphones,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  Send,
  Sparkles,
  Layers,
  Laptop,
  UtensilsCrossed,
  Wrench,
  Briefcase,
  PackageCheck
} from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, PRODUCTS, TESTIMONIALS, BUSINESS_INFO } from '../data/products';

export default function HomePage() {
  const navigate = useNavigate();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Filter featured products
  const featuredProducts = PRODUCTS.slice(0, 5);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-5 h-5 text-brand-cyan" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-5 h-5 text-brand-cyan" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-brand-cyan" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-brand-cyan" />;
      case 'PackageCheck': return <PackageCheck className="w-5 h-5 text-brand-cyan" />;
      default: return <Layers className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSubmitted(false);
      }, 4000);
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden min-h-[520px] sm:min-h-[600px] flex items-center">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/hero-bg.png"
            alt="AK Enterprises Global Trade"
            className="w-full h-full object-cover object-center"
          />
          {/* Light subtle gradient overlay - removes heavy darkness/shadow while preserving text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-900/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16">
          <div className="max-w-2xl space-y-6 sm:space-y-7 text-center lg:text-left bg-slate-900/30 p-6 sm:p-8 rounded-3xl backdrop-blur-xs border border-white/10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/80 backdrop-blur-md text-white font-semibold text-xs tracking-wide border border-brand-cyan/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span>Your Global Trade Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
              Connecting Markets Across the World
            </h1>

            {/* Subtitle */}
            <p className="text-white font-medium text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              We specialize in export and import, delivering quality products,
              reliable logistics and global trade solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/shop"
                className="flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-light text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span>Explore Our Products →</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 font-bold px-7 py-3.5 rounded-xl shadow-sm hover:shadow transition-all duration-200"
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Feature Highlights under CTAs */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-3 gap-3 sm:gap-6 text-left">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-white/15 text-brand-cyan shrink-0">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Global Shipping</h4>
                  <p className="text-[11px] text-slate-300 hidden sm:block">Worldwide Reach</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-white/15 text-brand-cyan shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Trusted Suppliers</h4>
                  <p className="text-[11px] text-slate-300 hidden sm:block">Quality Assured</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-lg bg-white/15 text-brand-cyan shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Business Growth</h4>
                  <p className="text-[11px] text-slate-300 hidden sm:block">Together We Grow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Vijayawada to the World Badge */}
          <div className="hidden lg:flex absolute top-8 right-8 bg-brand-navy/95 backdrop-blur-md text-white p-3 rounded-2xl shadow-lg border border-brand-cyan/40 items-center gap-3 animate-float">
            <div className="w-9 h-9 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-cyan block">
                From Vijayawada
              </span>
              <span className="text-xs font-bold tracking-tight">
                To The World
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              Shop By Category
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Popular Categories
            </h2>
          </div>
          <Link
            to="/categories"
            className="text-xs sm:text-sm font-bold text-brand-cyan hover:text-brand-cyan-dark flex items-center gap-1 group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className="group bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-card hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="aspect-square rounded-xl bg-slate-50 overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Category Info */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div className="w-6 h-6 rounded-full bg-slate-50 group-hover:bg-brand-cyan group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white" />
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-brand-cyan transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS / BEST SELLING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              Featured Products
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Best Selling Products
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs sm:text-sm font-bold text-brand-cyan hover:text-brand-cyan-dark flex items-center gap-1 group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE AK ENTERPRISES */}
      <section className="bg-slate-50/70 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              Why Choose AK Enterprises
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-3">
              Your Trusted Import & Export Partner in India
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We bring the world's best products to your business with quality, reliability and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Quality Products</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Only the best, carefully sourced and verified products from reputable manufacturers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Reliable Sourcing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strong global partnerships and trusted direct supplier coordination.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center mb-4">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Global Trade</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamless import & export solutions across countries with complete freight tracking.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-cyan flex items-center justify-center mb-4">
                <Headphones className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Customer Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dedicated support for your business needs, enquiries, and wholesale dispatches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BULK ORDERS & IMPORT-EXPORT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-brand-navy overflow-hidden p-6 sm:p-10 lg:p-12 text-white shadow-card">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#00a8e8_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cyan bg-white/10 px-3 py-1 rounded-full">
                <Ship className="w-3.5 h-3.5" />
                <span>Bulk Orders & Import-Export Enquiries</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Looking for Bulk Orders?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Get the best prices, reliable logistics and smooth import-export services for your business needs.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  Bulk Order Discounts
                </span>
                <span className="flex items-center gap-1.5">
                  <Plane className="w-4 h-4 text-brand-cyan" />
                  Global Shipping
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                  Custom Solutions
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-light text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/import-export"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3.5 px-6 rounded-xl transition-all"
              >
                <span>Request Bulk Order</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-1">
              What Our Clients Say
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Trusted by Businesses Across India
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setActiveTestimonial(prev => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1))}
              className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTestimonial(prev => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Testimonials Desktop (3 cards) / Mobile (Carousel) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between transition-all duration-300 ${
                idx === activeTestimonial ? 'ring-2 ring-brand-cyan/30' : ''
              }`}
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. NEWSLETTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-ice/80 rounded-3xl border border-brand-cyan/20 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
              Stay Updated With Our Latest Products & Offers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Subscribe to our newsletter for new arrivals, exclusive trade deals and logistics updates.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex-1 max-w-md">
            {newsletterSubmitted ? (
              <div className="bg-emerald-50 text-emerald-700 font-semibold text-sm px-4 py-3 rounded-xl border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Thank you! You have been subscribed to updates.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
                />
                <button
                  type="submit"
                  className="bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shrink-0 shadow-sm"
                >
                  Subscribe
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
