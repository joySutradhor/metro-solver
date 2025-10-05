import { Outfit } from 'next/font/google'
import './globals.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

// Load Outfit font
const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Metro Solver',
  description: 'Your Trusted It-Partner'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.className} font-sans antialiased bg-[#28303F] text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
