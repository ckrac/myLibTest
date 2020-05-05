import React, { FC } from 'react'

export interface HelloProps {
  message: string
}

export const Hello: FC<HelloProps> = ({message}) => {
  return (
    <div className='p-4'>
      <h1 className='hello'>{message}</h1>
    </div>
  )
}
