import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Laptop, UtensilsCrossed, Wrench, Briefcase, PackageCheck } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategoriesPage() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-6 h-6 text-brand-cyan" />;
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-6 h-6 text-brand-cyan" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-brand-cyan" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-brand-cyan" />;
      case 'PackageCheck': return <PackageCheck className="w-6 h-6 text-brand-cyan" />;
      default: return <Layers className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan block mb-2">
          Global Sourcing Categories
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
          Explore All Categories
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Discover a wide range of verified merchandise, commercial machinery, and household products directly from vetted international manufacturers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories/${cat.slug}`}
            className="group bg-white rounded-3xl border border-slate-100 p-6 shadow-sm hover:shadow-card hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-slate-50 overflow-hidden mb-6 p-4 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-brand-cyan transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    {cat.itemCount} Verified Products
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {cat.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-brand-cyan font-bold text-sm">
              <span>View Catalog</span>
              <div className="w-8 h-8 rounded-full bg-brand-ice group-hover:bg-brand-cyan group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
