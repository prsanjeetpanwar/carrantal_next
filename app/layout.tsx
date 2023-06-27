import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Car Town',
  description: 'this is best place to get your dream car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
       className='relative'>
        <Navbar/>
       
       {children}
       <Footer/>
       </body>
    </html>
  )
}
