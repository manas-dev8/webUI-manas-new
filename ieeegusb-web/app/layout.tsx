import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IEEE Student Branch, Galgotias University',
  description: 'Official website of the IEEE Student Branch at Galgotias University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

