import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Silverstone AI – Geleneksel İşletmeleri Geleceğin Teknolojisine Bağlıyoruz",
  description:
    "Silverstone AI; Web Tasarım, n8n Otomasyonları ve AI Çözümleri ile iletişim ve iş akışlarınızı geleceğe taşıyan teknoloji ortağınız. Alanya / Antalya.",
  keywords: "web tasarım, n8n otomasyon, AI ajanlar, yapay zeka, Silverstone AI, Alanya, Antalya",
  robots: "index, follow",
  openGraph: {
    title: "Silverstone AI – Dijital Dönüşümde Güvenilir Ortağınız",
    description:
      "Web Tasarım, n8n Otomasyonları ve AI Çözümleri ile işletmenizi geleceğe taşıyoruz.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
