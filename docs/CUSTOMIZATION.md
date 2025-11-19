# 🎨 Customization Guide

Make the Infinite Carousel truly yours! This guide covers all customization options from basic to advanced.

## 📑 Table of Contents

1. [Content Customization](#content-customization)
2. [Visual Styling](#visual-styling)
3. [Animation Tweaks](#animation-tweaks)
4. [Layout Modifications](#layout-modifications)
5. [Advanced Customizations](#advanced-customizations)

---

## 🖼️ Content Customization

### Changing Slide Content

**File:** `entities/slide/lib/slides-data.ts`

```typescript
import { Slide } from "../model/types";

export const SLIDES: Slide[] = [
  {
    title: "Your Awesome Title",
    image: "/carousel/image-1.jpg",
  },
  {
    title: "Another Great Slide",
    image: "/carousel/image-2.jpg",
  },
  // Add more slides...
];
```

### Adding Additional Slide Properties

**1. Update the type definition:**

**File:** `entities/slide/model/types.ts`

```typescript
export interface Slide {
  title: string;
  image: string;
  subtitle?: string; // NEW
  description?: string; // NEW
  link?: string; // NEW
  category?: string; // NEW
}
```

**2. Update slide data:**

```typescript
export const SLIDES: Slide[] = [
  {
    title: "Amazing Project",
    subtitle: "Web Development",
    description: "A revolutionary approach to...",
    link: "/projects/amazing",
    category: "Design",
    image: "/carousel/1.jpg",
  },
];
```

**3. Display in component:**

**File:** `widgets/carousel/ui/CarouselTitles.tsx`

```tsx
{
  slide.subtitle && <p className="text-xl opacity-70">{slide.subtitle}</p>;
}
{
  slide.description && <p className="text-sm mt-4">{slide.description}</p>;
}
```

### Image Customization

#### Using External Images

```typescript
export const SLIDES: Slide[] = [
  {
    title: "External Image",
    image: "https://images.unsplash.com/photo-xyz...",
  },
];
```

**Note:** Configure `next.config.ts` for external images:

```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
```

#### Using Different Image Sizes

```typescript
// For different screen sizes
export const SLIDES: Slide[] = [
  {
    title: "Responsive Images",
    image: "/carousel/desktop/image-1.jpg",
    imageMobile: "/carousel/mobile/image-1.jpg", // Add to type first
  },
];
```

---

## 🎨 Visual Styling

### Colors

#### Background Colors

**File:** `app/globals.css`

```css
body {
  background: #000000; /* Black (default) */
  /* OR */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* OR */
  background: url("/bg-pattern.png");
}
```

#### Text Colors

**File:** `widgets/carousel/ui/CarouselTitles.tsx`

```tsx
<h2 className="text-white">  {/* Default */}
<h2 className="text-gray-900 dark:text-white">  {/* Dark mode support */}
<h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
```

#### Button Colors

**File:** `features/carousel-navigation/ui/NavigationButtons.tsx`

```tsx
<Button
  className="bg-white/10 hover:bg-white/20"  {/* Default */}
  // OR
  className="bg-gradient-to-r from-purple-500 to-pink-500"
  // OR
  className="border-2 border-white/30 backdrop-blur-md"
>
```

### Typography

#### Changing Fonts

**File:** `shared/config/fonts.ts`

```typescript
import { Inter, Playfair_Display } from "next/font/google";

// Add new font
export const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
```

**File:** `app/layout.tsx`

```tsx
<body className={`${headingFont.variable} ${bodyFont.variable}`}>
```

**File:** `tailwind.config.ts`

```typescript
theme: {
  extend: {
    fontFamily: {
      heading: ["var(--font-heading)"],
      body: ["var(--font-body)"],
    },
  },
},
```

**Usage:**

```tsx
<h2 className="font-heading">Title</h2>
<p className="font-body">Body text</p>
```

#### Font Sizes

**File:** `widgets/carousel/ui/CarouselTitles.tsx`

```tsx
{/* Small */}
<h2 className="text-4xl md:text-6xl">

{/* Default */}
<h2 className="text-6xl md:text-8xl">

{/* Large */}
<h2 className="text-8xl md:text-9xl">

{/* Responsive custom */}
<h2 className="text-[clamp(2rem,5vw,8rem)]">
```

### Spacing & Layout

#### Slide Offsets

**File:** `shared/lib/constants.ts`

```typescript
export const SLIDE_OFFSETS = {
  desktop: 200, // Distance between slides (px)
  mobile: 100, // Mobile offset
} as const;

// Increase for more spacing
export const SLIDE_OFFSETS = {
  desktop: 300,
  mobile: 150,
};

// Decrease for tighter layout
export const SLIDE_OFFSETS = {
  desktop: 100,
  mobile: 50,
};
```

#### Container Padding

```tsx
<Carousel className="px-8 md:px-16 lg:px-24" />
```

### Borders & Effects

#### Adding Borders to Slides

**File:** `widgets/carousel/ui/CarouselImages.tsx`

```tsx
<div className="img border-4 border-white/20 rounded-lg overflow-hidden">
  <Image ... />
</div>
```

#### Blur Effects

```tsx
{
  /* Backdrop blur on navigation */
}
<NavigationButtons className="backdrop-blur-xl bg-white/5" />;

{
  /* Image blur on load */
}
<Image placeholder="blur" blurDataURL="data:image/..." />;
```

#### Shadow Effects

```tsx
<div className="shadow-2xl shadow-purple-500/50">
<div className="drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
```

---

## ⚡ Animation Tweaks

### Animation Speed

**File:** `features/slide-animation/model/animation-config.ts`

```typescript
export const ANIMATION_CONFIG = {
  // Slide transition duration
  duration: 1.2, // Default
  // duration: 0.8,     // Faster
  // duration: 1.8,     // Slower
  // duration: 2.5,     // Very slow/luxurious

  // Text animation duration
  textDuration: 0.8,

  // Stagger between elements
  stagger: 0.1,
} as const;
```

### Easing Functions

**File:** `features/slide-animation/lib/gsap-utils.ts`

```typescript
// Standard eases
ease: "power1.inOut"; // Subtle
ease: "power2.inOut"; // Default - balanced
ease: "power3.inOut"; // Strong
ease: "power4.inOut"; // Very strong

// Special effects
ease: "back.out(1.7)"; // Overshoot/bounce back
ease: "elastic.out(1, 0.5)"; // Elastic bounce
ease: "bounce.out"; // Bouncing ball effect

// Custom cubic-bezier
ease: "cubic-bezier(0.76, 0, 0.24, 1)"; // Custom curve

// For aggressive modern feel
ease: "expo.inOut";

// For smooth luxury feel
ease: "sine.inOut";
```

### Animation Direction

**File:** `features/slide-animation/lib/gsap-utils.ts`

Change how slides enter/exit:

```typescript
// Default: Slide from right
x: offset,  // Start position

// Slide from left
x: -offset,

// Slide from top
y: -200,

// Slide from bottom
y: 200,

// Diagonal
x: offset,
y: -100,

// Scale effect
scale: 0.8,
opacity: 0,
```

### Text Animation Styles

**File:** `features/slide-animation/lib/gsap-utils.ts`

```typescript
// Default: Slide up + fade
export function animateTextTransition() {
  gsap.fromTo(textElements,
    { y: 100, opacity: 0 },    // From
    { y: 0, opacity: 1 }       // To
  );
}

// Fade only
{ opacity: 0 } -> { opacity: 1 }

// Slide from left
{ x: -100, opacity: 0 } -> { x: 0, opacity: 1 }

// Scale + fade
{ scale: 0.5, opacity: 0 } -> { scale: 1, opacity: 1 }

// Rotate + slide
{ rotation: -10, y: 50, opacity: 0 } -> { rotation: 0, y: 0, opacity: 1 }

// Split text animation (requires SplitText plugin)
// Each character animates separately
```

### Hover Effects

**File:** `widgets/carousel/ui/CarouselImages.tsx`

```tsx
<div className="img transition-transform duration-300 hover:scale-105 hover:rotate-1">
  <Image ... />
</div>
```

**File:** `features/carousel-navigation/ui/NavigationButtons.tsx`

```tsx
<Button
  className="transition-all duration-300
             hover:scale-110 hover:shadow-xl hover:shadow-white/20"
>
```

---

## 📐 Layout Modifications

### Changing Carousel Height

```tsx
{
  /* Full viewport */
}
<Carousel className="h-screen" />;

{
  /* Fixed height */
}
<Carousel className="h-[600px]" />;

{
  /* Responsive height */
}
<Carousel className="h-[50vh] md:h-[70vh] lg:h-screen" />;
```

### Navigation Position

**File:** `features/carousel-navigation/ui/NavigationButtons.tsx`

```tsx
{/* Default: Bottom right */}
<div className="absolute bottom-8 right-8">

{/* Bottom center */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2">

{/* Sides (left/right edges) */}
<div className="absolute top-1/2 -translate-y-1/2">
  <button className="absolute left-8">Prev</button>
  <button className="absolute right-8">Next</button>
</div>

{/* Top */}
<div className="absolute top-8 right-8">
```

### Title Position

**File:** `widgets/carousel/ui/CarouselTitles.tsx`

```tsx
{/* Default: Bottom left */}
<div className="absolute bottom-20 left-8">

{/* Center */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">

{/* Top center */}
<div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">

{/* Right side */}
<div className="absolute right-8 top-1/2 -translate-y-1/2 text-right">
```

### Image Layout

#### Changing Image Size

**File:** `widgets/carousel/ui/CarouselImages.tsx`

```tsx
{
  /* Default: 400x600 */
}
<Image width={400} height={600} />;

{
  /* Wider */
}
<Image width={600} height={400} />;

{
  /* Square */
}
<Image width={500} height={500} />;

{
  /* Responsive */
}
<Image
  width={400}
  height={600}
  className="w-full md:w-[400px] h-auto md:h-[600px]"
/>;
```

#### Image Position

```tsx
{/* Center */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

{/* Right side */}
<div className="absolute right-0 top-1/2 -translate-y-1/2">

{/* Custom position */}
<div className="absolute" style={{ top: '30%', left: '60%' }}>
```

---

## 🚀 Advanced Customizations

### Adding Slide Counter

**File:** `widgets/carousel/ui/Carousel.tsx`

```tsx
{
  /* Add this inside Carousel component */
}
<div className="absolute top-8 right-8 text-white font-mono">
  <span className="text-4xl font-bold">{currentIndex + 1}</span>
  <span className="text-xl opacity-50"> / {SLIDES.length}</span>
</div>;
```

### Progress Bar

```tsx
{
  /* Add progress indicator */
}
<div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
  <div
    className="h-full bg-white transition-all duration-300"
    style={{ width: `${((currentIndex + 1) / SLIDES.length) * 100}%` }}
  />
</div>;
```

### Thumbnail Navigation

```tsx
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
  {SLIDES.map((slide, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={cn(
        "w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
        currentIndex === index
          ? "border-white scale-110"
          : "border-white/30 opacity-50"
      )}
    >
      <Image src={slide.image} width={64} height={64} alt="" />
    </button>
  ))}
</div>
```

### Auto-Play

**File:** `widgets/carousel/model/useCarousel.ts`

```tsx
// Add autoplay effect
useEffect(() => {
  if (!autoplay) return;

  const interval = setInterval(() => {
    if (!isAnimating) {
      nextSlide();
    }
  }, 5000); // Change slide every 5 seconds

  return () => clearInterval(interval);
}, [autoplay, isAnimating, nextSlide]);
```

### Parallax Effect

**File:** `widgets/carousel/ui/CarouselImages.tsx`

```tsx
// Add parallax on scroll/mouse move
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);

// Apply to image
<div
  style={{
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
  }}
>
  <Image ... />
</div>
```

### Video Slides

**1. Add video support to type:**

```typescript
export interface Slide {
  title: string;
  image?: string;
  video?: string; // NEW
}
```

**2. Update slide rendering:**

```tsx
{slide.video ? (
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source src={slide.video} type="video/mp4" />
  </video>
) : (
  <Image src={slide.image} ... />
)}
```

### Custom Loading State

**File:** `widgets/carousel/ui/Carousel.tsx`

```tsx
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  // Simulate loading
  setTimeout(() => setIsLoading(false), 1000);
}, []);

if (isLoading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-white" />
    </div>
  );
}
```

### Touch Swipe Support

**File:** `widgets/carousel/ui/Carousel.tsx`

```tsx
const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

const handleTouchStart = (e: React.TouchEvent) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (touchStart - touchEnd > 150) {
    // Swiped left
    nextSlide();
  }

  if (touchStart - touchEnd < -150) {
    // Swiped right
    previousSlide();
  }
};

return (
  <div
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
    {/* Carousel content */}
  </div>
);
```

---

## 🎯 Style Presets

### Preset 1: Minimalist

```typescript
// Animation config
duration: 0.8,
ease: "power1.inOut"

// Colors
background: white
text: black
buttons: black/10
```

### Preset 2: Bold & Colorful

```typescript
// Animation config
duration: 1.0,
ease: "back.out(1.4)"

// Colors
background: linear-gradient(...)
text: white with text-shadow
buttons: gradient
```

### Preset 3: Elegant & Slow

```typescript
// Animation config
duration: 2.0,
ease: "power4.inOut"

// Colors
background: #0a0a0a
text: gold/champagne
buttons: minimal borders
```

---

## 🛠️ Developer Tools

### Debug Mode

Add visual helpers:

```tsx
{
  /* Show slide boundaries */
}
<div className="absolute inset-0 border-2 border-red-500/50 pointer-events-none" />;

{
  /* Show current index */
}
<div className="fixed top-4 left-4 bg-black/80 text-white p-2 rounded font-mono">
  Index: {currentIndex}
</div>;
```

### Performance Monitoring

```tsx
useEffect(() => {
  console.log("Animation time:", performance.now());
}, [currentIndex]);
```

---

## 📚 Resources

- [GSAP Easing Visualizer](https://greensock.com/ease-visualizer)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Image Optimization](https://nextjs.org/docs/api-reference/next/image)

---

## 💡 Tips

1. **Test changes incrementally** - Make one change at a time
2. **Keep backups** - Copy files before major changes
3. **Use browser DevTools** - Inspect and test live
4. **Mobile-first** - Always test on mobile
5. **Performance** - Keep images optimized

---

**Need Help?**

- [Technical Documentation](./TECHNICAL.md)
- [FAQ](./FAQ.md)
- Support: your-email@example.com

---

_Make it yours! 🎨_
