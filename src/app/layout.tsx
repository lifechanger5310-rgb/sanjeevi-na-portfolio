import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjeevi N A — Frontend Web & Mobile Application Developer",
  description:
    "Portfolio of Sanjeevi N A, a Frontend Web & Mobile Application Developer from Erode, India. Flutter, iOS, Next.js and React.",
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
