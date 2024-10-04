import { ReactNode } from 'react'

type MainContentProps = {
  children: ReactNode
}

export const MainContent = ({ children }: MainContentProps) => {
  return <main>{children}</main>
}
