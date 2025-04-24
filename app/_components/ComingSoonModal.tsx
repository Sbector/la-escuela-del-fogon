"use client"

import { Xanh_Mono } from 'next/font/google'

const xanhMono = Xanh_Mono({
  subsets: ["latin"],
  weight: "400",
})

interface ComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
}

export default function ComingSoonModal({ isOpen, onClose, projectTitle }: ComingSoonModalProps) {
  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={() => onClose()}
    >
      <div 
        className={`bg-neutral-900 border border-neutral-50 p-6 max-w-md w-full`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className={`${xanhMono.className} text-neutral-50 text-xl uppercase`}>Contenido en desarrollo</h3>
          <button
            onClick={onClose}
            className="text-neutral-50 hover:text-neutral-300"
            aria-label="Cerrar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
        </div>
        <p className="text-neutral-50 mb-6">
          <strong className="font-bold">{projectTitle}</strong> está actualmente en desarrollo. 
          Estamos trabajando para tener el contenido listo pronto.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-neutral-800 text-neutral-50 uppercase text-sm tracking-wider hover:bg-neutral-700"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}
