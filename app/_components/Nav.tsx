"use client"
import Link from "next/link"
import type React from "react"

import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cases } from "../_data/cases"

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLLIElement>(null)

  // Controlar el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      // Guardar la posición actual del scroll
      const scrollY = window.scrollY

      // Bloquear el scroll y mantener la posición
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
    } else {
      // Restaurar el scroll cuando el menú se cierra
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""

      // Restaurar la posición del scroll
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1)
      }
    }

    // Limpiar al desmontar el componente
    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [isMenuOpen])

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Cerrar dropdown al cambiar de ruta
  useEffect(() => {
    setDropdownOpen(false)
  }, [pathname])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
    if (isDropdownOpen) setDropdownOpen(false)
  }

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation()
    setDropdownOpen(!isDropdownOpen)
  }

  return (
    <>
      {/* Botón del menú */}
      <motion.button
        onClick={toggleMenu}
        className={`
          flex items-center justify-center 
          rounded-full focus:outline-none z-50
          fixed top-0 right-4 md:right-8
          h-16 w-10
        `}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <motion.div
          className={`rounded-full ${isMenuOpen ? "bg-neutral-50" : "bg-neutral-900"}`}
          initial={{ width: "0.5rem", height: "0.5rem" }}
          animate={{
            width: isMenuOpen ? "1.2rem" : "1rem",
            height: isMenuOpen ? "1.2rem" : "1rem",
          }}
          transition={{ duration: 0.2 }}
        ></motion.div>
      </motion.button>

      {/* Overlay del menú */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-900 z-40 flex items-center justify-center overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.97 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-center py-20 px-4 w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {/* Enlaces principales */}
              <motion.ul className="space-y-6">
                {/* Enlace INICIO */}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className={`text-neutral-50 text-3xl md:text-4xl hover:opacity-70 transition-opacity ${pathname === "/" ? "underline" : ""
                      }`}
                  >
                    INICIO
                  </Link>
                </motion.li>

                {/* Dropdown CASOS */}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="relative"
                  ref={dropdownRef as React.Ref<HTMLLIElement>}
                >
                  <button
                    onClick={toggleDropdown}
                    className={`text-neutral-50 text-3xl md:text-4xl hover:opacity-70 transition-opacity flex items-center justify-center mx-auto ${pathname.includes("/casos") ? "underline" : ""
                      }`}
                  >
                    CASOS
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
                      className={`ml-2 w-5 h-5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 py-4 px-6 bg-neutral-800 rounded-md text-left max-h-[50vh] overflow-auto"
                      >
                        <ul className="space-y-3">
                          {cases.map((caseItem) => {
                            const isActive = pathname === caseItem.slug
                            return (
                              <li key={caseItem.caseNumber}>
                                {caseItem.isComingSoon ? (
                                  // Caso inactivo (en desarrollo) - sin funcionalidad de clic
                                  <div className="text-neutral-50/40 text-lg flex items-center gap-2 cursor-default">
                                    <span className="opacity-60 text-sm font-extralight">{caseItem.caseNumber}</span>
                                    <span className="truncate">{caseItem.title}</span>
                                    <span className="text-xs font-extralight uppercase bg-neutral-700 px-1.5 py-0.5 rounded text-neutral-300 ml-1 mt-1 whitespace-nowrap">
                                      Próx.
                                    </span>
                                  </div>
                                ) : (
                                  // Caso activo
                                  <Link
                                    href={caseItem.slug}
                                    onClick={() => setMenuOpen(false)}
                                    className={`text-neutral-50 text-lg hover:opacity-70 transition-opacity flex items-center gap-2 ${isActive ? "font-medium" : ""
                                      }`}
                                  >
                                    <span className="text-sm font-extralight">{caseItem.caseNumber}</span>
                                    <span className={`truncate ${isActive ? "underline underline-offset-4" : ""}`}>
                                      {caseItem.title}
                                    </span>
                                  </Link>
                                )}
                              </li>
                            )
                          })}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Enlace CONTACTO */}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Link
                    href="/contacto"
                    onClick={() => setMenuOpen(false)}
                    className={`text-neutral-50 text-3xl md:text-4xl hover:opacity-70 transition-opacity ${pathname === "/contacto" ? "underline" : ""
                      }`}
                  >
                    CONTACTO
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
