'use client'
import React, { useState } from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FiChevronDown, FiMenu } from 'react-icons/fi'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/shared/components/cores/ui/sheet'

interface SubmenuItem {
  label: string
  link: string
}

interface Submenus {
  [key: string]: SubmenuItem[]
}

interface MobileMenuProps {
  colorScheme?: 'white' | 'black'
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ colorScheme = 'white' }) => {
  const [openItem, setOpenItem] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item)
  }

  const submenus: Submenus = {
    Home: [
      { label: 'Home One', link: '/home-one' },
      { label: 'Home Two', link: '/home-two' },
      { label: 'Home Three', link: '/home-three' },
      { label: 'Home Four', link: '/home-four' },
      { label: 'Home Five', link: '/home-five' },
      { label: 'Home Six', link: '/home-six' },
      { label: 'Home Seven', link: '/home-seven' },
      { label: 'Home Eight', link: '/home-eight' },
      { label: 'Home Nine', link: '/home-nine' },
      { label: 'Home Ten', link: '/home-ten' },
      { label: 'Home Eleven', link: '/home-eleven' }
    ],
    Pages: [
      { label: 'About', link: '/about' },
      { label: 'Affiliate', link: '/affiliate' },
      { label: 'Pricing', link: '/pricing' },
      { label: 'Sign Up', link: '/signup' },
      { label: 'Whois', link: '/Whois' },
      { label: 'Partner', link: '/Partner' },
      { label: 'Blog', link: '/blog' },
      { label: 'Blog List', link: '/blog-list' },
      { label: 'Blog Grid', link: '/blog-grid' },
      { label: 'Support', link: '/support' }
    ],
    Hosting: [
      { label: 'Shared Hosting', link: '/shared-hosting' },
      { label: 'WordPress Hosting', link: '/wordpress-hosting' },
      { label: 'VPS Hosting', link: '/vps-hosting' },
      { label: 'Reseller Hosting', link: '/reseller-hosting' },
      { label: 'Dedicated Hosting', link: '/dedicated-hosting' },
      { label: 'Cloud Hosting', link: '/cloud-hosting' }
    ],
    Domain: [
      { label: 'Domain Checker', link: '/domain-checker' },
      { label: 'Domain Transfer', link: '/domain-transfer' }
    ],
    Technology: [
      { label: 'Technology', link: '/technology' },
      { label: 'Data Center', link: '/data-center' },
      { label: 'Game Details', link: '/game-details' }
    ],
    'Help Center': [
      { label: 'Knowledgebase', link: '/knowledgebase' },
      { label: 'Ads Banner', link: '/ads-banner' },
      { label: 'Whois', link: '/whois' },
      { label: 'Support', link: '/support' },
      { label: 'Contact', link: '/contact' }
    ]
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className={`rounded-lg border-2 p-2 focus:outline-none xl:hidden ${
            colorScheme === 'white' ? 'border-white text-white' : 'border-black text-black'
          }`}
        >
          <FiMenu className='text-[1.5rem]' />
        </button>
      </SheetTrigger>

      <SheetContent className='fixed inset-y-0 right-0 z-50 flex h-full w-[85%] !max-w-none flex-col bg-white'>
        <div className='relative p-5'>
          <SheetClose asChild>
            <button className='absolute -left-7 -top-14 flex h-[50px] w-[50px] items-center justify-center rounded-lg bg-blue-500 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-10 w-10'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </SheetClose>
        </div>

        {/* Menu Items */}
        <nav className='space-y-4 px-6'>
          {Object.keys(submenus).map((item: string) => (
            <div key={item} className='border-b'>
              <button
                className={`flex w-full justify-between py-2 text-left focus:outline-none`}
                onClick={() => toggleItem(item)}
                aria-expanded={openItem === item}
                aria-controls={`submenu-${item}`}
              >
                <span className='text-xl font-medium text-black'>{item}</span>
                <FiChevronDown
                  className={`text-xl text-gray-600 transition-transform ${openItem === item ? 'rotate-180 transform' : ''}`}
                />
              </button>

              {openItem === item && (
                <div className='pl-4'>
                  {submenus[item].map((subItem: SubmenuItem, index: number) => (
                    <div key={subItem.label} className={`border-b py-2 ${index === 0 ? 'border-t' : ''}`}>
                      <a href={subItem.link} className='block text-lg text-black'>
                        {subItem.label}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className='flex space-x-6 p-4'>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-2xl text-gray-600 hover:text-black' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='text-2xl text-gray-600 hover:text-black' />
            </a>
            <a href='https://youtube.com' target='_blank' rel='noopener noreferrer'>
              <FaYoutube className='text-2xl text-gray-600 hover:text-black' />
            </a>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-2xl text-gray-600 hover:text-black' />
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
