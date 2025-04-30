export interface Case {
    imageUrl: string
    caseNumber: string
    institution: string
    location: string
    type: string
    title: string
    slug: string
    isComingSoon: boolean
  }
  
  export const cases: Case[] = [
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
  