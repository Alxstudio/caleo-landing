import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-numeric",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Caleo — Compara precios de supermercados",
  description: "Ahorra en cada compra comparando precios entre Mercadona y DIA. Encuentra siempre el precio más barato.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}