import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight, ShoppingCart } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function WishlistPage() {
  const { wishlist, moveToCart, toggleWishlist } = useShop();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-rose-50 text-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-2">
          Your Wishlist is Empty
        </h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm sm:text-base">
          Save your favorite products here to easily purchase them whenever you're ready!
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all active:scale-95"
        >
          <span>Explore Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
          My Wishlist ({wishlist.length})
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Items you have saved for later review
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-card transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-square rounded-xl bg-slate-50 p-4 overflow-hidden mb-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-3 right-3 p-1.5 bg-white/80 hover:bg-white text-rose-500 rounded-full shadow-sm"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
                {item.category}
              </span>
              <Link
                to={`/product/${item.slug}`}
                className="block font-bold text-slate-800 hover:text-brand-cyan text-sm line-clamp-2 mt-1 mb-2"
              >
                {item.name}
              </Link>
              <div className="text-base font-extrabold text-brand-navy mb-4">
                ₹{item.price.toLocaleString('en-IN')}
              </div>
            </div>

            <button
              onClick={() => moveToCart(item)}
              className="w-full flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-sm transition-all"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Move to Cart</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
