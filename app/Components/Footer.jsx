// components/Footer.tsx
'use client'

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import PartnerLogos from './utilites/PartnerLogos'
import Image from 'next/image'

export default function Footer () {
  return (
    <footer className='bg-gradient-to-b from-[#282f3f] via-[#2d184d] to-[#2b2546] text-white px-6 md:px-16 pt-[10vh] '>
      {/* Newsletter Section */}
      <div className='mb-16  bg-white/4 rounded-4xl py-10 px-16'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 mb-10'>
          <div>
            <Image src='/logo.gif' alt='Logo' width={100} height={50} />
          </div>
          <div className='text-4xl font-bold '>
            <h2>Metro Solver</h2>
            <p className='text-sm text-gray-400'>YOUR IT PARTNER</p>
          </div>
        </div>

        {/* subscribe btn */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-16'>
          <div className='text-left'>
            <h2 className='text-2xl md:text-3xl font-semibold mb-2'>
              Subscribe to Our Newsletter
            </h2>
            <p className='text-sm md:text-base text-gray-300 mb-4'>
              Join the 25000+ client in our company
            </p>
          </div>
          <div className='flex justify-center items-center bg-white/80 rounded-full p-1'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full max-w-md px-4 py-2 rounded-l-lg text-black focus:outline-none '
            />
            <button className='bg-[#6F4EF2] hover:bg-[#5A3CCF] text-white px-6 py-2 rounded-full'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 xl:gap-10 2xl:gap-16 text-lg mt-[15vh]'>
        {/* Contact */}
        <div className='space-y-5'>
          <h3 className='text-3xl font-bold mb-5'>Got Questions? Call us!</h3>
          <p className='flex items-start gap-2'>
            <FaMapMarkerAlt className='mt-1' /> Metro Solver Limited, Grantham
            Road, London E12 5LX
          </p>
          <p className='flex items-center gap-2'>
            <FaPhone /> +44 7936 455446
          </p>
          <p className='flex items-center gap-2'>
            <FaEnvelope /> official@metrosolver.com
          </p>
          <div className='mt-4'>
            <label className='block mb-1 text-gray-400'>Country Currency</label>
            <div className='flex items-center bg-gray-700 px-3 py-2 rounded-lg w-fit'>
              <span className='mr-2'>🇬🇧 GBP - British Pound</span>
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className='font-semibold mb-5'>Company</h4>
          <ul className='space-y-1 text-gray-300'>
            <li>Home</li>
            <li>About us</li>
            <li>Our Team</li>
            <li>User Profile</li>
            <li>White Labelling</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className='font-semibold mb-5'>About Us</h4>
          <ul className='space-y-1 text-gray-300'>
            <li>Our Stories</li>
            <li>Career</li>
            <li>Send Message</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className='font-semibold mb-5'>Support</h4>
          <ul className='space-y-1 text-gray-300'>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Start Earning</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className='font-semibold mb-5'>Services</h4>
          <ul className='space-y-1 text-gray-300'>
            <li>Digital Marketing</li>
            <li>Creative Writing Solution</li>
            <li>Web & Software Development</li>
            <li>E-Commerce Solution</li>
            <li>Graphic Design</li>
            <li>Multimedia & Video Editing</li>
            <li>Merchandise</li>
            <li>Premium Website</li>
            <li>Premium Domains</li>
            <li>Special Combo</li>
          </ul>
        </div>
      </div>

      {/* Bottom Logos */}
      <div>
        <PartnerLogos />
      </div>
    </footer>
  )
}
