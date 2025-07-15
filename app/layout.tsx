import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Page",
  description: "Personal page of a Multi software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
