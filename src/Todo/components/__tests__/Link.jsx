// @flow

import React from 'react'
import type Link from '../Link'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

describe('A Link Component ', () => {
  it('It should render without throwing an error ', () => {
    const wrapper = shallow(<Link />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('should call onClick handler when button is clicked', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Link onClick={spy} />)
    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
