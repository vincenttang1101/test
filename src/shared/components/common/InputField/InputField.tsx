import { ComponentProps, ReactNode } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'
import { CgAsterisk } from 'react-icons/cg'

import { cn } from '@/shared/utils/cores'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../cores/ui/form'
import { Input } from '../../cores/ui/input'

interface InputFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: ReactNode
  showRequiredMark?: boolean
  formItemProps?: ComponentProps<typeof FormItem>
  inputProps?: ComponentProps<typeof Input>
  labelClassName?: string
  labelWrapperClassName?: string
  formMessageClassName?: string
}

export const InputField = <T extends FieldValues>({
  control,
  name,
  label,
  showRequiredMark = false,
  formItemProps,
  inputProps,
  labelClassName,
  labelWrapperClassName,
  formMessageClassName
}: InputFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem {...formItemProps}>
            {label && (
              <div className={cn('flex items-center gap-[2px]', labelWrapperClassName)}>
                {showRequiredMark && (
                  <div className='text-red-500'>
                    <CgAsterisk />
                  </div>
                )}
                <FormLabel className={cn('text-[1rem]', labelClassName)}>{label}</FormLabel>
              </div>
            )}
            <FormControl>
              <Input {...field} {...inputProps} />
            </FormControl>

            <FormMessage className={formMessageClassName} />
          </FormItem>
        )
      }}
    />
  )
}
