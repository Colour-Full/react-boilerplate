import React from 'react'
import Todo from '../Todo'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Item from '@atlaskit/item'

Enzyme.configure({ adapter: new Adapter() })

describe('A Todo Component ', () => {
  it('It should render without throwing an error ', () => {
    const props = {
      onClick: jest.fn(),
      completed: false,
      text: 'To do'
    }
    const wrapper = shallow(<Todo {...props} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })

  it('should call onClick handler when Item component is clicked', () => {
    const props = {
      onClick: jest.fn(),
      completed: false,
      text: 'To do'
    }
    const wrapper = shallow(<Todo {...props} />)
    wrapper.find(Item).simulate('click')
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
