import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  CreditCard,
  Package,
  ShieldCheck
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function OrderDetailPage() {
  const { id } = useParams();
  const { orders } = useShop();

  const order = orders.find(o => o.id === id) || orders[0];

  if (!order) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Order Not Found</h2>
        <p className="text-slate-500 mb-6">We could not locate this order in your history.</p>
        <Link
          to="/account"
          className="inline-block bg-brand-cyan text-white font-bold py-2.5 px-6 rounded-xl text-sm"
        >
          Return to Account
        </Link>
      </div>
    );
  }

  const steps = [
    { label: 'Order Placed', completed: true, date: order.date },
    { label: 'Confirmed & Packed', completed: true, date: order.date },
    { label: 'Dispatched from Hub', completed: order.status === 'Shipped' || order.status === 'Delivered', date: 'Expected next day' },
    { label: 'Delivered', completed: order.status === 'Delivered', date: order.status === 'Delivered' ? 'Completed' : 'Pending delivery' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Back button */}
      <div>
        <Link
          to="/account?tab=orders"
          className="inline-flex items-center gap-2 text-xs font-bold text-brand-cyan hover:underline mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Orders</span>
        </Link>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              Order #{order.id}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Placed on {order.date} • Status: <strong className="text-brand-cyan">{order.status}</strong>
            </p>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200 self-start sm:self-auto">
            {order.status}
          </span>
        </div>
      </div>

      {/* Tracking Timeline */}
      <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
        <h2 className="text-base font-bold text-slate-900 mb-6">Consignment Progress</h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
          {steps.map((s, idx) => (
            <div key={idx} className="flex flex-col items-start sm:items-center text-left sm:text-center relative">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-2 ${
                  s.completed
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {s.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-800">{s.label}</h4>
              <span className="text-[11px] text-slate-400 mt-0.5">{s.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Order Items & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-4">
          <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
            Purchased Products
          </h2>
          <div className="space-y-4">
            {order.items.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-slate-50 p-1 border border-slate-100 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                  <span className="text-xs text-slate-400">Qty: {item.quantity}</span>
                </div>
                <div className="font-extrabold text-slate-900 text-sm">
                  ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2 text-sm">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span className="font-bold text-slate-800">₹{order.subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span className="font-bold text-emerald-600">
                {order.shipping === 0 ? 'FREE' : `₹${order.shipping}`}
              </span>
            </div>
            <div className="pt-2 border-t border-slate-100 flex justify-between font-extrabold text-base text-brand-navy">
              <span>Total Paid</span>
              <span>₹{order.total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        {/* Shipping & Payment Meta */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-cyan" />
              Delivery Address
            </h3>
            <div className="text-xs text-slate-700 space-y-1">
              <p className="font-bold text-sm text-slate-900">{order.shippingAddress?.name || 'Customer'}</p>
              <p>{order.shippingAddress?.address}</p>
              <p>{order.shippingAddress?.city}, {order.shippingAddress?.state} - {order.shippingAddress?.pincode}</p>
              <p className="text-slate-500 pt-1">Phone: {order.shippingAddress?.phone || '+91 9502947144'}</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-brand-cyan" />
              Payment Details
            </h3>
            <div className="text-xs text-slate-700">
              <p className="font-bold">{order.paymentMethod || 'Prepaid'}</p>
              <p className="text-emerald-600 font-semibold mt-0.5">Verification Successful</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
