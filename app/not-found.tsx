import Link from "next/link"
import { Xanh_Mono } from "next/font/google"

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
})

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center w-screen min-h-[calc(100dvh-4rem)] px-4 py-8">
        <div className="max-w-xl mx-auto text-center">
          <h1 className={`${xanhMono.className} text-6xl md:text-8xl mb-6`}>404</h1>
  
          <div className="mb-12">
            <h2 className={`${xanhMono.className} text-2xl md:text-3xl mb-6`}>Página no encontrada</h2>
            <p className="mb-8 text-neutral-700">La página que estás buscando no existe o ha sido movida.</p>
  
            <Link
              href="/"
              className="inline-block px-8 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-neutral-50 transition-colors uppercase text-sm tracking-wider"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }
  