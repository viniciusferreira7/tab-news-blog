import { ReactNode } from 'react'
import { Poppins, Courier_Prime as CourierPrime } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins-sans',
})

const courierPrime = CourierPrime({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-courier-prime-mono',
})

export const metadata: Metadata = {
  title: 'TabNews',
  description: 'Vinicius Ferreira Blog',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={`${poppins.variable} ${courierPrime.variable}`}
    >
      <body className="lg:grid lg:grid-cols-[24.25rem_1fr] xl:grid-cols-[34.25rem_1fr] ">
        <Header />
        <div className="lg:p-10 p-3">
          <main className="lg:h-[calc(100vh-8.556rem)] h-[calc(100vh-23.55rem)] overflow-scroll ">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
