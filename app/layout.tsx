import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthGate } from '@/components/auth-gate'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Hot Sale 2026 | Tiendanube Evolucion',
  description: 'Guia estrategica exclusiva Tiendanube Evolución. Estrategias, tendencias y el checklist definitivo para escalar tu Tiendanube en Hot Sale Argentina 2026.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <AuthGate>{children}</AuthGate>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
