// @flow
import React from 'react'
import TodoList from '../TodoList'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

describe('TodoList component', () => {
  it('Should render without throwing an error', () => {
    const todos = [
      { id: 0, text: 'First Thing To Do', completed: false },
      { id: 1, text: 'Second Thing To Do', completed: false },
      { id: 2, text: 'Third Thing To Do', completed: false }
    ]
    const toggleTodo = jest.fn()
    const wrapper = shallow(<TodoList todos={todos} toggleTodo={toggleTodo} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
