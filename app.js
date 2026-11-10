/**
 * PLUSH CRAFTS (P L U S H)
 * Official Website for @plush_crafts.in
 * Clean, Professional, Authentic Handmade Boutique
 */

// --- Contact Constants ---
const PLUSH_WHATSAPP_NUMBER = '918989060207'; // WhatsApp: +91 89890 60207
const PLUSH_INSTAGRAM_URL = 'https://www.instagram.com/plush_crafts.in/#';

// --- Real Handcrafted Products from @plush_crafts.in ---
const PRODUCTS = [
  {
    id: 'pc-01',
    name: 'Handmade Blue Flower Bouquet',
    category: 'bouquets',
    price: 699,
    originalPrice: 899,
    badge: 'Popular',
    craftTime: '4.5 Hours of Handcrafting',
    dimensions: '28 cm Length',
    material: 'Premium Soft Cotton & Archival Paper Wrap',
    shortSummary: 'Hand-crocheted blue floral bouquet tied with natural jute twine. From our Instagram collection.',
    fullDescription: 'One of our most popular bouquets! Each petal is crocheted by hand with soft cotton yarn. Features vibrant blue blossoms with delicate white accents, wrapped in natural kraft paper with a "handmade with love ♡" tag.',
    image: 'assets/images/insta_post_1.jpg',
    provenance: '@plush_crafts.in'
  },
  {
    id: 'pc-02',
    name: 'Pastel Lavender Flower Bouquet',
    category: 'bouquets',
    price: 749,
    originalPrice: 949,
    badge: 'Best Seller',
    craftTime: '5 Hours of Handcrafting',
    dimensions: '30 cm Length',
    material: 'Soft Combed Cotton & Natural Ribbon',
    shortSummary: 'Pastel purple and lilac blossoms crafted stitch-by-stitch. Never withers or fades.',
    fullDescription: 'Soft lavender and lilac hues handcrafted with love. A forever flower bouquet that never withers or loses its beauty, perfect for birthdays and anniversaries.',
    image: 'assets/images/insta_post_2.jpg',
    provenance: '@plush_crafts.in'
  },
  {
    id: 'pc-03',
    name: 'Kraft Paper Wrapped Flower Bouquet',
    category: 'bouquets',
    price: 799,
    originalPrice: 999,
    badge: 'Featured',
    craftTime: '5.5 Hours of Handcrafting',
    dimensions: '32 cm Stem Length',
    material: '100% Cotton Yarn & Rustic Kraft Wrap',
    shortSummary: 'Handmade mixed floral bouquet wrapped in aesthetic kraft paper with ribbon.',
    fullDescription: 'A complete handcrafted bouquet designed with mixed floral stems and finished with an elegant kraft wrap. Perfect for special moments and gifting.',
    image: 'assets/images/insta_post_3.jpg',
    provenance: '@plush_crafts.in'
  },
  {
    id: 'pc-04',
    name: 'Festive Diya & Tea Light Holder (10 Colors)',
    category: 'decor',
    price: 499,
    originalPrice: 650,
    badge: '10 Colors Available',
    craftTime: '3 Hours of Handcrafting',
    dimensions: '12 cm Diameter',
    material: 'Handcrafted Fiber, Pearl Beads & Base',
    shortSummary: 'Festive tea light candle holder crafted across ten distinct shades with pearl embellishments.',
    fullDescription: 'Handmade tea light holder ringed with delicate pearls and vibrant handcrafted petals to brighten your home and festive hampers.',
    image: 'assets/images/insta_post_5.jpg',
    provenance: '@plush_crafts.in'
  },
  {
    id: 'pc-05',
    name: 'Lotus Pearl Candle Holder',
    category: 'decor',
    price: 549,
    originalPrice: 699,
    badge: 'Festive Decor',
    craftTime: '3.5 Hours of Handcrafting',
    dimensions: '14 cm Diameter',
    material: 'Hand-Stitched Petals & Luster Pearls',
    shortSummary: 'Lotus style tea light holder with pearl adornments and gift packaging.',
    fullDescription: 'Handcrafted lotus petal tea light holder embellished with pearls. Perfect centerpiece for Diwali, puja, housewarmings, or festive hampers.',
    image: 'assets/images/insta_post_4.jpg',
    provenance: '@plush_crafts.in'
  },
  {
    id: 'pc-06',
    name: 'Happy Birthday Flower Bouquet',
    category: 'bouquets',
    price: 849,
    originalPrice: 1099,
    badge: 'Birthday Special',
    craftTime: '5.5 Hours of Handcrafting',
    dimensions: '30 cm Length',
    material: 'Soft Cotton & Keepsake Card',
    shortSummary: 'Handcrafted floral bouquet paired with a handwritten "Happy Birthday!" card.',
    fullDescription: 'A cheerful handmade arrangement of pink, lilac, and blue blossoms with lush green stems, accompanied by a keepsake handwritten birthday card.',
    image: 'assets/images/insta_post_7.jpg',
    provenance: '@plush_crafts.in'
  },
  {
    id: 'pc-07',
    name: 'Ganpati Bappa Red Flower Haar (Garland)',
    category: 'decor',
    price: 599,
    originalPrice: 799,
    badge: 'Ceremonial Decor',
    craftTime: '4 Hours of Handcrafting',
    dimensions: 'Custom Length',
    material: 'Handmade Red Flowers & Pearl Beads',
    shortSummary: 'Hand-knotted red flower garland with white pearls for puja and festive idols.',
    fullDescription: 'Created with rich red floral blooms and lustrous white pearl beads. Woven loop by loop with traditional devotion for Ganpati Bappa and festive celebrations.',
    image: 'assets/images/insta_post_11.jpg',
    provenance: '@plush_crafts.in'
  },
  {
    id: 'pc-08',
    name: 'Spider-Man Theme Pipe Cleaner Bouquet',
    category: 'bouquets',
    price: 799,
    originalPrice: 999,
    badge: 'Special Edition',
    craftTime: '5 Hours of Handcrafting',
    dimensions: '30 cm Length',
    material: 'Red & Blue Pipe Cleaner Flowers, Spiderweb Heart & Rakhi Card',
    shortSummary: 'Handcrafted Spider-Man themed flower bouquet with blue & red blossoms, spiderweb accent, and greeting card.',
    fullDescription: 'Our super popular Spider-Man themed handcrafted bouquet! Features an iconic Spider-Man head flower, vibrant blue petals with red fuzzy accents, and a delicate handcrafted white spiderweb with a red heart. Tied with a rich red satin ribbon, Plush Crafts monogram tag, and a greeting card.',
    image: 'assets/images/spiderman_bouquet.jpg',
    provenance: '@plush_crafts.in'
  },
  {
    id: 'pc-09',
    name: 'Glowing LED Pipe Cleaner Flower Lamp',
    category: 'decor',
    price: 899,
    originalPrice: 1199,
    badge: 'Night Lamp',
    craftTime: '6 Hours of Handcrafting',
    dimensions: '32 cm Height',
    material: 'Handcrafted Pipe Cleaner Lily/Tulip, Embedded LED Fairy Lights & Spiral Base',
    shortSummary: 'Illuminated pipe cleaner flower desk lamp with warm glowing LED lights and circular vine base.',
    fullDescription: 'A magical handcrafted floral night lamp! Features glowing pink and warm white pipe cleaner blossoms with soft embedded LED fairy lights on a sturdy spiral vine base. Creates a warm, cozy ambient glow for your bedside or study desk.',
    image: 'assets/images/glowing_flower_lamp.jpg',
    provenance: '@plush_crafts.in'
  }
];

// --- Instagram Feed Posts from @plush_crafts.in ---
const INSTA_POSTS = [
  {
    id: 1,
    title: 'Handmade with love ♡ Blue floral bouquet tagged at Rs. 699!',
    image: 'assets/images/insta_post_1.jpg',
    tag: 'Bouquets',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  },
  {
    id: 2,
    title: 'Lilac and lavender flower bouquet wrap fresh from the studio.',
    image: 'assets/images/insta_post_2.jpg',
    tag: 'Flowers',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  },
  {
    id: 3,
    title: 'Artisan floral arrangement tied in rustic kraft wrap.',
    image: 'assets/images/insta_post_3.jpg',
    tag: 'Kraft Wrap',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  },
  {
    id: 4,
    title: 'Festive Diya & Tea Light Holder with 10 different colors and shades!',
    image: 'assets/images/insta_post_5.jpg',
    tag: 'Festive Decor',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  },
  {
    id: 5,
    title: 'Lotus blossom pearl tea light holder for festive hampers.',
    image: 'assets/images/insta_post_4.jpg',
    tag: 'Handcrafted',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  },
  {
    id: 6,
    title: 'Birthday celebration flower bouquet with handwritten dedication card.',
    image: 'assets/images/insta_post_7.jpg',
    tag: 'Birthday Suite',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  },
  {
    id: 7,
    title: 'Ganpati Bappa handmade deep red flower garland & pearl necklace.',
    image: 'assets/images/insta_post_11.jpg',
    tag: 'Ceremonial Decor',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  },
  {
    id: 8,
    title: 'Spider-Man themed pipe cleaner bouquet with spiderweb & card!',
    image: 'assets/images/spiderman_bouquet.jpg',
    tag: 'Spider-Man Special',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  },
  {
    id: 9,
    title: 'Magical glowing LED pipe cleaner flower night lamp!',
    image: 'assets/images/glowing_flower_lamp.jpg',
    tag: 'Illuminated Lamp',
    link: 'https://www.instagram.com/plush_crafts.in/#'
  }
];

// --- State Management ---
let cart = JSON.parse(localStorage.getItem('plush_luxury_cart') || '[]');
let activeFilter = 'all';
let appliedDiscount = 0;

// --- Custom Order State ---
const atelierState = {
  base: {
    id: 'blue-bouquet',
    name: 'Handmade Blue Flower Bouquet',
    price: 699,
    image: 'assets/images/insta_post_1.jpg'
  },
  palette: {
    name: 'Classic Red & Green Stems',
    color: '#D32F2F'
  },
  embellishments: [
    { id: 'kraft-wrap', name: 'Kraft Paper & Jute Ribbon', price: 60 }
  ],
  dedication: 'Handmade with love ♡ from @plush_crafts.in'
};

// --- Lifecycle Init ---
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  renderCollection();
  initAtelierBuilder();
  refreshCartState();
  bindGlobalEvents();
});

// --- 5-Second Pure Logo Preloader Controller ---
let preloaderTimer = null;

function initPreloader() {
  const preloader = document.getElementById('plushPreloader');
  if (!preloader) return;

  preloaderTimer = setTimeout(() => {
    dismissPreloader();
  }, 5000); // exactly 5 seconds
}

function dismissPreloader() {
  if (preloaderTimer) clearTimeout(preloaderTimer);
  const preloader = document.getElementById('plushPreloader');
  if (preloader && !preloader.classList.contains('hidden')) {
    preloader.classList.add('hidden');
    
    // Retrigger entrance animation for the navbar logo
    const brandLogo = document.querySelector('.brand-logo-img');
    if (brandLogo) {
      brandLogo.style.animation = 'none';
      void brandLogo.offsetHeight; // trigger reflow
      brandLogo.style.animation = 'brandLogoEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) both';
    }

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 850);
  }
}

// --- Render Collection ---
function renderCollection() {
  const container = document.getElementById('collectionGrid');
  if (!container) return;

  const items = activeFilter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  container.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-thumb-frame" onclick="openProductDetail('${p.id}')">
        <span class="card-tag">${p.badge}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </div>
      <div class="product-details">
        <span class="product-origin">${p.provenance}</span>
        <h3 class="product-name" onclick="openProductDetail('${p.id}')">${p.name}</h3>
        <p class="product-summary">${p.shortSummary}</p>
        
        <div class="product-meta-row">
          <span>⏳ ${p.craftTime}</span>
          <span>📏 ${p.dimensions}</span>
        </div>

        <div class="product-action-row">
          <div>
            <span class="product-price-display">₹ ${p.price.toLocaleString('en-IN')}</span>
            <span class="product-original">₹ ${p.originalPrice.toLocaleString('en-IN')}</span>
          </div>
          <button class="btn btn-forest" style="padding: 8px 18px; font-size: 0.8rem;" onclick="addToBag('${p.id}')">
            Add to Bag
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// --- Custom Order Builder ---
function initAtelierBuilder() {
  const baseSelectors = document.querySelectorAll('.selectable-item[data-model-id]');
  baseSelectors.forEach(el => {
    el.addEventListener('click', () => {
      baseSelectors.forEach(s => s.classList.remove('active'));
      el.classList.add('active');
      atelierState.base = {
        id: el.dataset.modelId,
        name: el.dataset.modelName,
        price: parseInt(el.dataset.modelPrice, 10),
        image: el.dataset.modelImg || 'assets/images/insta_post_1.jpg'
      };
      updateAtelierSummary();
    });
  });

  const paletteChips = document.querySelectorAll('.palette-chip');
  paletteChips.forEach(chip => {
    chip.addEventListener('click', () => {
      paletteChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      atelierState.palette = {
        name: chip.dataset.paletteName,
        color: chip.dataset.paletteColor
      };
      updateAtelierSummary();
    });
  });

  const embellishBoxes = document.querySelectorAll('.embellishment-box');
  embellishBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const id = box.dataset.embellishId;
      const name = box.dataset.embellishName;
      const price = parseInt(box.dataset.embellishPrice, 10);

      box.classList.toggle('active');
      const isActive = box.classList.contains('active');

      if (isActive) {
        atelierState.embellishments.push({ id, name, price });
      } else {
        atelierState.embellishments = atelierState.embellishments.filter(e => e.id !== id);
      }
      updateAtelierSummary();
    });
  });

  const noteBox = document.getElementById('atelierDedicationInput');
  if (noteBox) {
    noteBox.addEventListener('input', (e) => {
      atelierState.dedication = e.target.value || '(No dedication added)';
      const liveSlipNote = document.getElementById('slipDedicationText');
      if (liveSlipNote) {
        liveSlipNote.textContent = `"${atelierState.dedication}"`;
      }
    });
  }

  updateAtelierSummary();
}

function updateAtelierSummary() {
  const modelNameEl = document.getElementById('slipModelName');
  const paletteNameEl = document.getElementById('slipPaletteName');
  const embellishListEl = document.getElementById('slipEmbellishList');
  const totalEl = document.getElementById('slipTotalValue');
  const dedicationEl = document.getElementById('slipDedicationText');

  if (modelNameEl) modelNameEl.textContent = atelierState.base.name;
  if (paletteNameEl) paletteNameEl.textContent = atelierState.palette.name;
  if (dedicationEl) dedicationEl.textContent = `"${atelierState.dedication}"`;

  if (embellishListEl) {
    if (atelierState.embellishments.length === 0) {
      embellishListEl.innerHTML = `<span style="color: var(--color-ink-muted);">Standard Packaging</span>`;
    } else {
      embellishListEl.innerHTML = atelierState.embellishments.map(e => `
        <span style="display: block; font-size: 0.82rem; color: var(--color-ink-muted);">+ ${e.name} (₹ ${e.price})</span>
      `).join('');
    }
  }

  const extrasTotal = atelierState.embellishments.reduce((acc, curr) => acc + curr.price, 0);
  const total = atelierState.base.price + extrasTotal;

  if (totalEl) {
    totalEl.textContent = `₹ ${total.toLocaleString('en-IN')}`;
  }
}

function addAtelierPieceToBag() {
  const extrasTotal = atelierState.embellishments.reduce((acc, curr) => acc + curr.price, 0);
  const total = atelierState.base.price + extrasTotal;

  const item = {
    id: `custom-${Date.now()}`,
    name: `${atelierState.base.name}`,
    price: total,
    quantity: 1,
    image: atelierState.base.image,
    meta: `Colors: ${atelierState.palette.name} | Add-ons: ${atelierState.embellishments.map(e => e.name).join(', ') || 'Standard'}`
  };

  cart.push(item);
  saveCart();
  refreshCartState();
  openBagDrawer();
}

function inquireAtelierViaWhatsApp() {
  const extrasTotal = atelierState.embellishments.reduce((acc, curr) => acc + curr.price, 0);
  const total = atelierState.base.price + extrasTotal;
  const embellishText = atelierState.embellishments.length > 0
    ? atelierState.embellishments.map(e => e.name).join(', ')
    : 'Standard Packaging';

  const message = 
`Hello Plush Crafts! 🌸
I would like to order a custom handcrafted piece:

• Product: ${atelierState.base.name}
• Color Palette: ${atelierState.palette.name}
• Extras: ${embellishText}
• Dedication Card Message: "${atelierState.dedication}"
• Total Price: ₹ ${total.toLocaleString('en-IN')}

Please share payment/UPI details to confirm this order. Thank you! ♡`;

  window.open(`https://wa.me/${PLUSH_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

function inquireAtelierViaInstagram() {
  const extrasTotal = atelierState.embellishments.reduce((acc, curr) => acc + curr.price, 0);
  const total = atelierState.base.price + extrasTotal;
  const embellishText = atelierState.embellishments.length > 0
    ? atelierState.embellishments.map(e => e.name).join(', ')
    : 'Standard';

  const message = 
`Hello Plush Crafts (@plush_crafts.in)! 🌸

I would like to inquire about a custom order:
• Item: ${atelierState.base.name}
• Color Choice: ${atelierState.palette.name}
• Packaging & Extras: ${embellishText}
• Message on Card: "${atelierState.dedication}"
• Estimated Total: ₹ ${total.toLocaleString('en-IN')}

Please let me know how to confirm this order. Thank you! ♡`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(message);
  }

  alert(
    `Order message copied to clipboard!\n\nOpening @plush_crafts.in on Instagram now. Send us this message to complete your order!`
  );

  window.open('https://www.instagram.com/plush_crafts.in/#', '_blank');
}

// --- Cart Operations ---
function addToBag(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      meta: `${product.dimensions} • Handcrafted with love`
    });
  }

  saveCart();
  refreshCartState();
  openBagDrawer();
}

function updateBagQuantity(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  refreshCartState();
}

function saveCart() {
  localStorage.setItem('plush_luxury_cart', JSON.stringify(cart));
}

function refreshCartState() {
  const counter = document.getElementById('bagCountIndicator');
  const scrollBox = document.getElementById('bagItemsScroll');
  const subtotalEl = document.getElementById('bagSubtotalVal');
  const shippingEl = document.getElementById('bagShippingVal');
  const discountRow = document.getElementById('bagDiscountRow');
  const discountValEl = document.getElementById('bagDiscountVal');
  const totalEl = document.getElementById('bagTotalVal');

  const totalCount = cart.reduce((acc, i) => acc + i.quantity, 0);
  if (counter) {
    counter.textContent = totalCount;
    counter.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  if (!scrollBox) return;

  if (cart.length === 0) {
    scrollBox.innerHTML = `
      <div style="text-align: center; padding: 50px 20px; color: var(--color-ink-muted);">
        <p style="font-size: 1.15rem; font-weight: 700; color: var(--color-ink); margin-bottom: 8px;">Your Shopping Bag is Empty</p>
        <p style="font-size: 0.88rem; margin-bottom: 20px;">Browse our handcrafted collection and pick your favorite flowers!</p>
        <button class="btn btn-forest" onclick="closeBagDrawer(); scrollToAnchor('collectionSection');">Explore Bouquets</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹ 0';
    if (shippingEl) shippingEl.textContent = '₹ 0';
    if (totalEl) totalEl.textContent = '₹ 0';
    if (discountRow) discountRow.style.display = 'none';
    return;
  }

  scrollBox.innerHTML = cart.map(item => `
    <div style="display: flex; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--color-border); align-items: center;">
      <img src="${item.image}" alt="${item.name}" style="width: 64px; height: 64px; object-fit: cover; border-radius: var(--radius-xs); border: 1px solid var(--color-border);" />
      <div style="flex-grow: 1;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--color-ink); margin-bottom: 2px;">${item.name}</h4>
        <div style="font-size: 0.75rem; color: var(--color-ink-muted); margin-bottom: 6px;">${item.meta || ''}</div>
        <div style="font-weight: 700; font-size: 0.95rem; color: var(--color-red);">₹ ${(item.price * item.quantity).toLocaleString('en-IN')}</div>
        <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
          <button style="width: 24px; height: 24px; border: 1px solid var(--color-border); background: #FFF; border-radius: 4px; cursor: pointer;" onclick="updateBagQuantity('${item.id}', -1)">-</button>
          <span style="font-size: 0.84rem; font-weight: 600;">${item.quantity}</span>
          <button style="width: 24px; height: 24px; border: 1px solid var(--color-border); background: #FFF; border-radius: 4px; cursor: pointer;" onclick="updateBagQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const shippingFee = subtotal >= 999 ? 0 : 70;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const finalTotal = subtotal - discountAmount + shippingFee;

  if (subtotalEl) subtotalEl.textContent = `₹ ${subtotal.toLocaleString('en-IN')}`;
  if (shippingEl) {
    shippingEl.innerHTML = shippingFee === 0 
      ? '<span style="color: var(--color-green); font-weight: 600;">Free Shipping (Above ₹999)</span>' 
      : `₹ ${shippingFee}`;
  }

  if (discountRow && discountValEl) {
    if (appliedDiscount > 0) {
      discountRow.style.display = 'flex';
      discountValEl.textContent = `-₹ ${discountAmount.toLocaleString('en-IN')} (${appliedDiscount}%)`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (totalEl) totalEl.textContent = `₹ ${finalTotal.toLocaleString('en-IN')}`;
}

function openBagDrawer() {
  const curtain = document.getElementById('bagCurtain');
  const drawer = document.getElementById('bagDrawer');
  if (curtain && drawer) {
    curtain.classList.add('active');
    drawer.classList.add('active');
  }
}

function closeBagDrawer() {
  const curtain = document.getElementById('bagCurtain');
  const drawer = document.getElementById('bagDrawer');
  if (curtain && drawer) {
    curtain.classList.remove('active');
    drawer.classList.remove('active');
  }
}

function evaluatePinCode() {
  const input = document.getElementById('atelierPinInput');
  const resultBox = document.getElementById('atelierPinResult');
  if (!input || !resultBox) return;

  const pin = input.value.trim();
  if (pin.length !== 6 || isNaN(pin)) {
    resultBox.innerHTML = `<span style="color: var(--color-red);">Please enter a valid 6-digit PIN code.</span>`;
    return;
  }

  const arrivalDate = new Date();
  arrivalDate.setDate(arrivalDate.getDate() + 4);
  const formatted = arrivalDate.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });

  resultBox.innerHTML = `
    <span style="color: var(--color-green); font-weight: 600;">
      ✓ Delivery available to ${pin}! Estimated delivery by: ${formatted}.
    </span>
  `;
}

function applyAtelierCode() {
  const input = document.getElementById('atelierCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'PLUSH10') {
    appliedDiscount = 10;
    refreshCartState();
    alert('Code PLUSH10 applied! 10% discount added to your cart.');
  } else {
    alert('Use code "PLUSH10" to get 10% off.');
  }
}

function completeOrderViaWhatsApp() {
  if (cart.length === 0) {
    alert('Your shopping bag is empty.');
    return;
  }

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const shippingFee = subtotal >= 999 ? 0 : 70;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const finalTotal = subtotal - discountAmount + shippingFee;

  const summary = cart.map(i => `• ${i.name} (Qty: ${i.quantity}) - ₹ ${(i.price * i.quantity).toLocaleString('en-IN')}`).join('\n');

  const text = 
`Hello Plush Crafts! 🌸
I would like to place an order from your website:

${summary}

Subtotal: ₹ ${subtotal.toLocaleString('en-IN')}
Shipping: ${shippingFee === 0 ? 'Free Shipping (Above ₹999)' : '₹ ' + shippingFee}
${discountAmount > 0 ? `Discount (PLUSH10): -₹ ${discountAmount.toLocaleString('en-IN')}\n` : ''}Total Amount: ₹ ${finalTotal.toLocaleString('en-IN')}

Please share UPI details for payment. Thank you! ♡`;

  window.open(`https://wa.me/${PLUSH_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function orderProductViaWhatsApp(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;

  const text = 
`Hello Plush Crafts! 🌸
I would like to order this product from your website:

• Product: ${p.name}
• Price: ₹ ${p.price.toLocaleString('en-IN')}
• Details: ${p.shortSummary}

Please let me know how to confirm and share UPI payment details. Thank you! ♡`;

  window.open(`https://wa.me/${PLUSH_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function completeOrderViaInstagram() {
  if (cart.length === 0) {
    alert('Your shopping bag is empty.');
    return;
  }

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const shippingFee = subtotal >= 999 ? 0 : 70;
  const discountAmount = Math.round(subtotal * (appliedDiscount / 100));
  const finalTotal = subtotal - discountAmount + shippingFee;

  const summary = cart.map(i => `• ${i.name} (Qty: ${i.quantity}) - ₹ ${i.price * i.quantity}`).join('\n');

  const text = 
`Hello Plush Crafts (@plush_crafts.in)! 🌸

I would like to place an order from your website:
${summary}

Subtotal: ₹ ${subtotal.toLocaleString('en-IN')}
Shipping: ${shippingFee === 0 ? 'Free Shipping' : '₹ ' + shippingFee}
Total: ₹ ${finalTotal.toLocaleString('en-IN')}

Please share UPI details so I can make the payment. Thank you! ♡`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }

  alert(
    `Order message copied to clipboard!\n\nOpening @plush_crafts.in on Instagram now. Send us this message to complete your order! ♡`
  );

  window.open('https://www.instagram.com/plush_crafts.in/#', '_blank');
}

function openProductDetail(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;

  const curtain = document.getElementById('detailCurtain');
  const slot = document.getElementById('detailContentSlot');
  if (!curtain || !slot) return;

  slot.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start;">
      <div style="border: 1px solid var(--color-border); border-radius: var(--radius-sm); overflow: hidden; background-color: var(--color-surface-alt);">
        <img src="${p.image}" alt="${p.name}" style="width: 100%; height: 400px; object-fit: cover;" />
      </div>
      <div>
        <span style="font-size: 0.8rem; font-weight: 600; color: var(--color-ink-muted); margin-bottom: 6px; display: block;">${p.provenance}</span>
        <h2 style="font-size: 1.8rem; margin-bottom: 12px; font-weight: 700; color: var(--color-ink);">${p.name}</h2>
        <div style="margin-bottom: 16px;">
          <span style="font-size: 1.6rem; font-weight: 800; color: var(--color-red);">₹ ${p.price.toLocaleString('en-IN')}</span>
          <span style="font-size: 1rem; color: var(--color-ink-light); text-decoration: line-through; margin-left: 8px;">₹ ${p.originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <p style="font-size: 0.95rem; color: var(--color-ink-muted); line-height: 1.65; margin-bottom: 20px;">
          ${p.fullDescription}
        </p>
        <div style="background-color: var(--color-surface-soft); border: 1px solid var(--color-border); border-radius: var(--radius-xs); padding: 16px; margin-bottom: 24px; font-size: 0.86rem; display: flex; flex-direction: column; gap: 6px;">
          <div><strong>Material:</strong> ${p.material}</div>
          <div><strong>Size:</strong> ${p.dimensions}</div>
          <div><strong>Crafting Time:</strong> ${p.craftTime}</div>
          <div><strong>Care:</strong> Keep away from water; gentle dusting with a soft brush.</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <button class="btn btn-whatsapp" style="width: 100%; padding: 13px; font-size: 0.95rem;" onclick="orderProductViaWhatsApp('${p.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.779.98-.955 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.789-1.68-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.15-.176.2-.301.301-.502.101-.2.05-.377-.025-.528-.075-.15-.678-1.634-.93-2.24-.245-.589-.494-.509-.678-.519l-.578-.01c-.2 0-.527.075-.803.377-.276.301-1.054 1.03-1.054 2.512 0 1.482 1.08 2.912 1.23 3.113.15.2 2.125 3.245 5.148 4.552.719.311 1.28.497 1.718.636.722.23 1.379.197 1.899.12.578-.087 1.78-.727 2.03-1.43.25-.703.25-1.305.176-1.43-.075-.126-.276-.201-.577-.351zM12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.94.55 3.75 1.5 5.29L2 22l4.87-1.48C8.34 21.37 10.13 22 12.04 22c5.52 0 10-4.48 10-10S17.56 2 12.04 2z"/>
            </svg>
            Order on WhatsApp
          </button>
          <div style="display: flex; gap: 10px;">
            <button class="btn btn-forest" style="flex: 1;" onclick="addToBag('${p.id}'); closeProductDetail();">
              Add to Bag • ₹ ${p.price}
            </button>
            <a href="https://www.instagram.com/plush_crafts.in/#" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="flex: 1; text-align: center;">
              Instagram DM
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  curtain.classList.add('active');
}

function closeProductDetail() {
  const curtain = document.getElementById('detailCurtain');
  if (curtain) {
    curtain.classList.remove('active');
  }
}

function scrollToAnchor(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function bindGlobalEvents() {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.dataset.filterKey;
      renderCollection();
    });
  });

  const bagCurtain = document.getElementById('bagCurtain');
  if (bagCurtain) {
    bagCurtain.addEventListener('click', (e) => {
      if (e.target === bagCurtain) closeBagDrawer();
    });
  }

  const detailCurtain = document.getElementById('detailCurtain');
  if (detailCurtain) {
    detailCurtain.addEventListener('click', (e) => {
      if (e.target === detailCurtain) closeProductDetail();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBagDrawer();
      closeProductDetail();
    }
  });
}
