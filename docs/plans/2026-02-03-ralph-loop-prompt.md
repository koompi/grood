# Ralph Loop Prompt: Grood Convert Page Implementation

## Context

You are implementing a new e-commerce product page for "Grood Convert" - an e-bike conversion kit. The design is based on https://reebike.fr/en/products/urban, adapted to Grood's aesthetic.

**Design spec:** `docs/plans/2026-02-03-grood-convert-page-design.md`

## Execution Instructions

Implement the Grood Convert page following this order. After each task, verify it works before moving to the next.

---

### Phase 1: Data & Foundation

**Task 1.1: Create product data file**
```
File: app/lib/convert-data.ts
```
- Define TypeScript interfaces for ConvertKit, ConvertAccessory, WheelSize, Review
- Export product data: name, price ($299), specs (350W motor, 40km range, 360Wh battery, 5kg weight)
- Export wheel sizes array: ["20\"", "24\"", "26\"", "27.5\"", "28\"", "29\""]
- Export accessories array with id, name, price, image path
- Export mock reviews array (5 reviews with name, text, rating)
- Export installation steps array (4 steps with number, title, description)
- Export hotspot data array (4 hotspots with position %, title, subtitle, specs)

**Task 1.2: Create placeholder images directory**
```
Directory: public/images/convert/
```
- Create directory structure
- Copy existing bike images as placeholders (can use siemreap images temporarily)
- Create placeholder files list in a README

---

### Phase 2: Core Components

**Task 2.1: Create PurchasePanel component**
```
File: app/components/convert/PurchasePanel.tsx
```
- Product title "Grood Convert" with tagline
- Feature bullets with green checkmarks (5 items)
- Wheel size selector: 6 pill buttons, useState for selection
- Price display: $299 (large, bold)
- Accessory upsells: checkbox cards with images, useState array for selected
- Dynamic total price calculation
- Quantity selector with +/- buttons
- "ADD TO CART" button (full-width, black bg)
- Stock indicator text
- Collapsible accordions for specs and package contents
- Integrate with existing CartContext

**Task 2.2: Create ProductGallery component**
```
File: app/components/convert/ProductGallery.tsx
```
- Main image display (large, cream background #FEF9E3)
- Thumbnail carousel below (horizontal scroll)
- Click thumbnail to change main image
- Trust badges above: "Made with Care" + "2 Year Warranty"

**Task 2.3: Create main page layout**
```
File: app/convert/page.tsx
```
- "use client" directive
- Import Header, PurchasePanel, ProductGallery
- Two-column layout: Gallery (60%) | PurchasePanel (40%)
- Responsive: stack on mobile
- Basic page structure ready for more sections

**Checkpoint:** Run `npm run dev`, visit `/convert`, verify gallery and purchase panel work, add to cart functions correctly.

---

### Phase 3: Trust & Social Proof

**Task 3.1: Create TrustBadges component**
```
File: app/components/convert/TrustBadges.tsx
```
- 4-column grid layout
- Icons: warranty (globe), returns (thumbs-up), delivery (truck), payment (shield)
- Title + description for each
- Light gray background section
- Use SVG icons (inline or from existing)

**Task 3.2: Create ReviewsCarousel component**
```
File: app/components/convert/ReviewsCarousel.tsx
```
- Section title: "Our customers love it"
- Horizontal carousel of review cards
- Each card: quote icon, text, 5 stars, name with verified badge
- Pagination dots
- Auto-scroll with setInterval (5 seconds)
- Pause on hover
- CSS scroll-snap for smooth behavior

**Task 3.3: Add to page**
- Import and add TrustBadges after hero section
- Import and add ReviewsCarousel after TrustBadges

**Checkpoint:** Verify trust badges display correctly, reviews carousel auto-scrolls.

---

### Phase 4: Installation Guide

**Task 4.1: Create HowItWorks component**
```
File: app/components/convert/HowItWorks.tsx
```
- Section title: "How does it work?" | "Your e-bike in just 15 minutes"
- Two-column layout: image left (40%), steps right (60%)
- 4 numbered steps from convert-data.ts
- Large muted numbers (01, 02, 03, 04)
- Bold step titles, regular descriptions
- Horizontal dividers between steps
- "Download installation guide" button at bottom
- Use existing AnimatedSection wrapper for scroll animations

**Task 4.2: Add to page**
- Import and add HowItWorks section
- Verify responsive stacking on mobile

**Checkpoint:** Visit `/convert`, scroll to How It Works, verify layout and animations.

---

### Phase 5: Interactive Features

**Task 5.1: Create ProductShowcase component (Hotspots)**
```
File: app/components/convert/ProductShowcase.tsx
```
- Section title: "The Grood Convert kit" | "Click on the items to learn more"
- Large product image container (relative positioning)
- 4 hotspot dots with absolute positioning (use % from data)
- Pulsing animation on dots (CSS keyframes, golden-yellow color)
- useState for activeHotspot (null | hotspot id)
- Click handler: set active, show info card
- Info card positioned near dot with:
  - Title, subtitle
  - 3 spec pills
- Click outside or another dot to close
- Mobile: render as horizontal scroll cards below image instead of hotspots

**Task 5.2: Create BeforeAfterSlider component**
```
File: app/components/convert/BeforeAfterSlider.tsx
```
- Section title: "Your bike transformation"
- Container with overflow hidden
- Two images: before (left), after (right)
- useState for sliderPosition (0-100, default 50)
- Draggable divider line (vertical, golden-yellow)
- Circular handle with arrows
- onMouseDown/onTouchStart handlers
- onMouseMove/onTouchMove to update position
- onMouseUp/onTouchEnd to stop dragging
- "BEFORE" / "AFTER" labels
- Stats row below: "0 → 40km" | "Regular → Electric" | "15 min"

**Task 5.3: Add to page**
- Import and add ProductShowcase after HowItWorks
- Import and add BeforeAfterSlider after ProductShowcase

**Checkpoint:** Test hotspot clicks, verify info cards appear. Test slider drag on desktop and mobile.

---

### Phase 6: Features & Polish

**Task 6.1: Create FeaturesGrid component**
```
File: app/components/convert/FeaturesGrid.tsx
```
- Section title: "Features"
- 3-column grid
- Each card: icon, title, description
- Features: Anti-theft, Slope detection, Performance tracking
- Hover effect: subtle lift

**Task 6.2: Create StickyBottomBar component**
```
File: app/components/convert/StickyBottomBar.tsx
```
- Fixed position bottom
- Show only when scrolled past purchase panel (useEffect + scroll listener)
- Content: Product name | Price | "ADD TO CART" button
- Add to cart triggers same CartContext function
- Hide on desktop when purchase panel is visible
- Always show on mobile after initial scroll

**Task 6.3: Add AnnouncementBar (optional)**
```
File: app/components/convert/AnnouncementBar.tsx
```
- Rotating messages: "Free Shipping" ↔ "2-Year Warranty" ↔ "30-Day Returns"
- Golden-yellow background
- Auto-rotate with setInterval
- Add to top of page (before Header or integrated)

**Task 6.4: Final page assembly**
- Add all remaining sections to page
- Verify scroll animations work
- Test mobile responsiveness
- Test add to cart from both purchase panel and sticky bar

**Checkpoint:** Full page review - all sections render, interactions work, mobile responsive.

---

### Phase 7: Final Verification

**Task 7.1: Cross-browser testing**
- Test in Chrome, Safari, Firefox
- Verify animations, sliders, carousels

**Task 7.2: Mobile testing**
- Test touch interactions
- Verify sticky bar behavior
- Test before/after slider touch drag

**Task 7.3: Cart integration**
- Add kit to cart with accessories
- Verify cart shows correct items and total
- Navigate to checkout

---

## Code Style Guidelines

- Use TypeScript strict mode
- Follow existing Grood patterns (check `app/bikes/[id]/page.tsx` for reference)
- Use Tailwind CSS classes
- Use existing color variables: `text-secondary` for golden-yellow, `bg-[#FEF9E3]` for cream
- Reuse existing components where possible (Header, Footer, AnimatedSection)
- Keep components focused and single-responsibility
- Add comments for complex interactions

## Reference Files

- Existing product page: `app/bikes/[id]/page.tsx`
- Cart context: `app/context/CartContext.tsx`
- useInView hook: `app/hooks/useInView.ts`
- Global styles: `app/globals.css`
- Bike data structure: `app/lib/bikes-data.ts`

## Success Criteria

1. Page loads at `/convert` without errors
2. Wheel size selection updates UI
3. Accessory checkboxes update total price
4. Add to cart works and opens cart overlay
5. Hotspots show info cards on click
6. Before/after slider is draggable
7. Reviews carousel auto-scrolls
8. Mobile layout is responsive
9. Sticky bar appears on scroll
10. All animations are smooth
