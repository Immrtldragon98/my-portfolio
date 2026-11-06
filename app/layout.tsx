import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logan — Mechanical Engineer & Product Builder",
  description:
    "Logan’s journey from mechanical maintenance and mill commissioning to trading tools, applied AI and software products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-24 focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        {children}
      </body>
    </html>
  );
}