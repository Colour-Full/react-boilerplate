import React from 'react'
import { AddTodo } from '../AddTodo'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import FieldText from '@atlaskit/field-text'

Enzyme.configure({ adapter: new Adapter() })

describe('AddTodo component', () => {
  it('Should render without throwing an error', () => {
    const addTodo = jest.fn()
    const wrapper = shallow(<AddTodo addTodo={addTodo} />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
  it('Should update the state value property when the field text is changed', () => {
    const addTodo = jest.fn()
    const wrapper = shallow(<AddTodo addTodo={addTodo} />)
    wrapper.find(FieldText).simulate('change', { currentTarget: { value: 'Something to do' } })
    expect(wrapper.state().value).toEqual('Something to do')
  })
  it('Should call addTodo with the text field value when the form is submitted', () => {
    const addTodo = jest.fn()
    const wrapper = shallow(<AddTodo addTodo={addTodo} />)
    wrapper.find(FieldText).simulate('change', { currentTarget: { value: 'Something to do' } })
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    expect(addTodo).toHaveBeenCalledWith('Something to do')
  })
  it('Should not call addTodo if text field value is empty', () => {
    const addTodo = jest.fn()
    const wrapper = shallow(<AddTodo addTodo={addTodo} />)
    wrapper.find(FieldText).simulate('change', { currentTarget: { value: '' } })
    wrapper.find('form').simulate('submit', { preventDefault: () => { } })
    expect(addTodo).toHaveBeenCalledTimes(0)
  })
})
