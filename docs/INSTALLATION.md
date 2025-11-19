# 📦 Installation Guide

Get your Infinite Carousel up and running in minutes!

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** 9.x or higher (comes with Node.js)
- **Git** (optional, for version control)
- A code editor (VS Code recommended)

### Verify Installation

```bash
node --version  # Should be v18.x or higher
npm --version   # Should be v9.x or higher
```

## 🚀 Installation Steps

### Option 1: Fresh Installation (Recommended)

#### Step 1: Extract the Package

After purchasing, you'll receive a ZIP file. Extract it to your desired location:

```bash
# Example on Windows
cd d:\projects
unzip carousel-gsap.zip

# Example on Mac/Linux
cd ~/projects
unzip carousel-gsap.zip
```

#### Step 2: Navigate to Project Directory

```bash
cd carousel-gsap
```

#### Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages:

- Next.js 16.0
- React 19.2
- GSAP 3.13
- Tailwind CSS 4.0
- TypeScript
- All dev dependencies

**Installation time:** ~2-3 minutes depending on your internet speed.

#### Step 4: Run Development Server

```bash
npm run dev
```

You should see:

```
✓ Ready in 2.5s
○ Local:   http://localhost:3000
```

#### Step 5: Open in Browser

Visit [http://localhost:3000](http://localhost:3000)

🎉 **Success!** Your carousel should be running smoothly.

---

### Option 2: Add to Existing Next.js Project

If you want to integrate this carousel into an existing Next.js 15/16 project:

#### Step 1: Copy Required Files

Copy these folders to your project:

```bash
# Copy component files
cp -r carousel-gsap/entities ./
cp -r carousel-gsap/features ./
cp -r carousel-gsap/shared ./
cp -r carousel-gsap/widgets ./

# Copy public assets
cp -r carousel-gsap/public/carousel ./public/
cp -r carousel-gsap/public/fonts ./public/
```

#### Step 2: Install Required Dependencies

```bash
npm install gsap@^3.13.0 clsx@^2.1.1 tailwind-merge@^3.4.0
```

#### Step 3: Update Configuration Files

**tailwind.config.ts:**

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

**tsconfig.json** (add path aliases):

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

#### Step 4: Add Fonts (Optional)

Copy the font configuration from `shared/config/fonts.ts` and adjust to your needs.

#### Step 5: Use the Component

```tsx
import { Carousel } from "@/widgets/carousel/ui/Carousel";

export default function Page() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <Carousel />
    </main>
  );
}
```

---

## 🔧 Configuration

### Environment Variables (Optional)

Create a `.env.local` file for any custom configuration:

```env
# Add your custom environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Port Configuration

To run on a different port:

```bash
npm run dev -- -p 3001
```

---

## 📦 Available Scripts

After installation, you can use these commands:

```bash
# Development
npm run dev          # Start dev server (localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint

# Testing
npm run test         # Run unit tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
npm run test:e2e     # Run E2E tests
npm run test:e2e:ui  # Run E2E tests with UI
```

---

## ✅ Verification Checklist

After installation, verify everything is working:

- [ ] Development server starts without errors
- [ ] Carousel renders on localhost:3000
- [ ] Navigation buttons work (left/right arrows)
- [ ] Text transitions animate smoothly
- [ ] Images transition in sync with text
- [ ] Responsive on mobile/tablet (resize browser)
- [ ] No console errors in browser DevTools

---

## 🐛 Troubleshooting

### Issue: `npm install` fails

**Solution:**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue: Port 3000 already in use

**Solution:**

```bash
# Use a different port
npm run dev -- -p 3001
```

Or kill the process using port 3000:

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Issue: Images not loading

**Solution:**

- Verify images exist in `public/carousel/`
- Check `entities/slide/lib/slides-data.ts` paths
- Clear Next.js cache: `rm -rf .next`

### Issue: TypeScript errors

**Solution:**

```bash
# Restart TypeScript server in VS Code
# Press Ctrl+Shift+P (Cmd+Shift+P on Mac)
# Type: "TypeScript: Restart TS Server"

# Or delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: Animations not smooth

**Solution:**

- Check if GPU acceleration is enabled in your browser
- Close other CPU-intensive applications
- Verify you're using a modern browser (Chrome/Edge/Safari/Firefox latest)

---

## 🔄 Updating

When updates are released, you'll receive the new files. To update:

### Option 1: Fresh Update

```bash
# Backup your customizations
cp -r entities/slide/lib/slides-data.ts ../backup/
cp -r public/carousel ../backup/

# Extract new version
# Replace files
# Restore customizations
```

### Option 2: Git-based Update (if using version control)

```bash
git stash                    # Save your changes
# Replace with new files
git stash pop                # Restore your changes
git mergetool               # Resolve conflicts
```

---

## 📞 Need Help?

If you encounter issues not covered here:

1. Check the [FAQ](./FAQ.md)
2. Review [Technical Documentation](./TECHNICAL.md)
3. Contact support: your-email@example.com
4. Include:
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - Operating system
   - Error messages
   - Screenshots

---

## ⏱️ Typical Installation Times

- **Fresh Installation:** 5-10 minutes
- **Integration to Existing Project:** 15-20 minutes
- **First-time Next.js users:** 30-45 minutes

---

**Next Steps:**

- ✅ Installation complete? → Read [Usage Guide](./USAGE.md)
- 🎨 Want to customize? → Check [Customization Guide](./CUSTOMIZATION.md)
- 🔍 Understand the code? → See [Technical Documentation](./TECHNICAL.md)

---

_Installation successful? Great! Now let's make it yours in the Usage Guide._
