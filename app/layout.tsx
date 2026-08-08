import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Providers from "./storeProvider";

import Navbar from "./shared/navbar";
import Footer from "./shared/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mock Interview Ai App",
  description: "Ai app that generates interview questions as mock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <Script
        src="https://js.puter.com/v2/"
        strategy="afterInteractive"
      ></Script>

      <body className="min-h-full flex flex-col pt-10 px-2 w-full md:w-3/5 lg:w-1/2 mx-auto">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
