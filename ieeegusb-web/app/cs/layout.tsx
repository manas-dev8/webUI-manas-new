import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CloudyTrailCursor from '@/components/CloudytrailCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IEEE Computer Society',
  description: 'Advancing Technology for Humanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <CloudyTrailCursor />
        {children}
      </body>
    </html>
  )
}