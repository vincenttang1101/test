import { ComponentProps, ReactNode } from 'react'
import { Control, FieldValues, Path } from 'react-hook-form'
import { CgAsterisk } from 'react-icons/cg'

import { cn } from '@/shared/utils/cores'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../cores/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../cores/ui/select'

interface SelectFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  label?: ReactNode
  options: { value: string; label: string }[]
  showRequiredMark?: boolean
  formItemProps?: ComponentProps<typeof FormItem>
  selectProps?: Omit<ComponentProps<typeof Select>, 'children'>
  labelClassName?: string
  labelWrapperClassName?: string
  formMessageClassName?: string
}

export const SelectField = <T extends FieldValues>({
  control,
  name,
  label,
  options,
  showRequiredMark = false,
  formItemProps,
  selectProps,
  labelClassName,
  labelWrapperClassName,
  formMessageClassName
}: SelectFieldProps<T>) => {
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
              <Select {...field} {...selectProps} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder='Select an option' />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage className={formMessageClassName} />
          </FormItem>
        )
      }}
    />
  )
}
