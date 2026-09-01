import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { fontHeading, fontSans } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "MelosHotel — Seu refúgio à beira-mar",
  description: "Hospedagem com charme, conforto e a calma que você merece.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fontSans.variable} ${fontHeading.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
