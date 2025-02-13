import "./globals.css";

import { AOSInit } from "@/components/shared/aos-init";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "FGTS | Generalcred",
  description: "Infinita como a sua imaginação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
        <AOSInit />
        <Toaster />
      </body>
    </html>
  );
}
