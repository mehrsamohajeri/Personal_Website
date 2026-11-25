import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mehrsamohajeri.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mehrsa Mohajeri | Front-End Developer",
  description:
    "I'm Mehrsa Mohajeri, a Front-end Developer. My professional journey revolves around three key elements: problem-solving, attention to detail and collaboration",
  icons: {
    icon: "/Image/favicon.ico",
  },
  openGraph: {
    title: "Mehrsa Mohajeri | Front-End Developer",
    locale: "fa_IR",
    type: "website",
    url: siteUrl,
    siteName: "Mehrsa Mohajeri",
    images: [{ url: "/Image/og.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/animate.min.css" />
        <link rel="stylesheet" href="/Bootstrap/Icons/bootstrap-icons.min.css" />
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}