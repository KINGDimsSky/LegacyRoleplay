import type { Metadata } from "next";
import { Luckiest_Guy, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });
const luckiest = Luckiest_Guy({ subsets : ["latin"], weight: ["400"], variable: "--font-luckiest"})

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
    <html lang="en" className={`${poppins.variable} ${luckiest.variable}`}>
      <body className={` antialiased bg-yellow-50`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
