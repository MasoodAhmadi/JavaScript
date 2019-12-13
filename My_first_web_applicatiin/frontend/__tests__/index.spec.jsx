import * as React from 'react'
import {mount} from 'enzyme'
import IndexPage from '../pages/index'
console.log('indexpage', IndexPage)

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<IndexPage/>)
      expect(wrap.find('h1').text()).toBe('Welcome to TAMK-APP!')
    })
  })  
})
