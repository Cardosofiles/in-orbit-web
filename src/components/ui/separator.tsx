import { twMerge } from 'tailwind-merge'

import type { ComponentProps } from 'react'

export function Separator(props: ComponentProps<'div'>) {
  return (
    <div {...props} className={twMerge('h-px bg-zinc-800', props.className)} />
  )
}
