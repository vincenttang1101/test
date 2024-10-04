import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import { PrimaryButton } from '@/shared/components/common/PrimaryButton'

const DATA_TEMP = [
  {
    title: 'VPS Hosting',
    image: '/images/service/vps.svg',
    description: 'WordPress Hosting gives you speed performance with full of features.',
    url: '/'
  },
  {
    title: 'Dedicated Hosting',
    image: '/images/service/dedicated.svg',
    description: 'WordPress Hosting gives you speed performance with full of features.',
    url: '/'
  },
  {
    title: 'Email Hosting',
    image: '/images/service/email.svg',
    description: 'WordPress Hosting gives you speed performance with full of features.',
    url: '/'
  },
  {
    title: 'Cloud Hosting',
    image: '/images/service/cloud.svg',
    description: 'WordPress Hosting gives you speed performance with full of features.',
    url: '/'
  }
]

export const HostingServices = () => {
  return (
    <section className='bg-[#F6F6F6] py-[120px]'>
      <div className='container'>
        <div className='mb-[50px] flex flex-col justify-between gap-6 lg:flex-row lg:items-center'>
          <div className='max-w-[520px]'>
            <h6 className='mb-2.5 inline-block rounded-[3px] bg-white px-3.5 py-2 text-[0.938rem] font-medium capitalize leading-[100%] text-secondary'>
              Best Hosting
            </h6>
            <h2 className='-mt-[10px] mb-[25px] block text-[3rem] font-bold leading-[1.3] text-secondary-indigo-dark'>
              Best Hosting Services
            </h2>
            <p className='w-[95%] text-[1rem] text-accent-btc'>
              Select your solution and we will help you narrow down our best high-speed options to fit your needs.
            </p>
          </div>
          <Link href='/'>
            <PrimaryButton variant='secondary' className='w-[150px] font-semibold'>
              Learn More
            </PrimaryButton>
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {DATA_TEMP.map((item, index) => (
            <div
              key={index}
              className='transition-primary group rounded-[10px] border border-solid border-[#D4DCFF] bg-white py-[30px] pl-[30px] pr-10 hover:border-transparent hover:shadow-light'
            >
              <div className='relative mb-[25px] aspect-[52/52] max-h-[52px] w-full max-w-[52px]'>
                <Image src={item.image} fill className='object-contain' alt='' />
              </div>
              <Link href={item.url as any} className='mb-5 block text-[1.375rem] font-bold text-secondary'>
                {item.title}
              </Link>
              <p className='mb-[20px] min-h-[80px] text-[0.875rem] text-secondary'>{item.description}</p>
              <Link
                href={item.url as any}
                className='transition-primary mt-2.5 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#ecefff] text-secondary group-hover:bg-third'
              >
                <FaArrowRight className='size-6 min-w-6 text-secondary' />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
