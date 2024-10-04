import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import { Dialog, DialogContent, DialogTitle } from '../../cores/ui/dialog'

const datacenters = {
  'digital-ocean': [
    'New York',
    'Armsterdam',
    'Bangalore',
    'Frankfurt',
    'London',
    'San Francisco',
    'Singapore',
    'Sydney',
    'Toronto'
  ]
}

export const DatacenterDialog = ({
  open,
  onOpenChange,
  provider
}: {
  open: boolean
  onOpenChange: () => void
  provider: string
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        aria-describedby={undefined}
        className='max-w-[800px] !rounded-[10px] px-[30px] py-[15px] md:p-[30px] lg:px-[90px] lg:py-[50px]'
      >
        <VisuallyHidden.Root asChild>
          <DialogTitle />
        </VisuallyHidden.Root>
        <h2 className='mx-0 mb-[5px] mt-0 text-center text-[1.5rem] font-medium leading-[initial] tracking-[-0.895px] text-[#253858]'>
          {provider === 'bu-cloud' ? 'BUCLOUD' : 'Digital Ocean'}
        </h2>
        <h3 className='m-0 mb-[35px] text-center text-[2rem] font-bold leading-[initial] tracking-[-1.492px] text-[#091e42]'>
          Data Centers
        </h3>
        <ul className='flex flex-wrap rounded-[8.618px] border-[none]'>
          {(datacenters?.[provider as keyof typeof datacenters] ?? []).map((datacenter) => (
            <li
              key={datacenter}
              className='flex flex-[0_0_100%] items-center px-[10px] pb-[20px] pt-0 text-left sm:flex-[0_0_33.33%] lg:flex-[0_0_25%]'
            >
              <svg
                className='mr-[10px] h-[19px]'
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
              >
                <g clipPath='url(#clip0_447_13664)'>
                  <path
                    d='M8.81062 0.715332C4.05117 0.715332 0.192871 4.57363 0.192871 9.33309C0.192871 14.0925 4.05117 17.9508 8.81062 17.9508C13.5701 17.9508 17.4284 14.0925 17.4284 9.33309C17.4233 4.57576 13.568 0.720418 8.81062 0.715332ZM8.81062 16.7197C4.73108 16.7197 1.42397 13.4126 1.42397 9.33309C1.42397 5.25354 4.73108 1.94643 8.81062 1.94643C12.8902 1.94643 16.1973 5.25354 16.1973 9.33309C16.1929 13.4108 12.8884 16.7153 8.81062 16.7197Z'
                    fill='#2F39BF'
                  ></path>
                  <path
                    d='M13.5409 5.81977C13.3024 5.58937 12.9242 5.58937 12.6857 5.81977L6.96534 11.5401L4.9383 9.51306C4.70213 9.26852 4.31242 9.26178 4.06792 9.49795C3.82338 9.73412 3.81664 10.1238 4.05281 10.3683C4.05775 10.3735 4.0628 10.3785 4.06792 10.3834L6.53015 12.8457C6.77051 13.086 7.16018 13.086 7.40053 12.8457L13.5561 6.69012C13.7923 6.44562 13.7855 6.05594 13.5409 5.81977Z'
                    fill='#2F39BF'
                  ></path>
                </g>
                <defs>
                  <clipPath id='clip0_447_13664'>
                    <rect width='17.2355' height='17.2355' fill='white' transform='translate(0.194336 0.715088)'></rect>
                  </clipPath>
                </defs>
              </svg>
              {datacenter}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}
