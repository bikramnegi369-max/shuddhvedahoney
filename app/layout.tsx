import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShuddhVedaHoney | Coming Soon",
  description: "Our new website is launching soon. Join the waitlist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
