import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoChevronRight } from 'react-icons/go'
import { HiMiniCheckCircle } from 'react-icons/hi2'

import { PrimaryButton } from '@/shared/components/common/PrimaryButton'

export const HostingSecurity = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='container py-[120px]'>
        <div className='relative z-[1]'>
          <div className='flex flex-col gap-8 lg:flex-row lg:items-center'>
            <div className='w-full lg:w-1/2'>
              <div className='relative inline-block aspect-[694/570] max-h-[570px] w-full'>
                <Image
                  fill
                  src='/images/feature/feature-hero-01.png'
                  alt='Advanced Security Hosting Features'
                  className='object-contain'
                />
              </div>
            </div>
            <div className='w-full lg:w-1/2 lg:pl-[50px]'>
              <div className='flex flex-col gap-[20px] lg:max-w-[475px]'>
                <h3 className='text-[2.5rem] font-bold leading-[5.5rem] text-secondary'>
                  Advanced Security Hosting Features
                </h3>
                <p className='text-accent-btc'>
                  We’ll move your first website to Cloud ways from any web host for without breaking your live site
                  hosted on the old host..
                </p>
              </div>
              <ul className='mt-[40px] flex flex-col gap-[20px]'>
                <li className='flex max-w-max items-center gap-3 rounded-[30px] bg-advanced-security-blue-gradient py-3 pl-3 pr-10 text-secondary'>
                  <HiMiniCheckCircle className='size-10 text-[#0774FF]' />
                  Get unlimited SSL security certificates
                </li>
                <li className='flex max-w-max items-center gap-3 rounded-[30px] bg-advanced-security-purple-gradient py-3 pl-3 pr-10 text-secondary'>
                  <HiMiniCheckCircle className='size-10 text-[#912ff9]' />
                  Protect your website from DDoS attacks
                </li>
                <li className='flex max-w-max items-center gap-3 rounded-[30px] bg-advanced-security-green-gradient py-3 pl-3 pr-10 text-secondary'>
                  <HiMiniCheckCircle className='size-10 text-[#5fbd99]' />
                  Secure your files with automatic backups
                </li>
              </ul>
              <Link href='/'>
                <PrimaryButton className='group mt-[60px] w-[180px]'>
                  Get Started
                  <GoChevronRight className='size-8 text-white transition-all group-hover:text-secondary' />
                </PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute -bottom-[200px] -right-[110px] inline-block aspect-[680/680] max-h-[680px] w-full max-w-[680px]'>
        <Image
          className='object-contain'
          src='/images/feature/feature-rounded-shape.svg'
          alt='Advanced Security Hosting Features'
          fill
        />
      </div>
    </div>
  )
}
