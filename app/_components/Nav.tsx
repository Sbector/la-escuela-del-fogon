"use client"
import { Xanh_Mono } from 'next/font/google'
import Link from "next/link"
import { usePathname } from "next/navigation"

const xanhMono = Xanh_Mono({
    subsets: ['latin'],
    weight: '400', // Solo se permite '400'
  });

const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "CASOS", href: "/casos" },
    { name: "CONTACTO", href: "/contacto" },
]

export default function Nav() {
    const pathname = usePathname()
    return (
        <div className={`flex h-[80px] justify-between ${xanhMono.className}`}>
            <Link href="/" className="text-7xl
            p-2
            ">LA ESCUELA DEL FOGÓN</Link>
            <ul className='flex gap-4 px-4 py-2 text-xl'>
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <li key={link.name} className={isActive ? "font-bold" : "font-normal"}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}