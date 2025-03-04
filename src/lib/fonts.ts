import { Yomogi, Zen_Kurenaido, Kaisei_Decol } from "next/font/google";

export const zenKurenaido = Zen_Kurenaido({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-zen-kurenaido",
  display: "swap",
});

export const yomogi = Yomogi({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-yomogi",
  display: "swap",
});

export const kaiseiDecol = Kaisei_Decol({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-kaisei-decol",
  display: "swap",
});
