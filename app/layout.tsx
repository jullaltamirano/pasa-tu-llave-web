import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Footer, SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'PasaTuLlave | Compra y vende autos con confianza',
  description: 'Autos usados inspeccionados, con kilometraje validado y precios justos. Vende tu auto de forma rápida y segura.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0B2B45',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
