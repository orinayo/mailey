import { shallow } from 'enzyme'
import React from 'react'
import StripeBilling from './StripeBilling'

it('expect to render StripeBilling component', () => {
  shallow(<StripeBilling />).html()
})
