"use client"
import { Xanh_Mono } from 'next/font/google'
import Link from "next/link"


const xanhMono = Xanh_Mono({
    subsets: ['latin'],
    weight: '400', // Solo se permite '400'
});

export default function Header() {
    

    return (
        <header className="fixed top-0 w-screen 
        flex justify-between items-center 
        px-4 py-3 h-16 
        z-50 border-b 
        border-neutral-900 bg-neutral-50">
            <Link href="/">
                <h1 className={`text-4xl md:hidden ${xanhMono.className}`}>LEDF</h1>
                <h1 className={`text-4xl hidden md:flex ${xanhMono.className}`}>LA ESCUELA DEL FOGÓN</h1>
            </Link>

            
        </header>
    )
}
