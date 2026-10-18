import type { Metadata, Viewport } from "next";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "Sanjeevi N A — Frontend Web & Mobile Application Developer",
  description:
    "Portfolio of Sanjeevi N A, a Frontend Web & Mobile Application Developer from Erode, India. Flutter, iOS, Next.js and React.",
};

export const viewport: Viewport = {
  themeColor: "#FAFAFA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Reveals start hidden; without JavaScript they must still be readable. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
