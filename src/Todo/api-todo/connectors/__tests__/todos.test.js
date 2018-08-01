// @flow

import { getTodoListFromState,
  getVisibilityFilterFromState } from '../todos'

describe('A todo connectors ', () => {
  it('It should have getTodoListFromState connector defined ', () => {
    expect(getTodoListFromState).toBeDefined()
  })

  it('getTodoListFromState connector should get list of todos from state ', () => {
    const state = {
      todos: [
        { id: 0, text: 'Things to do', completed: false },
        { id: 1, text: 'More things to do', completed: false }
      ],
      visibility: 'SHOW_ALL'
    }
    const todoList = [
      { id: 0, text: 'Things to do', completed: false },
      { id: 1, text: 'More things to do', completed: false }
    ]
    expect(getTodoListFromState(state)).toEqual(todoList)
  })

  it('It should have getVisibilityFilterFromState connector defined ', () => {
    expect(getVisibilityFilterFromState).toBeDefined()
  })

  it('getVisibilityFilterFromState connector should get visibility from state ', () => {
    const state = {
      todos: [
        { id: 0, text: 'Things to do', completed: false },
        { id: 1, text: 'More things to do', completed: false }
      ],
      visibility: 'SHOW_ALL'
    }
    const visibility = 'SHOW_ALL'

    expect(getVisibilityFilterFromState(state)).toMatch(visibility)
  })
})
