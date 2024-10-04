'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const DATA_TEMP = [
  {
    image: '/images/testimonials/author.png',
    name: 'Jamie Knop',
    position: 'Business Owner'
  },
  {
    image: '/images/testimonials/author-2.png',
    name: 'Samira Khan',
    position: 'Digital marketer'
  },
  {
    image: '/images/testimonials/author-3.png',
    name: 'Rubel Hossen',
    position: 'Software Developer'
  },
  {
    image: '/images/testimonials/author.png',
    name: 'Rubel Hossen',
    position: 'Software Developer'
  },
  {
    image: '/images/testimonials/author.png',
    name: 'Jamie Knop',
    position: 'Business Owner'
  },
  {
    image: '/images/testimonials/author-2.png',
    name: 'Samira Khan',
    position: 'Digital marketer'
  },
  {
    image: '/images/testimonials/author-3.png',
    name: 'Rubel Hossen',
    position: 'Software Developer'
  },
  {
    image: '/images/testimonials/author.png',
    name: 'Rubel Hossen',
    position: 'Software Developer'
  }
]

export const Testimonial = () => {
  return (
    <section className='relative bg-[#F6F6F6] pb-[180px] pt-[120px]'>
      <div className='container'>
        <div className='mx-auto mb-[60px] flex flex-col gap-[20px] text-center sm:max-w-[500px]'>
          <h2 className='text-[3rem] font-bold text-secondary'>Our Client Feedback</h2>
          <p className='text-accent-btc text-[1rem]'>
            We’re honored and humbled by the great feedback we receive from our customers on a daily basis.
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          initialSlide={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          speed={3000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          className='w-full'
          pagination={{
            el: '#testimonialPagination',
            type: 'bullets',
            bulletClass: 'swiper-custom-bullet',
            bulletActiveClass: 'swiper-custom-bullet-active',
            clickable: true
          }}
          slidesPerView={'auto'}
          breakpoints={{
            1024: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 2
            },
            0: {
              slidesPerView: 1
            }
          }}
        >
          {DATA_TEMP.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div className='group relative z-[1] flex flex-col gap-[30px] py-[40px] pl-[40px] pr-[50px]'>
                  <div
                    className={`absolute left-0 top-0 z-[-2] h-full w-full rounded-[10px] border-b-[5px] ${isActive ? 'border-b-[#013396] bg-blog-card-active-gradient' : 'border-b-[#CCE4FF] bg-blog-card-gradient group-hover:border-b-[#013396] group-hover:bg-blog-card-active-gradient'}`}
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={33}
                    height={27}
                    viewBox='0 0 33 27'
                    fill='none'
                    className={`transition-all duration-300 group-hover:text-white ${isActive ? 'text-white' : 'text-accent-btc'}`}
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3.12927 12.9165H11.1667C11.8905 12.9165 12.5847 13.204 13.0965 13.7159C13.6083 14.2277 13.8958 14.9219 13.8958 15.6457V23.8332C13.8958 24.557 13.6083 25.2512 13.0965 25.763C12.5847 26.2748 11.8905 26.5623 11.1667 26.5623H2.97917C2.25535 26.5623 1.56117 26.2748 1.04935 25.763C0.537536 25.2512 0.25 24.557 0.25 23.8332V14.7587C0.250828 12.2879 0.861546 9.85559 2.02796 7.67749C3.19437 5.49939 4.88041 3.6429 6.93646 2.27275L9.37906 0.635254L10.8801 2.90046L8.4375 4.53796C7.01878 5.48869 5.81394 6.72487 4.89994 8.16753C3.98594 9.61019 3.38288 11.2276 3.12927 12.9165ZM22.2333 12.9165H30.2707C30.9945 12.9165 31.6887 13.204 32.2005 13.7159C32.7123 14.2277 32.9998 14.9219 32.9998 15.6457V23.8332C32.9998 24.557 32.7123 25.2512 32.2005 25.763C31.6887 26.2748 30.9945 26.5623 30.2707 26.5623H22.0832C21.3594 26.5623 20.6652 26.2748 20.1534 25.763C19.6415 25.2512 19.354 24.557 19.354 23.8332V14.7587C19.3548 12.2879 19.9656 9.85559 21.132 7.67749C22.2984 5.49939 23.9844 3.6429 26.0405 2.27275L28.4967 0.635254L29.9841 2.90046L27.5415 4.53796C26.1228 5.48869 24.9179 6.72487 24.0039 8.16753C23.0899 9.61019 22.4869 11.2276 22.2333 12.9165Z'
                      fill='currentColor'
                    />
                  </svg>
                  <div className='min-h-[14rem]'>
                    <p
                      className={`line-clamp-6 text-[1.125rem] font-semibold leading-[2.8rem] transition-all duration-300 group-hover:text-white ${isActive ? 'text-white' : 'text-secondary'}`}
                    >
                      I am using Digital Ocean Plan in Cloud ways and I can confirm it is very good. Also, additional
                      the backup with my hosting is awesome too.
                    </p>
                  </div>
                  <div className='flex items-center gap-[15px]'>
                    <Image width={50} height={50} src={item.image} alt='' />
                    <div>
                      <Link
                        href='/'
                        className={`line-clamp-1 text-[1.25rem] font-semibold transition-all duration-300 group-hover:text-white ${isActive ? 'text-white' : 'text-secondary'}`}
                      >
                        {item.name}
                      </Link>
                      <p
                        className={`line-clamp-1 text-[1rem] transition-all duration-300 group-hover:text-white ${isActive ? 'text-white' : 'text-accent-btc'}`}
                      >
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className='absolute bottom-0 right-0 z-[-1] inline-block aspect-[309/354] h-full max-h-[354px] w-full max-w-[309px]'>
                    <Image
                      fill
                      className='object-cover'
                      src='/images/testimonials/testimonial-wrapper-shape.svg'
                      alt=''
                    />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div id='testimonialPagination' />
      </div>

      <div className='absolute left-0 top-1/2 aspect-[461/385] max-h-[385px] w-full max-w-[461px] -translate-y-2/4'>
        <Image fill className='object-contain' src='/images/testimonials/bg-shape-3.svg' alt='' />
      </div>
      <div className='absolute bottom-[15%] right-0 aspect-[439/389] max-h-[389px] w-full max-w-[439px]'>
        <Image fill src='/images/testimonials/bg-shape-4.svg' alt='' className='object-contain' />
      </div>
    </section>
  )
}
