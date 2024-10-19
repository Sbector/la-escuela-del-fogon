import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Wrapper from './_components/Wrapper'

const degheest = localFont({ src: './fonts/Director-Regular.woff2' })


export const metadata: Metadata = {
  title: 'La escuela del fogón',
  description: 'Cocinando la revolución en américa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='relative'>
      <body className={`bg-white ${degheest.className}`}>
        <main>
          <Wrapper>
            {children}
          </Wrapper>
        </main>
      </body>
    </html>
  )
}
