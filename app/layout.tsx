import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShuddhVeda Honey | Nature's Sweetness is Coming Soon",
  description:
    "Premium organic honey that is pure, natural, responsibly sourced, and crafted with care.",
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
