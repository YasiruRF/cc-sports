import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Eclipse 2025 - Curtin Colombo Sports Meet",
  description:
    "Join us for Eclipse 2025, the premier university sports meet at Curtin Colombo. Experience the thrill of competition and celebrate athletic excellence.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
