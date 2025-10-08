import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amish Breakdown Recovery | 24/7 Vehicle Assistance",
  description:
    "Amish Breakdown Recovery provides fast and reliable 24/7 roadside assistance, towing, and vehicle recovery services. Get professional breakdown help anytime, anywhere.",
  generator: "Next.js",
  keywords: [
    "Breakdown Recovery",
    "Roadside Assistance",
    "Towing Service",
    "Vehicle Recovery",
    "24/7 Breakdown",
  ],
  authors: [{ name: "Amish Breakdown Recovery" }],
  creator: "Amish Breakdown Recovery",
  publisher: "Amish Breakdown Recovery",
  applicationName: "Amish Breakdown Recovery",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Amish Breakdown Recovery | 24/7 Vehicle Assistance",
    description:
      "Professional 24/7 breakdown recovery and roadside assistance. Fast, reliable, and always ready to help.",
    url: "https://www.amishbreakdownrecovery.com",
    siteName: "Amish Breakdown Recovery",
    images: [
      {
        url: "/logo.jpg", // 👈 logo as preview image
        width: 800,
        height: 800,
        alt: "Amish Breakdown Recovery Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amish Breakdown Recovery | 24/7 Vehicle Assistance",
    description:
      "Amish Breakdown Recovery provides professional 24/7 breakdown and towing services.",
    images: ["/logo.jpg"], // 👈 logo for Twitter share
    creator: "@your_twitter_handle", // optional
  },
  icons: {
    icon: "/favicon.ico", // 👈 favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
