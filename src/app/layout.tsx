import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '../../public/style.css'
import Footer from "./component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlizCut",
  description: "Unisex hair studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-roboto">
      <body 
        className={inter.className}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
