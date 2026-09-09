import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Layers, ShieldCheck, Truck, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { CATEGORIES, PRODUCTS } from '../data/products';

export default function CategoryDetailPage() {
  const { slug } = useParams();

  const category = CATEGORIES.find(c => c.slug === slug);
  const categoryProducts = PRODUCTS.filter(p => p.categorySlug === slug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Category Not Found</h2>
        <p className="text-slate-500 mb-6">The category you are looking for does not exist or has been relocated.</p>
        <Link
          to="/categories"
          className="inline-flex items-center gap-2 bg-brand-cyan text-white font-bold px-6 py-3 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Categories</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1.5">
        <Link to="/" className="hover:text-brand-cyan">Home</Link>
        <span>/</span>
        <Link to="/categories" className="hover:text-brand-cyan">Categories</Link>
        <span>/</span>
        <span className="text-slate-800 font-semibold">{category.name}</span>
      </nav>

      {/* Category Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-brand-navy text-white p-6 sm:p-10 mb-10 shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
              Category Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {category.name}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                Verified QC Inspection
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-brand-cyan" />
                Direct Container Freight
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-40 h-40 rounded-2xl bg-white/10 p-4 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-contain mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products in this category */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Available Products ({categoryProducts.length})
          </h2>
          <Link
            to="/shop"
            className="text-xs sm:text-sm font-semibold text-brand-cyan hover:underline"
          >
            View Entire Shop →
          </Link>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center text-slate-500">
            No products currently listed under this category. Check back soon!
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
