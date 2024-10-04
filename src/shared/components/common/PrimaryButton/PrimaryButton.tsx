import { cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/shared/utils/cores'

import { Button } from '../../cores/ui/button'

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
  children: ReactNode
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'secondaryFilled' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export default function PrimaryButton({
  children,
  className,
  variant = 'default',
  size = 'default',
  ...rest
}: PrimaryButtonProps) {
  const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-[1.6rem] font-medium transition-primary disabled:pointer-events-none disabled:opacity-50 shadow-none',
    {
      variants: {
        variant: {
          default: 'bg-primary text-white hover:bg-third hover:text-secondary',
          destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline: 'border text-white hover:bg-third hover:border-third hover:text-secondary bg-transparent',
          secondary: 'bg-third text-secondary hover:text-white hover:bg-secondary',
          secondaryFilled: 'bg-third text-secondary',
          ghost: 'border border-light text-secondary hover:bg-third hover:border-third bg-transparent',
          link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
          default: 'h-[46px] p-[14px]',
          sm: 'h-[38px] px-[15px] py-[10px]',
          lg: 'h-[54px] px-[35px] py-[20px]',
          icon: 'h-9 w-9'
        }
      },
      defaultVariants: {
        variant: 'default',
        size: 'default'
      }
    }
  )

  return (
    <Button
      type='button'
      aria-label='Button'
      className={cn(
        buttonVariants({ variant, size }),
        'transition-primary min-w-fit rounded-[6px] px-[20px] py-[16px] text-[1.6rem] leading-[100%]',
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  )
}
