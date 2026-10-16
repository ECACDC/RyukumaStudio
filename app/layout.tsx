import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryukuma Studios — Roblox Assets",
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
