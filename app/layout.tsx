import type { Metadata } from "next";
import { dmSans, deFonte } from "@/shared/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nordic Studio Carousel | Experiment 502",
  description: "Interactive carousel with GSAP animations and Next.js",
  keywords: ["carousel", "gsap", "nextjs", "animation", "nordic studio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${deFonte.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
