"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
    { name: "about", href: "/about" },
    { name: "casos", href: "/casos" },
    { name: "contacto", href: "/contacto" },
]

export default function Nav() {
    const pathname = usePathname()
    return (
        <ul>
            <li className="font-black text-emerald-500">
                <Link href="/">LA ESCUELA DEL FOGÓN</Link>
            </li>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return (
                    <li key={link.name} className={isActive ? "font-bold text-emerald-600" : "font-normal text-emerald-800"}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                )
            })}
        </ul>
    )
}