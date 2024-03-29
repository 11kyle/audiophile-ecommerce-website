import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], preload: true })

export const metadata: Metadata = {
  title: "Audiophile",
  description:
    "An online store specializing in the best quality headphones, speakers, and earphones.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ShoppingCartContextProvider>
          {children}
        </ShoppingCartContextProvider>
      </body>
    </html>
  )
}
