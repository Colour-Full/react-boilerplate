import { setVisibilityFilter } from '../setVisibilityFilter'

describe('A setVisibilityFilter action ', () => {
  it('It should create an action of type SET_VISIBILITY_FILTER ', () => {
    const filter = 'SHOW_ALL'
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ALL'
    }
    expect(setVisibilityFilter(filter)).toEqual(expectedAction)
  })
})
