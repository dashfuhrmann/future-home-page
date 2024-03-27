import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";

import { DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.variable}>
      <body className="bg-[#070815] text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
