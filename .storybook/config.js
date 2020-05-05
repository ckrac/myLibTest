import { configure, addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { newViewports } from './viewport.parameters'
import { backgrounds } from './backgrounds.parameters'
import '../sass/main.scss'

const req = require.context('../src', true, /\.stories\.tsx$/)

addDecorator(withKnobs)

addParameters({
  backgrounds,
  viewport: { viewports: newViewports },
})

function loadStories() {
  req.keys().forEach((fileName) => req(fileName))
}

configure(loadStories, module)
