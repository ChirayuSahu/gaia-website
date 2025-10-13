import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GAIA The Earth Foundation",
  description: "Regenrating earth, one step at a time.",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
  ],
  themeColor: "#047857",
  openGraph: {
    title: "GAIA The Earth Foundation",
    description: "Regenrating earth, one step at a time.",
    url: "https://gaiatheearthfoundation.org/",
    siteName: "GAIA The Earth Foundation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GAIA The Earth Foundation",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GAIA The Earth Foundation",
    description: "Regenrating earth, one step at a time.",
    images: ["/og-image.png"],
    creator: "@gaiaearthfdn",
  },
  authors: [{ name: "GAIA The Earth Foundation", url: "https://gaiatheearthfoundation.org/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
