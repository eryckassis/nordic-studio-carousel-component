<div align="center">

<!-- HEADER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,100:764ba2&height=200&section=header&text=Infinite%20Carousel&fontSize=50&fontColor=ffffff&animation=fadeIn&fontAlignY=35&desc=GSAP%20Text%20Transitions%20•%20Awwwards%20Quality&descAlignY=55&descSize=18" width="100%"/>

<!-- ANIMATED LOGO/TITLE -->
<br/>

<a href="#">
 
</a>

<br/><br/>

<!-- BADGES ROW 1 - Main Info -->
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-667eea?style=for-the-badge&logo=semver&logoColor=white" alt="Version"/>
  <img src="https://img.shields.io/badge/license-Commercial-ff6b6b?style=for-the-badge&logo=googlesheets&logoColor=white" alt="License"/>
  <img src="https://img.shields.io/badge/status-Production%20Ready-00c853?style=for-the-badge&logo=checkmarx&logoColor=white" alt="Status"/>
</p>

<!-- BADGES ROW 2 - Tech Stack -->
<p>
  <img src="https://img.shields.io/badge/Next.js-15.3-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/GSAP-3.13-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
</p>

<!-- BADGES ROW 3 - Quality -->
<p>
  <img src="https://img.shields.io/badge/code_style-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" alt="ESLint"/>
  <img src="https://img.shields.io/badge/architecture-FSD-blueviolet?style=flat-square" alt="FSD"/>
  <img src="https://img.shields.io/badge/60fps-animations-ff69b4?style=flat-square" alt="60fps"/>
  <img src="https://img.shields.io/badge/SSR-compatible-success?style=flat-square" alt="SSR"/>
</p>

<br/>

<!-- DESCRIPTION -->
<p align="center">
  <samp>
    A production-ready, professional carousel component inspired by <b>Awwwards-winning</b> websites.<br/>
    Featuring smooth, infinite scrolling with synchronized text and image transitions.
  </samp>
</p>

<br/>

<!-- DEMO BUTTONS -->
<p>
  <a href="https://your-demo-link.vercel.app">
    <img src="https://img.shields.io/badge/🚀_LIVE_DEMO-View_Now-667eea?style=for-the-badge" alt="Live Demo"/>
  </a>
  &nbsp;&nbsp;
  <a href="https://your-video-preview.mp4">
    <img src="https://img.shields.io/badge/🎬_VIDEO-Preview-764ba2?style=for-the-badge" alt="Video Preview"/>
  </a>
</p>

<br/>

<!-- SEPARATOR -->
<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

</div>

<br/>

<!-- FEATURES SECTION -->

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30"> &nbsp;Key Features

<table>
<tr>
<td width="50%">

### 🎨 Design & Animation

| Feature | Description                                                             |
| :-----: | :---------------------------------------------------------------------- |
|   ♾️    | **Infinite Smooth Scrolling** — Seamless carousel with no visible loops |
|   🎬    | **GSAP-Powered Transitions** — Professional-grade 60fps animations      |
|   🔄    | **Synchronized Text/Image** — Perfectly timed dual transitions          |
|   📱    | **Responsive Design** — Mobile, tablet, and desktop optimized           |
|   〰️    | **Custom Easing** — Premium bezier curves                               |

</td>
<td width="50%">

### ⚙️ Technical Excellence

| Feature | Description                                            |
| :-----: | :----------------------------------------------------- |
|   ⚡    | **Next.js 15 App Router** — Latest framework features  |
|   🔷    | **100% TypeScript** — Full type safety                 |
|   🏗️    | **Feature-Sliced Design** — Scalable architecture      |
|   🎯    | **Server & Client Components** — Optimized performance |
|   🪝    | **Custom Hooks** — Reusable, testable logic            |

</td>
</tr>
</table>

<br/>

<!-- QUICK START -->

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30"> &nbsp;Quick Start

<div align="center">

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Run development server
npm run dev

# 3️⃣ Open your browser at http://localhost:3000
```

</div>

<br/>

<!-- FOLDER STRUCTURE -->

## <img src="https://media.giphy.com/media/files-folders-office-l0HlHFRbmaZtBRhXG/giphy.gif" width="30"> &nbsp;Project Structure

<div align="center">

```
📦 carousel-gsap
┣━━ 📂 app/                     # Next.js App Router
┃   ┣━━ 📄 layout.tsx           # Root layout
┃   ┣━━ 📄 page.tsx             # Home page
┃   ┗━━ 🎨 globals.css          # Global styles
┃
┣━━ 📂 entities/                # Business entities
┃   ┗━━ 📂 slide/               # Slide data & types
┃
┣━━ 📂 features/                # Feature modules
┃   ┣━━ 📂 carousel-navigation/ # Navigation controls
┃   ┗━━ 📂 slide-animation/     # GSAP animation logic
┃
┣━━ 📂 shared/                  # Shared utilities
┃   ┣━━ 📂 hooks/               # Custom React hooks
┃   ┣━━ 📂 ui/                  # Reusable components
┃   ┗━━ 📂 lib/                 # Helper functions
┃
┣━━ 📂 widgets/                 # Complex UI blocks
┃   ┣━━ 📂 carousel/            # Main carousel widget
┃   ┣━━ 📂 footer/              # Footer component
┃   ┗━━ 📂 navigation/          # Navigation widget
┃
┣━━ 📂 public/                  # Static assets
┗━━ 📂 docs/                    # Documentation
```

</div>

<br/>

<!-- TECH STACK -->

## <img src="https://media.giphy.com/media/uhWLu2lsU0rfLiwYlI/giphy.gif" width="30"> &nbsp;Tech Stack

<div align="center">

<table>
<tr>
<td align="center" width="96">
  <a href="https://nextjs.org/">
    <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
  </a>
  <br/><sub><b>Next.js 15</b></sub>
</td>
<td align="center" width="96">
  <a href="https://www.typescriptlang.org/">
    <img src="https://skillicons.dev/icons?i=ts" width="48" height="48" alt="TypeScript" />
  </a>
  <br/><sub><b>TypeScript</b></sub>
</td>
<td align="center" width="96">
  <a href="https://gsap.com/">
    <img src="https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" width="48" height="48" alt="GSAP" />
  </a>
  <br/><sub><b>GSAP 3.13</b></sub>
</td>
<td align="center" width="96">
  <a href="https://tailwindcss.com/">
    <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
  </a>
  <br/><sub><b>Tailwind 4</b></sub>
</td>
<td align="center" width="96">
  <a href="https://react.dev/">
    <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
  </a>
  <br/><sub><b>React 19</b></sub>
</td>
<td align="center" width="96">
  <a href="https://eslint.org/">
    <img src="https://cdn.simpleicons.org/eslint/4B32C3" width="48" height="48" alt="ESLint" />
  </a>
  <br/><sub><b>ESLint</b></sub>
</td>
</tr>
</table>

</div>

<br/>

<!-- DOCUMENTATION -->

## <img src="https://media.giphy.com/media/VgGthkhUvGgOit7Y9i/giphy.gif" width="30"> &nbsp;Documentation

<div align="center">

| 📖 Guide                                        | Description              |
| :---------------------------------------------- | :----------------------- |
| [**📥 Installation**](./docs/INSTALLATION.md)   | Get started in 5 minutes |
| [**🚀 Usage**](./docs/USAGE.md)                 | How to use and integrate |
| [**🎨 Customization**](./docs/CUSTOMIZATION.md) | Make it yours            |
| [**⚙️ Technical**](./docs/TECHNICAL.md)         | Architecture deep-dive   |
| [**❓ FAQ**](./docs/FAQ.md)                     | Common questions         |
| [**📋 Changelog**](./docs/CHANGELOG.md)         | Version history          |

</div>

<br/>

<!-- USE CASES -->

## <img src="https://media.giphy.com/media/cj87CxfRtrUifF3Ryk/giphy.gif" width="30"> &nbsp;Perfect For

<div align="center">

<table>
<tr>
<td align="center" width="150">
  <br/>
  <img src="https://cdn-icons-png.flaticon.com/128/3135/3135768.png" width="60"/>
  <br/><br/>
  <b>Creative<br/>Portfolios</b>
  <br/><br/>
</td>
<td align="center" width="150">
  <br/>
  <img src="https://cdn-icons-png.flaticon.com/128/3081/3081648.png" width="60"/>
  <br/><br/>
  <b>E-commerce<br/>Sites</b>
  <br/><br/>
</td>
<td align="center" width="150">
  <br/>
  <img src="https://cdn-icons-png.flaticon.com/128/2920/2920349.png" width="60"/>
  <br/><br/>
  <b>Agency<br/>Websites</b>
  <br/><br/>
</td>
<td align="center" width="150">
  <br/>
  <img src="https://cdn-icons-png.flaticon.com/128/2721/2721300.png" width="60"/>
  <br/><br/>
  <b>Product<br/>Landing Pages</b>
  <br/><br/>
</td>
<td align="center" width="150">
  <br/>
  <img src="https://cdn-icons-png.flaticon.com/128/1055/1055683.png" width="60"/>
  <br/><br/>
  <b>Design<br/>Systems</b>
  <br/><br/>
</td>
</tr>
</table>

</div>

<br/>

<!-- WHY CHOOSE -->

## <img src="https://media.giphy.com/media/kgUkCLMu3xhw1T6txv/giphy.gif" width="30"> &nbsp;Why Choose This Carousel?

<div align="center">

<table>
<tr>
<th width="33%">vs Regular Carousels</th>
<th width="33%">vs Building from Scratch</th>
<th width="33%">vs Other Solutions</th>
</tr>
<tr>
<td>
<br/>
❌ Limited customization<br/>
❌ Generic animations<br/>
❌ Outdated patterns<br/>
<br/>
✅ <b>Awwwards-quality</b><br/>
✅ <b>Fully customizable</b><br/>
✅ <b>Modern architecture</b>
<br/><br/>
</td>
<td>
<br/>
❌ Weeks of development<br/>
❌ Extensive testing needed<br/>
❌ Performance optimization<br/>
<br/>
✅ <b>Install in minutes</b><br/>
✅ <b>Battle-tested code</b><br/>
✅ <b>Already optimized</b>
<br/><br/>
</td>
<td>
<br/>
❌ Complex setup<br/>
❌ Bloated code<br/>
❌ Poor documentation<br/>
<br/>
✅ <b>Clean architecture</b><br/>
✅ <b>Comprehensive docs</b><br/>
✅ <b>Modern tech stack</b>
<br/><br/>
</td>
</tr>
</table>

</div>

<br/>

<!-- LICENSE -->

## <img src="https://media.giphy.com/media/VfKpP7IvEiSQ7e9Jxm/giphy.gif" width="30"> &nbsp;License

<div align="center">

**🏆 Commercial License** — Premium product for commercial use

<table>
<tr>
<td align="center" width="50%">

### ✅ Allowed

Unlimited personal projects<br/>
Unlimited client projects<br/>
SaaS applications<br/>
Lifetime updates & support

</td>
<td align="center" width="50%">

### ❌ Not Allowed

Resell or redistribute as-is<br/>
Use in open-source templates<br/>
Share license with others

</td>
</tr>
</table>

<sub>See [LICENSE.md](./docs/LICENSE.md) for full terms</sub>

</div>

<br/>

<!-- ROADMAP -->

## <img src="https://media.giphy.com/media/gutZ5Pm6Xl62eIf5RZ/giphy.gif" width="30"> &nbsp;Roadmap

<div align="center">

> 🆓 **Free updates** for all purchasers!

| Status | Feature                       |
| :----: | :---------------------------- |
|   🔜   | Drag-to-swipe functionality   |
|   🔜   | Vertical carousel variant     |
|   🔜   | 3D transform effects          |
|   🔜   | Video slide support           |
|   🔜   | Auto-play with pause on hover |

</div>

<br/>

<!-- SUPPORT -->

## <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="30"> &nbsp;Support

<div align="center">

<table>
<tr>
<td align="center">
  <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" width="40"/>
  <br/><br/>
  <b>Email Support</b>
  <br/>
  <sub>eng.assis.dev@gmail.com</sub>
</td>
<td align="center">
  <img src="https://cdn-icons-png.flaticon.com/128/2991/2991148.png" width="40"/>
  <br/><br/>
  <b>Documentation</b>
  <br/>
  <sub>All guides included</sub>
</td>
<td align="center">
  <img src="https://cdn-icons-png.flaticon.com/128/3670/3670157.png" width="40"/>
  <br/><br/>
  <b>Community</b>
  <br/>
  <sub>Discord / Slack</sub>
</td>
</tr>
</table>

</div>

<br/>

<!-- DEPLOY -->

## <img src="https://media.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif" width="30"> &nbsp;Deploy

<div align="center">

Deploy your carousel with one click:

<br/>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

<br/>

<sub>Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.</sub>

</div>

<br/>

<!-- TESTIMONIALS -->

## <img src="https://media.giphy.com/media/W5eoFAIrgBv6oSd5YZ/giphy.gif" width="30"> &nbsp;What Developers Say

<div align="center">

<table>
<tr>
<td width="50%">
<br/>

> _"Best carousel component I've used. The animations are buttery smooth and the code quality is exceptional!"_

**⭐⭐⭐⭐⭐**<br/>
<sub>— Senior Developer</sub>
<br/><br/>

</td>
<td width="50%">
<br/>

> _"Saved me weeks of development time. The Feature-Sliced architecture makes customization a breeze."_

**⭐⭐⭐⭐⭐**<br/>
<sub>— Agency Lead</sub>
<br/><br/>

</td>
</tr>
</table>

</div>

<br/>

<!-- FOOTER -->
<div align="center">

<img src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" width="100%">

<br/>

### 💖 Made with love for the creative web community

<sub>Thank you for your purchase! If you enjoy this product, please consider leaving a review on Gumroad.</sub>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,100:764ba2&height=100&section=footer" width="100%"/>

</div>
