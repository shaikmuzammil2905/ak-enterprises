import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Star, ShoppingCart, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, cart } = useShop();
  const navigate = useNavigate();

  const isSaved = isInWishlist(product.id);
  const inCart = cart.some(item => item.id === product.id);

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-card transition-all duration-300 flex flex-col justify-between overflow-hidden relative">
      {/* Top Floating Badges */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        {discount > 0 ? (
          <span className="bg-rose-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm tracking-wide">
            {discount}% OFF
          </span>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className={`pointer-events-auto w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
            isSaved
              ? 'bg-rose-50 text-rose-500 scale-110'
              : 'bg-white/90 text-slate-400 hover:text-rose-500 hover:bg-white'
          }`}
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500' : ''}`} />
        </button>
      </div>

      {/* Product Image Clickable */}
      <Link
        to={`/product/${product.slug}`}
        className="block relative aspect-square overflow-hidden bg-slate-50 p-4"
      >
        <img
          src={product.images ? product.images[0] : product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Product Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-cyan mb-1 block">
            {product.category}
          </span>

          <Link
            to={`/product/${product.slug}`}
            className="block text-sm sm:text-base font-bold text-slate-800 hover:text-brand-cyan transition-colors line-clamp-2 leading-snug mb-1"
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-slate-700">
              {product.rating || 4.5}
            </span>
            <span className="text-xs text-slate-400">
              ({product.reviewCount || 40})
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="mt-2 pt-3 border-t border-slate-100 flex flex-col gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg sm:text-xl font-extrabold text-slate-900">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs sm:text-sm text-slate-400 line-through">
                ₹{product.compareAtPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            className="w-full flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-98 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
          >
            {inCart ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
