import React, { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-screen-xl p-5">{children}</div>
}

export default Container
