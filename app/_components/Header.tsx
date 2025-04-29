"use client"
import { Xanh_Mono } from "next/font/google"
import Link from "next/link"

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400", // Solo se permite '400'
})

export default function Header() {
  return (
    <header
      className="fixed top-0 w-screen 
        flex justify-between items-center 
        px-4 py-3 h-16 
        z-30 border-b 
        border-neutral-900 bg-neutral-50"
    >
      <Link href="/" aria-label="Ir a la página principal">
        <h1 className={`${xanhMono.className}`}>
          <span className="text-2xl md:text-4xl">LA ESCUELA DEL FOGÓN</span>
        </h1>
      </Link>
      {/* El Nav ahora está separado y se renderiza en el layout principal */}
    </header>
  )
}
