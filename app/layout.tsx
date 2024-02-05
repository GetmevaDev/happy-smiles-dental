import type { Metadata } from "next";
import { Montserrat, Nunito_Sans } from "next/font/google";

import { Layout } from "@/ui";

import "../src/styles/globals.scss";

export const mont = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mont",
});

export const nunito = Nunito_Sans({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${mont.variable} ${nunito.variable}`} lang="en">
      <body>
        <Layout.Header />
        <div className="container">{children}</div>
        <Layout.Footer />
      </body>
    </html>
  );
}
