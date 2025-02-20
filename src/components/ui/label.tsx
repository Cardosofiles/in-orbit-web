import { twMerge } from 'tailwind-merge'

import type { ComponentProps } from 'react'

export function Label(props: ComponentProps<'label'>) {
  return (
    <label
      {...props}
      className={twMerge(
        'font-medium text-sm tracking-tight leading-normal',
        props.className
      )}
    />
  )
}
