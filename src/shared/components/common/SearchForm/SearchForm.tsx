'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'

import { InputField } from '@/shared/components/common/InputField'
import { Form } from '@/shared/components/cores/ui/form'
import searchSchema, { SearchFormData } from '@/shared/schemas/search.schema'

import { PrimaryButton } from '../PrimaryButton'

export const SearchForm = () => {
  const form = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: ''
    }
  })

  const onSubmit = () => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-wrap items-center justify-center gap-4'>
        <div className='w-full lg:w-[600px]'>
          <InputField
            control={form.control}
            name='search'
            inputProps={{
              className:
                'bg-white h-[55px] text-[1.6rem] w-full rounded-[6px] px-[24px] py-[17px] text-secondary focus:ring-0 focus:outline-none',
              placeholder: 'domain.com'
            }}
          />
        </div>
        <PrimaryButton variant='secondary' size='lg' className='w-[200px]'>
          Search Domain
        </PrimaryButton>
      </form>
    </Form>
  )
}
