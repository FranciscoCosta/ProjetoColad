
import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navabar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProjetoColad',
  description: 'Um website para o ecnontrar desenvolvedores para a tua ideia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
