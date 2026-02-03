# Grood Convert - Implementation Plan

## Overview
Implement the Grood Convert e-bike conversion kit product page based on the approved design spec.

---

## Tasks

### Task 1: Create Product Data & Types
**File:** `app/lib/convert-data.ts`

- Define `ConvertKit` interface with specs, price, wheel sizes, accessories
- Define `ConvertAccessory` interface for upsells
- Export product data matching approved specs ($299, 350W, 40km range, etc.)
- Export accessory data (LCD Display $59, Security Bolt $29, Phone Mount $19)
- Export wheel size options array

---

### Task 2: Create Hero & Purchase Panel Component
**File:** `app/components/convert/ConvertHero.tsx`

- Split layout: product image left, sticky purchase panel right
- Implement wheel size selector (pill buttons with state)
- Implement accessory checkboxes with dynamic price calculation
- Add to cart integration using existing CartContext
- Trust badges row (Free Shipping, 2-Year Warranty, 30-Day Returns)
- Responsive: stack vertically on mobile, panel becomes sticky bottom bar

---

### Task 3: Create Interactive Product Showcase Component
**File:** `app/components/convert/ProductShowcase.tsx`

- Large product image container
- 4 positioned hotspot dots (absolute positioning)
- Click handler to expand/collapse info cards
- Info cards with title, subtitle, spec pills
- Pulsing animation on hotspots (golden-yellow color)
- Mobile fallback: horizontal scroll cards below image

---

### Task 4: Create Before/After Slider Component
**File:** `app/components/convert/BeforeAfterSlider.tsx`

- Container with two overlapping images
- Draggable divider with clip-path or width control
- Touch/mouse drag handlers
- Before/After labels
- Stat comparisons below slider
- Initial position at 50%

---

### Task 5: Create Installation Steps Component
**File:** `app/components/convert/InstallationSteps.tsx`

- 4 steps with icons, titles, descriptions
- Horizontal layout on desktop with connecting line
- Vertical stack on mobile
- Golden-yellow number badges
- Optional PDF download button

---

### Task 6: Create Specs & Package Contents Components
**Files:**
- `app/components/convert/ConvertSpecs.tsx`
- `app/components/convert/PackageContents.tsx`

ConvertSpecs:
- 2-column grid matching existing Grood specs style
- Icons for each spec category
- Use existing card styling

PackageContents:
- Grid or horizontal scroll of included items
- Simple cards with item name

---

### Task 7: Create Main Convert Page
**File:** `app/convert/page.tsx`

- Import all components
- Compose page layout with proper spacing
- Add AnimatedSection wrappers for scroll animations
- Include Header component
- Mobile sticky "Add to Cart" bar at bottom

---

### Task 8: Add Placeholder Images
**Directory:** `public/images/convert/`

- Add placeholder images for product, before/after, steps
- Can use existing bike images temporarily

---

## File Structure

```
app/
├── convert/
│   └── page.tsx
├── components/
│   └── convert/
│       ├── ConvertHero.tsx
│       ├── ProductShowcase.tsx
│       ├── BeforeAfterSlider.tsx
│       ├── InstallationSteps.tsx
│       ├── ConvertSpecs.tsx
│       └── PackageContents.tsx
└── lib/
    └── convert-data.ts

public/
└── images/
    └── convert/
        ├── kit-hero.jpg
        ├── before.jpg
        ├── after.jpg
        └── ... (component images)
```

---

## Dependencies
- Existing: CartContext, useInView hook, Header component
- No new npm packages required

---

## Execution Order
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8

Tasks 3, 4, 5, 6 can run in parallel after Task 1 & 2 are complete.
