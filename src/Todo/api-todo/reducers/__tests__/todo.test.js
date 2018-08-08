import todoReducer from '../todo'

describe('A todo reducer ', () => {
  it('should return the initial state', () => {
    const state = []
    const action = {}
    expect(todoReducer(state, action)).toEqual(state)
  })
  it('should handle ADD_TODO', () => {
    const initialState = []
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'I have stuff to do'
    }
    const nextState = [{
      id: 0,
      text: 'I have stuff to do',
      completed: false
    }]
    expect(todoReducer(initialState, action)).toEqual(nextState)
  })
  it('should handle TOGGLE_TODO', () => {
    const state = [{
      id: 0,
      text: 'I have stuff to do',
      completed: false
    }]
    const action = {
      type: 'TOGGLE_TODO',
      id: 0
    }
    const nextState = [{
      id: 0,
      text: 'I have stuff to do',
      completed: true
    }]
    expect(todoReducer(state, action)).toEqual(nextState)
  })
})
