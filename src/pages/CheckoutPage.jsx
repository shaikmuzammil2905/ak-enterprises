import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, cartSubtotal, cartShipping, cartTotal, placeOrder } = useShop();

  const [formData, setFormData] = useState({
    name: 'Muzammil Shaik',
    email: 'akenterprisecorp@gmail.com',
    phone: '9502947144',
    address: 'D.No. 28-6-19, Arundalpet, Jaleel Street',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    pincode: '520002',
    country: 'India',
    paymentMethod: 'upi'
  });

  const [orderComplete, setOrderComplete] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">No items to checkout</h2>
        <p className="text-slate-500 mb-6">Your shopping cart is empty.</p>
        <Link
          to="/shop"
          className="inline-block bg-brand-cyan text-white font-bold py-3 px-6 rounded-xl text-sm"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order = placeOrder({
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        },
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          country: formData.country
        },
        paymentMethod: formData.paymentMethod.toUpperCase()
      });
      setIsSubmitting(false);
      setOrderComplete(order);
    }, 1200);
  };

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-card space-y-6">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
              Order Confirmed
            </span>
            <h1 className="text-3xl font-extrabold text-brand-navy mt-2">
              Thank You for Your Order!
            </h1>
            <p className="text-sm text-slate-600 mt-2">
              Your order ID is <strong>{orderComplete.id}</strong>. We have dispatched a confirmation receipt to <strong>{formData.email}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs sm:text-sm space-y-2">
            <div className="flex justify-between font-bold text-slate-800">
              <span>Amount Paid:</span>
              <span>₹{orderComplete.total.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Payment Mode:</span>
              <span>{orderComplete.paymentMethod} (Test / Demo)</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Delivery To:</span>
              <span>{orderComplete.shippingAddress.city}, {orderComplete.shippingAddress.state}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              to={`/account/orders/${orderComplete.id}`}
              className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-6 rounded-xl text-sm transition-all"
            >
              View Order Tracking
            </Link>
            <Link
              to="/shop"
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl text-sm transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
          Checkout & Shipping
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Complete your delivery details to finalize your commercial shipment
        </p>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Form Details (Left) */}
        <div className="lg:col-span-7 space-y-8">
          {/* 1. Customer Information */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-cyan text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              Customer Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Phone / Mobile</label>
                <input
                  type="tel"
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>
            </div>
          </div>

          {/* 2. Delivery Address */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-cyan text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              Delivery Address
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-bold text-slate-700 block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Door No, Street name, Landmark"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">City</label>
                <input
                  type="text"
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">State</label>
                <input
                  type="text"
                  required
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Pincode</label>
                <input
                  type="text"
                  required
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Country</label>
                <input
                  type="text"
                  disabled
                  name="country"
                  value={formData.country}
                  className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* 3. Payment Method */}
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-cyan text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              Payment Selection
            </h2>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-2 text-xs text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                Demo Payment Mode: This demo simulates checkout order confirmation. Prepared for Razorpay / Stripe gateway integration.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <label className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                formData.paymentMethod === 'upi' ? 'border-brand-cyan bg-brand-ice/40' : 'border-slate-200'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={handleChange}
                  className="text-brand-cyan focus:ring-brand-cyan"
                />
                <QrCode className="w-5 h-5 text-brand-cyan" />
                <span className="text-sm font-bold text-slate-800">Instant UPI (GPay / PhonePe)</span>
              </label>

              <label className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                formData.paymentMethod === 'card' ? 'border-brand-cyan bg-brand-ice/40' : 'border-slate-200'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleChange}
                  className="text-brand-cyan focus:ring-brand-cyan"
                />
                <CreditCard className="w-5 h-5 text-brand-navy" />
                <span className="text-sm font-bold text-slate-800">Debit / Credit Card</span>
              </label>

              <label className={`p-4 rounded-2xl border-2 flex items-center gap-3 cursor-pointer transition-all ${
                formData.paymentMethod === 'cod' ? 'border-brand-cyan bg-brand-ice/40' : 'border-slate-200'
              }`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                  className="text-brand-cyan focus:ring-brand-cyan"
                />
                <Banknote className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-800">Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary (Right) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6 sticky top-28">
            <h3 className="font-extrabold text-lg text-slate-900 pb-3 border-b border-slate-100">
              Order Review
            </h3>

            <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 text-xs">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 p-1 shrink-0 border border-slate-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 line-clamp-1">{item.name}</h4>
                    <span className="text-slate-400">Qty: {item.quantity}</span>
                  </div>
                  <div className="font-extrabold text-slate-900">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2.5 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-slate-800">₹{cartSubtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-bold text-slate-800">
                  {cartShipping === 0 ? <span className="text-emerald-600">FREE</span> : `₹${cartShipping}`}
                </span>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between text-lg font-extrabold text-brand-navy">
                <span>Grand Total</span>
                <span>₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white py-4 px-6 rounded-2xl font-bold text-base shadow-md transition-all active:scale-95 disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Confirming Order...</span>
              ) : (
                <>
                  <span>Place Order (₹{cartTotal.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center text-xs text-slate-400">
              By confirming your order you agree to our Terms & Shipping policies.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
