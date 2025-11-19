# ❓ Frequently Asked Questions (FAQ)

Common questions and troubleshooting for the Infinite Carousel Text Transitions.

## 📑 Table of Contents

1. [General Questions](#general-questions)
2. [Installation & Setup](#installation--setup)
3. [Customization](#customization)
4. [Performance](#performance)
5. [Troubleshooting](#troubleshooting)
6. [Licensing & Commercial Use](#licensing--commercial-use)
7. [Updates & Support](#updates--support)

---

## 🌟 General Questions

### Q: What exactly is this product?

**A:** This is a premium, production-ready carousel component built with Next.js 16, React 19, GSAP, and TypeScript. It features smooth infinite scrolling with synchronized text and image transitions, inspired by award-winning websites on Awwwards.

### Q: Do I need coding experience to use this?

**A:** Basic knowledge of React and Next.js is recommended. If you can:

- Install npm packages
- Edit JSON/TypeScript files
- Run terminal commands

You'll be able to use and customize this carousel. Comprehensive documentation is included.

### Q: Can I see a live demo?

**A:** Yes! Check the links in the README file or visit:

- Live Demo: [your-demo-link]
- Video Preview: [your-video-link]

### Q: What's the difference between this and free carousel libraries?

**A:** This carousel offers:

- ✅ Awwwards-quality animations (not generic)
- ✅ Production-ready code (tested and optimized)
- ✅ Comprehensive documentation
- ✅ Feature-Sliced Design architecture
- ✅ TypeScript support
- ✅ Lifetime updates
- ✅ Professional support

Free libraries often lack polish, documentation, and ongoing support.

### Q: Is this better than building from scratch?

**A:** Yes, if you value your time. Building this from scratch would take:

- 20-40 hours of development
- GSAP expertise
- Testing across devices
- Documentation writing

With this package, you're ready in 5 minutes.

---

## 📦 Installation & Setup

### Q: What are the system requirements?

**A:** You need:

- Node.js 18.x or higher
- npm 9.x or higher
- 500MB free disk space
- Modern web browser

### Q: Does it work with Next.js 15?

**A:** It's built for Next.js 16, but it should work with Next.js 15 (App Router). Some features might require minor adjustments.

### Q: Does it work with Next.js Pages Router?

**A:** This version is built for App Router. Converting to Pages Router would require some refactoring. Contact support if you need help.

### Q: Can I use this with Create React App?

**A:** Not directly. This is designed for Next.js. You'd need to:

- Remove Next.js-specific features (Image component, etc.)
- Adjust imports and routing
- Handle fonts differently

A vanilla React version may be released in the future.

### Q: Does it work with Vite?

**A:** Similar to CRA, it would require adaptation. The core carousel logic (React + GSAP) would work, but Next.js-specific features need replacement.

### Q: I'm getting "Module not found" errors

**A:** Ensure you've run `npm install` and that your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Q: Installation is very slow

**A:** This is normal for first-time installs. It's downloading:

- Next.js and React
- GSAP
- Tailwind CSS
- TypeScript
- Testing libraries

Expected time: 2-5 minutes depending on internet speed.

---

## 🎨 Customization

### Q: How do I change the images?

**A:**

1. Add your images to `public/carousel/`
2. Edit `entities/slide/lib/slides-data.ts`
3. Update the image paths

See [Customization Guide](./CUSTOMIZATION.md) for details.

### Q: Can I add more slides?

**A:** Yes! Simply add more objects to the `SLIDES` array in `entities/slide/lib/slides-data.ts`. There's no limit.

### Q: How do I make animations faster/slower?

**A:** Edit `features/slide-animation/model/animation-config.ts`:

```typescript
export const SLIDE_ANIMATION_CONFIG = {
  duration: 0.8, // Decrease for faster
  // duration: 1.8,  // Increase for slower
};
```

### Q: Can I change the navigation button position?

**A:** Yes! Edit `features/carousel-navigation/ui/NavigationButtons.tsx` and change the Tailwind classes:

```tsx
// From bottom-right to bottom-center:
<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
```

### Q: How do I use custom fonts?

**A:** Edit `shared/config/fonts.ts` and import your font from Google Fonts or use a local font. See [Customization Guide](./CUSTOMIZATION.md#typography) for examples.

### Q: Can I add video slides?

**A:** Not out of the box, but it's possible with modifications. See [Advanced Customizations](./CUSTOMIZATION.md#video-slides) in the Customization Guide.

### Q: Can I use this with dark mode?

**A:** Yes! It supports Tailwind's dark mode. Add dark mode classes:

```tsx
<Carousel className="bg-white dark:bg-black text-black dark:text-white" />
```

---

## ⚡ Performance

### Q: Does it affect my site's performance?

**A:** When properly implemented, no. The carousel is optimized with:

- Next.js Image optimization
- GSAP's efficient animations
- Minimal re-renders
- Code splitting

Lighthouse scores should remain high (>90).

### Q: How many images can I add before it slows down?

**A:** The carousel handles 5-20 slides efficiently. Beyond that:

- Optimize images (use WebP, compress)
- Consider lazy loading
- Monitor performance

### Q: Is it mobile-friendly?

**A:** Yes! Fully responsive and touch-optimized. Works on:

- iOS Safari
- Chrome Android
- All modern mobile browsers

### Q: Does it work on older browsers?

**A:** Modern browsers only:

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

No IE11 support.

### Q: My animations are choppy

**A:** Possible causes:

1. **Heavy images** - Compress and optimize
2. **Other JS** - Check for conflicts
3. **Old device** - Test on newer hardware
4. **Browser extensions** - Disable and test

See [Troubleshooting](#troubleshooting) below.

---

## 🐛 Troubleshooting

### Q: Carousel doesn't appear on the page

**Check:**

1. **Import correct component:**

   ```tsx
   import { Carousel } from "@/widgets/carousel/ui/Carousel";
   ```

2. **Container has height:**

   ```tsx
   <div className="h-screen">
     <Carousel />
   </div>
   ```

3. **No console errors** - Check browser DevTools

### Q: Images are not loading

**Solutions:**

1. **Verify path** - Images should be in `public/carousel/`
2. **Check data file** - Paths in `slides-data.ts` must be correct
3. **Clear cache** - Delete `.next` folder and rebuild
4. **Check Next.js config** - For external images, configure `next.config.ts`

### Q: Animations don't work

**Check:**

1. **GSAP installed** - Run `npm install gsap`
2. **No JavaScript errors** - Check console
3. **Custom easing registered** - Verify `useSlideTransition.ts`

### Q: Build fails in production

**Common issues:**

1. **TypeScript errors** - Run `npm run build` locally first
2. **Missing dependencies** - Ensure all packages are in `dependencies`, not `devDependencies`
3. **Image paths** - Use relative paths starting with `/`

### Q: Buttons don't work

**Check:**

1. **isAnimating state** - Buttons disable during animation
2. **Click handlers** - Verify `onClick` props are passed correctly
3. **Z-index** - Ensure buttons aren't behind other elements

### Q: Text is cut off or misaligned

**Solutions:**

1. **Container overflow** - Check parent container CSS
2. **Font not loaded** - Verify font imports in `layout.tsx`
3. **Responsive classes** - Adjust text sizes for breakpoints

### Q: Hydration errors in Next.js

**Solution:**

Ensure you're using `useIsomorphicLayoutEffect` instead of `useLayoutEffect`:

```typescript
import { useIsomorphicLayoutEffect } from "@/shared/hooks/useIsomorphicLayoutEffect";
```

This is already implemented in the package.

### Q: Port 3000 is already in use

**Solutions:**

```bash
# Option 1: Use different port
npm run dev -- -p 3001

# Option 2: Kill process on 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

## 📜 Licensing & Commercial Use

### Q: Can I use this for client projects?

**A:** Yes! Your license allows unlimited client projects. Build websites for as many clients as you want.

### Q: Can I use it in a SaaS product?

**A:** Yes! You can integrate it into your SaaS application.

### Q: Can I sell templates that include this carousel?

**A:** No. You cannot redistribute the carousel in templates, themes, or products sold to others. See [LICENSE.md](../LICENSE.md) for details.

### Q: Can I share it with my team?

**A:** Yes, if they're working on the same licensed projects within your company. One license per company/freelancer.

### Q: Do I need attribution?

**A:** No, attribution is not required (but appreciated!).

### Q: Can I modify the code?

**A:** Yes! Customize it however you need for your projects. Your modifications remain your property.

### Q: What if I need a custom license?

**A:** Contact us at your-email@example.com for custom licensing arrangements.

---

## 🔄 Updates & Support

### Q: Do I get free updates?

**A:** Yes! Lifetime updates included. All future versions are free.

### Q: How do I get updates?

**A:** Download the latest version from your Gumroad library. You'll be notified of major updates via email.

### Q: Is there a support period?

**A:** Lifetime support via email (as long as the product is maintained).

### Q: How fast do you respond to support requests?

**A:** We aim for 48 business hours for email support.

### Q: Do you offer custom development?

**A:** Custom development services are available separately. Contact us for a quote.

### Q: Can you help me integrate this into my project?

**A:** Basic integration support is included. For extensive custom work, we offer consulting services.

### Q: Where can I report bugs?

**A:** Email: your-email@example.com

Include:

- Version number
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos

### Q: Can I request features?

**A:** Yes! We love feedback. Email your suggestions. Popular requests may be added in future updates.

### Q: Will this work with future Next.js versions?

**A:** We'll update for major Next.js releases. Updates are free for purchasers.

---

## 🚀 Advanced Questions

### Q: Can I use this with TypeScript strict mode?

**A:** Yes! It's built with TypeScript strict mode enabled.

### Q: Does it support Server Components?

**A:** The carousel is a Client Component (uses hooks and GSAP). The wrapper can be a Server Component.

### Q: Can I use it with App Router and Server Actions?

**A:** Yes, it's compatible with Next.js 16 App Router.

### Q: Is there a headless version?

**A:** Not currently. A headless variant may be released in the future.

### Q: Can I contribute to development?

**A:** This is a commercial product, so we don't accept direct contributions. However, we value your feedback and feature suggestions!

### Q: Is the code minified or obfuscated?

**A:** No! You get fully readable, well-commented source code.

### Q: Can I use this in open-source projects?

**A:** Not for redistribution. You can use it in open-source End Products (websites, apps), but cannot include the carousel code in the repository.

---

## 💬 Still Have Questions?

### Can't find your answer?

**Contact Support:**

- 📧 Email: your-email@example.com
- 📖 Documentation: Check all docs in the `/docs` folder
- 💬 Community: [Discord/Slack link if available]

**Before contacting support, please:**

1. Check all documentation
2. Review this FAQ
3. Search for errors in the community/forums
4. Try the troubleshooting steps above

**When contacting support, include:**

- Your question or issue description
- Version number (check package.json)
- Node.js and npm versions
- Operating system
- Relevant code snippets
- Error messages (full text)
- Screenshots/videos if applicable

---

## 📚 Related Documentation

- [Installation Guide](./INSTALLATION.md) - Setup instructions
- [Usage Guide](./USAGE.md) - How to use the carousel
- [Customization Guide](./CUSTOMIZATION.md) - Styling and modifications
- [Technical Documentation](./TECHNICAL.md) - Architecture details
- [Changelog](../CHANGELOG.md) - Version history
- [License](../LICENSE.md) - Terms of use

---

**We're here to help! 🎉**

_Most questions are answered within 48 hours._

---

**Last Updated:** November 19, 2024
