import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const deFonte = localFont({
  src: "../../public/fonts/DeFonte-DemiGras.ttf",
  variable: "--font-de-fonte",
  display: "swap",
  weight: "600",
});
