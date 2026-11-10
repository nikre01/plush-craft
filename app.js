/**
 * PLUSH CRAFTS (P L U S H)
 * Official Website for @plush_crafts.in
 * Clean, Professional, Authentic Handmade Boutique
 */

// --- Contact Constants ---
const PLUSH_WHATSAPP_NUMBER = '918989060207'; // WhatsApp: +91 89890 60207
const PLUSH_INSTAGRAM_URL = 'https://www.instagram.com/plush_crafts.in/#';

// --- Real Handcrafted Products from @plush_crafts.in (Full 73 Catalog) ---
const DEFAULT_PRODUCTS = [
  {
    "id": "plush-01",
    "name": "Handmade Blue Velvet Flower Bouquet",
    "category": "bouquets",
    "price": 699,
    "originalPrice": 899,
    "badge": "Popular",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted signature royal blue blossoms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Handmade Blue Velvet Flower Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_01.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "blue, velvet, bouquet, cotton, flowers, gift"
  },
  {
    "id": "plush-02",
    "name": "Pastel Lavender Flower Bouquet",
    "category": "bouquets",
    "price": 749,
    "originalPrice": 949,
    "badge": "Best Seller",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted delicate lilac & lavender sprigs wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Pastel Lavender Flower Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_02.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "lavender, purple, lilac, pastel, bouquet, flowers"
  },
  {
    "id": "plush-03",
    "name": "Rustic Kraft Paper Wrapped Floral Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Featured",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Rustic Kraft Paper Wrapped Floral Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_03.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "kraft, rustic, wrap, bouquet, mixed flowers"
  },
  {
    "id": "plush-04",
    "name": "Lotus Pearl Tea Light Candle Holder",
    "category": "decor",
    "price": 549,
    "originalPrice": 699,
    "badge": "Festive Decor",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Lotus Pearl Tea Light Candle Holder. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_04.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "lotus, pearl, diya, candle, holder, festive, puja"
  },
  {
    "id": "plush-05",
    "name": "Festive Diya & Tea Light Pedestal (10 Colors)",
    "category": "decor",
    "price": 499,
    "originalPrice": 650,
    "badge": "10 Colors Available",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Festive Diya & Tea Light Pedestal (10 Colors). Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_05.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "diya, festive, diwali, candle, pedestal, colors"
  },
  {
    "id": "plush-06",
    "name": "Cheerful Sunburst Yellow Sunflower Bouquet",
    "category": "bouquets",
    "price": 649,
    "originalPrice": 849,
    "badge": "Sunny Mood",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted cheerful golden sunflowers wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Cheerful Sunburst Yellow Sunflower Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_06.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "sunflower, yellow, daisy, cheerful, summer, flowers"
  },
  {
    "id": "plush-07",
    "name": "Happy Birthday Keepsake Bouquet",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1099,
    "badge": "Birthday Special",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Happy Birthday Keepsake Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_07.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "birthday, keepsake, celebration, card, gift, bouquet"
  },
  {
    "id": "plush-08",
    "name": "Classic Crimson Red Rose Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Romantic",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Classic Crimson Red Rose Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_08.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "rose, red, crimson, romance, valentine, anniversary"
  },
  {
    "id": "plush-09",
    "name": "Spider-Man Theme Pipe Cleaner Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Special Edition",
    "craftTime": "3.5 Hours Handcrafted",
    "dimensions": "28–30 cm Length",
    "material": "Fuzzy Chenille Pipe Cleaners, Spider Webbing & Kraft Paper",
    "shortSummary": "Custom Spider-Man themed handmade bouquet with matching web details & roses.",
    "fullDescription": "Spider-Man Theme Pipe Cleaner Bouquet. Signature handcrafted bouquet inspired by Spider-Man! Handcrafted petal-by-petal with deep red & web-black fuzzy pipe cleaners, complete with custom wrapping. The ultimate fan gift for birthdays, comic lovers, and best friends. Stays forever fresh without watering! Handcrafted by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_09.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "spiderman, superhero, red, blue, themed, special"
  },
  {
    "id": "plush-10",
    "name": "Handmade Glowing Rose & Blossom Bouquet",
    "category": "decor",
    "price": 899,
    "originalPrice": 1199,
    "badge": "Warm Glow",
    "craftTime": "3 – 4 Hours Handcrafted",
    "dimensions": "22–25 cm Height",
    "material": "Bendable Chenille Pipe Cleaners & Warm Fairy LED Micro-Lights",
    "shortSummary": "Handcrafted forever flower bouquet entwined with warm glowing fairy LED lights.",
    "fullDescription": "Handmade Glowing Rose & Blossom Bouquet. Beautiful handcrafted pipe cleaner floral blooms entwined with cozy fairy LED lights. Creates a soft, warm, romantic bedside glow. Perfect for bedroom decor, study desks, or a unique forever gift. Battery pack included. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_10.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "rose, glowing, fairy lights, warm, bouquet, gift, handmade"
  },
  {
    "id": "plush-11",
    "name": "Ganpati Bappa Red Flower Haar (Garland)",
    "category": "decor",
    "price": 599,
    "originalPrice": 799,
    "badge": "Festive Garland",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Ganpati Bappa Red Flower Haar (Garland). Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_11.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "ganpati, puja, haar, garland, red, festive, temple"
  },
  {
    "id": "plush-12",
    "name": "Blush Pink French Tulip Bouquet",
    "category": "bouquets",
    "price": 699,
    "originalPrice": 899,
    "badge": "Trending",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted pastel spring tulips wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Blush Pink French Tulip Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_12.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "tulip, pink, blush, french, pastel, flowers"
  },
  {
    "id": "plush-13",
    "name": "Pure Snow White & Cream Daisy Stems",
    "category": "bouquets",
    "price": 599,
    "originalPrice": 749,
    "badge": "Minimalist",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Pure Snow White & Cream Daisy Stems. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_13.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "white, daisy, cream, minimal, daisies, clean"
  },
  {
    "id": "plush-14",
    "name": "Dual-Tone Purple & White Hydrangea Bouquet",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1050,
    "badge": "Artisan Pick",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Dual-Tone Purple & White Hydrangea Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_14.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "hydrangea, purple, lilac, clusters, lush"
  },
  {
    "id": "plush-15",
    "name": "Mini Sunflower Desktop Plant in Clay Pot",
    "category": "decor",
    "price": 399,
    "originalPrice": 549,
    "badge": "Cute Mini",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Mini Sunflower Desktop Plant in Clay Pot. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_15.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "mini, pot, sunflower, desk, office, tabletop"
  },
  {
    "id": "plush-16",
    "name": "Enchanted Forest Botanical Greenery Wrap",
    "category": "bouquets",
    "price": 749,
    "originalPrice": 950,
    "badge": "Botanical",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Enchanted Forest Botanical Greenery Wrap. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_16.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "green, eucalyptus, botanical, leaves, stems"
  },
  {
    "id": "plush-17",
    "name": "Velvet Burgundy Rose & Eucalyptus Bunch",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1099,
    "badge": "Luxury",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Velvet Burgundy Rose & Eucalyptus Bunch. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_17.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "rose, burgundy, wine, velvet, eucalyptus, luxury"
  },
  {
    "id": "plush-18",
    "name": "Royal Blue Starry Night Flower Stems",
    "category": "bouquets",
    "price": 720,
    "originalPrice": 899,
    "badge": "Studio Special",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted signature royal blue blossoms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Royal Blue Starry Night Flower Stems. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_18.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "blue, starry, royal blue, night, stars, bouquet"
  },
  {
    "id": "plush-19",
    "name": "Pearl Beaded Rangoli Diya Centerpiece",
    "category": "decor",
    "price": 599,
    "originalPrice": 799,
    "badge": "Festive Festive",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Pearl Beaded Rangoli Diya Centerpiece. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_19.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "diya, rangoli, pearl, centerpiece, festive, thali"
  },
  {
    "id": "plush-20",
    "name": "Charming Pastel Rainbow Mixed Bouquet",
    "category": "bouquets",
    "price": 899,
    "originalPrice": 1199,
    "badge": "Bestseller",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Charming Pastel Rainbow Mixed Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_20.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "rainbow, pastel, mixed, colorful, multicolor"
  },
  {
    "id": "plush-21",
    "name": "Cotton Candy Baby Pink Peony Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Soft Aesthetic",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Cotton Candy Baby Pink Peony Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_21.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "pink, peony, cotton candy, fluffy, soft, romance"
  },
  {
    "id": "plush-22",
    "name": "Golden Festive Marigold (Genda) Garland",
    "category": "decor",
    "price": 499,
    "originalPrice": 699,
    "badge": "Traditional",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Golden Festive Marigold (Genda) Garland. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_22.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "marigold, genda, yellow, orange, festive, diwali, garland"
  },
  {
    "id": "plush-23",
    "name": "Butterfly Garden Theme Blossom Bouquet",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1099,
    "badge": "Whimsical",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Butterfly Garden Theme Blossom Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_23.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "butterfly, garden, lilac, pastel, whimsical, magical"
  },
  {
    "id": "plush-24",
    "name": "Warm Peach Coral Rose Bouquet",
    "category": "bouquets",
    "price": 749,
    "originalPrice": 949,
    "badge": "Warm Tones",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Warm Peach Coral Rose Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_24.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "peach, coral, rose, warm, sunset, flowers"
  },
  {
    "id": "plush-25",
    "name": "Mini Daisy Pocket Keepsake Bouquet",
    "category": "bouquets",
    "price": 349,
    "originalPrice": 499,
    "badge": "Pocket Gift",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Mini Daisy Pocket Keepsake Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_25.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "mini, pocket, small, keepsake, daisy, token"
  },
  {
    "id": "plush-26",
    "name": "Handcrafted Floral Blossom Keepsake Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Artisan Pick",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Handcrafted Floral Blossom Keepsake Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_26.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "flowers, floral, bloom, bouquet, handmade, gift"
  },
  {
    "id": "plush-27",
    "name": "Lavender Dream Cloud Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Aromatique",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted delicate lilac & lavender sprigs wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Lavender Dream Cloud Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_27.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "lavender, cloud, purple, lilac, dream, soothing"
  },
  {
    "id": "plush-28",
    "name": "Sunflower & Red Rose Combo Bouquet",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1050,
    "badge": "Best Combo",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Sunflower & Red Rose Combo Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_28.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "sunflower, rose, combo, red, yellow, contrast"
  },
  {
    "id": "plush-29",
    "name": "Festive Peacock Feather Color Palette Diya",
    "category": "decor",
    "price": 549,
    "originalPrice": 720,
    "badge": "Peacock Theme",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Festive Peacock Feather Color Palette Diya. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_29.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "diya, peacock, blue, green, festive, candle"
  },
  {
    "id": "plush-30",
    "name": "Vintage Coffee & Ivory Rose Bunch",
    "category": "bouquets",
    "price": 749,
    "originalPrice": 950,
    "badge": "Vintage Chic",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Vintage Coffee & Ivory Rose Bunch. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_30.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "coffee, brown, mocha, ivory, vintage, boho"
  },
  {
    "id": "plush-31",
    "name": "Sky Blue Forget-Me-Not Miniature Stems",
    "category": "bouquets",
    "price": 449,
    "originalPrice": 599,
    "badge": "Delicate",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted signature royal blue blossoms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Sky Blue Forget-Me-Not Miniature Stems. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_31.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "forget me not, blue, sky blue, tiny, delicate"
  },
  {
    "id": "plush-32",
    "name": "Sunset Amber & Terracotta Tulip Bundle",
    "category": "bouquets",
    "price": 720,
    "originalPrice": 899,
    "badge": "Warm Aesthetic",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted pastel spring tulips wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Sunset Amber & Terracotta Tulip Bundle. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_32.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "tulip, terracotta, amber, orange, sunset, autumn"
  },
  {
    "id": "plush-33",
    "name": "Heart-Shaped Red Rose Dedication Wreath",
    "category": "decor",
    "price": 899,
    "originalPrice": 1199,
    "badge": "Anniversary",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Heart-Shaped Red Rose Dedication Wreath. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_33.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "wreath, heart, rose, red, love, wall decor"
  },
  {
    "id": "plush-34",
    "name": "Soft Lilac Bellflower & Lily Stems",
    "category": "bouquets",
    "price": 749,
    "originalPrice": 949,
    "badge": "Graceful",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Soft Lilac Bellflower & Lily Stems. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_34.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "bellflower, lily, lilac, purple, graceful, stems"
  },
  {
    "id": "plush-35",
    "name": "Kuromi & Melody Anime Theme Bouquet",
    "category": "bouquets",
    "price": 899,
    "originalPrice": 1249,
    "badge": "Anime Special",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Kuromi & Melody Anime Theme Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_35.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "anime, kuromi, melody, purple, black, cute"
  },
  {
    "id": "plush-36",
    "name": "Teal Blossom Centerpiece Candle Bowl",
    "category": "decor",
    "price": 499,
    "originalPrice": 650,
    "badge": "Home Centerpiece",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Teal Blossom Centerpiece Candle Bowl. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_36.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "teal, bowl, candle, diya, centerpiece, table"
  },
  {
    "id": "plush-37",
    "name": "Sunny Yellow Daisy Stems in Ceramic Mug",
    "category": "decor",
    "price": 499,
    "originalPrice": 699,
    "badge": "Desk Decor",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Sunny Yellow Daisy Stems in Ceramic Mug. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_37.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "mug, desk, daisy, yellow, office, cheerful"
  },
  {
    "id": "plush-38",
    "name": "Ruby Red Long Stem Rose (Single Keepsake)",
    "category": "bouquets",
    "price": 299,
    "originalPrice": 449,
    "badge": "Single Rose",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Ruby Red Long Stem Rose (Single Keepsake). Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_38.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "rose, single, ruby, red, keepsake, gift"
  },
  {
    "id": "plush-39",
    "name": "Baby Breath Cloud & Pink Lily Arrangement",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1099,
    "badge": "Ethereal",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Baby Breath Cloud & Pink Lily Arrangement. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_39.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "baby breath, cloud, lily, pink, white, soft"
  },
  {
    "id": "plush-40",
    "name": "Champagne Gold Festive Tea Light Coaster",
    "category": "decor",
    "price": 449,
    "originalPrice": 599,
    "badge": "Festive Set",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Champagne Gold Festive Tea Light Coaster. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_40.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "coaster, tea light, gold, champagne, pearl"
  },
  {
    "id": "plush-41",
    "name": "Midnight Blue & Silver Glitter Bouquet",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1099,
    "badge": "Midnight Magic",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted signature royal blue blossoms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Midnight Blue & Silver Glitter Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_41.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "midnight, blue, silver, glitter, galaxy, evening"
  },
  {
    "id": "plush-42",
    "name": "Sweetheart Valentine Bouquet with Teddy Bow",
    "category": "bouquets",
    "price": 899,
    "originalPrice": 1199,
    "badge": "Valentine Special",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Sweetheart Valentine Bouquet with Teddy Bow. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_42.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "valentine, sweetheart, teddy, bow, red, pink, love"
  },
  {
    "id": "plush-43",
    "name": "Matcha Green & White Tulip Bundle",
    "category": "bouquets",
    "price": 699,
    "originalPrice": 899,
    "badge": "Clean Earthy",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted pastel spring tulips wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Matcha Green & White Tulip Bundle. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_43.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "matcha, green, white, tulip, earthy, aesthetic"
  },
  {
    "id": "plush-44",
    "name": "Handmade Sunflower & Daisy Bloom Stalks",
    "category": "bouquets",
    "price": 249,
    "originalPrice": 399,
    "badge": "Sunny Bloom",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted cheerful golden sunflowers wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Handmade Sunflower & Daisy Bloom Stalks. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_44.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "sunflower, daisy, yellow, flower, bloom, bouquet"
  },
  {
    "id": "plush-45",
    "name": "Pink Carnation Bouquet for Mother's Day",
    "category": "bouquets",
    "price": 749,
    "originalPrice": 949,
    "badge": "Mother Special",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Pink Carnation Bouquet for Mother's Day. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_45.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "carnation, pink, mother, gratitude, sweet"
  },
  {
    "id": "plush-46",
    "name": "Festive Lotus Toran Wall Hanging",
    "category": "decor",
    "price": 649,
    "originalPrice": 849,
    "badge": "Traditional Decor",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Festive Lotus Toran Wall Hanging. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_46.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "toran, wall, hanging, lotus, festive, door"
  },
  {
    "id": "plush-47",
    "name": "Handcrafted Crimson Velvet Rose Keepsake",
    "category": "bouquets",
    "price": 949,
    "originalPrice": 1299,
    "badge": "Romantic",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Handcrafted Crimson Velvet Rose Keepsake. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_47.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "rose, red, crimson, velvet, bouquet, valentine"
  },
  {
    "id": "plush-48",
    "name": "Blue Ombre Butterfly Garden Bouquet",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1099,
    "badge": "Fantasy",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted signature royal blue blossoms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Blue Ombre Butterfly Garden Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_48.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "butterfly, ombre, blue, fantasy, gift, bouquet"
  },
  {
    "id": "plush-49",
    "name": "Pastel Yellow & Mint Green Blossom Bunch",
    "category": "bouquets",
    "price": 699,
    "originalPrice": 899,
    "badge": "Springtime",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Pastel Yellow & Mint Green Blossom Bunch. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_49.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "yellow, mint, green, pastel, spring, fresh"
  },
  {
    "id": "plush-50",
    "name": "Mini Cactus & Succulent in Terracotta Cup",
    "category": "decor",
    "price": 399,
    "originalPrice": 549,
    "badge": "Cute Succulent",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Mini Cactus & Succulent in Terracotta Cup. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_50.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "cactus, succulent, green, cute, pot, desk"
  },
  {
    "id": "plush-51",
    "name": "Deep Plum & Blackberry Autumn Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Autumn Tones",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Deep Plum & Blackberry Autumn Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_51.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "plum, blackberry, dark, purple, autumn, rich"
  },
  {
    "id": "plush-52",
    "name": "Sunflower & Lavender Cottagecore Bouquet",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1099,
    "badge": "Cottagecore",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted cheerful golden sunflowers wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Sunflower & Lavender Cottagecore Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_52.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "sunflower, lavender, cottagecore, yellow, purple"
  },
  {
    "id": "plush-53",
    "name": "Strawberry Pink Daisy Stems Bouquet",
    "category": "bouquets",
    "price": 649,
    "originalPrice": 849,
    "badge": "Sweet Berry",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Strawberry Pink Daisy Stems Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_53.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "strawberry, pink, daisy, sweet, berry, cute"
  },
  {
    "id": "plush-54",
    "name": "Royal Blue Pearl Floral Diya Stand",
    "category": "decor",
    "price": 549,
    "originalPrice": 720,
    "badge": "Festive Light",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Royal Blue Pearl Floral Diya Stand. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_54.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "royal blue, diya, pearl, stand, festive, puja"
  },
  {
    "id": "plush-55",
    "name": "Cherry Blossom (Sakura) Branch Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Sakura Special",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Cherry Blossom (Sakura) Branch Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_55.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "sakura, cherry blossom, branch, pink, japanese"
  },
  {
    "id": "plush-56",
    "name": "Graduation Keepsake Bouquet (Cap & Diploma)",
    "category": "bouquets",
    "price": 899,
    "originalPrice": 1249,
    "badge": "Graduation Gift",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Graduation Keepsake Bouquet (Cap & Diploma). Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_56.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "graduation, cap, diploma, congrats, student, gift"
  },
  {
    "id": "plush-57",
    "name": "Ocean Breeze Turquoise Flower Arrangement",
    "category": "bouquets",
    "price": 749,
    "originalPrice": 949,
    "badge": "Ocean Theme",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Ocean Breeze Turquoise Flower Arrangement. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_57.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "ocean, turquoise, sea, aqua, breeze, blue"
  },
  {
    "id": "plush-58",
    "name": "Mini Handcrafted Red Rose Stem Keepsake",
    "category": "bouquets",
    "price": 249,
    "originalPrice": 399,
    "badge": "Cute Mini",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Mini Handcrafted Red Rose Stem Keepsake. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_58.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "rose, red, mini, stem, bouquet, romance"
  },
  {
    "id": "plush-59",
    "name": "Golden Yellow Marigold Tea Light Plate",
    "category": "decor",
    "price": 499,
    "originalPrice": 650,
    "badge": "Festive Golden",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Golden Yellow Marigold Tea Light Plate. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_59.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "marigold, yellow, gold, tea light, plate, festive"
  },
  {
    "id": "plush-60",
    "name": "Pink & White Gradient Lily Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Graceful Blooms",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Pink & White Gradient Lily Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_60.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "lily, pink, gradient, white, flowers, elegant"
  },
  {
    "id": "plush-61",
    "name": "Sunflower & Blue Forget-Me-Not Duo Wrap",
    "category": "bouquets",
    "price": 749,
    "originalPrice": 949,
    "badge": "Contrast Duo",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted cheerful golden sunflowers wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Sunflower & Blue Forget-Me-Not Duo Wrap. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_61.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "sunflower, blue, duo, yellow, bouquet, contrast"
  },
  {
    "id": "plush-62",
    "name": "Festive Peacock Blue & Green Haar Garland",
    "category": "decor",
    "price": 649,
    "originalPrice": 849,
    "badge": "Temple Garland",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Festive Peacock Blue & Green Haar Garland. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_62.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "peacock, blue, green, garland, haar, temple, puja"
  },
  {
    "id": "plush-63",
    "name": "Lavender & Daisy Pastel Floral Arrangement",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1149,
    "badge": "Pastel Dream",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted delicate lilac & lavender sprigs wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Lavender & Daisy Pastel Floral Arrangement. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_63.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "lavender, daisy, pastel, purple, bouquet, flowers"
  },
  {
    "id": "plush-64",
    "name": "Chic Monochrome Black & White Rose Bouquet",
    "category": "bouquets",
    "price": 849,
    "originalPrice": 1099,
    "badge": "Modern Minimal",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted hand-twisted roses wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Chic Monochrome Black & White Rose Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_64.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "black, white, monochrome, rose, modern, gothic"
  },
  {
    "id": "plush-65",
    "name": "Pastel Baby Pink Daisy Bouquet with Jute Wrap",
    "category": "bouquets",
    "price": 649,
    "originalPrice": 849,
    "badge": "Charming Pink",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Pastel Baby Pink Daisy Bouquet with Jute Wrap. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_65.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "pink, daisy, baby pink, jute, soft, bouquet"
  },
  {
    "id": "plush-66",
    "name": "Terracotta Sunburst Sunflower & Daisy Wreath",
    "category": "decor",
    "price": 899,
    "originalPrice": 1199,
    "badge": "Door Wreath",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Terracotta Sunburst Sunflower & Daisy Wreath. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_66.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "wreath, sunflower, daisy, terracotta, door, wall"
  },
  {
    "id": "plush-67",
    "name": "Blue Hydrangea Desktop Plant in Ceramic Pot",
    "category": "decor",
    "price": 499,
    "originalPrice": 699,
    "badge": "Desk Plant",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Blue Hydrangea Desktop Plant in Ceramic Pot. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_67.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "hydrangea, blue, pot, plant, tabletop, desk"
  },
  {
    "id": "plush-68",
    "name": "Pastel Lavender Stalk Keepsake Bloom",
    "category": "bouquets",
    "price": 249,
    "originalPrice": 399,
    "badge": "Handmade",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted delicate lilac & lavender sprigs wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Pastel Lavender Stalk Keepsake Bloom. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_68.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "lavender, purple, bloom, stalk, flowers, bouquet"
  },
  {
    "id": "plush-69",
    "name": "Vibrant Rainbow Floral Wreath Wall Decor",
    "category": "decor",
    "price": 899,
    "originalPrice": 1249,
    "badge": "Multicolor Art",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Vibrant Rainbow Floral Wreath Wall Decor. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_69.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "wreath, rainbow, wall decor, multicolor, colorful"
  },
  {
    "id": "plush-70",
    "name": "Warm Candle Holder with Red & Gold Stems",
    "category": "decor",
    "price": 549,
    "originalPrice": 720,
    "badge": "Festive Warmth",
    "craftTime": "1.5 – 2 Hours Handcrafted",
    "dimensions": "12–14 cm Diameter",
    "material": "Velvet Chenille Pipe Cleaners, Faux Pearls & Ceramic Base",
    "shortSummary": "Festive handcrafted tea-light holder adorned with delicate velvet petals and pearls.",
    "fullDescription": "Warm Candle Holder with Red & Gold Stems. Handcrafted loop-by-loop with soft velvet pipe cleaners and glossy pearl accents. Reusable year after year for Diwali, pooja mandir, festive dinner decor, or wedding favors. Fits standard wax or LED tea-light candles. Made with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_70.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "candle, red, gold, diya, holder, festive, warm"
  },
  {
    "id": "plush-71",
    "name": "Classic Ivory White Calla Lily Bouquet",
    "category": "bouquets",
    "price": 799,
    "originalPrice": 999,
    "badge": "Pure Elegance",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Classic Ivory White Calla Lily Bouquet. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_71.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "calla lily, white, ivory, pure, wedding, elegant"
  },
  {
    "id": "plush-72",
    "name": "Handcrafted Golden Sunflower Bloom Bunch",
    "category": "bouquets",
    "price": 949,
    "originalPrice": 1299,
    "badge": "Sunny Mood",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted cheerful golden sunflowers wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Handcrafted Golden Sunflower Bloom Bunch. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_72.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "sunflower, yellow, floral, bloom, bouquet, flowers"
  },
  {
    "id": "plush-73",
    "name": "Custom Dedication Personalized Floral Hamper",
    "category": "bouquets",
    "price": 999,
    "originalPrice": 1399,
    "badge": "Custom Special",
    "craftTime": "2.5 – 3.5 Hours Handcrafted",
    "dimensions": "28–32 cm Length",
    "material": "Soft Chenille Pipe Cleaners, Floral Stem Wire & Aesthetic Kraft Wrap",
    "shortSummary": "Handcrafted floral blooms wrapped in aesthetic boutique craft paper.",
    "fullDescription": "Custom Dedication Personalized Floral Hamper. Carefully crafted by hand petal by petal with soft fuzzy pipe cleaners and bendable floral wire. Wrapped in boutique craft paper with a matching satin ribbon bow. A forever flower bouquet that never withers, needs no water, and stays fresh for years. Comes with a complimentary handwritten dedication card. Handcrafted with love in India by @plush_crafts.in.",
    "image": "assets/images/products/plush_item_73.jpeg",
    "provenance": "@plush_crafts.in",
    "tags": "custom, hamper, dedication, personalized, gift, box"
  }
];

// --- Persistent Catalog Sync with Private Admin Atelier ---
const CATALOG_VERSION = 'v4_human_catalog';
const CATALOG_VERSION_KEY = 'plush_catalog_version';

function getActiveProducts() {
  try {
    const storedVersion = localStorage.getItem(CATALOG_VERSION_KEY);
    const custom = localStorage.getItem('plush_catalog_products');
    if (custom && storedVersion === CATALOG_VERSION) {
      const parsed = JSON.parse(custom);
      if (Array.isArray(parsed) && parsed.length >= DEFAULT_PRODUCTS.length) {
        return parsed;
      }
    }
    // Auto-migrate if stored products are outdated (< 73 items)
    localStorage.setItem('plush_catalog_products', JSON.stringify(DEFAULT_PRODUCTS));
    localStorage.setItem(CATALOG_VERSION_KEY, CATALOG_VERSION);
  } catch (err) {
    console.warn('Using default catalog:', err);
  }
  return DEFAULT_PRODUCTS;
}

let PRODUCTS = getActiveProducts();

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
    { id: 'kraft-wrap', name: 'Kraft Paper & Satin Ribbon', price: 60 },
    { id: 'gift-card', name: 'Handwritten Dedication Card', price: 0 }
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

  // Allow clicking anywhere to skip
  preloader.style.cursor = 'pointer';
  preloader.addEventListener('click', dismissPreloader);

  const duration = window.innerWidth <= 768 ? 3500 : 4200;
  preloaderTimer = setTimeout(() => {
    dismissPreloader();
  }, duration);
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

// --- Search & Collection State ---
let searchQuery = '';
let showAllProducts = false;
const DEFAULT_DISPLAY_LIMIT = 10;

function handleStoreSearch(val) {
  searchQuery = val;
  renderCollection();
}

function applySearchQuery(query) {
  const input = document.getElementById('storeSearchInput');
  if (input) {
    input.value = query;
    input.focus();
  }
  searchQuery = query;
  activeFilter = 'all';
  // update tabs
  document.querySelectorAll('.filter-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filterKey === 'all');
  });
  renderCollection();
  scrollToAnchor('collectionSection');
}

function clearStoreSearch() {
  const input = document.getElementById('storeSearchInput');
  if (input) input.value = '';
  searchQuery = '';
  renderCollection();
}

function toggleViewAllProducts() {
  showAllProducts = !showAllProducts;
  renderCollection();
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  })[m]);
}

// --- Render Collection with Live E-Commerce Search ---
function renderCollection() {
  const container = document.getElementById('collectionGrid');
  if (!container) return;

  PRODUCTS = getActiveProducts();
  let items = PRODUCTS;

  // 1. Filter by Category tab
  if (activeFilter !== 'all') {
    items = items.filter(p => p.category === activeFilter);
  }

  // 2. Filter by search query (Search across title, tags, description, category, and badge)
  const q = searchQuery.trim().toLowerCase();
  const searchStatusRow = document.getElementById('searchStatusRow');
  const searchStatusText = document.getElementById('searchStatusText');
  const clearBtn = document.getElementById('storeSearchClear');
  const loadMoreBox = document.getElementById('catalogLoadMoreContainer');
  const loadMoreBtn = document.getElementById('catalogLoadMoreBtn');

  if (clearBtn) {
    clearBtn.style.display = q ? 'flex' : 'none';
  }

  if (q) {
    const tokens = q.split(/\s+/).filter(Boolean);
    items = items.filter(p => {
      const combined = [
        p.name || '',
        p.tags || '',
        p.shortSummary || '',
        p.category || '',
        p.badge || '',
        p.fullDescription || '',
        p.id || ''
      ].join(' ').toLowerCase();

      return tokens.every(token => combined.includes(token));
    });

    if (searchStatusRow && searchStatusText) {
      searchStatusRow.style.display = 'flex';
      searchStatusText.innerHTML = `Showing <strong>${items.length}</strong> handcrafted item${items.length === 1 ? '' : 's'} matching "<strong>${escapeHtml(q)}</strong>"`;
    }
    if (loadMoreBox) loadMoreBox.style.display = 'none';
  } else {
    if (searchStatusRow) searchStatusRow.style.display = 'none';

    // When not actively searching, show curated 10 items with a "View All 70+ Items" expander
    if (!showAllProducts && items.length > DEFAULT_DISPLAY_LIMIT) {
      const totalAvailable = items.length;
      items = items.slice(0, DEFAULT_DISPLAY_LIMIT);
      if (loadMoreBox) {
        loadMoreBox.style.display = 'block';
        if (loadMoreBtn) loadMoreBtn.textContent = `View All ${totalAvailable} Handcrafted Products ↓`;
      }
    } else {
      if (loadMoreBox) {
        if (showAllProducts && items.length > DEFAULT_DISPLAY_LIMIT) {
          loadMoreBox.style.display = 'block';
          if (loadMoreBtn) loadMoreBtn.textContent = `Show Fewer Products ↑`;
        } else {
          loadMoreBox.style.display = 'none';
        }
      }
    }
  }

  // Empty Search Results State
  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: rgba(255,255,255,0.7); border-radius: var(--radius-md); border: 1.5px dashed var(--color-border);">
        <p style="font-size: 2.2rem; margin-bottom: 8px;">🔍</p>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--color-ink); margin-bottom: 6px;">No products found for "${escapeHtml(q)}"</h3>
        <p style="font-size: 0.88rem; color: var(--color-ink-muted); margin-bottom: 18px;">Try searching for <em>roses</em>, <em>sunflower</em>, <em>tulip</em>, <em>diya</em>, <em>lamp</em>, or <em>keychain</em>.</p>
        <button class="btn btn-forest" onclick="clearStoreSearch()" style="padding: 10px 20px; font-size: 0.85rem;">View All Products</button>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-thumb-frame" onclick="openProductDetail('${p.id}')">
        <span class="card-tag">${p.badge}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='assets/images/insta_post_1.jpg'" />
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

function showToast(text) {
  let toast = document.getElementById('plushToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'plushToast';
    toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(20px);background:#2E2724;color:#FFFFFF;padding:12px 24px;border-radius:30px;font-size:0.86rem;font-weight:600;z-index:9999999;box-shadow:0 8px 24px rgba(0,0,0,0.28);border:1px solid rgba(255,255,255,0.15);transition:opacity 0.3s cubic-bezier(0.2,0.8,0.3,1),transform 0.3s cubic-bezier(0.2,0.8,0.3,1);opacity:0;pointer-events:none;text-align:center;max-width:90vw;';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3200);
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
      embellishListEl.innerHTML = atelierState.embellishments.map(e => {
        if (e.price === 0) {
          return `<span style="display: block; font-size: 0.82rem; color: var(--color-green); font-weight: 600;">✓ ${e.name} (Free Included ♡)</span>`;
        }
        return `<span style="display: block; font-size: 0.82rem; color: var(--color-ink-muted);">+ ${e.name} (₹ ${e.price})</span>`;
      }).join('');
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

  logCustomerInquiry(
    'Custom Studio (WhatsApp)',
    '',
    `Custom Order: ${atelierState.base.name} (${atelierState.palette.name})`,
    `Extras: ${embellishText}\nCard: "${atelierState.dedication}"\nTotal: ₹ ${total.toLocaleString('en-IN')}`
  );

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

  logCustomerInquiry(
    'Custom Studio (Instagram DM)',
    '@plush_crafts.in DM',
    `Custom Order: ${atelierState.base.name} (${atelierState.palette.name})`,
    `Extras: ${embellishText}\nCard: "${atelierState.dedication}"\nTotal: ₹ ${total.toLocaleString('en-IN')}`
  );

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

  showToast('✓ Order details copied! Opening Instagram DM...');
  setTimeout(() => {
    window.open('https://www.instagram.com/plush_crafts.in/#', '_blank');
  }, 600);
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

  const mobileBadge = document.getElementById('mobileBagBadge');
  if (mobileBadge) {
    mobileBadge.textContent = totalCount;
    mobileBadge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
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
  if (pin.length !== 6 || isNaN(pin) || !/^[1-9][0-9]{5}$/.test(pin)) {
    resultBox.innerHTML = `<span style="color: var(--color-red);">Please enter a valid 6-digit Indian PIN code (e.g. 400001, 110001).</span>`;
    return;
  }

  resultBox.innerHTML = `
    <div style="background: rgba(61, 110, 76, 0.08); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(61, 110, 76, 0.25); color: var(--color-ink); margin-top: 8px; line-height: 1.5;">
      <strong style="color: var(--color-green); display: block; font-size: 0.82rem; margin-bottom: 4px;">✓ Pan-India Delivery Available to PIN ${pin}</strong>
      <div style="font-size: 0.76rem; color: var(--color-ink-muted);">
        • <strong>Handcrafting:</strong> 1–2 days (shaped fresh per order)<br>
        • <strong>Courier Transit:</strong> 4–6 business days via Delhivery / India Post<br>
        • Sturdy protective box packaging with live tracking shared on WhatsApp.
      </div>
    </div>
  `;
}

let appliedCouponCode = '';

function getActiveCoupons() {
  try {
    const stored = localStorage.getItem('plush_discount_coupons');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (err) {
    console.warn('Using default coupons:', err);
  }
  return [
    { code: 'PLUSH10', percent: 10, description: '10% Flat Discount on all bouquets', active: true }
  ];
}

function applyAtelierCode() {
  const input = document.getElementById('atelierCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  const coupons = getActiveCoupons();
  const match = coupons.find(c => c.code.toUpperCase() === code && c.active);

  if (match) {
    appliedDiscount = match.percent;
    appliedCouponCode = match.code;
    refreshCartState();
    alert(`Code "${match.code}" applied! ${match.percent}% discount added to your shopping bag.`);
  } else {
    const activeCodes = coupons.filter(c => c.active).map(c => c.code);
    if (activeCodes.length > 0) {
      alert(`Invalid promo code. Active code: ${activeCodes.join(', ')}`);
    } else {
      alert('Invalid or expired coupon code.');
    }
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

  logCustomerInquiry('WhatsApp Bag Order', '', 'Shopping Bag Checkout Lead', summary + `\nTotal: ₹ ${finalTotal}`);

  const text = 
`Hello Plush Crafts! 🌸
I would like to place an order from your website:

${summary}

Subtotal: ₹ ${subtotal.toLocaleString('en-IN')}
Shipping: ${shippingFee === 0 ? 'Free Shipping (Above ₹999)' : '₹ ' + shippingFee}
${discountAmount > 0 ? `Discount (${appliedCouponCode || 'PROMO'} - ${appliedDiscount}%): -₹ ${discountAmount.toLocaleString('en-IN')}\n` : ''}Total Amount: ₹ ${finalTotal.toLocaleString('en-IN')}

Please share UPI details for payment. Thank you! ♡`;

  window.open(`https://wa.me/${PLUSH_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
}

function orderProductViaWhatsApp(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;

  logCustomerInquiry('Direct Product Inquiry', '', `Direct order click for ${p.name}`, `Price: ₹ ${p.price}`);

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

  logCustomerInquiry(
    'Instagram Bag Order',
    '@plush_crafts.in DM',
    'Shopping Bag Order Lead',
    summary + `\nTotal: ₹ ${finalTotal.toLocaleString('en-IN')}`
  );

  showToast('✓ Bag order summary copied! Opening Instagram DM...');
  setTimeout(() => {
    window.open('https://www.instagram.com/plush_crafts.in/#', '_blank');
  }, 600);
}

function openProductDetail(id) {
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;

  const curtain = document.getElementById('detailCurtain');
  const slot = document.getElementById('detailContentSlot');
  if (!curtain || !slot) return;

  slot.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-product-img-card">
        <img src="${p.image}" alt="${p.name}" class="modal-product-img" />
      </div>
      <div class="modal-product-body">
        <span class="modal-product-provenance">${p.provenance}</span>
        <h2 class="modal-product-title">${p.name}</h2>
        <div class="modal-product-price-row">
          <span class="modal-product-price">₹ ${p.price.toLocaleString('en-IN')}</span>
          <span class="modal-product-original">₹ ${p.originalPrice.toLocaleString('en-IN')}</span>
        </div>
        <p class="modal-product-desc">
          ${p.fullDescription}
        </p>
        <div class="modal-product-spec-box">
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

// --- Mobile Navigation Drawer Handlers ---
function toggleMobileMenu() {
  const drawer = document.getElementById('mobileMenuDrawer');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (drawer && backdrop) {
    const isOpen = drawer.classList.contains('active');
    if (isOpen) {
      closeMobileMenu();
    } else {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileMenuDrawer');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function scrollToAnchor(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// --- Private Admin Atelier Integrations (Hidden from Visitors) ---
function logCustomerInquiry(name, phone, message, itemsSummary) {
  try {
    const list = JSON.parse(localStorage.getItem('plush_inquiries_log') || '[]');
    list.unshift({
      id: 'inq-' + Date.now(),
      name: name || 'Guest Customer',
      phone: phone || '',
      message: message || '',
      itemsSummary: itemsSummary || '',
      date: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
    });
    localStorage.setItem('plush_inquiries_log', JSON.stringify(list.slice(0, 50)));
  } catch (err) {
    console.warn('Inquiry log error:', err);
  }
}

function submitCustomInquiry(e) {
  if (e) e.preventDefault();
  const nameInput = document.querySelector('input[placeholder*="Diya"]');
  const phoneInput = document.querySelector('input[placeholder*="handle"]');
  const msgInput = document.querySelector('.form-control-textarea');

  const name = nameInput ? nameInput.value.trim() : 'Guest Customer';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const requirements = msgInput ? msgInput.value.trim() : '';

  logCustomerInquiry(name, phone, requirements, 'Special Custom Requirement Form');

  const text = `Hello Plush Crafts (@plush_crafts.in)! 🌸\n\nI have a custom inquiry from your website:\n• Name: ${name}\n• Contact: ${phone}\n• Requirements: ${requirements}\n\nPlease let me know pricing & details. Thank you! ♡`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  }

  alert(`Thank you, ${name}! Your inquiry has been recorded and copied to clipboard.\nOpening Instagram DM now.`);
  
  if (nameInput) nameInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (msgInput) msgInput.value = '';

  window.open('https://www.instagram.com/plush_crafts.in/#', '_blank');
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
      closeMobileMenu();
    }

    // 🔒 Secret Admin Shortcut: Ctrl + Shift + A (Invisible to Visitors)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      window.location.href = 'admin.html';
    }
  });

  // 🔒 Secret Admin Easter Egg: Triple-clicking "PLUSH" in Footer opens Admin
  const footerBrand = document.querySelector('.footer-title-plush');
  if (footerBrand) {
    let clickCount = 0;
    let clickTimer = null;
    footerBrand.addEventListener('click', () => {
      clickCount++;
      if (clickTimer) clearTimeout(clickTimer);
      if (clickCount >= 3) {
        window.location.href = 'admin.html';
      } else {
        clickTimer = setTimeout(() => { clickCount = 0; }, 800);
      }
    });
  }

  // Check URL hash for secret `#admin` trigger
  if (window.location.hash === '#admin') {
    window.location.href = 'admin.html';
  }
}
