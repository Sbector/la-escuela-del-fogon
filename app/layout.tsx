import type React from "react"
import { Azeret_Mono } from "next/font/google"
import Header from "./_components/Header"
import Wrapper from "./_components/Wrapper"
import "./globals.css"

const azeret = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "LA ESCUELA DEL FOGÓN",
  description:
    "Plataforma dedicada a la investigación y difusión de conocimientos sobre fogones tradicionales y técnicas culinarias",
  keywords: "fogón, cocina tradicional, anafre, técnicas culinarias, gastronomía mexicana",
  openGraph: {
    title: "LA ESCUELA DEL FOGÓN",
    description:
      "Plataforma dedicada a la investigación y difusión de conocimientos sobre fogones tradicionales y técnicas culinarias",
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
    <html
      lang="es"
      className={`
      ${azeret.className} bg-neutral-50`}
    >
      <body>
        <Header />
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
