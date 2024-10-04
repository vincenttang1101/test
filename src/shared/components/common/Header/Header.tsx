import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FiChevronDown } from 'react-icons/fi'

import { LanguageEnum } from '@/shared/enums/common/language.enum'

import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import { MobileMenu } from './components/MobileMenu'
import StickyHeader from './components/StickyHeader'

type HeaderProps = {
  lng: LanguageEnum
}

export const Header = ({ lng }: HeaderProps) => {
  const menuItems = [
    // Column 1
    {
      href: 'about.html',
      imgSrc: '/images/mega-menu/01.svg',
      alt: 'About Icon',
      title: 'About Hostie',
      description: 'Get Know About Hostie'
    },

    {
      href: 'support.html',
      imgSrc: '/images/mega-menu/08.svg',
      alt: 'Support Icon',
      title: 'Support',
      description: 'Provide detailed explanation'
    },

    {
      href: 'domain-checker.html',
      imgSrc: '/images/mega-menu/12.svg',
      alt: 'Domain Checker Icon',
      title: 'Domain Checker',
      description: 'Provide detailed explanation'
    },

    {
      href: 'contact.html',
      imgSrc: '/images/mega-menu/16.svg',
      alt: 'Contact Icon',
      title: 'Contact',
      description: 'Contact with Hostie'
    },

    // Column 2
    {
      href: 'pricing.html',
      imgSrc: '/images/mega-menu/03.svg',
      alt: 'Pricing Icon',
      title: 'Pricing',
      description: 'Hostie Provide Pro Price'
    },
    {
      href: 'pricing-two.html',
      imgSrc: '/images/mega-menu/03.svg',
      alt: 'Pricing Package Icon',
      title: 'Pricing Package',
      description: 'Hostie Provide Pro Price'
    },
    {
      href: 'pricing-three.html',
      imgSrc: '/images/mega-menu/03.svg',
      alt: 'Pricing Comparison Icon',
      title: 'Pricing Comparison',
      description: 'Hostie Provide Pro Price'
    },
    {
      href: 'payment-method.html',
      imgSrc: '/images/mega-menu/20.svg',
      alt: 'Payment Method Icon',
      title: 'Payment Method',
      description: 'Payment Method'
    },
    // Column 3

    {
      href: 'affiliate.html',
      imgSrc: '/images/mega-menu/02.svg',
      alt: 'Affiliate Icon',
      title: 'Affiliate',
      description: 'Provide Detailed Explanation'
    },
    {
      href: 'business-mail.html',
      imgSrc: '/images/mega-menu/10.svg',
      alt: 'Business Mail Icon',
      title: 'Business Mail',
      description: 'Provide Detailed Explanation'
    },
    {
      href: 'partner.html',
      imgSrc: '/images/mega-menu/06.svg',
      alt: 'Partner Icon',
      title: 'Partner',
      description: 'Our Partners'
    },
    {
      href: 'domain-transfer.html',
      imgSrc: '/images/mega-menu/17.svg',
      alt: 'Domain Transfer Icon',
      title: 'Domain Transfer',
      description: 'Provide Detailed Explanation'
    },
    // Column 4
    {
      href: 'sign-up.html',
      imgSrc: '/images/mega-menu/04.svg',
      alt: 'Sign Up Icon',
      title: 'Sign Up',
      description: 'Create Content By You'
    },
    {
      href: 'sign-in.html',
      imgSrc: '/images/mega-menu/09.svg',
      alt: 'Sign In Icon',
      title: 'Sign In',
      description: 'Login Account'
    },
    {
      href: 'game-details.html',
      imgSrc: '/images/mega-menu/18.svg',
      alt: 'Game Details Icon',
      title: 'Game Details',
      description: 'We Will Be Soon'
    },
    {
      href: 'knowledgebase.html',
      imgSrc: '/images/mega-menu/11.svg',
      alt: 'Knowledgebase Icon',
      title: 'Knowledgebase',
      description: 'Read Hostie Article'
    },
    // Column5
    {
      href: 'blog.html',
      imgSrc: '/images/mega-menu/07.svg',
      alt: 'Blog Icon',
      title: 'Blog',
      description: 'Read Hostie Article'
    },
    {
      href: 'blog-list.html',
      imgSrc: '/images/mega-menu/07.svg',
      alt: 'Blog List Icon',
      title: 'Blog List',
      description: 'Read Hostie Article'
    },
    {
      href: 'blog-grid.html',
      imgSrc: '/images/mega-menu/07.svg',
      alt: 'Blog Grid Icon',
      title: 'Blog Grid',
      description: 'Read Hostie Article'
    },
    {
      href: 'blog-details.html',
      imgSrc: '/images/mega-menu/07.svg',
      alt: 'Blog Details Icon',
      title: 'Blog Details',
      description: 'Read Hostie Article'
    }
  ]

  const hostingMenuItems = [
    {
      href: 'shared-hosting.html',
      imgSrc: '/images/mega-menu/22.svg',
      alt: 'Shared Hosting Icon',
      title: 'Shared Hosting',
      description: 'Manage Shared Hosting'
    },
    {
      href: 'wordpress-hosting.html',
      imgSrc: '/images/mega-menu/23.svg',
      alt: 'WordPress Hosting Icon',
      title: 'WordPress Hosting',
      description: 'WordPress Hosting speed'
    },
    {
      href: 'vps-hosting.html',
      imgSrc: '/images/mega-menu/24.svg',
      alt: 'VPS Hosting Icon',
      title: 'VPS Hosting',
      description: 'Dedicated resources'
    },
    {
      href: 'reseller-hosting.html',
      imgSrc: '/images/mega-menu/25.svg',
      alt: 'Reseller Hosting Icon',
      title: 'Reseller Hosting',
      description: 'Earn additional revenue'
    },
    {
      href: 'dedicated-hosting.html',
      imgSrc: '/images/mega-menu/27.svg',
      alt: 'Dedicated Hosting Icon',
      title: 'Dedicated Hosting',
      description: 'Hosting that gives you tools'
    },
    {
      href: 'cloud-hosting.html',
      imgSrc: '/images/mega-menu/29.svg',
      alt: 'Cloud Hosting Icon',
      title: 'Cloud Hosting',
      description: 'Manage Cloud Hosting'
    }
  ]

  const domainMenuItems = [
    {
      href: 'domain-checker.html',
      title: 'Domain Checker'
    },
    {
      href: 'domain-transfer.html',
      title: 'Domain Transfer'
    },
    {
      href: 'domain-registration.html',
      title: 'Domain Registration'
    }
  ]

  const technologyMenuItems = [
    {
      href: 'technology.html',
      title: 'Technology'
    },
    {
      href: 'data-center.html',
      title: 'Data Centers'
    },
    {
      href: 'game-details.html',
      title: 'Game Details'
    }
  ]

  const helpCenterMenuItems = [
    {
      href: 'faq.html',
      title: 'FAQ'
    },
    {
      href: 'support.html',
      title: 'Support'
    },
    {
      href: 'contact.html',
      title: 'Contact'
    },
    {
      href: 'knowledgebase.html',
      title: 'Knowledgebase'
    },
    {
      href: 'hosting-offer-one.html',
      title: 'Ads Banner'
    }
  ]

  return (
    <Fragment>
      <StickyHeader />
      <header className='bg-hero-banner-gradient text-white'>
        {/* HEADER TOP AREA */}
        <div className='bg-[#1b78f2] py-2'>
          <div className='container'>
            <div className='flex flex-wrap items-center justify-between'>
              {/* Email */}
              <div className='flex items-center space-x-2'>
                <Link href='/' className='flex items-center space-x-1 text-[0.875rem] hover:text-blue-400'>
                  {/* Email icon và text sẽ mất dần trên màn hình nhỏ hơn md */}
                  <div className='hidden items-center space-x-1 lg:flex'>
                    <Image width={24} height={24} src='/images/icon/email.svg' alt='Email Icon' />
                    <span>contact@hostie.com</span>
                  </div>
                </Link>
              </div>

              {/* Hosting Flash Sale */}
              <div className='flex items-center space-x-2'>
                {/* Hosting Flash Sale sẽ biến mất trên màn hình nhỏ hơn md */}
                <div className='hidden items-center space-x-1 md:flex'>
                  <Image width={24} height={24} src='/images/icon/tag--group.svg' alt='Tag Icon' />
                  <p className='text-[0.875rem]'>
                    Hosting Flash Sale: Starting at <strong className='text-yellow-500'>$2.59/mo</strong> for a limited
                    time
                  </p>
                </div>
              </div>

              <div className='flex w-auto flex-nowrap items-center space-x-8'>
                {/* Live Chat */}
                <Link href='/' className='flex items-center space-x-2 hover:text-blue-400'>
                  <Image width={20} height={20} src='/images/icon/forum.svg' alt='Live Chat Icon' />
                  <span>Live Chat</span>
                </Link>

                {/* Login */}
                <div className='group relative'>
                  <button className='flex items-center space-x-2 focus:outline-none'>
                    <Image width={20} height={20} src='/images/icon/person.svg' alt='Login Icon' />
                    <span>Login</span>
                  </button>

                  <div className='pointer-events-none absolute -top-4 left-auto right-0 h-[50px] w-[120px] group-hover:pointer-events-auto'></div>

                  {/* Dropdown Menu */}
                  <div className='absolute -right-20 top-full z-50 mt-2 hidden w-[200px] rounded bg-white text-black shadow-lg group-hover:block'>
                    <form className='space-y-5 p-4'>
                      <input
                        type='email'
                        placeholder='Your email'
                        required
                        className='w-full rounded border border-gray-300 px-3 py-2'
                      />
                      <input
                        type='password'
                        placeholder='Password'
                        required
                        className='w-full rounded border border-gray-300 px-3 py-2'
                      />
                      <button className='w-full rounded-3xl bg-blue-700 py-2 text-white hover:border-third hover:bg-third'>
                        Log In
                      </button>
                      <Link href='/' className='text-[0.875rem] text-blue-500 hover:underline'>
                        Forgot your password?
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HEADER TOP AREA END */}
        {/* MAIN HEADER */}

        <div className='container flex flex-wrap items-center justify-between py-5'>
          {/* LOGO */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center space-x-5'>
              <Image
                width={150}
                height={50}
                src='/images/logo/logo-1.svg'
                alt='Hostie Logo White'
                className='block dark:hidden'
              />
              <Image
                width={150}
                height={50}
                src='/images/logo/logo-4.svg'
                alt='Hostie Logo Dark'
                className='hidden dark:block'
              />
            </Link>
          </div>

          {/* FOR Navigation Menu */}
          <nav className='hidden space-x-10 lg:flex'>
            {/* Home Menu with Mega Dropdown */}
            <div className='group relative'>
              <Link href='/' className='group relative flex items-center hover:text-white'>
                Home
                <FiChevronDown className='ml-2' />
                <span className='absolute bottom-0 left-0 h-[2px] w-[70%] scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100'></span>
              </Link>

              <div className='pointer-events-none absolute -left-2 right-0 top-5 z-50 h-[50px] w-[200px] group-hover:pointer-events-auto'></div>

              {/* Mega Menu */}
              {/* <div className='absolute left-0 top-full z-20 mt-2 hidden w-[800px] rounded bg-white text-black shadow-lg group-hover:block'> */}
              <div className='absolute left-0 top-full z-10 mt-10 hidden w-[800px] rounded-3xl bg-white text-black shadow-lg group-hover:block'>
                <div className='grid grid-cols-1 gap-10 p-10 sm:grid-cols-2 lg:grid-cols-5'>
                  {Array.from({ length: 11 }).map((_, index) => (
                    <div key={index} className='flex flex-col'>
                      <Link href={`index${index === 0 ? '' : `-${index + 1}`}.html` as any} className='block'>
                        <div className='relative mb-2 h-[150px] w-[120px]'>
                          <Image
                            src={`/images/home/home-${index + 1}.png`}
                            alt={`Home ${index + 1}`}
                            fill
                            className='rounded-md object-cover'
                          />
                        </div>
                        <h4 className='text-[1rem] font-semibold hover:text-blue-500'>
                          Home {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pages Menu with Mega Dropdown */}
            <div className='group relative'>
              <Link href='/' className='flex items-center hover:text-white'>
                Pages <FiChevronDown className='ml-2' />
                <span className='absolute bottom-0 left-0 h-[2px] w-[70%] scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100'></span>
              </Link>

              <div className='pointer-events-none absolute -left-48 top-5 z-50 h-[50px] w-[300px] group-hover:pointer-events-auto'></div>

              {/* Mega Menu */}
              <div className='absolute -left-[20rem] top-full z-10 mt-10 hidden w-[1200px] rounded-3xl bg-white text-black shadow-lg group-hover:block'>
                <div className='grid grid-cols-4 gap-x-8 gap-y-10 p-10'>
                  {menuItems.slice(0, 20).map((item, index) => (
                    <Link
                      href={item.href as any}
                      key={index}
                      className='flex items-center space-x-4 hover:text-blue-500'
                    >
                      <div className='flex h-16 w-16 items-center justify-center rounded-md bg-gray-100 shadow-lg'>
                        <Image width={24} height={24} src={item.imgSrc} alt={item.alt} className='object-cover' />
                      </div>
                      <div className='text-left'>
                        <p className='font-semibold'>{item.title}</p>
                        <span className='block w-[200px] max-w-xs text-[0.875rem] leading-relaxed'>
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Hosting Menu with Mega Dropdown */}
            <div className='group relative'>
              <Link href='/' className='flex items-center hover:text-white'>
                Hosting <FiChevronDown className='ml-2' />
                <span className='absolute bottom-0 left-0 h-[2px] w-[70%] scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100'></span>
              </Link>
              <div className='pointer-events-none absolute -left-12 right-0 top-5 z-50 h-[50px] w-[200px] group-hover:pointer-events-auto'></div>

              {/* Mega Menu */}
              <div className='absolute -left-[10rem] right-0 top-full z-10 mt-10 hidden w-[800px] rounded-3xl bg-white text-black shadow-lg group-hover:block'>
                <div className='grid grid-cols-1 gap-4 p-6 px-20 py-20 lg:grid-cols-2'>
                  {Array(2)
                    .fill(0)
                    .map((_, colIndex) => (
                      <ul key={colIndex}>
                        {hostingMenuItems.slice(colIndex * 3, (colIndex + 1) * 3).map((item, index) => (
                          <li key={index} className='mb-10'>
                            <Link href={item.href as any} className='flex items-center space-x-6 hover:text-blue-500'>
                              <div className='flex items-center rounded-md bg-gray-100 p-4'>
                                <Image width={24} height={24} src={item.imgSrc} alt={item.alt} />
                              </div>
                              <div>
                                <p className='font-semibold'>{item.title}</p>
                                <span className='block max-w-xs text-[0.875rem] leading-relaxed'>
                                  {item.description}
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                </div>
              </div>
            </div>

            {/* Domain Menu with Submenu */}
            <div className='group relative'>
              <Link href='/' className='flex items-center hover:text-white'>
                Domain <FiChevronDown className='ml-2' />
                <span className='absolute bottom-0 left-0 h-[2px] w-[70%] scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100'></span>
              </Link>

              <div className='pointer-events-none absolute top-5 z-50 h-[50px] w-[200px] group-hover:pointer-events-auto'></div>

              {/* Submenu */}
              <ul className='absolute left-0 right-0 top-full z-10 mt-10 hidden w-[240px] rounded-3xl bg-white text-black shadow-lg group-hover:block'>
                {domainMenuItems.map((item, index) => (
                  <li key={index} className='group/item'>
                    <Link
                      href={item.href as any}
                      className='relative block px-4 py-2 transition-all duration-300 hover:bg-gray-200'
                    >
                      <span className='relative pl-4 transition-all duration-300 group-hover/item:pl-10'>
                        <span className='absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 transform bg-black opacity-0 transition-all duration-300 group-hover/item:opacity-100'></span>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Menu with Submenu */}
            <div className='group relative'>
              <Link href='/' className='flex items-center hover:text-white'>
                Technology <FiChevronDown className='ml-2' />
                <span className='absolute bottom-0 left-0 h-[2px] w-[75%] scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100'></span>
              </Link>

              <div className='pointer-events-none absolute top-5 z-50 h-[50px] w-[200px] group-hover:pointer-events-auto'></div>

              {/* Submenu */}
              <ul className='absolute left-0 right-0 top-full z-10 mt-10 hidden w-[200px] rounded-3xl bg-white text-black shadow-lg group-hover:block'>
                {technologyMenuItems.map((item, index) => (
                  <li key={index} className='group/item'>
                    <Link
                      href={item.href as any}
                      className='relative block px-4 py-2 transition-all duration-300 hover:bg-gray-200'
                    >
                      <span className='relative pl-4 transition-all duration-300 group-hover/item:pl-10'>
                        <span className='absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 transform bg-black opacity-0 transition-all duration-300 group-hover/item:opacity-100'></span>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Center Menu with Submenu */}
            <div className='group relative'>
              <Link href='/' className='flex items-center hover:text-white'>
                Help Center <FiChevronDown className='ml-2' />
                <span className='absolute bottom-0 left-0 h-[2px] w-[80%] scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100'></span>
              </Link>
              <div className='pointer-events-none absolute top-5 z-50 h-[50px] w-[200px] group-hover:pointer-events-auto'></div>

              {/* Submenu */}
              <ul className='absolute left-0 right-0 top-full z-10 mt-10 hidden w-[230px] rounded-3xl bg-white text-black shadow-lg group-hover:block'>
                {helpCenterMenuItems.map((item, index) => (
                  <li key={index} className='group/item'>
                    <Link
                      href={item.href as any}
                      className='relative block px-4 py-2 transition-all duration-300 hover:bg-gray-200'
                    >
                      <span className='relative pl-4 transition-all duration-300 group-hover/item:pl-14'>
                        <span className='absolute left-0 top-1/2 h-0.5 w-10 -translate-y-1/2 transform bg-black opacity-0 transition-all duration-300 group-hover/item:opacity-100'></span>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Header Right */}
          <div className='flex items-center space-x-4'>
            <Link
              href='/'
              className='hidden flex-shrink-0 whitespace-nowrap rounded-full border border-white px-8 py-3 text-white transition-colors hover:border-third hover:bg-third hover:text-black md:inline-block'
              target='_blank'
              rel='noopener noreferrer'
            >
              Client Area
            </Link>
            <LanguageSwitcher />
            {/* Mobile Menu Button */}
            <button id='menu-btn' aria-label='Menu' className='text-white focus:outline-none lg:hidden'>
              <i className='fa-sharp fa-solid fa-bars text-[1.5rem]'></i>
            </button>
            <MobileMenu />
          </div>
        </div>
      </header>
      {/* HEADER AREA END */}
    </Fragment>
  )
}
