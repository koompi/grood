import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { Providers } from "./providers";
import ConditionalFooter from "./components/ConditionalFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GROOD - Premium Electric Bikes",
  description:
    "Premium electric bikes designed for the modern city. Silent power, smart features, iconic design.",
  keywords: ["electric bike", "ebike", "urban cycling", "smart bike", "GROOD"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <CartProvider>
            {children}
            <ConditionalFooter />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
