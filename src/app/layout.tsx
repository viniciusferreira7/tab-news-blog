import { ReactNode } from 'react'
import { Poppins, Courier_Prime as CourierPrime } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-poppins-sans',
})

const courierPrime = CourierPrime({
  subsets: ['latin'],
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
          <main>{children}</main>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
