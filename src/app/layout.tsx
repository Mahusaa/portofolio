import "~/styles/globals.css";

import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Usamah Hafizh",
  description: "Developer, Engineer, Student that loves to build, read, and code.",
  icons: [{ rel: "icon", url: "/favicons.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} font-sans bg-cream`}>{children}</body>
    </html>
  )
}


