# 🏗️ Technical Documentation

Deep dive into the architecture, patterns, and implementation details of the Infinite Carousel.

## 📑 Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Folder Structure](#folder-structure)
3. [Design Patterns](#design-patterns)
4. [Component Architecture](#component-architecture)
5. [Animation System](#animation-system)
6. [State Management](#state-management)
7. [Performance Optimizations](#performance-optimizations)
8. [TypeScript Types](#typescript-types)

---

## 🎯 Architecture Overview

### Technology Stack

```
┌─────────────────────────────────────┐
│         Next.js 16 (App Router)     │
│         React 19.2 (Client/Server)  │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│    Feature-Sliced Design (FSD)      │
│    ├─ app/       (Routes)           │
│    ├─ widgets/   (Composed blocks)  │
│    ├─ features/  (User actions)     │
│    ├─ entities/  (Business logic)   │
│    └─ shared/    (Reusable utils)   │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│      Animation Layer (GSAP 3.13)    │
│      Styling (Tailwind CSS 4)       │
│      Type Safety (TypeScript 5)     │
└─────────────────────────────────────┘
```

### Core Principles

1. **Separation of Concerns** - Each layer has a specific responsibility
2. **Unidirectional Data Flow** - Data flows from entities → features → widgets
3. **Type Safety** - Full TypeScript coverage
4. **Performance First** - Optimized animations and rendering
5. **Reusability** - DRY principle throughout

---

## 📁 Folder Structure

### Feature-Sliced Design (FSD)

```
carousel-gsap/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with fonts
│   ├── page.tsx                  # Home page (entry point)
│   └── globals.css               # Global styles & CSS variables
│
├── entities/                     # Business entities (data models)
│   └── slide/
│       ├── lib/
│       │   └── slides-data.ts    # Slide data & utility functions
│       └── model/
│           └── types.ts          # Slide interface definition
│
├── features/                     # User-facing features
│   ├── carousel-navigation/      # Navigation controls feature
│   │   ├── model/
│   │   │   └── useCarouselControls.ts  # Navigation hook
│   │   └── ui/
│   │       └── NavigationButtons.tsx   # Navigation UI
│   │
│   └── slide-animation/          # Animation feature
│       ├── lib/
│       │   └── gsap-utils.ts     # GSAP helper functions
│       ├── model/
│       │   ├── animation-config.ts     # Animation constants
│       │   └── useSlideTransition.ts   # Animation hook
│
├── shared/                       # Shared/reusable code
│   ├── config/
│   │   └── fonts.ts              # Font configuration
│   ├── hooks/
│   │   ├── useIsomorphicLayoutEffect.ts  # SSR-safe useLayoutEffect
│   │   └── useMediaQuery.ts      # Responsive hook
│   ├── lib/
│   │   ├── cn.ts                 # className utility
│   │   └── constants.ts          # Global constants
│   └── ui/
│       ├── Button/
│       │   └── Button.tsx        # Reusable button component
│       └── Icon/
│           └── Icon.tsx          # Icon component
│
├── widgets/                      # Composite UI blocks
│   ├── carousel/                 # Main carousel widget
│   │   ├── model/
│   │   │   └── useCarousel.ts    # Carousel state hook
│   │   └── ui/
│   │       ├── Carousel.tsx      # Main carousel component
│   │       ├── CarouselImages.tsx    # Image rendering
│   │       └── CarouselTitles.tsx    # Title rendering
│   │
│   ├── footer/
│   │   └── ui/
│   │       └── Footer.tsx        # Footer widget
│   │
│   └── navigation/
│       └── ui/
│           └── Navigation.tsx    # Top navigation widget
│
├── public/                       # Static assets
│   ├── carousel/                 # Carousel images
│   │   ├── slide-img-1.jpg
│   │   └── ...
│   └── fonts/                    # Custom fonts (if any)
│
├── docs/                         # Documentation
│   ├── INSTALLATION.md
│   ├── USAGE.md
│   ├── CUSTOMIZATION.md
│   ├── TECHNICAL.md
│   └── FAQ.md
│
└── [Config Files]
    ├── next.config.ts            # Next.js configuration
    ├── tailwind.config.ts        # Tailwind configuration
    ├── tsconfig.json             # TypeScript configuration
    ├── eslint.config.mjs         # ESLint rules
    └── package.json              # Dependencies
```

### Layer Dependencies

```
app → widgets → features → entities → shared
 ↓       ↓         ↓          ↓         ↓
Can import from all layers below, but not above
```

**Rules:**

- `shared/` - No dependencies on other layers
- `entities/` - Can only import from `shared/`
- `features/` - Can import from `entities/` and `shared/`
- `widgets/` - Can import from `features/`, `entities/`, `shared/`
- `app/` - Can import from any layer

---

## 🎨 Design Patterns

### 1. Custom Hooks Pattern

**Purpose:** Encapsulate logic and state

**Example:** `useCarousel.ts`

```typescript
export function useCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setCurrentIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    }
  }, [isAnimating]);

  return { currentIndex, isAnimating, nextSlide };
}
```

**Benefits:**

- Reusable logic
- Testable in isolation
- Clear separation of concerns

### 2. Compound Components Pattern

**Purpose:** Flexible composition

**Example:** Carousel components

```tsx
<Carousel>
  <CarouselImages />
  <CarouselTitles />
  <NavigationButtons />
</Carousel>
```

**Benefits:**

- Flexible layouts
- Better code organization
- Easy to customize

### 3. Render Props / Children Pattern

**Purpose:** Share code between components

**Example:** Animation wrapper

```typescript
function AnimationWrapper({ children, onComplete }) {
  useEffect(() => {
    // Animation logic
    onComplete();
  }, []);

  return children;
}
```

### 4. Configuration Objects Pattern

**Purpose:** Centralized settings

**Example:** `animation-config.ts`

```typescript
export const SLIDE_ANIMATION_CONFIG = {
  duration: 1.2,
  ease: "hop",
  offsetDesktop: 200,
  offsetMobile: 100,
} as const;
```

**Benefits:**

- Single source of truth
- Easy to modify
- Type-safe with `as const`

---

## 🧩 Component Architecture

### Component Hierarchy

```
Page (app/page.tsx)
└── Carousel (widgets/carousel/ui/Carousel.tsx)
    ├── Navigation (widgets/navigation/ui/Navigation.tsx)
    ├── CarouselImages (widgets/carousel/ui/CarouselImages.tsx)
    │   └── Image (next/image)
    ├── CarouselTitles (widgets/carousel/ui/CarouselTitles.tsx)
    ├── NavigationButtons (features/carousel-navigation/ui/NavigationButtons.tsx)
    │   ├── Button (shared/ui/Button/Button.tsx)
    │   │   └── Icon (shared/ui/Icon/Icon.tsx)
    │   └── Button
    └── Footer (widgets/footer/ui/Footer.tsx)
```

### Data Flow

```
User clicks "Next"
    ↓
NavigationButtons onClick
    ↓
useCarouselControls.handleNext()
    ↓
useCarousel.nextSlide()
    ↓
State updates: currentIndex++
    ↓
useSlideTransition.animateSlideTransition()
    ↓
GSAP animates DOM elements
    ↓
UI updates with new slide
```

### Component Responsibilities

#### Carousel.tsx (Widget)

**Responsibilities:**

- Orchestrate child components
- Manage carousel state via `useCarousel` hook
- Coordinate animations
- Handle cleanup

**Props:** `className?: string`

**State:**

- `currentIndex: number`
- `isAnimating: boolean`

#### CarouselImages.tsx (Widget)

**Responsibilities:**

- Render slide images
- Handle image positioning
- Infinite scroll logic

**No props** - Gets data from parent context

#### CarouselTitles.tsx (Widget)

**Responsibilities:**

- Render slide titles
- Handle text positioning
- Sync with image transitions

**Props:**

- `currentIndex: number`
- `slides: Slide[]`

#### NavigationButtons.tsx (Feature)

**Responsibilities:**

- Render navigation controls
- Handle user interactions
- Disable during animations

**Props:**

- `onPrevious: () => void`
- `onNext: () => void`
- `isAnimating: boolean`

---

## ⚡ Animation System

### GSAP Integration

#### Custom Easing

**File:** `features/slide-animation/model/animation-config.ts`

```typescript
export const HOP_EASE =
  "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1";

export const HOP_EASE_NAME = "hop";
```

**Registration:**

```typescript
// In useSlideTransition.ts
gsap.registerPlugin(CustomEase);
CustomEase.create(HOP_EASE_NAME, HOP_EASE);
```

#### Animation Timeline

```
Slide Transition Timeline:
│
├─ t=0.0s: Clip path animation starts (new slide reveals)
│  Duration: 1.2s
│  Ease: hop
│
├─ t=0.0s: Previous slide moves out
│  Duration: 1.2s
│  Transform: translateX(offset)
│
├─ t=0.0s: New slide moves in
│  Duration: 1.2s
│  Transform: translateX(0)
│
└─ t=1.2s: Animation complete, cleanup

Text Transition Timeline:
│
├─ t=0.0s: Current text blurs out
│  Duration: 0.4s
│  Filter: blur(75px)
│  Opacity: 0
│
└─ t=0.4s: New text blurs in
   Duration: 0.6s
   Filter: blur(0px)
   Opacity: 1
```

### Animation Hooks

#### useSlideTransition

**Purpose:** Manage GSAP animations

**API:**

```typescript
const { animateSlideTransition, animateTextTransition } = useSlideTransition({
  offset: 200,
  onComplete: () => setIsAnimating(false),
});
```

**Internal:**

```typescript
export function useSlideTransition({ offset, onComplete }) {
  const animateSlideTransition = useCallback(
    (currentImg, nextImg, direction) => {
      const timeline = gsap.timeline({ onComplete });

      // Clip path reveal
      timeline.fromTo(
        nextImg,
        { clipPath: CLIP_PATH_CONFIG[direction].from },
        {
          clipPath: CLIP_PATH_CONFIG[direction].to,
          duration: SLIDE_ANIMATION_CONFIG.duration,
          ease: SLIDE_ANIMATION_CONFIG.ease,
        }
      );

      // Slide movement
      timeline.fromTo(
        currentImg,
        { x: 0 },
        { x: direction === "left" ? -offset : offset },
        0 // Start at time 0 (parallel)
      );

      return timeline;
    },
    [offset, onComplete]
  );

  return { animateSlideTransition };
}
```

### Performance Optimizations

1. **useCallback** - Memoize animation functions
2. **Cleanup** - Remove old DOM nodes after animation
3. **requestAnimationFrame** - GSAP uses RAF internally
4. **GPU Acceleration** - Transform and opacity only
5. **will-change** - CSS hint for browsers

---

## 🔄 State Management

### State Architecture

```
┌─────────────────────────────────┐
│   Carousel Component State      │
│                                  │
│   currentIndex: number           │
│   isAnimating: boolean           │
└─────────────────────────────────┘
           ↓
    Props drilling
           ↓
┌─────────────────────────────────┐
│   Child Components               │
│   (CarouselImages, Titles, etc.) │
└─────────────────────────────────┘
```

**No external state management** - Uses React's built-in state

### State Flow

```typescript
// Initial state
currentIndex = 0
isAnimating = false

// User clicks "Next"
onClick → handleNext()

// Update state
isAnimating = true
currentIndex = 1

// Trigger animation
useEffect(() => {
  animateSlideTransition(...)
}, [currentIndex])

// Animation completes
onComplete → setIsAnimating(false)
```

### Custom Hooks State

#### useCarousel

```typescript
export function useCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const refs = {
    carouselImagesRef: useRef<HTMLDivElement>(null),
    textContainersRef: useRef<HTMLDivElement[]>([]),
  };

  // Methods...

  return { currentIndex, isAnimating, ...refs, methods };
}
```

**Benefits:**

- Encapsulated state
- Easy to test
- Reusable across components

---

## 🚀 Performance Optimizations

### Image Optimization

1. **Next.js Image Component**

```tsx
<Image
  src={slide.image}
  width={400}
  height={600}
  alt={slide.title}
  priority={index === 0} // Preload first image
  quality={90}
  placeholder="blur"
/>
```

2. **Lazy Loading** - Automatic with Next.js Image
3. **Responsive Images** - Automatic srcset generation
4. **WebP Conversion** - Automatic format optimization

### Animation Performance

1. **GPU Acceleration**

```css
.img {
  transform: translateZ(0); /* Force GPU layer */
  will-change: transform, opacity;
}
```

2. **GSAP Performance**

- Uses `requestAnimationFrame`
- Optimized for 60fps
- Minimal reflows/repaints

3. **Debounce/Throttle**

```typescript
const handleResize = useMemo(
  () =>
    debounce(() => {
      // Resize logic
    }, 150),
  []
);
```

### Rendering Optimizations

1. **React.memo** - Prevent unnecessary re-renders

```typescript
export const CarouselImages = React.memo(({ currentIndex }) => {
  // Component logic
});
```

2. **useCallback** - Memoize functions

```typescript
const handleNext = useCallback(() => {
  if (!isAnimating) nextSlide();
}, [isAnimating, nextSlide]);
```

3. **useMemo** - Memoize expensive calculations

```typescript
const nextSlide = useMemo(
  () => getSlideByIndex(currentIndex + 1),
  [currentIndex]
);
```

### Bundle Optimization

1. **Tree Shaking** - Import only what's needed
2. **Code Splitting** - Automatic with Next.js
3. **Dynamic Imports** - For heavy features

```typescript
const HeavyComponent = dynamic(() => import("./Heavy"), {
  loading: () => <Spinner />,
});
```

---

## 📝 TypeScript Types

### Core Types

#### Slide

```typescript
// entities/slide/model/types.ts

export interface Slide {
  id: number;
  title: string;
  image: string;
}

export type SlideIndex = number;
export type SlideDirection = "left" | "right";
```

#### Animation Config

```typescript
// features/slide-animation/model/animation-config.ts

export interface AnimationConfig {
  duration: number;
  ease: string;
  offsetDesktop: number;
  offsetMobile: number;
}
```

#### Hook Return Types

```typescript
// widgets/carousel/model/useCarousel.ts

export interface UseCarouselReturn {
  currentIndex: number;
  isAnimating: boolean;
  carouselImagesRef: RefObject<HTMLDivElement>;
  textContainersRef: MutableRefObject<HTMLDivElement[]>;
  handleNext: () => void;
  handlePrevious: () => void;
  goToSlide: (index: number) => void;
}
```

### Type Safety Benefits

1. **Autocomplete** - IDE suggests properties
2. **Error Prevention** - Catch bugs at compile time
3. **Refactoring** - Safe renaming and changes
4. **Documentation** - Types serve as inline docs

### Generic Types

```typescript
// Example: Generic animation function
function animate<T extends HTMLElement>(
  element: T,
  config: AnimationConfig
): gsap.core.Timeline {
  return gsap.to(element, config);
}
```

---

## 🧪 Testing Strategy

### Unit Tests

**Location:** `__tests__/` folders

**Framework:** Vitest

**Example:**

```typescript
describe("getSlideByIndex", () => {
  it("should return correct slide", () => {
    const slide = getSlideByIndex(0);
    expect(slide.id).toBe(1);
  });

  it("should handle negative indices", () => {
    const slide = getSlideByIndex(-1);
    expect(slide.id).toBe(TOTAL_SLIDES);
  });
});
```

### E2E Tests

**Framework:** Playwright

**Example:**

```typescript
test("carousel navigation", async ({ page }) => {
  await page.goto("/");

  await page.click('[aria-label="Next slide"]');
  await expect(page.locator(".carousel-title")).toHaveText("The Matador");

  await page.click('[aria-label="Previous slide"]');
  await expect(page.locator(".carousel-title")).toHaveText("Feast of Color");
});
```

---

## 📊 Performance Metrics

### Target Metrics

- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Animation FPS:** 60fps

### Monitoring

```typescript
// Performance observer
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry.name, entry.duration);
  }
});

observer.observe({ entryTypes: ["measure"] });
```

---

## 🔒 Security Considerations

1. **Image Sources** - Validate in `next.config.ts`
2. **XSS Prevention** - React escapes by default
3. **CSP Headers** - Configure if needed
4. **Input Sanitization** - For user-provided content

---

## 🌐 Browser Support

- **Chrome/Edge:** Latest 2 versions
- **Firefox:** Latest 2 versions
- **Safari:** Latest 2 versions
- **Mobile:** iOS Safari 14+, Chrome Android 90+

---

## 📚 Additional Resources

- [Feature-Sliced Design Docs](https://feature-sliced.design/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Next.js Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Questions?**

- [FAQ](./FAQ.md)
- Support: your-email@example.com

---

_Understanding the internals makes customization easier! 🚀_
