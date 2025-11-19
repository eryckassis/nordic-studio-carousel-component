# 📖 Usage Guide

Learn how to use and integrate the Infinite Carousel into your projects.

## 🎯 Basic Usage

### Standalone Page

The simplest way to use the carousel is as a full-page component:

```tsx
// app/page.tsx
import { Carousel } from "@/widgets/carousel/ui/Carousel";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Carousel />
    </main>
  );
}
```

### With Navigation and Footer

For a complete experience with navigation and footer:

```tsx
// app/page.tsx
import { Carousel } from "@/widgets/carousel/ui/Carousel";
import { Navigation } from "@/widgets/navigation/ui/Navigation";
import { Footer } from "@/widgets/footer/ui/Footer";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Navigation />
      <Carousel />
      <Footer />
    </main>
  );
}
```

### Section in Existing Page

Use as a section within a larger page:

```tsx
// app/page.tsx
export default function Home() {
  return (
    <div>
      <header>Your Header</header>

      <section className="relative w-full h-screen overflow-hidden">
        <Carousel />
      </section>

      <section>Your other content</section>
      <footer>Your Footer</footer>
    </div>
  );
}
```

---

## 🎨 Customizing Slides Content

### Adding/Editing Slides

Edit the slides data in `entities/slide/lib/slides-data.ts`:

```typescript
// entities/slide/lib/slides-data.ts
import { Slide } from "../model/types";

export const SLIDES: Slide[] = [
  {
    title: "Your Custom Title",
    image: "/carousel/your-image-1.jpg",
  },
  {
    title: "Another Slide",
    image: "/carousel/your-image-2.jpg",
  },
  {
    title: "Third Slide",
    image: "/carousel/your-image-3.jpg",
  },
  // Add as many slides as you want
];
```

### Image Requirements

**Optimal specifications:**

- **Format:** JPG, PNG, or WebP
- **Size:** 1920x1080px (or 16:9 aspect ratio)
- **File size:** Under 500KB for best performance
- **Location:** Place in `public/carousel/` folder

**Example:**

```bash
public/
  carousel/
    slide-1.jpg
    slide-2.jpg
    slide-3.jpg
```

### Using Next.js Image Optimization

Images are automatically optimized via Next.js Image component. No additional configuration needed!

---

## ⚙️ Component Props

### Carousel Component

```tsx
interface CarouselProps {
  className?: string; // Additional CSS classes
}

// Usage
<Carousel className="bg-black" />;
```

### Navigation Buttons

The navigation is handled internally, but you can customize the buttons:

```tsx
// features/carousel-navigation/ui/NavigationButtons.tsx

interface NavigationButtonsProps {
  onPrevious: () => void;
  onNext: () => void;
  isAnimating: boolean;
  className?: string;
}
```

---

## 🎬 Animation Configuration

### Adjusting Animation Speed

Edit `features/slide-animation/model/animation-config.ts`:

```typescript
export const ANIMATION_CONFIG = {
  // Main slide transition duration (in seconds)
  duration: 1.2, // Default: 1.2s - Increase for slower, decrease for faster

  // Text animation duration
  textDuration: 0.8, // Default: 0.8s

  // Delay between animations
  stagger: 0.1, // Default: 0.1s
} as const;
```

**Recommendations:**

- **Fast:** `duration: 0.8` - Snappy, modern feel
- **Standard:** `duration: 1.2` - Balanced (default)
- **Slow:** `duration: 1.8` - Luxurious, premium feel

### Changing Easing

Edit the easing curves in `features/slide-animation/lib/gsap-utils.ts`:

```typescript
// For smooth, natural motion
ease: "power2.inOut";

// For bouncy effect
ease: "back.out(1.7)";

// For elastic effect
ease: "elastic.out(1, 0.5)";

// Custom bezier curve
ease: "cubic-bezier(0.76, 0, 0.24, 1)";
```

**Popular easing options:**

- `power1.inOut` - Subtle ease
- `power2.inOut` - Standard (default)
- `power3.inOut` - Strong ease
- `power4.inOut` - Very strong
- `back.out(1.7)` - Overshoot effect
- `elastic.out` - Bouncy effect

---

## 📱 Responsive Behavior

### Default Breakpoints

Defined in `shared/lib/constants.ts`:

```typescript
export const BREAKPOINTS = {
  mobile: 768, // px
  tablet: 1024, // px
  desktop: 1280, // px
} as const;
```

### Adjusting Mobile Offset

The carousel automatically adjusts spacing for mobile:

```typescript
export const SLIDE_OFFSETS = {
  desktop: 200, // px offset between slides
  mobile: 100, // px offset for mobile
} as const;
```

**To change:**

1. Edit `shared/lib/constants.ts`
2. Adjust values as needed
3. Save and reload

---

## 🎮 Keyboard Controls

### Built-in Shortcuts

The carousel supports keyboard navigation out of the box:

- **Arrow Left** → Previous slide
- **Arrow Right** → Next slide
- **Escape** → (Future: Close fullscreen)

### Adding Custom Controls

To add custom keyboard controls:

```tsx
// In your page component
"use client";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Home") {
        // Go to first slide
      }
      if (e.key === "End") {
        // Go to last slide
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return <Carousel />;
}
```

---

## 🔗 Integration Examples

### With React Context

Share carousel state across components:

```tsx
// contexts/CarouselContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

const CarouselContext = createContext<{
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
} | null>(null);

export function CarouselProvider({ children }: { children: React.ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <CarouselContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </CarouselContext.Provider>
  );
}

export const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("Use within CarouselProvider");
  return context;
};
```

### With URL Parameters

Sync carousel with URL:

```tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CarouselPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slideParam = searchParams.get("slide");

  useEffect(() => {
    if (slideParam) {
      const slideIndex = parseInt(slideParam, 10);
      // Navigate to that slide
    }
  }, [slideParam]);

  const handleSlideChange = (index: number) => {
    router.push(`?slide=${index}`, { scroll: false });
  };

  return <Carousel />;
}
```

### With Analytics

Track slide views:

```tsx
"use client";

import { useEffect } from "react";

export default function CarouselWithAnalytics() {
  useEffect(() => {
    // Track page view
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "carousel_view", {
        event_category: "engagement",
        event_label: "carousel_loaded",
      });
    }
  }, []);

  return <Carousel />;
}
```

---

## 🌐 Internationalization (i18n)

### Adding Multiple Languages

```typescript
// entities/slide/lib/slides-data.ts

const slidesEN = [
  { title: "Discover Amazing Content", image: "/carousel/1.jpg" },
  { title: "Explore New Possibilities", image: "/carousel/2.jpg" },
];

const slidesPT = [
  { title: "Descubra Conteúdo Incrível", image: "/carousel/1.jpg" },
  { title: "Explore Novas Possibilidades", image: "/carousel/2.jpg" },
];

export const getSlides = (locale: string) => {
  return locale === "pt" ? slidesPT : slidesEN;
};
```

**Usage:**

```tsx
"use client";

import { useLocale } from "next-intl"; // or your i18n solution
import { getSlides } from "@/entities/slide/lib/slides-data";

export default function LocalizedCarousel() {
  const locale = useLocale();
  const slides = getSlides(locale);

  // Pass slides to carousel
  return <Carousel slides={slides} />;
}
```

---

## 🎭 Styling

### Custom Colors

Edit `app/globals.css`:

```css
:root {
  --carousel-bg: #000000;
  --carousel-text: #ffffff;
  --button-hover: #333333;
}
```

### Custom Classes

Add Tailwind classes:

```tsx
<Carousel className="bg-gradient-to-br from-purple-900 to-black" />
```

### Dark/Light Mode

```tsx
<Carousel className="bg-white dark:bg-black text-black dark:text-white" />
```

---

## 📊 Performance Optimization

### Lazy Loading Images

Images are automatically lazy-loaded via Next.js Image component.

### Preloading Next Slides

For better UX, preload adjacent slides:

```tsx
// In Carousel.tsx
<link rel="preload" as="image" href={nextSlideImage} />
```

### Reducing Bundle Size

Only import what you need from GSAP:

```typescript
// Instead of
import gsap from "gsap";

// Use specific imports
import { gsap, Power2 } from "gsap";
```

---

## 🧪 Testing

### Unit Tests

Test carousel logic:

```bash
npm run test
```

### E2E Tests

Test user interactions:

```bash
npm run test:e2e
```

### Manual Testing Checklist

- [ ] Slides transition smoothly
- [ ] Navigation buttons work
- [ ] Responsive on all screen sizes
- [ ] No console errors
- [ ] Images load correctly
- [ ] Text animates in sync
- [ ] Keyboard controls work

---

## 📚 API Reference

### useCarousel Hook

```typescript
const {
  currentIndex, // Current slide index
  isAnimating, // Animation in progress
  goToSlide, // Navigate to specific slide
  nextSlide, // Go to next slide
  previousSlide, // Go to previous slide
} = useCarousel();
```

### useSlideTransition Hook

```typescript
const {
  animateSlideTransition, // Animate slide change
  animateTextTransition, // Animate text change
} = useSlideTransition({
  offset: 200,
  onComplete: () => {},
});
```

---

## 💡 Tips & Best Practices

### DO's ✅

- Use high-quality images (optimized for web)
- Keep slide titles concise (2-5 words)
- Test on real devices, not just browser resize
- Preload critical images
- Use semantic HTML

### DON'Ts ❌

- Don't use too many slides (5-10 is optimal)
- Don't use heavy images (>500KB each)
- Don't modify core animation files unless needed
- Don't remove accessibility attributes
- Don't forget to test on mobile

---

## 🔄 Common Use Cases

### Portfolio Showcase

```typescript
export const SLIDES = [
  { title: "Web Design", image: "/portfolio/web.jpg" },
  { title: "Mobile Apps", image: "/portfolio/mobile.jpg" },
  { title: "Branding", image: "/portfolio/brand.jpg" },
];
```

### Product Gallery

```typescript
export const SLIDES = [
  { title: "Product A", image: "/products/a.jpg" },
  { title: "Product B", image: "/products/b.jpg" },
  { title: "Product C", image: "/products/c.jpg" },
];
```

### Testimonials

```typescript
export const SLIDES = [
  { title: "Client Review 1", image: "/testimonials/1.jpg" },
  { title: "Client Review 2", image: "/testimonials/2.jpg" },
];
```

---

## 🆘 Need Help?

- 📖 [Technical Documentation](./TECHNICAL.md) - Deep dive into architecture
- 🎨 [Customization Guide](./CUSTOMIZATION.md) - Advanced styling
- ❓ [FAQ](./FAQ.md) - Common questions
- 📧 Support: your-email@example.com

---

**Next Steps:**

- Ready to customize? → [Customization Guide](./CUSTOMIZATION.md)
- Want to understand internals? → [Technical Documentation](./TECHNICAL.md)

---

_Happy building! 🚀_
