import { ComponentProps, ReactNode } from 'react'

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
      className={
        isTransparent
          ? 'bg-black/20 border border-white/10 rounded-md p-1.5'
          : 'bg-white/10 border border-white/10 rounded-md p-1.5'
      }
      {...props}
    >
      {children}
    </button>
  )
}
