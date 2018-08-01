// @flow

import visibilityReducers from '../visibilityFilter'

describe('A visibilityReducers reducer ', () => {
  it('should return the initial state', () => {
    const state = 'SHOW_ALL'
    const action = {}
    expect(visibilityReducers(state, action)).toMatch(state)
  })
  it('should handle SET_VISIBILITY_FILTER', () => {
    const initialState = 'SHOW_ALL'
    const action = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_COMPLETED'
    }
    const nextState = 'SHOW_COMPLETED'
    expect(visibilityReducers(initialState, action)).toEqual(nextState)
  })
})
