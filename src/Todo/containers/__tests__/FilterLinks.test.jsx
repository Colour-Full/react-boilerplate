import { mapStateToProps, mapDispatchToProps } from '../FilterLinks'

describe('FilterLinks component', () => {
  it('Should have mapsStateToProps', () => {
    expect(mapStateToProps).toBeDefined()
  })
  it('mapStateToProps shlould return true when visibility from state matches the filter', () => {
    const state = {
      todos: [],
      visibility: 'SHOW_ALL'
    }
    const ownProps = {
      filter: 'SHOW_ALL',
      children: 'All'
    }
    const result = {
      active: true
    }
    expect(mapStateToProps(state, ownProps)).toEqual(result)
  })
  it('Should have mapDispatchToProps', () => {
    expect(mapDispatchToProps).toBeDefined()
  })
  it('mapDispatchToProps should return onClick prop', () => {
    const dispatch = jest.fn()
    const setVisibilityFilter = jest.fn()
    const ownProps = {
      filter: 'SHOW_ALL',
      children: 'All'
    }
    const result = {
      onClick: () => { dispatch(setVisibilityFilter(ownProps.filter)) }
    }
    expect(JSON.stringify(mapDispatchToProps(dispatch, ownProps))).toEqual(JSON.stringify(result))
  })
})
