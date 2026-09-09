import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Star,
  Heart,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Share2,
  ChevronRight,
  Package,
  Clock,
  ArrowRight
} from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [copiedLink, setCopiedLink] = useState(false);

  const isSaved = isInWishlist(product.id);
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  // Related products from same category or fallback
  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <nav className="text-xs text-slate-500 mb-6 flex items-center gap-1.5 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-brand-cyan">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-brand-cyan">Shop</Link>
        <span>/</span>
        <Link to={`/categories/${product.categorySlug}`} className="hover:text-brand-cyan capitalize">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Product Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-square rounded-3xl bg-slate-50 border border-slate-100 overflow-hidden p-6 flex items-center justify-center group shadow-sm">
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {discount}% OFF
              </span>
            )}
            <button
              onClick={() => toggleWishlist(product)}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-sm ${
                isSaved ? 'bg-rose-50 text-rose-500' : 'bg-white text-slate-400 hover:text-rose-500'
              }`}
              aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`w-5 h-5 ${isSaved ? 'fill-rose-500' : ''}`} />
            </button>

            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-2xl border-2 p-2 bg-slate-50 overflow-hidden shrink-0 transition-all ${
                    selectedImage === idx
                      ? 'border-brand-cyan shadow-sm scale-95'
                      : 'border-transparent hover:border-slate-200'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Information & Purchase Controls */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  {product.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  SKU: {product.sku}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mt-1">
                {product.name}
              </h1>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1 text-amber-400 bg-amber-50 px-2 py-0.5 rounded-lg">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-bold text-slate-800">{product.rating}</span>
              </div>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-medium">
                {product.reviewCount} customer ratings
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                In Stock ({product.stock} units)
              </span>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-baseline gap-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.compareAtPrice && (
                <span className="text-base text-slate-400 line-through font-medium">
                  ₹{product.compareAtPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-xs text-slate-500 ml-auto font-medium">
                Inclusive of all taxes
              </span>
            </div>

            {/* Short Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Quantity and Actions */}
            <div className="pt-3 border-t border-slate-100 space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Quantity:
                </label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-white">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-l-xl transition-colors font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-sm font-extrabold text-slate-800">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-r-xl transition-colors font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => addToCart(product, quantity)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-cyan hover:bg-brand-cyan-dark text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Share & Wishlist quick links */}
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                <button
                  onClick={() => toggleWishlist(product)}
                  className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{isSaved ? 'In your Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share Product'}</span>
                </button>
              </div>
            </div>

            {/* Service & Assurance highlights */}
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 grid grid-cols-3 gap-3 text-center">
              <div className="flex flex-col items-center">
                <Truck className="w-5 h-5 text-brand-cyan mb-1" />
                <span className="text-[11px] font-bold text-slate-800">Pan-India Freight</span>
                <span className="text-[10px] text-slate-500">Express Delivery</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-brand-cyan mb-1" />
                <span className="text-[11px] font-bold text-slate-800">Quality Verified</span>
                <span className="text-[10px] text-slate-500">Strict Sourcing QC</span>
              </div>
              <div className="flex flex-col items-center">
                <RotateCcw className="w-5 h-5 text-brand-cyan mb-1" />
                <span className="text-[11px] font-bold text-slate-800">7 Days Return</span>
                <span className="text-[10px] text-slate-500">Hassle-Free Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section: Description, Specifications, Reviews */}
      <div className="mb-16">
        <div className="border-b border-slate-200 flex gap-8">
          <button
            onClick={() => setActiveTab('description')}
            className={`pb-4 text-sm sm:text-base font-bold transition-colors relative ${
              activeTab === 'description'
                ? 'text-brand-cyan border-b-2 border-brand-cyan'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            className={`pb-4 text-sm sm:text-base font-bold transition-colors relative ${
              activeTab === 'specifications'
                ? 'text-brand-cyan border-b-2 border-brand-cyan'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 text-sm sm:text-base font-bold transition-colors relative ${
              activeTab === 'reviews'
                ? 'text-brand-cyan border-b-2 border-brand-cyan'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Reviews ({product.reviewCount})
          </button>
        </div>

        <div className="py-8">
          {activeTab === 'description' && (
            <div className="space-y-6 max-w-4xl text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>{product.description}</p>
              {product.features && (
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-base">Key Highlights & Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="max-w-3xl">
              <table className="w-full text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
                <tbody>
                  {product.specifications &&
                    Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr
                        key={key}
                        className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}
                      >
                        <td className="py-3 px-4 font-semibold text-slate-600 border-b border-slate-200 w-1/3">
                          {key}
                        </td>
                        <td className="py-3 px-4 text-slate-800 border-b border-slate-200">
                          {value}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="max-w-3xl space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-brand-navy">
                    {product.rating}
                  </div>
                  <div className="flex items-center justify-center text-amber-400 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Based on {product.reviewCount} reviews
                  </div>
                </div>
                <div className="border-l border-slate-200 pl-6 text-xs text-slate-500">
                  <p className="font-semibold text-slate-700 text-sm mb-1">
                    100% Verified Customer Purchases
                  </p>
                  <p>All reviews are submitted by certified purchasers through our order verification system.</p>
                </div>
              </div>

              {/* Sample reviews */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-slate-100 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-800">Venkat R.</span>
                    <span className="text-xs text-slate-400">2 weeks ago</span>
                  </div>
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Excellent build quality and genuine packaging. Delivered in Vijayawada within 2 days. Highly satisfied with AK Enterprises!
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-slate-800">Kavitha M.</span>
                    <span className="text-xs text-slate-400">1 month ago</span>
                  </div>
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Product is exactly as described. Clean finish and reliable performance.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
              Related Products
            </h3>
            <Link
              to={`/categories/${product.categorySlug}`}
              className="text-xs sm:text-sm font-bold text-brand-cyan hover:underline"
            >
              View More in {product.category} →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
