import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Trash2,
  Heart,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Truck,
  ArrowLeft
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CartPage() {
  const {
    cart,
    cartCount,
    cartSubtotal,
    cartShipping,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
    toggleWishlist
  } = useShop();

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-2">
          Your Cart is Empty
        </h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm sm:text-base">
          Looks like you haven't added any items to your shopping cart yet. Explore our verified products from global partners!
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-all active:scale-95"
        >
          <span>Start Shopping</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            Shopping Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Review your items and proceed to secure checkout
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs font-semibold text-rose-500 hover:underline"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Cart Item List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-sm"
            >
              {/* Product Thumbnail */}
              <Link
                to={`/product/${item.slug}`}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl bg-slate-50 p-2 shrink-0 flex items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </Link>

              {/* Product Info */}
              <div className="flex-1 w-full text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
                  {item.category}
                </span>
                <Link
                  to={`/product/${item.slug}`}
                  className="block font-bold text-slate-800 hover:text-brand-cyan text-sm sm:text-base leading-snug line-clamp-2"
                >
                  {item.name}
                </Link>
                <div className="text-sm font-extrabold text-brand-navy mt-1">
                  ₹{item.price.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-l-xl transition-colors font-bold"
                >
                  -
                </button>
                <span className="w-10 text-center text-xs font-bold text-slate-800">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-200 rounded-r-xl transition-colors font-bold"
                >
                  +
                </button>
              </div>

              {/* Total Item Price */}
              <div className="text-sm sm:text-base font-extrabold text-slate-900 min-w-[80px] text-right">
                ₹{(item.price * item.quantity).toLocaleString('en-IN')}
              </div>

              {/* Remove Action */}
              <div className="flex sm:flex-col items-center gap-2">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
                  aria-label="Remove item"
                  title="Remove from cart"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Continue Shopping Link */}
          <div className="pt-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </div>

        {/* Order Summary Box */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-6 sticky top-28">
            <h2 className="font-extrabold text-lg text-slate-900 pb-4 border-b border-slate-100">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-slate-800">
                  ₹{cartSubtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-bold text-slate-800">
                  {cartShipping === 0 ? (
                    <span className="text-emerald-600 font-bold">FREE</span>
                  ) : (
                    `₹${cartShipping}`
                  )}
                </span>
              </div>

              {cartSubtotal < 1999 && (
                <p className="text-[11px] text-slate-400">
                  Add ₹{(1999 - cartSubtotal).toLocaleString('en-IN')} more to unlock <strong>FREE Shipping</strong>!
                </p>
              )}

              <div className="pt-3 border-t border-slate-100 flex justify-between text-base font-extrabold text-brand-navy">
                <span>Total</span>
                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-cyan" />
                <span>Safe & Secure 256-Bit SSL Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-cyan" />
                <span>Fast Dispatches from Vijayawada Logistics Hub</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
