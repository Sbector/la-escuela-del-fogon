"use client"

import { useState, useEffect } from "react"
import { Xanh_Mono } from "next/font/google"

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
})

interface UnderConstructionBannerProps {
  message?: string
  showCloseButton?: boolean
}

export default function UnderConstructionBanner({
  message = "Estamos trabajando en el contenido de estos proyectos",
  showCloseButton = true,
}: UnderConstructionBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificar si es la primera visita
    const hasVisited = localStorage.getItem("hasVisitedBefore")

    if (!hasVisited) {
      // Si es la primera visita, mostrar el banner
      setIsVisible(true)
      // Marcar que ya ha visitado el sitio
      localStorage.setItem("hasVisitedBefore", "true")
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <div
        className={`
          ${xanhMono.className}
          flex items-center gap-3 px-4 py-2
          bg-neutral-900 text-neutral-50
          border border-neutral-50
          shadow-lg rounded-full
          bg-opacity-80 backdrop-blur-sm
        `}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-neutral-50 rounded-full"></div>
          <span className="text-xs uppercase tracking-wider">{message}</span>
        </div>

        {showCloseButton && (
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 w-5 h-5 flex items-center justify-center rounded-full 
                     hover:bg-neutral-700 transition-colors"
            aria-label="Cerrar anuncio"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}
