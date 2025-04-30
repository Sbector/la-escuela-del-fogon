import type React from "react"
import type { Metadata } from "next"
import { Azeret_Mono } from "next/font/google"
import Header from "./_components/Header"
import Nav from "./_components/Nav"
import "./globals.css"

const azeret = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "LA ESCUELA DEL FOGÓN",
  description:
    "Archivo que documenta las protestas a través de la cocina en América",
  keywords: "fogón, cocina tradicional, anafre, técnicas culinarias, gastronomía mexicana",
  openGraph: {
    title: "LA ESCUELA DEL FOGÓN",
    description:
      "Archivo que documenta las protestas a través de la cocina en América",
    url: "https://laescueladelfogon.com",
    siteName: "LA ESCUELA DEL FOGÓN",
    locale: "es_MX",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${azeret.className} bg-neutral-50 overflow-y-auto no-scrollbar`}>
      <body className="pt-16">
        <Header />
        <Nav />
        {children}
      </body>
    </html>
  )
}
