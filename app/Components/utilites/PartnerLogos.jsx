'use client'
import Marquee from 'react-fast-marquee'

export default function PartnerLogos () {
  return (
    <div className='mt-16 '>
      {/* Logos Marquee */}
      <Marquee
        gradient={true}
        gradientColor='#2c2348'
        speed={60}
        pauseOnHover={true}
        autoFill={true}
        className='   '
      >
        {[
          {
            src: '/meta.png',
            alt: 'Meta'
          },
          {
            src: '/google.png',
            alt: 'Google'
          },

          {
            src: '/aws.png',
            alt: 'AWS'
          },
          {
            src: '/st.png',
            alt: 'Shopify'
          },
          {
            src: '/az.png',
            alt: 'Amazon'
          },
          {
            src: '/tk.png',
            alt: 'TikTok'
          }
        ].map((logo, index) => (
          <div key={index} className='mx-4 flex items-center border border-white/10 p-4 rounded-lg bg-white/5'>
            <img src={logo.src} alt={logo.alt} className='h-12  ' />
          </div>
        ))}
      </Marquee>

      {/* Footer Text */}
      <p className='text-center text-sm text-gray-300 pt-16 pb-10 px-4'>
        © Metro Solver. All Rights Reserved 2024 | Registered in England & Wales
        Registration No: 15792819
      </p>
    </div>
  )
}
