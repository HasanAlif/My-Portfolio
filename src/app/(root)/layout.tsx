import BackgroundGlow from "@/Components/layout/BackgroundGlow";
import Footer from "@/Components/layout/Footer";
import Navbar from "@/Components/layout/Navbar";
import ThemeProvider from "@/Components/providers/ThemeProvider";
import { TChildren } from "@/helpers/types";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mehedi-hasan-alif-portfolio.vercel.app"),
  title:
    "Al Mehedi Hasan Alif | Backend Developer (Node.js, Express.js, API Development)",
  description:
    "Al Mehedi Hasan Alif - Backend Developer specializing in Node.js, Express.js, and API development. Building scalable, secure backend systems and high-performance server-side solutions.",
  keywords: [
    "Al Mehedi Hasan Alif",
    "Backend Developer",
    "Node.js Developer",
    "Express.js Developer",
    "API Developer",
    "API Development",
    "TypeScript Developer",
    "Portfolio",
    "Bangladesh Developer",
    "MongoDB Developer",
    "PostgreSQL Developer",
  ],
  authors: [
    { name: "Al Mehedi Hasan Alif", url: "https://mehedi-hasan-alif-portfolio.vercel.app" },
  ],
  creator: "Al Mehedi Hasan Alif",
  publisher: "Al Mehedi Hasan Alif",
  openGraph: {
    title: "Al Mehedi Hasan Alif | Backend Developer Portfolio",
    description:
      "Experienced Backend Developer building scalable, secure RESTful APIs and high-performance server-side solutions.",
    url: "https://mehedi-hasan-alif-portfolio.vercel.app",
    siteName: "Al Mehedi Hasan Alif Portfolio",
    images: [
      {
        url: "/alif-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Al Mehedi Hasan Alif Backend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Mehedi Hasan Alif | Backend Developer Portfolio",
    description:
      "Node.js, Express.js, API Development - Building scalable backend solutions from Bangladesh.",
    images: ["/alif-profile.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Al Mehedi Hasan Alif",
  jobTitle: "Backend Developer",
  url: "https://mehedi-hasan-alif-portfolio.vercel.app",
  sameAs: [
    "https://github.com/HasanAlif",
    "https://www.linkedin.com/in/mehedihasanalif",
    "https://www.facebook.com/almehedihasan.alif.54",
  ],
  knowsAbout: [
    "Node.js",
    "Express.js",
    "Nest.js",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "TypeScript",
    "JavaScript",
    "REST API",
    "GraphQL",
    "Socket.io",
    "JWT",
    "AWS",
    "Docker",
    "Prisma",
    "Microservices",
    "API Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: TChildren }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="6JAfGBO4217jmAQHzbGGkpvGA7tlgHX-sYWg8shFt10"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <ThemeProvider>
          <BackgroundGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster position="bottom-right" reverseOrder={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
