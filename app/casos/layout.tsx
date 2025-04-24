import type { ReactNode } from "react"
import { Azeret_Mono } from "next/font/google"

const azeret = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
})

interface CasosLayoutProps {
  children: ReactNode
}

export default function CasosLayout({ children }: CasosLayoutProps) {
  return <div className={`${azeret.className} w-full min-h-[calc(100vh-4rem)] overflow-y-auto`}>{children}</div>
}
