'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Partner = () => {
  return (
    <div>
      <div className='mb-[50px]'>
        <h3 className='text-accent-btc mb-[20px] text-center text-[1.5rem] font-bold'>
          Hosting solutions trusted by the owners of <span className='font-semibold'>2,800,000</span> domains.
        </h3>
        <div className='grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2'>
          <div className='flex items-center gap-2'>
            <span>Excellent</span> <Image width={96} height={26} src='/images/brand/review-star.svg' alt='' />
          </div>
          <div className='flex items-center gap-2'>
            <span>954 reviews on</span> <Image width={82} height={20} src='/images/brand/trust-pilot.svg' alt='' />
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        speed={3000}
        loop={true}
        modules={[Autoplay]}
        className='w-full'
        slidesPerView={'auto'}
        breakpoints={{
          1024: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 4
          },
          576: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 2
          }
        }}
      >
        {Array(9)
          .fill(0)
          .map((item, index) => (
            <SwiperSlide key={index + 1}>
              <Link href='/' className='relative inline-block aspect-[100/24] max-h-[24px] w-full'>
                <Image
                  fill
                  src={`/images/brand/0${index + 1}.svg`}
                  alt=''
                  className='transition-primary saturate-[0.15] hover:filter-none'
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
