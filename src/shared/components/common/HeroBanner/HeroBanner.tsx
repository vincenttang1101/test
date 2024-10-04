import { TFunction } from 'i18next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

import { PrimaryButton } from '../PrimaryButton'

type HeroBannerProps = {
  tHome: TFunction<string, string>
}

export const HeroBanner = ({ tHome }: HeroBannerProps) => {
  return (
    <section className='relative overflow-hidden bg-hero-banner-gradient pb-[250px] pt-[270px]'>
      <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[url("/images/banner/shape__one.png")] lg:left-0 lg:top-2.5' />
      <div className='absolute left-0 top-[10px] h-full w-full bg-[url("/images/banner/banner__two__shape.svg")]' />
      <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[url("/images/banner/shape__two.svg")] bg-cover bg-center bg-no-repeat' />
      <div className='container'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='relative order-first col-span-12 md:order-last lg:order-first lg:col-span-7 xl:col-span-6'>
            <div className='w-full lg:max-w-[660px]'>
              <h1 className='text-[4.125rem] font-bold leading-[7.6rem] text-white'>
                {tHome('hosting_unleash_power')}
              </h1>
              <div className='relative'>
                <p className='text-[4.125rem] font-medium leading-[7.6rem] text-third'>Cloud Hosting</p>
                <div className='absolute bottom-[-15%] right-[38%]'>
                  <svg width={248} height={13} viewBox='0 0 248 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M118.304 3.8159C116.14 2.34825 123.513 3.87905 126.117 3.91894C135.696 4.06567 145.243 3.73724 154.819 3.44894C179.429 2.70803 204.067 2.81446 228.684 2.51727C234.435 2.44785 240.151 2.50113 245.891 2.76896C247.959 2.86548 241.754 2.55069 239.683 2.52582C200.812 2.05903 161.795 4.73046 122.936 5.74889C85.4734 6.73076 47.9945 7.29163 10.5357 8.45585C7.8729 8.53862 -0.0345717 8.46058 2.56289 9.04941C10.0209 10.7401 19.2147 10.5874 26.6387 10.7577C75.2897 11.8741 124.135 9.09372 172.798 8.47287C192.126 8.22629 211.458 7.83336 230.784 7.60513'
                      stroke='white'
                      strokeWidth={3}
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
              </div>
              <div className='mt-[60px] flex flex-wrap gap-5'>
                <Link href='/'>
                  <PrimaryButton
                    variant='secondaryFilled'
                    size='lg'
                    className='w-[175px] gap-[8px] font-semibold capitalize'
                  >
                    Get started
                    <FaArrowRight className='size-6 min-w-6 text-secondary' />
                  </PrimaryButton>
                </Link>
                <Link href='/'>
                  <PrimaryButton
                    variant='outline'
                    size='lg'
                    className='group w-[175px] gap-[8px] font-semibold capitalize'
                  >
                    Start free
                    <FaArrowRight className='transition-primary size-6 min-w-6 text-white group-hover:text-secondary' />
                  </PrimaryButton>
                </Link>
              </div>
              <div className='mt-[25px] flex items-center gap-2'>
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M7.25621 18.7C7.12831 18.646 7.02202 18.551 6.95412 18.4299C6.88622 18.3088 6.86057 18.1685 6.88121 18.0312L8.01871 10.625H4.99996C4.90426 10.6276 4.80924 10.6081 4.72225 10.5682C4.63525 10.5282 4.5586 10.4688 4.4982 10.3945C4.43781 10.3202 4.39529 10.233 4.37392 10.1397C4.35255 10.0464 4.35291 9.94941 4.37496 9.85625L6.24996 1.73124C6.28296 1.59141 6.36312 1.46722 6.47695 1.37957C6.59079 1.29191 6.73134 1.24615 6.87496 1.24999H13.125C13.2183 1.24968 13.3106 1.27028 13.395 1.3103C13.4793 1.35032 13.5536 1.40873 13.6125 1.48124C13.6721 1.55458 13.7144 1.64049 13.736 1.7325C13.7577 1.82452 13.7582 1.92026 13.7375 2.01249L12.6562 6.875H15.625C15.7421 6.87476 15.8569 6.90745 15.9564 6.96933C16.0559 7.03122 16.1359 7.11981 16.1875 7.225C16.2322 7.32596 16.2495 7.43698 16.2374 7.54677C16.2253 7.65656 16.1844 7.76118 16.1187 7.85L7.99371 18.475C7.9388 18.5564 7.86548 18.6237 7.7797 18.6715C7.69391 18.7193 7.59808 18.7462 7.49996 18.75C7.41633 18.7484 7.3337 18.7315 7.25621 18.7V18.7ZM11.0937 8.125L12.3437 2.49999H7.37496L5.78746 9.375H9.48121L8.48746 15.8L14.375 8.125H11.0937Z'
                    fill='#FFC107'
                  />
                  <path
                    d='M7.25621 18.7C7.12831 18.646 7.02202 18.551 6.95412 18.4299C6.88622 18.3088 6.86057 18.1685 6.88121 18.0312L8.01871 10.625H4.99996C4.90426 10.6276 4.80924 10.6081 4.72225 10.5682C4.63525 10.5282 4.5586 10.4688 4.4982 10.3945C4.43781 10.3202 4.39529 10.233 4.37392 10.1397C4.35255 10.0464 4.35291 9.94941 4.37496 9.85625L6.24996 1.73124C6.28296 1.59141 6.36312 1.46722 6.47695 1.37957C6.59079 1.29191 6.73134 1.24615 6.87496 1.24999H13.125C13.2183 1.24968 13.3106 1.27028 13.395 1.3103C13.4793 1.35032 13.5536 1.40873 13.6125 1.48124C13.6721 1.55458 13.7144 1.64049 13.736 1.7325C13.7577 1.82452 13.7582 1.92026 13.7375 2.01249L12.6562 6.875H15.625C15.7421 6.87476 15.8569 6.90745 15.9564 6.96933C16.0559 7.03122 16.1359 7.11981 16.1875 7.225C16.2322 7.32596 16.2495 7.43698 16.2374 7.54677C16.2253 7.65656 16.1844 7.76118 16.1187 7.85L7.99371 18.475C7.9388 18.5564 7.86548 18.6237 7.7797 18.6715C7.69391 18.7193 7.59808 18.7462 7.49996 18.75C7.41633 18.7484 7.3337 18.7315 7.25621 18.7V18.7ZM11.0937 8.125L12.3437 2.49999H7.37496L5.78746 9.375H9.48121L8.48746 15.8L14.375 8.125H11.0937Z'
                    fill='#FFC107'
                  />
                </svg>
                <span className='text-white'>*3-day trial without credit card</span>
              </div>
            </div>
          </div>
          <div className='col-span-12 mt-[120px] flex items-center justify-center md:mt-0 lg:col-span-5 lg:ml-[8%] lg:justify-end xl:col-span-6'>
            <div className='relative inline-block aspect-[656/494] max-h-[494px] w-full max-w-[656px] lg:mt-0'>
              <Image src='/images/banner/hero__two__illustration.svg' alt='' fill className='object-contain' />
              <div className='absolute right-[35%] top-[-15%] aspect-[198/186] max-h-[186px] w-full max-w-[198px] animate-move-right-top-left-bottom'>
                <Image className='object-contain' src='/images/banner/hero__two__illustration-sm1.svg' alt='' fill />
              </div>
              <div className='absolute left-px top-[44.5%] aspect-[69/77] max-h-[77px] w-full max-w-[69px] animate-ping-pong'>
                <Image className='object-contain' src='/images/banner/hero__two__illustration-sm2.svg' alt='' fill />
              </div>
              <div className='absolute bottom-0 right-[33.2%] aspect-[93/104] max-h-[104px] w-full max-w-[93px] animate-ping-pong'>
                <Image className='object-contain' src='/images/banner/hero__two__illustration-sm3.svg' alt='' fill />
              </div>
              <div className='absolute bottom-[10.4%] right-[11.6%] aspect-[148/238] max-h-[238px] w-full max-w-[148px] animate-bottom-top2'>
                <Image className='object-contain' src='/images/banner/hero__two__illustration-sm4.svg' alt='' fill />
              </div>
              <div className='absolute bottom-[30%] right-[1%] aspect-[69/78] max-h-[78px] w-full max-w-[69px] animate-ping-pong'>
                <Image className='' src='/images/banner/hero__two__illustration-sm5.svg' alt='' fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
