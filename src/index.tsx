import React, { FC } from 'react'
import '../sass/main.scss'

export { Hello } from '@src/components/Hello'

export const TestComp: FC<{text: string}> = ({text}) => {
  return <div>{text}</div>
}