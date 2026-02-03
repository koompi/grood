# Grood Convert - E-Bike Conversion Kit Product Page

## Overview

A new product detail page for "Grood Convert" - an e-bike conversion kit that transforms regular bikes into electric bikes. Design cloned from Reebike's Urban kit page, adapted to Grood's aesthetic.

**Route:** `/convert`

**Reference:** https://reebike.fr/en/products/urban?variant=47854464270670

---

## Detailed UI Analysis (from Playwright Study)

### Color Palette (Reebike → Grood Adaptation)
| Reebike | Usage | Grood Equivalent |
|---------|-------|------------------|
| Sage green `#c5d5c5` | Hero/product backgrounds | `#FEF9E3` (cream/gold tint) |
| Black `#161514` | CTA buttons, text | `#171717` (existing) |
| Golden yellow `#f5c518` | Hotspots, accents | `#FFCC00` (existing secondary) |
| White `#ffffff` | Cards, backgrounds | `#ffffff` |

### Typography (Reebike Style)
- **Product title:** Large serif-like bold (48-64px)
- **Section headings:** Bold sans-serif with subtle subtitle
- **Body text:** Regular sans-serif, muted gray
- **Price:** Large bold (32-40px)

---

## Product Specifications

| Spec | Value |
|------|-------|
| Name | Grood Convert |
| Price | $299 |
| Motor | 350W rear hub |
| Range | 40km |
| Battery | 360Wh |
| Kit Weight | ~5kg |
| Install Time | 15 min |
| Wheel Sizes | 20", 24", 26", 27.5", 28", 29" |
| Warranty | 2 years |

### Accessory Upsells (Checkbox Cards)
- Bluetooth LCD Display: +$59 (with product image)
- Anti-theft Security Bolt: +$29 (with product image)
- Grood Phone Mount: +$19 (with product image)

---

## Page Sections (Exact Clone Mapping)

### Section 1: Announcement Bar
- Rotating trust messages: "Free Shipping" ↔ "2-Year Warranty" ↔ "30-Day Returns"
- Grood golden-yellow background
- Left/right arrows for manual navigation

### Section 2: Hero & Product Gallery
**Layout:** Two-column (60/40 split)

**Left Column - Product Gallery:**
- Main product image (large, sage green/cream background)
- Thumbnail carousel below (8 thumbnails, horizontally scrollable)
- Trust badges above image: "Made with Care" + "2 Year Warranty" icons

**Right Column - Purchase Panel:**
- Product title: "Grood Convert"
- Tagline with audio player icon: "Transform any bike into an e-bike"
- Feature bullets with green checkmarks:
  - ✓ Transforms your bike into an electric bike
  - ✓ Installs in 15 min without skills (tools included)
  - ✓ Compatible with disc and rim brakes
  - ✓ As efficient as a new e-bike
  - ✓ 2X cheaper than buying an electric bike

**Wheel Size Selector:**
- Label: "Select Wheel size:"
- 6 pill buttons in a row: 20" | 24" | 26" | 27.5" | 28" | 29"
- Selected state: black fill, white text
- Default state: white fill, black border

**Price Display:**
- Large bold price: "$299"

**Accessory Upsells:**
- Label: "Add accessories (optional)"
- Horizontal scrollable cards with checkboxes:
  - [ ] [Image] Bluetooth LCD Display - $59
  - [ ] [Image] Anti-theft Bolt - $29
  - [ ] [Image] Phone Mount - $19

**Quantity & Add to Cart:**
- Quantity selector: [-] [1] [+]
- Full-width black "ADD TO CART" button
- Stock indicator: "12 in stock" (green text)

**Collapsible Accordions:**
- "Technical specifications" [+] (expandable)
- "Package contents" [+] (expandable)

### Section 3: Trust Badges Row
**Layout:** 4-column grid with icons

| Icon | Title | Description |
|------|-------|-------------|
| Globe/warranty | 2-year warranty | Full coverage on all components |
| Thumbs up | 30-day returns | Test at home, return if not satisfied |
| Truck | Free delivery | Within 3-5 business days |
| Shield/check | Secure payment | Encrypted checkout |

**Styling:** Light background, centered text, subtle separator line between badges

### Section 4: Video Showcase
- Section title: "The best conversion kit" | "Easy to install, discreet, practical"
- Large video thumbnail with centered play button
- Soft cream/green background
- On click: Video modal/popup

### Section 5: Customer Reviews Carousel
- Section title: "Our customers love it"
- Horizontal carousel of review cards (4 visible on desktop)
- Each card:
  - Large quote mark icon
  - Review text (truncated)
  - 5 star rating (golden)
  - Customer name with verified badge
- Pagination dots below
- Auto-scroll with pause on hover

### Section 6: How It Works
**Title:** "How does it work?" | "Your e-bike in just 15 minutes"

**Layout:** Two-column (40/60)
- Left: Product image (kit components photo)
- Right: 4 numbered steps

**Steps Format:**
```
01. Receive your kit at home
    Delivered within 3-5 days, fully equipped and ready to install

02. Swap the front wheel
    Replace your front wheel with the Grood motorized wheel

03. Mount the battery
    Attach the bottle battery to your frame, connect the cable

04. Pair & ride
    Download the Grood app, connect via Bluetooth, start riding
```

**Styling:**
- Large numbers (01, 02, etc.) in muted gray
- Bold step titles
- Subtle horizontal divider between steps
- "Download installation guide" black button at bottom

### Section 7: Video Tutorial
- Title: "E-bike conversion in 15 minutes"
- Full-width video embed
- Tutorial/how-to video content

### Section 8: Interactive Product Showcase (Hotspots)
**Title:** "The Grood Convert kit" | "Click on the items to learn more"

**Layout:** Large product image (bike with kit installed)

**Hotspot Dots:** 4 golden-yellow pulsing dots positioned on:

1. **Battery** (top of frame)
   - Position: ~30% from left, ~35% from top
   - Popup: "360Wh Battery" / "40km range, 2.5hr charge"
   - Specs: 1.5kg | 800 cycles | Removable

2. **Motor Wheel** (front wheel hub)
   - Position: ~75% from left, ~50% from top
   - Popup: "350W Hub Motor" / "Silent power, instant torque"
   - Specs: 25km/h | 5 assist levels | Weatherproof

3. **Pedal Sensor** (bottom bracket area)
   - Position: ~45% from left, ~70% from top
   - Popup: "Smart Pedal Sensor" / "Activates based on pedaling"
   - Specs: Instant response | Natural feel | Easy clip-on

4. **Frame Mount** (downtube)
   - Position: ~35% from left, ~55% from top
   - Popup: "Everything Included" / "Tools, cables, manual"
   - Specs: No skills needed | All hardware | Video guide

**Hotspot Animation:**
- Pulsing golden-yellow dot (scale 1 → 1.3 → 1)
- Click to expand info card
- Active dot: solid fill
- Other dots: subtle while one is active

**Mobile:** Convert to horizontal scroll cards below image

### Section 9: Before/After Transformation Slider
**Title:** "Your bike transformation"

**Layout:** Full-width comparison slider

**Implementation:**
- Two overlapping images (same dimensions)
- Before image: Regular bike (grayscale/muted)
- After image: Bike with Grood Convert installed (vibrant)
- Draggable vertical divider in center
- "BEFORE" label on left
- "AFTER" label on right

**Slider Handle:**
- Vertical golden-yellow line
- Circular handle with ← → arrows
- Touch/mouse draggable

**Below Slider - Stats:**
- "0 → 40km range"
- "Regular → Electric"
- "15 min install"

### Section 10: Features Grid
**Title:** "Features"

**3-column grid:**

1. **Anti-theft security**
   - Icon: Lock/shield
   - Description: GPS tracking, remote disable, audible alarm

2. **Slope detection**
   - Icon: Mountain/wave
   - Description: Auto-adjusts power based on incline

3. **Performance tracking**
   - Icon: Chart/graph
   - Description: Monitor distance, speed, battery in the app

### Section 11: Related Products
- "You might also like"
- Horizontal carousel of product cards
- Links to Grood bikes and accessories

### Section 12: Sticky Bottom Bar (Mobile & Scroll)
**Always visible when scrolling past purchase panel**

**Layout:** Fixed bottom bar
- Left: Product name "Grood Convert"
- Center: Price "$299"
- Right: "ADD TO CART" button (black, golden text on hover)

---

## Technical Implementation

### File Structure
```
app/
├── convert/
│   └── page.tsx                        # Main page
├── components/
│   └── convert/
│       ├── AnnouncementBar.tsx         # Rotating trust messages
│       ├── ProductGallery.tsx          # Image gallery + thumbnails
│       ├── PurchasePanel.tsx           # Variant selector, upsells, cart
│       ├── TrustBadges.tsx             # 4-column trust icons
│       ├── VideoShowcase.tsx           # Video with modal
│       ├── ReviewsCarousel.tsx         # Customer reviews slider
│       ├── HowItWorks.tsx              # Numbered installation steps
│       ├── ProductShowcase.tsx         # Interactive hotspots
│       ├── BeforeAfterSlider.tsx       # Drag comparison slider
│       ├── FeaturesGrid.tsx            # 3-column features
│       ├── RelatedProducts.tsx         # Product carousel
│       └── StickyBottomBar.tsx         # Mobile purchase bar
└── lib/
    └── convert-data.ts                 # Product data, specs, reviews
```

### Key Interactions

1. **Wheel Size Selector:** useState for selected size
2. **Accessory Checkboxes:** useState array, calculate dynamic total
3. **Quantity Selector:** useState with +/- handlers
4. **Add to Cart:** useCart context integration
5. **Accordions:** useState for open/closed state
6. **Hotspots:** useState for active hotspot, click handlers
7. **Before/After Slider:** useState + mouse/touch drag handlers
8. **Reviews Carousel:** Auto-scroll with setInterval, pause on hover
9. **Sticky Bar:** useEffect with scroll listener, show after hero

### Assets Required
```
public/images/convert/
├── hero-main.jpg              # Main product shot
├── thumb-1.jpg ... thumb-8.jpg # Gallery thumbnails
├── kit-components.jpg         # Flat lay of all components
├── before.jpg                 # Regular bike
├── after.jpg                  # Bike with kit installed
├── hotspot-main.jpg           # Bike for interactive showcase
├── video-thumbnail.jpg        # Video preview
├── accessory-lcd.jpg          # LCD display product
├── accessory-bolt.jpg         # Anti-theft bolt
├── accessory-mount.jpg        # Phone mount
└── step-1.jpg ... step-4.jpg  # Installation step images
```

### Integration Points
- CartContext: existing add-to-cart functionality
- useInView: existing scroll animation hook
- Header: existing navigation component
- Footer: existing footer component

---

## Grood Aesthetic Adaptations

| Reebike | Grood |
|---------|-------|
| Sage green backgrounds | Cream/gold tint (#FEF9E3) |
| Yellow hotspots | Golden-yellow (#FFCC00) |
| Black CTAs | Black with golden hover |
| French trust badges | English, Grood branding |
| €770 price | $299 price |
| Rental option | Remove (not applicable) |

---

## Mobile Responsive Behavior

- **< 768px:** Single column, stacked layout
- **Gallery:** Full width, thumbnails as horizontal scroll
- **Purchase panel:** Below gallery
- **Hotspots:** Convert to scroll cards
- **Before/After:** Touch draggable
- **Sticky bar:** Always visible at bottom

---

## Approved Features (from brainstorming)

- [x] Variant selector (wheel sizes)
- [x] Accessory upsells (checkboxes)
- [x] Interactive product showcase (hotspots)
- [x] Before/After slider
- [x] How it works steps
- [ ] Payment installments (excluded)
- [ ] Customer reviews carousel (excluded per user, but included in clone)

**Note:** Added reviews carousel to match exact Reebike clone, can be removed if preferred.
