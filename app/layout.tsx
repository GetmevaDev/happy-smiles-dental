import { Layout } from "@/ui";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

import "../src/styles/globals.scss";

export const mont = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mont",
});

export const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mont.variable} ${poppins.variable}`}>
      <body>
        <Layout.Header />
        <div className="container">{children}</div>
        <Layout.Footer />
      </body>
    </html>
  );
}
