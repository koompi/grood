# Grood Convert - E-Bike Conversion Kit Product Page

## Overview

A new product detail page for "Grood Convert" - an e-bike conversion kit that transforms regular bikes into electric bikes. Design inspired by Reebike's Urban kit page, adapted to Grood's aesthetic.

**Route:** `/convert`

**Reference:** https://reebike.fr/en/products/urban?variant=47854464270670

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

### Accessory Upsells
- Bluetooth LCD Display: +$59
- Anti-theft Security Bolt: +$29
- Grood Phone Mount: +$19

---

## Page Sections

### Section 1: Hero & Purchase Panel

**Layout:** Split layout - product image left, purchase panel right (sticky on desktop)

**Left side:**
- Full-width hero with gradient overlay (Grood style)
- Product title: "Grood Convert"
- Tagline: "Transform any bike into an e-bike"
- Main product image (motorized wheel with battery)
- Key selling badges: "15 min install" | "40km range" | "350W power"

**Right side (sticky purchase panel):**
- Price: **$299**
- Wheel size selector (pill buttons): 20" | 24" | 26" | 27.5" | 28" | 29"
- Accessory upsells with checkboxes:
  - [ ] Bluetooth LCD Display (+$59)
  - [ ] Anti-theft Security Bolt (+$29)
  - [ ] Grood Phone Mount (+$19)
- Dynamic total price (updates with selections)
- "Add to Cart" button (golden-yellow accent)
- Trust badges row: Free Shipping | 2-Year Warranty | 30-Day Returns

---

### Section 2: Interactive Product Showcase

**Title:** "What's Inside the Kit"

**Layout:** Large product image with 4 clickable hotspot dots

**Hotspots:**

1. **Battery** (positioned on battery)
   - Card: "360Wh Battery"
   - Subtitle: "40km range, 2.5hr charge"
   - Pills: "1.5kg" | "800 cycles" | "Removable"

2. **Motor Wheel** (positioned on wheel hub)
   - Card: "350W Hub Motor"
   - Subtitle: "Silent power, instant torque"
   - Pills: "25km/h max" | "5 assist levels" | "Weatherproof"

3. **Pedal Sensor** (positioned on sensor)
   - Card: "Smart Pedal Sensor"
   - Subtitle: "Activates motor based on your pedaling"
   - Pills: "Instant response" | "Natural feel" | "Easy clip-on"

4. **Controller & Tools** (positioned on accessories)
   - Card: "Everything Included"
   - Subtitle: "Tools, cables, and manual"
   - Pills: "No skills needed" | "All hardware" | "Video guide"

**Interaction:**
- Click hotspot → card expands, others dim
- Hotspots: pulsing golden-yellow dots
- Mobile: horizontal scroll cards below image (no hotspots)

---

### Section 3: Before/After Transformation Slider

**Title:** "Your Bike, Transformed"

**Layout:** Full-width comparison slider with draggable handle

**Left (Before):**
- Regular bicycle image
- "BEFORE" label overlay (top-left)
- Desaturated/muted treatment

**Right (After):**
- Same bike with Grood Convert installed
- "AFTER" label overlay (top-right)
- Vibrant colors, subtle glow on motor wheel

**Slider Handle:**
- Vertical line with circular grab handle
- Golden-yellow accent color
- Arrow icons (← →) on handle
- Touch-draggable on mobile
- Initial position: 50%

**Below slider - stat comparisons:**
- "0 → 40km" (range gained)
- "Regular → Electric" (transformation)
- "15 min install" (ease)

---

### Section 4: How It Works (Installation Steps)

**Title:** "Install in 15 Minutes"
**Subtitle:** "No special skills required. Everything included."

**Layout:** 4 horizontal steps (desktop), vertical stack (mobile)

**Step 1: Receive Your Kit**
- Icon: Package/box
- Description: "Delivered to your door within 3-5 business days, fully equipped and ready to install"

**Step 2: Swap the Front Wheel**
- Icon: Wheel/swap
- Description: "Remove your front wheel, replace with the Grood motorized wheel. Tools included."

**Step 3: Mount the Battery**
- Icon: Battery
- Description: "Attach the bottle-style battery to your frame. Connect the simple cable."

**Step 4: Pair & Ride**
- Icon: Smartphone/bluetooth
- Description: "Download the Grood app, connect via Bluetooth, and start riding electric."

**Visual style:**
- Steps connected by horizontal progress line
- Golden-yellow number badges (1, 2, 3, 4)
- White cards with subtle border
- Optional "Download Installation Guide" PDF button

---

### Section 5: Technical Specs & Package Contents

**Section A: Technical Specifications**

Grid layout (2 columns) matching existing Grood specs style:

| Spec | Value | Sub-note |
|------|-------|----------|
| Motor | 350W Hub Motor | Rear hub |
| Range | 40km | Single charge |
| Top Speed | 25 km/h | Assisted |
| Battery | 360Wh | Removable |
| Charge Time | 2.5 hours | Full charge |
| Kit Weight | ~5kg | Total |
| Wheel Sizes | 20-29" | All common sizes |
| Brake Types | Disc & Rim | Compatible |
| Connectivity | Bluetooth | iOS 12+ / Android 6+ |
| Warranty | 2 years | Full coverage |

**Section B: Package Contents**

Grid or horizontal scroll cards:

1. Motorized wheel with tire and black rim
2. 360Wh bottle battery
3. Battery frame mount
4. Charger
5. Pedal sensor
6. Installation tools & hardware
7. Instruction manual (QR to video guide)

**Mobile sticky CTA:** "Add to Cart - $299" bar at bottom

---

## Technical Implementation

### New Files Required

```
app/convert/page.tsx                    # Main page component
app/lib/convert-data.ts                 # Product data & types
app/components/convert/
  ├── ConvertHero.tsx                   # Hero + purchase panel
  ├── ProductShowcase.tsx               # Interactive hotspots
  ├── BeforeAfterSlider.tsx             # Transformation slider
  ├── InstallationSteps.tsx             # How it works
  ├── ConvertSpecs.tsx                  # Specs grid
  └── PackageContents.tsx               # What's in the box
```

### Integration Points

- Uses existing `CartContext` for add-to-cart functionality
- Uses existing `useInView` hook for scroll animations
- Follows existing Grood design tokens (colors, typography, spacing)
- Reuses button styles (`.btn-primary`, `.btn-light`, etc.)

### Assets Needed

- Product photography (kit components, installed on bike)
- Before/after bike images (same bike, with and without kit)
- Step illustrations or photos
- Component detail images for hotspots

---

## Design Tokens (Grood Existing)

```css
--secondary: rgba(255, 204, 0, 0.923)  /* Golden yellow - CTAs, accents */
--background: #ffffff                   /* White backgrounds */
--foreground: #171717                   /* Black text */
--primary: #059669                      /* Green accent */
```

---

## Approved by User

- [x] Section 1: Hero & Purchase Panel
- [x] Section 2: Interactive Product Showcase
- [x] Section 3: Before/After Slider
- [x] Section 4: Installation Steps
- [x] Section 5: Specs & Package Contents
