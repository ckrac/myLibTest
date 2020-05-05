import React, { FC } from 'react'
import { HelloProps } from './Hello.types'

export const Hello: FC<HelloProps> = ({message}) => {
  return (
    <div className='p-4'>
      <h1 className='hello'>{message}</h1>
    </div>
  )
}
