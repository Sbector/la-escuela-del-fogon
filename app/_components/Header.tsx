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

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="sticky top-0 flex justify-between items-center px-4 py-6 h-16 z-50 bg-neutral-50">
            <h1 className={`text-4xl ${xanhMono.className}`}>LEDF</h1>
            <button className="bg-black text-white px-3 py-1 rounded-full">
                +
            </button>
            {/* <ul className='flex gap-4 px-4 py-2 text-xl'>
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <li key={link.name} className={isActive ? "font-bold" : "font-normal"}>
                            <Link href={link.href}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul> */}
        </header>
    )
}