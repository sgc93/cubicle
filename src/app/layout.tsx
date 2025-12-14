import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";

const interFont = Geist({
  variable: "--font-inter",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Cubicle",
  description: "AI Powered 3D Editor"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
