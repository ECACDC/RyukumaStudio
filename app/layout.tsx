import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryukuma Studios — Roblox Assets",
  icons: { icon: "/RyukumaFavicon.png", shortcut: "/RyukumaFavicon.png", apple: "/RyukumaFavicon.png" },
  description: "Polished Roblox systems and assets built by Ryukuma Studios.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
