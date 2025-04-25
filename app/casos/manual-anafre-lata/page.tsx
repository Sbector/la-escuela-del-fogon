import type { Metadata } from "next"
import Link from "next/link"
import { Xanh_Mono } from "next/font/google"
import Button from "@/app/_components/Button"

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Manual para anafre de lata | LA ESCUELA DEL FOGÓN",
  description: "Aprende a elaborar un anafre con materiales de reciclaje",
}

export default function AnafresJaimePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-block mb-8 text-sm uppercase tracking-wider hover:underline"
      >
        ← Volver al inicio
      </Link>

      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className={`${xanhMono.className} text-sm border border-neutral-900 rounded-xl px-1`}>
              03
            </span>
            <span className="text-sm uppercase">Proyector • CDMX • Fogón</span>
          </div>
          <h1 className={`${xanhMono.className} text-4xl md:text-5xl mb-6`}>
            Manual para la elaboración de anafre de lata
          </h1>
        </header>

        <figure className="mb-8">
          <img
            src="/images/manual/08.svg"
            alt="Los anafres de Jaime - Proyector en CDMX"
            className="w-full h-auto object-cover aspect-video"
          />
        </figure>

        <div className="prose prose-lg max-w-none">
          {/* ¿QUIÉN ES JAIME? */}
          <section className="pt-6 pb-8">
            <h2 className="text-2xl pb-8">¿QUIÉN ES JAIME?</h2>
            <h3 className="text-xl pb-8">
              Jaime Santiz Gómez <br />
              nació en la comunidad <br />
              de Lelenchij, en Oxchuc, <br />
              Chiapas.
            </h3>
            <p className="pb-8">
              A los 13 años migró a San Cristóbal de las Casas para continuar sus estudios y trabajar. <br /><br />
              Actualmente vive con su esposa Rosa y sus cuatro hijos en la colonia La Libertad, un área popularmente conocida por el mercado José Castillo Tielmans, el más grande del centro de San Cristóbal.
            </p>
          </section>

          {/* CONFLICTOS Y PARTICULARIDADES */}
          <section className="pt-6 pb-8">
            <h2 className="text-2xl">
              CONFLICTOS <br />
              Y PARTICULARIDADES <br />
              DE SU TERRITORIO
            </h2>
            <figure className="my-8">
              <img
                src="/images/manual/01.svg"
                alt="Los anafres de Jaime - Proyector en CDMX"
                className="w-full h-auto object-contain aspect-video"
              />
            </figure>
            <p className="pb-8">
              La colonia La Libertad alberga “El Tívoli”, un basurero municipal improvisado hace más de 20 años, el cual se ha convertido en un espacio de disputa. <br /><br />
              Desde su creación, los vecinos han denunciado su mala gestión, la presencia de animales en descomposición y el desbordamiento sanitario. Además, al ser un territorio codiciado por su cercanía a las áreas comerciales, la colonia ha sido foco de tensiones, con grupos armados que han desplazado a los habitantes en diversas ocasiones. <br /><br />
              Jaime, sin embargo, ha sabido encontrar una forma de aprovechar su entorno.
            </p>
          </section>

          {/* HISTORIA E IMPORTANCIA */}
          <section className="pt-8 pb-16">
            <h2 className="text-2xl pb-8">
              HISTORIA <br />
              E IMPORTANCIA <br />
              DE SUS ANAFRES
            </h2>
            <p className="pb-8">
              Jaime aprendió a fabricar anafres observando a otros. <br />
              --------- <br />
              Utiliza materiales que recoge del basurero, como latas, tubos, tambos, partes de lavadoras y cualquier metal que encuentre. <br />
              --------- <br />
              Su habilidad lo ha convertido en uno de los pocos anafreros de Chiapas. <br />
              --------- <br />
              Hoy en día, solo hay 10 personas que practican este oficio, distribuidos en barrios como San Ramón, Tres de Enero, Ojo de Agua, Guadalupe y La Tlaxcala. <br />
              --------- <br />
              Los anafres de Jaime no solo son un medio de sustento para su familia, también representan una conexión con la transformación de la basura y la creatividad.
            </p>
          </section>

          {/* FRASES FINALES */}
          <section className="pt-8 pb-8">
            <h2 className="text-2xl">
              En un contexto lleno <br />
              de adversidades
            </h2>
            <h2 className="text-2xl pt-8">
              Todo puede <br />
              ser un anafre
            </h2>
            <figure className="my-4">
              <img
                src="/images/manual/09.svg"
                alt="Los anafres de Jaime - Proyector en CDMX"
                className="w-full h-auto object-contain aspect-video"
              />
            </figure>
          </section>

          {/* BOTÓN FINAL */}
          <div className="flex justify-between pt-8">
            <Button href="../LEDF_MANUAL_ZINE.pdf" target="_blank">
              Descargar manual
            </Button>
          </div>
        </div>
      </article>
    </main>

  )
}
