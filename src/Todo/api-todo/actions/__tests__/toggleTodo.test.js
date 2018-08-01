// @flow

import { toggleTodo } from '../toggleTodo'

describe('A toggle todo action ', () => {
  it('It should create an action of type SET_VISIBILITY_FILTER ', () => {
    const id = 1
    const expoectedAction = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    expect(toggleTodo(id)).toEqual(expoectedAction)
  })
})

