import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, X, History, ArrowRight, Layers } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';

  const [inputQuery, setInputQuery] = useState(urlQuery);
  const { searchHistory, addSearchTerm } = useShop();

  useEffect(() => {
    setInputQuery(urlQuery);
  }, [urlQuery]);

  const handleSearch = (term) => {
    setInputQuery(term);
    if (term.trim()) {
      addSearchTerm(term.trim());
      setSearchParams({ q: term.trim() });
    } else {
      setSearchParams({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputQuery);
  };

  // Matched products
  const matchedProducts = PRODUCTS.filter((product) => {
    if (!urlQuery.trim()) return false;
    const q = urlQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q)
    );
  });

  // Matched categories
  const matchedCategories = CATEGORIES.filter((category) => {
    if (!urlQuery.trim()) return false;
    const q = urlQuery.toLowerCase();
    return (
      category.name.toLowerCase().includes(q) ||
      category.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Search Bar Input */}
      <div className="max-w-2xl mx-auto mb-12">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            placeholder="Search electronics, cookware, tools, categories..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-slate-200 focus:border-brand-cyan rounded-2xl text-base shadow-sm focus:outline-none transition-all"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-5" />
          {inputQuery && (
            <button
              type="button"
              onClick={() => {
                setInputQuery('');
                setSearchParams({});
              }}
              className="absolute right-4 top-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </form>

        {/* Suggestions & Recent Searches */}
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 flex items-center gap-1 font-semibold">
            <History className="w-3.5 h-3.5" /> Recent:
          </span>
          {searchHistory.map((term, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSearch(term)}
              className="px-3 py-1 bg-slate-100 hover:bg-brand-ice hover:text-brand-cyan rounded-full text-slate-600 transition-colors font-medium"
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Results Area */}
      {urlQuery.trim() ? (
        <div className="space-y-12">
          {/* Matched Categories */}
          {matchedCategories.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-brand-cyan" />
                Matched Categories ({matchedCategories.length})
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {matchedCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/categories/${cat.slug}`}
                    className="p-4 rounded-2xl border border-slate-100 bg-white hover:border-brand-cyan/40 hover:shadow-card transition-all flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-slate-900">{cat.name}</h3>
                      <p className="text-xs text-slate-500">{cat.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-cyan" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matched Products */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                Search Results for "{urlQuery}" ({matchedProducts.length})
              </h2>
            </div>

            {matchedProducts.length === 0 ? (
              <div className="bg-white rounded-3xl border border-slate-100 p-12 text-center max-w-md mx-auto space-y-4">
                <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">No products matched</h3>
                <p className="text-sm text-slate-500">
                  We couldn't find any products matching "{urlQuery}". Try searching with different keywords like "earbuds", "drill", "cookware", or "chair".
                </p>
                <Link
                  to="/shop"
                  className="inline-block bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors"
                >
                  Browse Full Shop
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {matchedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Empty State / Search Guide */
        <div className="text-center py-12 space-y-6">
          <p className="text-slate-500 text-sm">
            Type any keyword above or explore our most sought-after categories:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/categories/${cat.slug}`}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:border-brand-cyan hover:text-brand-cyan transition-colors shadow-sm"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
