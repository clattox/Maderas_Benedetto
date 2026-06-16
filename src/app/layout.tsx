import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Maderas Benedetto | Aserradero en Los Álamos, Biobío',
  description:
    'Maderas Benedetto: aserradero y comercializadora de madera en Los Álamos, Provincia de Arauco, Región del Biobío. Madera dimensionada, vigas, tablas, polines y más. Calidad y experiencia.',
  keywords: [
    'aserradero en Los Álamos',
    'venta de madera en Cañete',
    'madera dimensionada Biobío',
    'maderas en Provincia de Arauco',
    'Maderas Benedetto',
    'aserradero Biobío',
    'madera Lebu',
    'madera Arauco',
    'vigas madera Chile',
    'polines madera',
  ],
  authors: [{ name: 'Maderas Benedetto' }],
  openGraph: {
    title: 'Maderas Benedetto | Calidad y Experiencia en Productos de Madera',
    description:
      'Aserradero y comercializadora de madera en la Provincia de Arauco. Producción local, calidad garantizada y atención personalizada.',
    url: 'https://www.maderasbenedetto.cl',
    siteName: 'Maderas Benedetto',
    locale: 'es_CL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.maderasbenedetto.cl',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body bg-white text-gray-800 antialiased">
        {children}
      </body>
    </html>
  )
}
