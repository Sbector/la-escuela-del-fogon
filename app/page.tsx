import Card from "./_components/Card"
import UnderConstructionBanner from "./_components/UnderConstructionBanner"
import { cases } from "./_data/cases"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LA ESCUELA DEL FOGÓN | Inicio",
  description: "Explora nuestros casos de estudio sobre fogones tradicionales y técnicas culinarias",
}

export default function HomePage() {
  return (
    <div className="flex flex-col w-screen h-[calc(100dvh-4rem)] px-0 overflow-hidden">
      {/* Contenido principal */}
      <main className="snap-y snap-mandatory overflow-scroll h-screen no-scrollbar">
        {/* Tarjetas */}
        {cases.map((item) => (
          <Card
            key={item.caseNumber}
            imageUrl={item.imageUrl}
            caseNumber={item.caseNumber}
            institution={item.institution}
            location={item.location}
            type={item.type}
            title={item.title}
            slug={item.slug}
            isComingSoon={item.isComingSoon}
          />
        ))}
      </main>

      {/* Banner de construcción */}
      <UnderConstructionBanner message="Sitio en desarrollo" />
    </div>
  )
}
