/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import React, { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/cores/ui/tabs'
import { DigitalOceanSizeDetail, Product as VpsProduct } from '@/shared/types/products.type'
import { cn } from '@/shared/utils/cores'

import { BuCloudPricingTable } from './BuCloudPricingTable'
import { DatacenterDialog } from './DatacenterDialog'
import { DigitalOceanPricingTable } from './DigitalOceanPricingTable'

type Provider = 'bu-cloud' | 'digital-ocean'

const ProvidersList: {
  key: Provider
  text?: string
  icon?: React.JSX.Element
}[] = [
  {
    key: 'bu-cloud',
    text: 'BuCloud'
  },
  {
    key: 'digital-ocean',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='103' height='18' viewBox='0 0 103 18' fill='none'>
        <path
          d='M8.94251 17.3511V14.1161C12.4918 14.1161 15.222 10.7161 13.874 7.11804C13.362 5.78115 12.27 4.70833 10.8878 4.22969C7.16788 2.92581 3.65273 5.56659 3.65273 8.9996H0.308228C0.308228 3.53649 5.76864 -0.721765 11.6898 1.06076C14.2835 1.83649 16.3311 3.83358 17.1331 6.32581C18.976 12.0695 14.5906 17.3511 8.94251 17.3511Z'
          fill='#0080FF'
        ></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M8.94283 14.1159H5.61539V10.8975H8.94283V14.1159Z'
          fill='#0080FF'
        ></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.61505 16.5919H3.05548V14.1162H5.61505V16.5919Z'
          fill='#0080FF'
        ></path>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.05583 14.1163H0.905792V12.0532H3.05583V14.1163Z'
          fill='#0080FF'
        ></path>
        <path
          d='M31.0236 5.48409C30.0339 4.8239 28.8053 4.47729 27.3719 4.47729H24.2493V14.0666H27.3719C28.8053 14.0666 30.0339 13.72 31.0236 13.0103C31.5696 12.6472 31.9962 12.119 32.2863 11.4754C32.5764 10.8317 32.73 10.0724 32.73 9.21419C32.73 8.37244 32.5764 7.61322 32.2863 6.96953C31.9962 6.34234 31.5696 5.83069 31.0236 5.48409ZM26.0751 6.11128H27.0648C28.1569 6.11128 29.0613 6.32584 29.7438 6.72196C30.4946 7.16759 30.8871 8.00933 30.8871 9.21419C30.8871 10.4686 30.4946 11.3433 29.7438 11.822C29.0954 12.2346 28.191 12.4491 27.0819 12.4491H26.0922V6.11128H26.0751Z'
          fill='#0080FF'
        ></path>
        <path
          d='M34.9141 4.36182C34.607 4.36182 34.351 4.46085 34.1463 4.6589C33.9415 4.85696 33.8221 5.10454 33.8221 5.38512C33.8221 5.68221 33.9244 5.92978 34.1463 6.12784C34.351 6.32589 34.607 6.44143 34.9141 6.44143C35.2213 6.44143 35.4772 6.3424 35.682 6.12784C35.8868 5.92978 36.0062 5.6657 36.0062 5.38512C36.0062 5.08803 35.9038 4.84046 35.682 4.6589C35.4772 4.46085 35.2042 4.36182 34.9141 4.36182Z'
          fill='#0080FF'
        ></path>
        <path d='M35.7686 7.31592H34.011V14.0829H35.7686V7.31592Z' fill='#0080FF'></path>
        <path
          d='M42.166 7.87734C41.637 7.4152 41.0398 7.15112 40.4084 7.15112C39.4358 7.15112 38.6338 7.48122 38.0024 8.1084C37.3711 8.73559 37.0639 9.56083 37.0639 10.5346C37.0639 11.4919 37.3711 12.3006 38.0024 12.9608C38.6338 13.588 39.4358 13.9181 40.4084 13.9181C41.091 13.9181 41.6712 13.7366 42.1489 13.3735V13.5385C42.1489 14.0997 41.9954 14.5288 41.6882 14.8424C41.3811 15.1395 40.9545 15.288 40.4255 15.288C39.6064 15.288 39.1116 14.9744 38.4802 14.1657L37.2858 15.2715L37.3199 15.321C37.5758 15.6676 37.9683 16.0142 38.4973 16.3443C39.0263 16.6744 39.6747 16.8395 40.4596 16.8395C41.5005 16.8395 42.3537 16.5259 42.968 15.9152C43.5994 15.3045 43.9065 14.4793 43.9065 13.456V7.31617H42.1831V7.87734H42.166ZM41.7053 11.8715C41.3981 12.2016 41.0057 12.3667 40.4938 12.3667C39.9818 12.3667 39.5894 12.2016 39.2993 11.8715C38.9921 11.5414 38.8386 11.0958 38.8386 10.5511C38.8386 10.0065 38.9921 9.54433 39.2993 9.21423C39.6064 8.88413 39.9989 8.70258 40.4938 8.70258C41.0057 8.70258 41.3981 8.86763 41.7053 9.21423C42.0124 9.54433 42.166 10.0065 42.166 10.5511C42.166 11.0958 41.9954 11.5414 41.7053 11.8715Z'
          fill='#0080FF'
        ></path>
        <path d='M47.1485 7.31592H45.3909V14.0829H47.1485V7.31592Z' fill='#0080FF'></path>
        <path
          d='M46.296 4.36182C45.9889 4.36182 45.7329 4.46085 45.5282 4.6589C45.3234 4.85696 45.2039 5.10454 45.2039 5.38512C45.2039 5.68221 45.3063 5.92978 45.5282 6.12784C45.7329 6.32589 45.9889 6.44143 46.296 6.44143C46.6032 6.44143 46.8591 6.3424 47.0639 6.12784C47.2687 5.92978 47.3881 5.6657 47.3881 5.38512C47.3881 5.08803 47.2857 4.84046 47.0639 4.6589C46.8591 4.46085 46.5861 4.36182 46.296 4.36182Z'
          fill='#0080FF'
        ></path>
        <path
          d='M51.0046 5.50049H49.2811V7.33253H48.2744V8.88398H49.2811V11.6898C49.2811 12.5646 49.4688 13.1918 49.8272 13.5549C50.1855 13.918 50.8169 14.0995 51.7213 14.0995C52.0113 14.0995 52.3014 14.083 52.5744 14.0665H52.6598V12.5151L52.0625 12.5481C51.6359 12.5481 51.3629 12.482 51.2264 12.3335C51.0899 12.185 51.0216 11.8879 51.0216 11.4422V8.86748H52.6598V7.31602H51.0216V5.50049H51.0046Z'
          fill='#0080FF'
        ></path>
        <path d='M62.6421 4.47705H60.8846V14.0664H62.6421V4.47705Z' fill='#0080FF'></path>
        <path
          d='M80.4055 11.6569C80.0984 12.0036 79.7742 12.3006 79.5182 12.4492C79.2793 12.5977 78.9722 12.6802 78.6138 12.6802C78.1019 12.6802 77.6753 12.4987 77.334 12.1191C76.9928 11.7395 76.8221 11.2608 76.8221 10.6832C76.8221 10.1055 76.9928 9.62685 77.317 9.26374C77.6583 8.88413 78.0678 8.70258 78.5797 8.70258C79.1428 8.70258 79.74 9.04918 80.252 9.62685L81.4123 8.55404C80.6615 7.59675 79.6888 7.15112 78.5285 7.15112C77.5559 7.15112 76.7197 7.49773 76.0372 8.15792C75.3546 8.81811 75.0134 9.67637 75.0134 10.6832C75.0134 11.69 75.3546 12.5317 76.0372 13.2084C76.7197 13.8851 77.5559 14.2152 78.5285 14.2152C79.8083 14.2152 80.8321 13.687 81.5147 12.7133L80.4055 11.6569Z'
          fill='#0080FF'
        ></path>
        <path
          d='M87.6251 8.25695C87.3691 7.92685 87.0278 7.64627 86.6183 7.44821C86.1917 7.25015 85.7139 7.15112 85.1679 7.15112C84.1782 7.15112 83.3762 7.49772 82.779 8.19093C82.1988 8.88413 81.8916 9.72588 81.8916 10.7327C81.8916 11.756 82.2159 12.5977 82.8643 13.2579C83.4956 13.9016 84.3659 14.2317 85.4068 14.2317C86.5842 14.2317 87.5739 13.7696 88.2906 12.8453L88.3247 12.7958L87.1814 11.723C87.079 11.855 86.9255 11.987 86.7889 12.1191C86.6183 12.2841 86.4477 12.3997 86.277 12.4822C86.0211 12.6142 85.7139 12.6637 85.3897 12.6637C84.8949 12.6637 84.5024 12.5317 84.1953 12.2511C83.9052 12.0035 83.7345 11.6569 83.7004 11.2278H88.3588L88.3759 10.6006C88.3759 10.155 88.3076 9.74238 88.1882 9.34627C88.0687 8.96666 87.881 8.60355 87.6251 8.25695ZM83.7857 9.85792C83.871 9.52782 84.0246 9.26374 84.2464 9.04918C84.4853 8.81811 84.7925 8.70258 85.1679 8.70258C85.5945 8.70258 85.9187 8.81811 86.1405 9.04918C86.3453 9.26374 86.4647 9.52782 86.4989 9.84141H83.7857V9.85792Z'
          fill='#0080FF'
        ></path>
        <path
          d='M94.3824 7.82767C93.8534 7.38204 93.1197 7.16748 92.1982 7.16748C91.6181 7.16748 91.072 7.29952 90.5772 7.53059C90.1164 7.76165 89.6728 8.12476 89.3827 8.61991L89.3998 8.63641L90.526 9.67622C90.9867 8.96651 91.4986 8.71894 92.1812 8.71894C92.5566 8.71894 92.8467 8.81797 93.0855 8.99952C93.3244 9.18107 93.4268 9.42865 93.4268 9.72573V10.0558C92.9832 9.92379 92.5566 9.85777 92.13 9.85777C91.2597 9.85777 90.543 10.0558 90.0141 10.4519C89.4851 10.8481 89.2121 11.4257 89.2121 12.1354C89.2121 12.7626 89.4339 13.2908 89.8946 13.6704C90.3553 14.0335 90.9184 14.2316 91.5839 14.2316C92.2494 14.2316 92.8808 13.9675 93.4439 13.5218V14.083H95.1673V9.72573C95.2015 8.91699 94.9284 8.27331 94.3824 7.82767ZM91.2597 11.4918C91.4645 11.3597 91.7375 11.2937 92.0958 11.2937C92.5224 11.2937 92.9661 11.3762 93.4268 11.5413V12.2015C93.0514 12.5481 92.5395 12.7131 91.9081 12.7131C91.601 12.7131 91.3621 12.6471 91.2085 12.5151C91.055 12.383 90.9696 12.2345 90.9696 12.0199C90.9696 11.8053 91.072 11.6238 91.2597 11.4918Z'
          fill='#0080FF'
        ></path>
        <path
          d='M101.958 7.95971C101.463 7.43156 100.781 7.16748 99.9103 7.16748C99.2107 7.16748 98.6476 7.36554 98.221 7.74515V7.33253H96.4975V14.0995H98.2551V10.3529C98.2551 9.84127 98.3745 9.42865 98.6305 9.14806C98.8865 8.85098 99.2107 8.71894 99.6714 8.71894C100.064 8.71894 100.371 8.85098 100.593 9.09855C100.815 9.36263 100.934 9.70923 100.934 10.1549V14.0665H102.692V10.1549C102.692 9.23059 102.453 8.48787 101.958 7.95971Z'
          fill='#0080FF'
        ></path>
        <path
          d='M58.6838 7.82767C58.1548 7.38204 57.4211 7.16748 56.4996 7.16748C55.9195 7.16748 55.3734 7.29952 54.8786 7.53059C54.4178 7.76165 53.9742 8.12476 53.6841 8.61991L53.7012 8.63641L54.8274 9.67622C55.2881 8.96651 55.8 8.71894 56.4826 8.71894C56.858 8.71894 57.1481 8.81797 57.387 8.99952C57.6258 9.18107 57.7282 9.42865 57.7282 9.72573V10.0558C57.2846 9.92379 56.858 9.85777 56.4314 9.85777C55.5611 9.85777 54.8444 10.0558 54.3155 10.4519C53.7865 10.8481 53.5135 11.4257 53.5135 12.1354C53.5135 12.7626 53.7353 13.2908 54.196 13.6704C54.6567 14.0335 55.2198 14.2316 55.8853 14.2316C56.5508 14.2316 57.1822 13.9675 57.7453 13.5218V14.083H59.4687V9.72573C59.4858 8.91699 59.2128 8.27331 58.6838 7.82767ZM55.5611 11.4918C55.7659 11.3597 56.0389 11.2937 56.3973 11.2937C56.8238 11.2937 57.2675 11.3762 57.7282 11.5413V12.2015C57.3528 12.5481 56.8409 12.7131 56.2095 12.7131C55.9024 12.7131 55.6635 12.6471 55.5099 12.5151C55.3564 12.383 55.271 12.2345 55.271 12.0199C55.271 11.8053 55.3564 11.6238 55.5611 11.4918Z'
          fill='#0080FF'
        ></path>
        <path
          d='M69.0234 14.2152C66.2079 14.2152 63.9043 12.0035 63.9043 9.26371C63.9043 6.52391 66.1908 4.31226 69.0234 4.31226C71.839 4.31226 74.1426 6.52391 74.1426 9.26371C74.1426 12.0035 71.839 14.2152 69.0234 14.2152ZM69.0234 6.07828C67.1976 6.07828 65.7131 7.5142 65.7131 9.28022C65.7131 11.0462 67.1976 12.4822 69.0234 12.4822C70.8493 12.4822 72.3338 11.0462 72.3338 9.28022C72.3338 7.5142 70.8493 6.07828 69.0234 6.07828Z'
          fill='#0080FF'
        ></path>
      </svg>
    )
  }
]

export const PricingTable = ({
  vpsData,
  digitalOceanData
}: {
  vpsData: VpsProduct[]
  digitalOceanData: {
    Basic: {
      _id: string
      data: DigitalOceanSizeDetail[]
    }[]
    'General Purpose': {
      _id: string
      data: DigitalOceanSizeDetail[]
    }[]
    'CPU-Optimized': {
      _id: string
      data: DigitalOceanSizeDetail[]
    }[]
    'Memory-Optimized': {
      _id: string
      data: DigitalOceanSizeDetail[]
    }[]
    'Storage-Optimized': {
      _id: string
      data: DigitalOceanSizeDetail[]
    }[]
  }
}) => {
  const [activeProvider, setActiveProvider] = useState<Provider>('bu-cloud')
  const [isOpenDatacenterDialog, setIsOpenDatacenterDialog] = useState(false)

  return (
    <>
      {/* Don't delete this id, it's used for styling all elements inside this component */}
      <div id='pricing-wrapper'>
        <Tabs value={activeProvider} onValueChange={(value) => setActiveProvider(value as Provider)}>
          <div className='mb-[24px] flex flex-col justify-between md:flex-row md:items-end'>
            {/* Tab buttons */}
            <TabsList className='tab h-fit justify-start bg-transparent'>
              {ProvidersList.map((provider) => (
                <TabsTrigger
                  key={provider.key}
                  className={cn(
                    'mr-[12px] flex h-[50px] items-center justify-center rounded-[6px] border-[1px] border-[#c1c7d0] bg-white px-[20px] py-[12px] text-[0.938rem] font-bold uppercase data-[state=active]:border-primary data-[state=active]:bg-primary',
                    {
                      '!text-white': provider.key === activeProvider
                    }
                  )}
                  value={provider.key}
                >
                  {provider.icon ? provider.icon : provider.text}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* Datacenter button */}
            {activeProvider === 'digital-ocean' && (
              <div
                className='datacenter flex w-full cursor-pointer items-center justify-center md:justify-end'
                onClick={() => setIsOpenDatacenterDialog(!isOpenDatacenterDialog)}
              >
                <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26' fill='none'>
                  <circle opacity='0.5' cx='13' cy='13' r='13' fill='#F1E0F7'></circle>
                  <path
                    d='M13.0007 3.83325C7.94618 3.83325 3.83398 7.94545 3.83398 12.9999C3.83398 18.0544 7.94618 22.1666 13.0007 22.1666C18.0551 22.1666 22.1673 18.0544 22.1673 12.9999C22.1673 7.94545 18.0551 3.83325 13.0007 3.83325ZM13.0007 5.20825C13.3364 5.20825 13.6773 5.348 14.0516 5.69255C14.4259 6.03709 14.8055 6.5844 15.1303 7.29134C15.3915 7.85995 15.5842 8.58904 15.7605 9.33325H10.2408C10.4171 8.58904 10.6098 7.85995 10.871 7.29134C11.1958 6.5844 11.5754 6.03709 11.9497 5.69255C12.324 5.348 12.6649 5.20825 13.0007 5.20825ZM10.1486 5.75252C9.95905 6.05038 9.7814 6.36915 9.62134 6.71753C9.27254 7.47668 9.01083 8.37525 8.80762 9.33325H6.12386C6.99072 7.70705 8.41748 6.43221 10.1486 5.75252ZM15.8527 5.75252C17.5838 6.43221 19.0106 7.70705 19.8774 9.33325H17.1937C16.9905 8.37525 16.7288 7.47668 16.38 6.71753C16.2199 6.36915 16.0423 6.05038 15.8527 5.75252ZM5.55184 10.7083H8.62858C8.53439 11.4564 8.41732 12.1895 8.41732 12.9999C8.41732 13.8103 8.53439 14.5435 8.62858 15.2916H5.55184C5.33013 14.5673 5.20898 13.798 5.20898 12.9999C5.20898 12.2018 5.33013 11.4326 5.55184 10.7083ZM10.0063 10.7083H15.995C16.0973 11.4477 16.209 12.1844 16.209 12.9999C16.209 13.8155 16.0973 14.5521 15.995 15.2916H10.0063C9.90405 14.5521 9.79232 13.8155 9.79232 12.9999C9.79232 12.1844 9.90405 11.4477 10.0063 10.7083ZM17.3727 10.7083H20.4495C20.6712 11.4326 20.7923 12.2018 20.7923 12.9999C20.7923 13.798 20.6712 14.5673 20.4495 15.2916H17.3727C17.4669 14.5435 17.584 13.8103 17.584 12.9999C17.584 12.1895 17.4669 11.4564 17.3727 10.7083ZM6.12386 16.6666H8.80762C9.01083 17.6246 9.27254 18.5232 9.62134 19.2823C9.7814 19.6307 9.95905 19.9495 10.1486 20.2473C8.41748 19.5676 6.99072 18.2928 6.12386 16.6666ZM10.2408 16.6666H15.7605C15.5842 17.4108 15.3915 18.1399 15.1303 18.7085C14.8055 19.4154 14.4259 19.9627 14.0516 20.3073C13.6773 20.6518 13.3364 20.7916 13.0007 20.7916C12.6649 20.7916 12.324 20.6518 11.9497 20.3073C11.5754 19.9627 11.1958 19.4154 10.871 18.7085C10.6098 18.1399 10.4171 17.4108 10.2408 16.6666ZM17.1937 16.6666H19.8774C19.0106 18.2928 17.5838 19.5676 15.8527 20.2473C16.0423 19.9495 16.2199 19.6307 16.38 19.2823C16.7288 18.5232 16.9905 17.6246 17.1937 16.6666Z'
                    fill='url(#paint0_linear_433_8895)'
                  ></path>
                  <defs>
                    <linearGradient
                      id='paint0_linear_433_8895'
                      x1='2.02843'
                      y1='2.03811'
                      x2='25.4909'
                      y2='21.3134'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#705AFE'></stop>
                      <stop offset='1' stopColor='#CA7CFB'></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <span>Data Centers</span>
              </div>
            )}
          </div>
          {/* Tab content */}
          <div className='w-full rounded-[12px] bg-white shadow-[0_4px_40px_0_rgba(0,0,0,0.05)]'>
            <div className='overflow-x-auto px-[16px] py-[32px]'>
              {/* BUCLOUD Pricing */}
              <TabsContent value='bu-cloud' className='w-full'>
                <BuCloudPricingTable vpsData={vpsData} />
              </TabsContent>
              {/* Digital Ocean Pricing */}
              <TabsContent value='digital-ocean' className='w-full'>
                <DigitalOceanPricingTable digitalOceanData={digitalOceanData} />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
      <DatacenterDialog
        open={isOpenDatacenterDialog}
        provider={activeProvider}
        onOpenChange={() => setIsOpenDatacenterDialog(!isOpenDatacenterDialog)}
      />
    </>
  )
}
