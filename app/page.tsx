import Card from "./_components/Card"
import UnderConstructionBanner from "./_components/UnderConstructionBanner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "LA ESCUELA DEL FOGÓN | Inicio",
  description: "Explora nuestros casos de estudio sobre fogones tradicionales y técnicas culinarias",
}

export default function HomePage() {
  const cases = [
    {
      imageUrl: "/images/caso4.png",
      caseNumber: "04",
      institution: "Foodscapes",
      location: "CDMX",
      type: "Publicación",
      title: "Manual para la elaboración de anafre de lata",
      slug: "/casos/manual-anafre-lata",
      isComingSoon: false, // Este proyecto ya está disponible
    },
    {
      imageUrl: "/images/caso3.png",
      caseNumber: "03",
      institution: "Proyector",
      location: "CDMX",
      type: "Fogón",
      title: "Los anafres de Jaime",
      slug: "/casos/anafres-jaime",
      isComingSoon: true, // Este proyecto sigue en desarrollo
    },
    {
      imageUrl: "/images/caso2.png",
      caseNumber: "02",
      institution: "MAZ",
      location: "Zapopan, Mex.",
      type: "exhibición",
      title: "Cocinar la revolución en América",
      slug: "/casos/cocinar-revolucion",
      isComingSoon: true, // Este proyecto sigue en desarrollo
    },
    {
      imageUrl: "/images/caso1.png",
      caseNumber: "01",
      institution: "MAZ",
      location: "Zapopan, Mex.",
      type: "fogón",
      title: "Cocinar la revolución en América",
      slug: "/casos/cocinar-revolucion-america",
      isComingSoon: true, // Este proyecto sigue en desarrollo
    },
  ]

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
