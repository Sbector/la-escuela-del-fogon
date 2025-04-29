import type { Metadata } from "next"
import Link from "next/link"
import { Xanh_Mono } from "next/font/google"
import Button from "../_components/Button"

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "LA ESCUELA DEL FOGÓN | Contacto",
  description: "Ponte en contacto con nosotros para más información sobre fogones tradicionales",
}

export default function ContactoPage() {
  return (
    <div className="flex flex-col w-screen min-h-[calc(100dvh-4rem)] px-0">
      <main className="container mx-auto px-4 py-8 flex flex-col flex-grow">
        {/* Enlace fijo en la parte superior */}
        <Link href="/" className="inline-block mb-8 text-sm uppercase tracking-wider hover:underline">
          ← Volver al inicio
        </Link>

        {/* Contenido centrado verticalmente */}
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-xl text-center">
            <header className="mb-10">
              <h1 className={`${xanhMono.className} text-4xl mb-6`}>Contacto</h1>
            </header>

            <div className="mb-12">
              <p className="mb-8">
                Para cualquier consulta o información adicional sobre nuestros proyectos, no dudes en ponerte en contacto
                con nosotros.
              </p>

              <Button
                href="mailto:laescueladelfogon@gmail.com"
                target="_blank"
              >
                ✉ Enviar correo
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
