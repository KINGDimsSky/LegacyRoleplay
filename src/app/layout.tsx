import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Legacy Roleplay",
  description: "Legacy Roleplay San Andreas Multiplayer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='h-full scrollbar scrollbar-thumb-zinc-500 scrollbar-track-zinc-700'>
      <body className={cn('antialiased bg-black', poppins.className)}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
