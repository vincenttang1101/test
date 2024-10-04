import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  FaArrowRight,
  FaBehance,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter
} from 'react-icons/fa' // Import react-icons

export const Footer = () => {
  return (
    <footer className='bg-[#f5f5f5] pb-[80px] pt-[120px]'>
      <div className='container grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {/* Column 1: Logo and Contact */}
        <div className='space-y-6'>
          <Link href='/'>
            <Image src='/images/logo/footer__two__logo.svg' alt='Footer Logo' width={150} height={40} />
          </Link>
          <p className='pt-10 text-gray-500'>
            1811 Silverside Rd, Wilmington <br /> DE 19810, USA
          </p>
          <div className='my-4 w-80 border-t border-gray-300'></div>
          <div className='space-y-8'>
            <Link href='/' className='flex items-center text-gray-500 hover:text-blue-800'>
              <span className='mr-4 flex h-[34px] w-[34px] items-center justify-center rounded-md bg-blue-600 text-white'>
                <FaPhone />
              </span>
              +806 (000) 88 99
            </Link>
            <Link href='/' className='flex items-center text-gray-500 hover:text-blue-800'>
              <span className='mr-4 flex h-[34px] w-[34px] items-center justify-center rounded-md bg-blue-600 text-white'>
                <FaEnvelope />
              </span>
              info@hostie.com
            </Link>
          </div>
        </div>

        {/* Column 2: Company Links */}
        <div className='space-y-6'>
          <h5 className='font-bold text-gray-800'>Company</h5>
          <ul className='space-y-4 pt-10 text-gray-500'>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                News Feed
              </Link>
            </li>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                Contact
              </Link>
            </li>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                Our Technology
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Hosting Links */}
        <div className='space-y-6'>
          <h5 className='font-bold text-gray-800'>Hosting</h5>
          <ul className='space-y-4 pt-10 text-gray-500'>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                Domain Checker
              </Link>
            </li>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                Domain Transfer
              </Link>
            </li>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                Domain Registration
              </Link>
            </li>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                Data Centers
              </Link>
            </li>
            <li>
              <Link href='/' className='transition-all duration-300 hover:text-blue-600'>
                Whois
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter and Social Media */}
        <div className='space-y-6'>
          <h5 className='pb-10 font-bold text-gray-800'>Join Our Newsletter</h5>
          <p>We&apos;ll send you news and offers.</p>
          <form className='relative my-4'>
            <span className='absolute left-5 top-1/2 -translate-y-1/2 transform text-gray-400'>
              <FaEnvelope />
            </span>
            <input
              type='email'
              name='email'
              placeholder='Enter mail'
              className='w-full rounded-full border border-gray-300 py-4 pl-14 focus:outline-none'
            />
            <button
              type='submit'
              className='absolute right-2 top-1/2 flex h-[40px] w-[40px] -translate-y-1/2 rotate-[-35deg] transform items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:bg-third hover:text-black'
            >
              <FaArrowRight />
            </button>
          </form>

          <h5 className='pb-2 font-bold text-gray-800'>Social Media</h5>
          <div className='flex space-x-4'>
            <Link
              href='/'
              className='flex h-[34px] w-[34px] items-center justify-center border border-gray-300 bg-white text-gray-500 transition hover:bg-blue-600 hover:text-white'
            >
              <FaFacebookF />
            </Link>
            <Link
              href='/'
              className='flex h-[34px] w-[34px] items-center justify-center border border-gray-300 bg-white text-gray-500 transition hover:bg-blue-600 hover:text-white'
            >
              <FaInstagram />
            </Link>
            <Link
              href='/'
              className='flex h-[34px] w-[34px] items-center justify-center border border-gray-300 bg-white text-gray-500 transition hover:bg-blue-600 hover:text-white'
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href='/'
              className='flex h-[34px] w-[34px] items-center justify-center border border-gray-300 bg-white text-gray-500 transition hover:bg-blue-600 hover:text-white'
            >
              <FaTwitter />
            </Link>
            <Link
              href='/'
              className='flex h-[34px] w-[34px] items-center justify-center border border-gray-300 bg-white text-gray-500 transition hover:bg-blue-600 hover:text-white'
            >
              <FaBehance />
            </Link>
          </div>
        </div>
      </div>

      {/* Payment Methods and Copyright */}
      <div className='mt-10 border-t border-gray-300 pt-6'>
        <div className='container flex flex-col items-center justify-between md:flex-row'>
          <p className='text-gray-500'>&copy; 2024. All Rights Reserved.</p>
          <div className='mt-4 flex space-x-4 md:mt-0'>
            <Image src='/images/payment/visa.svg' alt='Visa' width={50} height={30} />
            <Image src='/images/payment/master-card.svg' alt='MasterCard' width={50} height={30} />
            <Image src='/images/payment/paypal.svg' alt='PayPal' width={50} height={30} />
            <Image src='/images/payment/american-express.svg' alt='American Express' width={50} height={30} />
            <Image src='/images/payment/wise.svg' alt='Wise' width={50} height={30} />
          </div>
        </div>
      </div>
    </footer>
  )
}
