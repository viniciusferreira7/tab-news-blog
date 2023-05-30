import { ReactNode } from 'react'
import { Poppins, Courier_Prime as CourierPrime } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'

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
      className={`${poppins.className} ${courierPrime.className}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
