import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  User,
  Package,
  Heart,
  MapPin,
  LogOut,
  ChevronRight,
  Clock,
  CheckCircle2,
  Phone,
  Mail,
  Shield
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { BUSINESS_INFO } from '../data/products';

export default function AccountPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'orders';

  const { orders, wishlist } = useShop();

  const [profile, setProfile] = useState({
    name: 'Muzammil Shaik',
    email: 'akenterprisecorp@gmail.com',
    phone: '9502947144',
    company: 'AK Enterprises Trade Account'
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Shipped':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Processing':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Confirmed':
        return 'bg-brand-ice text-brand-cyan border-brand-cyan/30';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
          Customer Account
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Manage your orders, profile, and shipping addresses
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm text-center">
            <div className="w-20 h-20 rounded-full bg-brand-navy text-white text-2xl font-bold flex items-center justify-center mx-auto mb-3 shadow-md">
              MS
            </div>
            <h2 className="font-extrabold text-slate-900 text-lg">{profile.name}</h2>
            <p className="text-xs text-slate-500 mb-4">{profile.email}</p>
            <span className="inline-block px-3 py-1 bg-brand-ice text-brand-cyan text-xs font-bold rounded-full">
              Commercial Trade Account
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-2 shadow-sm space-y-1">
            <button
              onClick={() => setSearchParams({ tab: 'orders' })}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === 'orders' ? 'bg-brand-ice text-brand-cyan font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <Package className="w-4 h-4" />
                <span>My Orders</span>
              </span>
              <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                {orders.length}
              </span>
            </button>

            <button
              onClick={() => setSearchParams({ tab: 'profile' })}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === 'profile' ? 'bg-brand-ice text-brand-cyan font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <User className="w-4 h-4" />
                <span>Profile Details</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <button
              onClick={() => setSearchParams({ tab: 'addresses' })}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === 'addresses' ? 'bg-brand-ice text-brand-cyan font-bold' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4" />
                <span>Saved Addresses</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <Link
              to="/wishlist"
              className="w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <span className="flex items-center gap-2.5">
                <Heart className="w-4 h-4" />
                <span>Wishlist</span>
              </span>
              <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            </Link>
          </div>
        </aside>

        {/* Content Area */}
        <main className="lg:col-span-8">
          {/* TAB 1: ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Order History</h2>

              {orders.length === 0 ? (
                <div className="bg-white rounded-3xl border border-slate-100 p-12 text-center text-slate-500">
                  <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p>You have not placed any orders yet.</p>
                  <Link
                    to="/shop"
                    className="inline-block mt-4 text-brand-cyan font-bold text-sm hover:underline"
                  >
                    Start Browsing Products →
                  </Link>
                </div>
              ) : (
                orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div>
                        <span className="text-xs text-slate-400 font-mono">Order ID</span>
                        <h3 className="text-base font-bold text-slate-900">{order.id}</h3>
                        <span className="text-xs text-slate-500">Placed on {order.date}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                        <Link
                          to={`/account/orders/${order.id}`}
                          className="text-xs font-bold text-brand-cyan hover:underline"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {order.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-lg bg-slate-50 object-contain p-1 border border-slate-100"
                          />
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                            <span className="text-xs text-slate-400">Qty: {item.quantity}</span>
                          </div>
                          <span className="font-bold text-sm text-slate-900">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
                      <span className="text-slate-500">Total Amount:</span>
                      <span className="font-extrabold text-brand-navy">
                        ₹{order.total.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 2: PROFILE */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Profile Information</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Business Account</label>
                  <input
                    type="text"
                    value={profile.company}
                    disabled
                    className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm text-slate-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => alert('Profile changes saved successfully.')}
                className="bg-brand-navy text-white font-bold py-2.5 px-6 rounded-xl text-sm hover:bg-brand-navy-light transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}

          {/* TAB 3: ADDRESSES */}
          {activeTab === 'addresses' && (
            <div className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Saved Addresses</h2>

              <div className="p-5 rounded-2xl border-2 border-brand-cyan/40 bg-brand-ice/20 relative">
                <span className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-wider text-brand-cyan bg-brand-ice px-2 py-0.5 rounded-full">
                  Primary Delivery
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{profile.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm mb-3">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
                </p>
                <p className="text-xs text-slate-500">Phone: +91 {BUSINESS_INFO.primaryPhone}</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
