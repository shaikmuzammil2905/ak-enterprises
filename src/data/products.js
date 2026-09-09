export const CATEGORIES = [
  {
    id: 'cat-1',
    name: 'Electronics',
    slug: 'electronics',
    tagline: 'Smart Tech, Better Life',
    description: 'Cutting-edge gadgets, audio gear, smart wearables and consumer tech carefully sourced from verified global manufacturers.',
    image: '/assets/image-copy-4.png',
    itemCount: 24,
    icon: 'Laptop'
  },
  {
    id: 'cat-2',
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    tagline: 'Comfort for Every Home',
    description: 'High-grade stainless steel cookware, functional kitchenware, and durable home essentials engineered for longevity.',
    image: '/assets/image-copy-5.png',
    itemCount: 18,
    icon: 'UtensilsCrossed'
  },
  {
    id: 'cat-3',
    name: 'Industrial Products',
    slug: 'industrial-products',
    tagline: 'Built for Performance',
    description: 'Commercial power tools, precision hardware, measurement instruments and workshop equipment with rigorous safety standards.',
    image: '/assets/image-copy-6.png',
    itemCount: 32,
    icon: 'Wrench'
  },
  {
    id: 'cat-4',
    name: 'Office Supplies',
    slug: 'office-supplies',
    tagline: 'Work Smarter',
    description: 'Ergonomic seating, executive desk accessories, stationery and productivity essentials for modern corporate workspaces.',
    image: '/assets/image-copy-7.png',
    itemCount: 15,
    icon: 'Briefcase'
  },
  {
    id: 'cat-5',
    name: 'General Merchandise',
    slug: 'general-merchandise',
    tagline: 'Daily Needs, Global Quality',
    description: 'Carefully curated lifestyle goods, travel gear, storage solutions and daily utilities with international standard QC.',
    image: '/assets/image-copy-8.png',
    itemCount: 28,
    icon: 'PackageCheck'
  }
];

export const PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Wireless Earbuds Bluetooth 5.3',
    slug: 'wireless-earbuds-bluetooth-53',
    shortDescription: 'Active Noise Cancellation, 40h Battery Life, IPX5 Waterproof',
    description: 'Engineered for crystal-clear acoustics and heavy bass, these wireless earbuds feature Bluetooth 5.3 ultra-low latency technology, quad ENC microphones for disturbance-free calls, and an ergonomic lightweight fit for all-day comfort.',
    category: 'Electronics',
    categorySlug: 'electronics',
    price: 1499,
    compareAtPrice: 2499,
    rating: 4.5,
    reviewCount: 128,
    stock: 45,
    sku: 'AKE-EL-014',
    isFeatured: true,
    badge: 'Popular',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f43?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Advanced Bluetooth 5.3 with 10-meter stable range',
      'Quad ENC microphones for studio-grade call clarity',
      'Up to 40 hours total playtime with fast USB-C charging case',
      'IPX5 sweat and splash resistance for sports and fitness',
      'Intuitive touch controls for volume, track skip, and voice assistant'
    ],
    specifications: {
      'Connectivity': 'Bluetooth 5.3 (AAC/SBC codec)',
      'Battery Life': '8h earbuds + 32h case',
      'Charging Time': '1.5 hours via Type-C',
      'Driver Size': '13mm dynamic titanium diaphragms',
      'Warranty': '1 Year AK Enterprises Replacement Guarantee'
    }
  },
  {
    id: 'prod-2',
    name: 'Smart Watch Fitness Tracker',
    slug: 'smart-watch-fitness-tracker',
    shortDescription: '1.85" HD Display, SpO2, Heart Rate, 100+ Sports Modes',
    description: 'Stay ahead of your health goals with this premium smartwatch. Featuring a vibrant 1.85-inch curved HD touchscreen, continuous bio-metric tracking, Bluetooth calling, and over 100 indoor/outdoor sports tracking algorithms.',
    category: 'Electronics',
    categorySlug: 'electronics',
    price: 2999,
    compareAtPrice: 4999,
    rating: 4.3,
    reviewCount: 95,
    stock: 30,
    sku: 'AKE-EL-028',
    isFeatured: true,
    badge: 'Hot Seller',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '1.85" high-brightness IPS touch display with custom watch faces',
      'Bluetooth dial and call speaker with microphone',
      '24/7 Heart rate, blood oxygen (SpO2), and sleep stage monitoring',
      'IP68 water resistant construction up to 1.5m depth',
      'Magnetic quick-snap charger with 7-day active battery life'
    ],
    specifications: {
      'Display': '1.85 inch 240x286 IPS Touchscreen',
      'Battery': '280 mAh lithium-polymer (7 days standby)',
      'Compatibility': 'Android 5.0+ and iOS 9.0+',
      'Water Resistance': 'IP68 Certified',
      'Weight': '42g with silicone strap'
    }
  },
  {
    id: 'prod-3',
    name: 'Stainless Steel Cookware Set 5 Pieces',
    slug: 'stainless-steel-cookware-set-5-pieces',
    shortDescription: 'Tri-Ply Heavy Bottom, Induction & Gas Compatible',
    description: 'Crafted from food-grade 304 stainless steel with a heavy three-layer encapsulating aluminum core, this 5-piece culinary set ensures even heat distribution without hot spots. Includes matching tempered glass vented lids.',
    category: 'Home & Kitchen',
    categorySlug: 'home-kitchen',
    price: 3499,
    compareAtPrice: 5299,
    rating: 4.6,
    reviewCount: 210,
    stock: 22,
    sku: 'AKE-HK-005',
    isFeatured: true,
    badge: 'Best Value',
    images: [
      'https://images.unsplash.com/photo-1584990347449-34b8c9a8faec?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584990347462-a557b420f1ec?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Tri-ply base design (SS 304 + Aluminum core + SS 430)',
      'Ergonomic cast stainless steel cool-touch riveted handles',
      '100% compatible with Induction, Gas, Electric and Halogen stoves',
      'Dishwasher safe and resistant to food discoloration',
      'Includes 1 Kadai (2.5L), 1 Saucepan (1.8L), 1 Frying Pan (24cm) & 2 Lids'
    ],
    specifications: {
      'Material': 'Food Grade SS 304 (Inner) / Aluminum (Core) / SS 430 (Base)',
      'Base Thickness': '4.5mm Heavy Bottom',
      'Pieces': '5 Pcs (3 Utensils + 2 Glass Lids)',
      'Oven Safe': 'Yes, up to 260°C',
      'Certifications': 'Food Contact Safe, Non-Toxic'
    }
  },
  {
    id: 'prod-4',
    name: 'Professional Power Drill 650W',
    slug: 'professional-power-drill-650w',
    shortDescription: 'Variable Speed, Hammer Action, 13mm Keyless Chuck',
    description: 'A heavy-duty 650-watt corded impact drill designed for masonry, timber, and metal drilling. Features reversible variable speed trigger, auxiliary 360-degree handle, and adjustable depth stop gauge for precision works.',
    category: 'Industrial Products',
    categorySlug: 'industrial-products',
    price: 2199,
    compareAtPrice: 3200,
    rating: 4.4,
    reviewCount: 84,
    stock: 50,
    sku: 'AKE-IN-012',
    isFeatured: true,
    badge: 'Industrial Grade',
    images: [
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Robust 650W high-copper armature motor for tough masonry drilling',
      'Dual mode selector: standard rotary drilling & percussion hammer mode',
      'Precision 13mm heavy-duty keyless chuck with quick lock',
      'Forward/reverse toggle switch with lock-on continuous run button',
      'Ergonomic anti-vibration rubberized pistol grip'
    ],
    specifications: {
      'Rated Power': '650 Watts @ 220-240V ~ 50Hz',
      'No-Load Speed': '0 - 3000 RPM',
      'Chuck Capacity': '1.5 - 13 mm',
      'Max Drilling Diameter': 'Wood: 25mm | Steel: 10mm | Concrete: 13mm',
      'Cord Length': '2.2 Meters Industrial Reinforced'
    }
  },
  {
    id: 'prod-5',
    name: 'Ergonomic Office Chair Adjustable',
    slug: 'ergonomic-office-chair-adjustable',
    shortDescription: 'Breathable Mesh, Lumbar Support, Class 4 Gas Lift',
    description: 'Designed for long working hours and optimal spinal posture. Features high-density breathable korean mesh, dynamic lumbar curvature support, 2D adjustable armrests, and a smooth tilt-lock mechanism.',
    category: 'Office Supplies',
    categorySlug: 'office-supplies',
    price: 4999,
    compareAtPrice: 7999,
    rating: 4.2,
    reviewCount: 67,
    stock: 18,
    sku: 'AKE-OF-003',
    isFeatured: true,
    badge: 'Ergonomic',
    images: [
      'https://images.unsplash.com/photo-1580481077195-c3a821a58875?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'S-curve ergonomic back frame with height-adjustable lumbar pillow',
      'High-elastic breathable mesh prevents heat and sweat buildup',
      'BIFMA certified heavy-duty Class-4 pneumatic gas lift cylinder',
      'Heavy nylon spider base with 360-degree silent PU castor wheels',
      'Tilt tension knob with 90° to 125° reclining lock'
    ],
    specifications: {
      'Weight Capacity': 'Up to 140 kg',
      'Seat Height Adjustment': '45cm - 55cm',
      'Base Type': 'Reinforced 320mm Nylon 5-star base',
      'Caster Material': 'Anti-scratch Polyurethane (PU)',
      'Assembly': 'DIY kit with Allen key and step-by-step visual guide'
    }
  },
  {
    id: 'prod-6',
    name: '4K Ultra-Wide USB Web Camera with Mic',
    slug: '4k-ultrawide-web-camera-mic',
    shortDescription: 'Auto-Focus, Privacy Shutter, Dual Noise Cancelling Mic',
    description: 'Commercial video conferencing webcam with real 4K CMOS sensor, 90-degree wide angle lens, and auto low-light exposure correction for crisp zoom meetings.',
    category: 'Electronics',
    categorySlug: 'electronics',
    price: 1899,
    compareAtPrice: 2899,
    rating: 4.7,
    reviewCount: 42,
    stock: 35,
    sku: 'AKE-EL-033',
    isFeatured: false,
    badge: 'New Arrival',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '3840 x 2160 resolution at smooth 30fps streaming',
      'Built-in physical privacy sliding lens shutter',
      'Plug and play USB 2.0 / 3.0 with no drivers required',
      'Multi-angle tripod screw mount and monitor claw'
    ],
    specifications: {
      'Resolution': '4K UHD (3840x2160)',
      'Field of View': '90° Diagonal',
      'Focus Type': 'Fast Optical Autofocus',
      'Cable Length': '1.8m Shielded USB'
    }
  },
  {
    id: 'prod-7',
    name: 'Heavy Duty Socket & Ratchet Tool Set 46-Pcs',
    slug: 'socket-ratchet-tool-set-46-pcs',
    shortDescription: 'Chrome Vanadium Steel, Quick Release 72-Tooth Ratchet',
    description: 'Precision forged Cr-V steel mechanic tool set housed in a blow-molded compact carry case. Ideal for automotive repair, DIY fabrication, and maintenance workshops.',
    category: 'Industrial Products',
    categorySlug: 'industrial-products',
    price: 1699,
    compareAtPrice: 2500,
    rating: 4.6,
    reviewCount: 112,
    stock: 40,
    sku: 'AKE-IN-029',
    isFeatured: false,
    badge: 'Popular',
    images: [
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Forged Chrome Vanadium Steel with corrosion resistant mirror chrome finish',
      '72-Tooth reversible ratchet needing only 5-degree swing arc',
      'Organized in tough portable travel case with labeled slots'
    ],
    specifications: {
      'Drive Size': '1/4 Inch Square Drive',
      'Piece Count': '46 Pieces (Sockets, Bits, Extensions, Ratchet)',
      'Material': 'Cr-V 50BV30 Heat Treated Steel'
    }
  },
  {
    id: 'prod-8',
    name: 'Double Wall Vacuum Insulated Stainless Flask 1000ml',
    slug: 'vacuum-insulated-stainless-flask-1000ml',
    shortDescription: '24h Cold / 12h Hot, BPA Free 18/8 Steel, Leakproof',
    description: 'Keep your beverages hot for 12 hours or ice cold for 24 hours with double-wall copper insulated vacuum technology. Featuring a wide mouth for ice cubes and durable powder coat.',
    category: 'General Merchandise',
    categorySlug: 'general-merchandise',
    price: 899,
    compareAtPrice: 1499,
    rating: 4.8,
    reviewCount: 310,
    stock: 75,
    sku: 'AKE-GM-008',
    isFeatured: false,
    badge: 'Top Rated',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'True double wall vacuum insulation with copper lining',
      'Food Grade 18/8 (304) stainless steel inside & out',
      '100% leakproof silicone gasket seal lid with carry loop'
    ],
    specifications: {
      'Capacity': '1000 ml (1 Liter)',
      'Thermal Performance': 'Hot up to 12h, Cold up to 24h',
      'Weight': '410g'
    }
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote: 'AK Enterprises always delivers on time with excellent quality. Their customer support is very responsive and professional.',
    author: 'Ramesh Kumar',
    role: 'Retail Business, Vijayawada',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't-2',
    quote: 'Great products, competitive prices and smooth international sourcing. Highly recommended for wholesale and bulk orders!',
    author: 'Priya Sharma',
    role: 'Importer, Hyderabad',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 't-3',
    quote: 'Excellent service and genuine products. We have been working with AK Enterprises for our procurement. Truly reliable!',
    author: 'Suresh Babu',
    role: 'Wholesaler, Guntur',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];

export const BUSINESS_INFO = {
  name: 'AK ENTERPRISES',
  legalName: 'AK Enterprises',
  type: 'IMPORT & EXPORT + E-COMMERCE',
  tagline: 'Quality Products. Trusted Global Trade.',
  experience: '1 Year',
  address: {
    street: 'D.No. 28-6-19, Arundalpet, Jaleel Street',
    city: 'Vijayawada',
    state: 'Andhra Pradesh',
    pincode: '520002',
    country: 'India'
  },
  phones: ['9502947144', '9848124030'],
  primaryPhone: '9502947144',
  whatsapp: '9502947144',
  email: 'akenterprisecorp@gmail.com',
  whatsappLink: 'https://wa.me/919502947144?text=Hello%20AK%20Enterprises%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.'
};
