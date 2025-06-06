import type { Metadata } from "next";
import { Oswald, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/ui/footer";
import LoadingWrapper from "@/components/ui/loader-wrapper";

// import { Oswald, Lato } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify available weights
  variable: "--font-oswald",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Specify available weights
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <body className={`${oswald.variable} ${lato.variable} antialiased`}>
        <LoadingWrapper>
          <Navbar />
          {children}
        </LoadingWrapper>
      </body>
      <Footer />
    </html>
    </>
    
  );
}
