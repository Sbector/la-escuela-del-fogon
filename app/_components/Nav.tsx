"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Nav() {
  const navLinks = [
    { name: "INICIO", href: "/" },
    { name: "CONTACTO", href: "/contacto" },
  ]

  const [isMenuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
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
            className="fixed inset-0 bg-neutral-900 z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.97 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="text-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-neutral-50 text-3xl md:text-4xl hover:opacity-70 transition-opacity ${isActive ? "underline" : ""
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
