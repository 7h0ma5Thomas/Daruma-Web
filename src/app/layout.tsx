import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Daruma-web',
  description:
    'Création de site web sur mesure, 100% personnalisable et à votre image.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-FR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
