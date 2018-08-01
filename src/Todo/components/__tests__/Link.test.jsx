// @flow

import React from 'react'
import Link from '../Link'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Button from '@material-ui/core/Button'

Enzyme.configure({ adapter: new Adapter() })

describe('A Link Component ', () => {
  it('It should render without throwing an error ', () => {
    const props = {
      active: true,
      children: [],
      onClick: jest.fn()
    }
    const wrapper = shallow(<Link {...props} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('should call onClick handler when button is clicked', () => {
    const props = {
      active: true,
      children: [],
      onClick: jest.fn()
    }
    const wrapper = shallow(<Link {...props} />)
    wrapper.find(Button).simulate('click')
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
