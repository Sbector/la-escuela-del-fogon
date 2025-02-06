"use client"
import { Xanh_Mono } from 'next/font/google'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion" // Importar framer-motion

const xanhMono = Xanh_Mono({
    subsets: ['latin'],
    weight: '400', // Solo se permite '400'
});

const navLinks = [
    { name: "INICIO", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "CASOS", href: "/casos" },
    { name: "CONTACTO", href: "/contacto" },
]

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    return (
        <header className="fixed top-0 w-screen 
        flex justify-between items-center 
        px-4 py-3 h-16 
        z-50 border-b 
        border-neutral-900 bg-neutral-50">
            <h1 className={`text-4xl ${xanhMono.className}`}>LEDF</h1>

            {/* Usar motion.button para animación */}
            <motion.button
                onClick={toggleMenu}
                className={`bg-black 
                flex items-center justify-center 
                rounded-full focus:outline-none transition-all duration-300`}
                initial={{ width: "2rem", height: "2rem" }} // Tamaño inicial
                animate={{
                    scale: isMenuOpen ? 200 : 1.1, // Escala al hacer clic
                    borderRadius: isMenuOpen ? "50%" : "50%", // Mantiene la forma circular
                    top: isMenuOpen ? "0" : "0", // Alinea al centro cuando el menú está abierto
                    left: isMenuOpen ? "0" : "0", // Alinea al centro cuando el menú está abierto
                    x: isMenuOpen ? "0" : "0", // Ajuste para centrar el círculo
                    y: isMenuOpen ? "%" : "0", // Ajuste para centrar el círculo
                }}
                transition={{ duration: 0.25 }} // Transición suave
            >
            </motion.button>

            {/* Menú animado */}
            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center text-white z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // Efecto al cerrar
                    transition={{ duration: 0.7 }}
                >
                    <ul className="text-center text-4xl space-y-6">
                        {navLinks.map((link) => {
                            const isActive = pathname.startsWith(link.href)
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
                                        className={`hover:underline ${isActive ? "font-bold" : "font-normal"}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </motion.div>
            )}
        </header>
    )
}
