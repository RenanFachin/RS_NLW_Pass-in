import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  isTransparent?: boolean
}

export function IconButton({
  children,
  isTransparent,
  ...props
}: IconButtonProps) {
  return (
    <button
      // className={
      //   isTransparent
      //     ? 'bg-black/20 '
      //     : ' border border-white/10 rounded-md p-1.5'
      // }
      className={twMerge(
        'border border-white/10 rounded-md p-1.5',
        isTransparent ? 'bg-black/20' : 'bg-white/10',
        props.disabled ? 'opacity-50' : null,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
