import "./globals.css";

import type { Metadata } from "next";
import { Onest } from "next/font/google";

const onest = Onest({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Generalcred",
  description: "Infinita como sua imaginação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${onest.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
