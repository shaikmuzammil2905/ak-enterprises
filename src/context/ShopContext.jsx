import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};

export const ShopProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ak_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('ak_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Search History
  const [searchHistory, setSearchHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('ak_search_history');
      return saved ? JSON.parse(saved) : ['Earbuds', 'Cookware', 'Drill', 'Chair'];
    } catch {
      return ['Earbuds', 'Cookware', 'Drill', 'Chair'];
    }
  });

  // Orders State
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('ak_orders');
      return saved ? JSON.parse(saved) : [
        {
          id: 'ORD-98421',
          date: '2026-09-02',
          status: 'Delivered',
          items: [
            {
              id: 'prod-1',
              name: 'Wireless Earbuds Bluetooth 5.3',
              price: 1499,
              quantity: 1,
              image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80'
            }
          ],
          subtotal: 1499,
          shipping: 0,
          total: 1499,
          shippingAddress: {
            name: 'Muzammil Shaik',
            phone: '9502947144',
            address: 'D.No. 28-6-19, Arundalpet, Jaleel Street',
            city: 'Vijayawada',
            state: 'Andhra Pradesh',
            pincode: '520002'
          },
          paymentMethod: 'UPI'
        }
      ];
    } catch {
      return [];
    }
  });

  // Toast notification
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('ak_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ak_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('ak_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('ak_search_history', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // Cart operations
  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        slug: product.slug,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        image: product.images ? product.images[0] : product.image,
        category: product.category,
        quantity: Math.max(1, quantity)
      }];
    });
    showToast(`Added "${product.name}" to cart!`);
  };

  const updateQuantity = (productId, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const clearCart = () => {
    setCart([]);
  };

  // Wishlist operations
  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from wishlist`, 'info');
        return prev.filter(item => item.id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to wishlist!`);
        return [...prev, {
          id: product.id,
          name: product.name,
          slug: product.slug,
          price: product.price,
          compareAtPrice: product.compareAtPrice,
          image: product.images ? product.images[0] : product.image,
          category: product.category,
          rating: product.rating
        }];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const moveToCart = (product) => {
    addToCart(product, 1);
    setWishlist(prev => prev.filter(item => item.id !== product.id));
  };

  // Search operations
  const addSearchTerm = (term) => {
    if (!term || !term.trim()) return;
    const clean = term.trim();
    setSearchHistory(prev => {
      const filtered = prev.filter(t => t.toLowerCase() !== clean.toLowerCase());
      return [clean, ...filtered].slice(0, 8);
    });
  };

  // Order operations
  const placeOrder = (orderDetails) => {
    const newOrder = {
      id: `ORD-${Math.floor(10000 + Math.random() * 90000)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Confirmed',
      items: [...cart],
      subtotal: cartSubtotal,
      shipping: cartShipping,
      total: cartTotal,
      ...orderDetails
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  // Computed values
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartShipping = cartSubtotal > 1999 || cartSubtotal === 0 ? 0 : 99;
  const cartTotal = cartSubtotal + cartShipping;

  return (
    <ShopContext.Provider
      value={{
        products: PRODUCTS,
        cart,
        cartCount,
        cartSubtotal,
        cartShipping,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        wishlist,
        wishlistCount: wishlist.length,
        toggleWishlist,
        isInWishlist,
        moveToCart,
        searchHistory,
        addSearchTerm,
        orders,
        placeOrder,
        toast,
        showToast
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
