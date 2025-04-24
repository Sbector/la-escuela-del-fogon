"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import ComingSoonModal from "./ComingSoonModal"

export interface CardProps {
  imageUrl: string
  caseNumber: string
  institution: string
  location: string
  type: string
  title: string
  slug?: string
  isComingSoon?: boolean
}

export default function Card({
  imageUrl,
  caseNumber,
  institution,
  location,
  type,
  title,
  slug = "#",
  isComingSoon = true,
}: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (isComingSoon) {
      e.preventDefault()
      setIsModalOpen(true)
    }
    // Si no está en desarrollo (isComingSoon es false),
    // el comportamiento predeterminado del enlace funcionará
  }

  // Contenido de la tarjeta que será el mismo independientemente de si es un enlace o no
  const cardContent = (
    <>
      {/* Imagen de fondo */}
      <div
        className="inset-0 h-full
        absolute landscape:relative xl:relative
        w-full landscape:w-2/5 xl:w-2/5"
      >
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={`${title} - ${institution} en ${location}`}
          className="w-full h-full
           object-cover 
           filter brightness-50 landscape:brightness-100 xl:brightness-100"
        />
      </div>
      {/* Identificadores */}
      <div
        className="relative z-10
        h-full w-full landscape:w-3/5 xl:w-3/5
        flex flex-col-reverse landscape:flex-col xl:flex-col
        justify-between landscape:justify-start xl:justify-start
        px-3 py-4 landscape:px-16 xl:px-10
        uppercase text-neutral-50 landscape:text-neutral-900 xl:text-neutral-900"
      >
        {/* Indicadores primarios */}
        <div
          className="relative z-10 
          flex flex-col landscape:flex-row xl:flex-row 
          landscape:gap-10 xl:gap-10
          items-start landscape:items-center
          "
        >
          <span
            className="rounded-xl border
            border-neutral-50 landscape:border-neutral-900 xl:border-neutral-900
            landscape:absolute landscape:-ml-12
            text-md
            px-1 mb-4 landscape:mb-0
            "
          >
            {caseNumber}
          </span>
          <h2 className="text-md lg:text-2xl xl:text-3xl leading-tight">{title}</h2>
        </div>
        {/* Identificadores secundarios */}
        <div
          className="flex flex-row 
            justify-between items-center
            landscape:gap-10 landscape:pt-8 xl:gap-10"
        >
          <span className="text-xs uppercase font-medium tracking-wide">{institution}</span>
          <span className="text-xs uppercase font-medium tracking-wide">{location}</span>
          <span
            className="landscape:absolute landscape:bottom-8 landscape:right-16
            rounded-full px-3 py-0.5 
            border border-neutral-50 landscape:border-neutral-900 xl:border-neutral-900
            text-[10px] uppercase font-medium leading-none tracking-wide"
          >
            {type}
          </span>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Renderizar como Link o como div según isComingSoon */}
      {isComingSoon ? (
        <div
          className="snap-start overflow-hidden
          relative 
          w-full h-full flex xl:flex-row
          border-b border-neutral-50 landscape:border-neutral-900 xl:border-neutral-900
          cursor-pointer"
          onClick={handleClick}
        >
          {cardContent}
        </div>
      ) : (
        <Link
          href={slug}
          className="snap-start overflow-hidden
          relative 
          w-full h-full flex xl:flex-row
          border-b border-neutral-50 landscape:border-neutral-900 xl:border-neutral-900
          cursor-pointer"
        >
          {cardContent}
        </Link>
      )}

      {/* Modal simplificado sin animaciones */}
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} projectTitle={title} />
    </>
  )
}
