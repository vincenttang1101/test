import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { PrimaryButton } from '@/shared/components/common/PrimaryButton'

import { Partner } from '../Partner'

const DATA_TEMP = [
  {
    title: 'Attentive was born in 2015 help sales teams VPS hosting',
    image: '/images/blog/blog-1.png',
    category: 'Web Hosting',
    publishedDate: '20 Aug 2024',
    description: 'WordPress Hosting gives you speed performance with full of features.',
    author: {
      name: 'Mack jon',
      image: '/images/author/author__one.png',
      position: 'Developer & Web serenity'
    }
  },
  {
    title: 'Attentive was born in 2015 help sales teams VPS hosting',
    image: '/images/blog/blog-2.png',
    category: 'Domain',
    publishedDate: '20 Aug 2024',
    description: 'WordPress Hosting gives you speed performance with full of features.',
    author: {
      name: 'Rubel Hossen',
      image: '/images/author/author__two.png',
      position: 'Developer & Web serenity'
    }
  },
  {
    title: 'Attentive was born in 2015 help sales teams VPS hosting',
    image: '/images/blog/blog-3.png',
    category: 'Web Hosting',
    publishedDate: '20 Aug 2024',
    description: 'WordPress Hosting gives you speed performance with full of features.',
    author: {
      name: 'Ahmad Eamin',
      image: '/images/author/author__three.png',
      position: 'Developer & Web serenity'
    }
  }
]

export const LatestBlog = () => {
  return (
    <section className='bg-[#F6F6F6]'>
      <div className='container rounded-[20px] bg-white py-[120px]'>
        <div className='mb-[50px] flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h6 className='mb-2.5 inline-block rounded-[3px] border bg-white px-[14px] py-[8px] text-[0.938rem] font-medium capitalize leading-[100%] text-secondary'>
              our blog
            </h6>
            <h2 className='text-[3rem] font-bold text-[#2D3C58]'>Latest Blog</h2>
          </div>
          <div className='lg:max-w-[560px]'>
            <p className='text-accent-btc text-[1rem] font-medium'>
              We’ll move your first website to Cloud ways from any web host for without breaking your live site hosted
              on the old host.
            </p>
          </div>
        </div>
        {/* blog start */}
        <div className='grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3'>
          {DATA_TEMP.map((item, index) => (
            <div key={index} className='overflow-hidden rounded-[6px] bg-white shadow-blogCard'>
              <Link href='/' className='relative inline-block aspect-[425/260] max-h-[260px] w-full'>
                <Image fill className='object-cover' src={item.image} alt='blog post thumb' />
              </Link>
              <div className='px-[30px] pb-[45px] pt-[25px]'>
                <div className='flex items-center gap-4'>
                  <Link
                    href='/'
                    className='transition-primary text-[0.875rem] font-semibold text-[#2D3C58] hover:text-[#0774FF]'
                  >
                    {item.category}
                  </Link>
                  <span className='h-[6px] w-[6px] rounded-full bg-[#A9A9A9]'></span>
                  <span className='text-[0.875rem] font-semibold text-[#A9A9A9]'>{item.publishedDate}</span>
                </div>
                <Link
                  href='/'
                  className='transition-primary block min-h-[9rem] w-full pb-[20px] pt-[10px] text-[1.25rem] font-bold leading-[3rem] text-[#2D3C58] hover:text-[#0774FF]'
                >
                  <span className='line-clamp-3'>{item.title}</span>
                </Link>

                <div className='flex items-center gap-[16px] border-t pt-[20px]'>
                  <Image width={40} height={40} src={item.author.image} alt='' />
                  <div className='flex flex-col'>
                    <Link
                      href='/'
                      className='transition-primary block text-[1rem] font-bold text-secondary hover:text-[#0774FF]'
                    >
                      <span className='line-clamp-1'>{item.author.name}</span>
                    </Link>
                    <p className='line-clamp-1 text-[0.875rem] text-[#858585]'> {item.author.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* light cta */}
        <div className='mb-[120px] mt-[60px] flex flex-wrap items-center justify-center gap-[30px]'>
          <p className='text-[1rem] font-semibold text-secondary'>Looking for a Hosting solution?</p>
          <Link href='/'>
            <PrimaryButton variant='ghost' size='sm' className='w-[120px] font-semibold capitalize'>
              Contact Us
            </PrimaryButton>
          </Link>
        </div>
        {/* Partner */}
        <Partner />
      </div>
    </section>
  )
}
