import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nails by Neea Dream Nails — Tekoälykynsidesignit',
  description:
    'Kuvaile unelmiesi kynsidesign ja saa kauniit tekoälygeneroidut esimerkit, räätälöitynä visioosi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
