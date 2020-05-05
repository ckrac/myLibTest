import React from 'react'
import { changeDefaultBackground } from '@.storybook/backgrounds.parameters'
import { storiesOf } from '@storybook/react'
import { Hello } from '@src/components/Hello'

storiesOf('Hello', module)
  .addParameters({
    backgrounds: changeDefaultBackground('white'),
  })
  .add('default', () => <Hello message='Hello word' />)
