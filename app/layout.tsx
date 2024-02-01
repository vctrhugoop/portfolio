import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Hugo - Portifólio",
  description:
    "Explore meu portfólio de desenvolvimento front-end e mergulhe nas nuances do meu conhecimento e paixão por criar experiências web envolventes. Com habilidades sólidas em HTML, CSS, JavaScript e frameworks modernos, cada projeto reflete meu compromisso em transformar conceitos em interfaces interativas e visualmente cativantes. Descubra como minhas habilidades de front-end podem elevar a presença online e a usabilidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>{children}</body>
    </html>
  );
}
