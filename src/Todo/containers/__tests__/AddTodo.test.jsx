// // @flow
// import React from 'react'
// import { AddTodo } from '../AddTodo'
// import Adapter from 'enzyme-adapter-react-16'
// import Enzyme, { shallow } from 'enzyme'
// import { shallowToJson } from 'enzyme-to-json'

// Enzyme.configure({ adapter: new Adapter() })

// describe('AddTodo component', () => {
//   it('Should render without throwing an error', () => {
//     const dispatch = jest.fn()
//     const wrapper = shallow(<AddTodo dispatch={dispatch} />)
//     expect(shallowToJson(wrapper)).toMatchSnapshot()
//   })
//   it('Should call dispatch with ADD_TOD action when a to do is submitted', () => {
//     const dispatch = jest.fn()
//     const wrapper = shallow(<AddTodo dispatch={dispatch} />)
//     const e = {
//       preventDefault: () => {}
//     }
//     const input = {
//       value: 'Test to do item'
//     }
//     const addTodo = {
//       id: 0,
//       type: 'ADD_TODO',
//       text: 'Test to do item'

//     }
//     wrapper.find('input').getElement().ref(input)
//     wrapper.find('form').simulate('submit', e)
//     expect(dispatch).toHaveBeenCalledWith(addTodo)
//   })
// })
