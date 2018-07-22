// @flow

import React from 'react'
import Todo from '../Todo'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

describe('A Link Component ', () => {
  it('It should render without throwing an error ', () => {
    const wrapper = shallow(<Todo />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('should call onClick handler when <li /> is clicked', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Todo onClick={spy} />)
    wrapper.find('li').simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
