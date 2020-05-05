import { cloneDeep } from 'lodash'

export const backgrounds = [
  { name: 'grey', value: '#bbbbbb', default: true },
  { name: 'white', value: '#fff' },
  { name: 'black', value: '#242424' },
  { name: 'twitter', value: '#00aced' },
  { name: 'facebook', value: '#3b5998' },
  { name: 'transparent', value: 'transparent' },
  { name: 'black1', value: '#242424;' },
  { name: 'black2', value: '#333333' }
]

export const changeDefaultBackground = name => {
  return cloneDeep(backgrounds).map(bg => {
    bg.default = name === bg.name ? true : false
    return bg
  })
}