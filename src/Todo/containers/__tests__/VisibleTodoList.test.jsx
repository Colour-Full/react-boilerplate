import { getVisibleTodos, mapStateToProps, mapDispatchToProps } from '../VisibleTodoList'

describe('A VisibleTodoList container', () => {
  it('Should have getVisibleTodos defined', () => {
    expect(getVisibleTodos).toBeDefined()
  })
  it('getVisibleTodos should throw an error if no valid filter is passed', () => {
    const todos = [
      { id: 0, text: 'First Thing To Do', completed: true },
      { id: 1, text: 'Second Thing To Do', completed: false },
      { id: 2, text: 'Third Thing To Do', completed: false }
    ]
    const filter = {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE',
      ERROR: 'ERROR'
    }
    const error = 'Unknown filter: ERROR'
    expect(() => { getVisibleTodos(todos, filter.ERROR) }).toThrow(error)
  })
  it('getVisibleTodos should handle SHOW_ALL filter', () => {
    const todos = [
      { id: 0, text: 'First Thing To Do', completed: true },
      { id: 1, text: 'Second Thing To Do', completed: false },
      { id: 2, text: 'Third Thing To Do', completed: false }
    ]
    const filter = {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE',
      ERROR: 'ERROR'
    }
    expect(getVisibleTodos(todos, filter.SHOW_ALL)).toMatchSnapshot()
  })
  it('getVisibleTodos should handle SHOW_ACTIVE filter', () => {
    const todos = [
      { id: 0, text: 'First Thing To Do', completed: true },
      { id: 1, text: 'Second Thing To Do', completed: false },
      { id: 2, text: 'Third Thing To Do', completed: false }
    ]
    const filter = {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE',
      ERROR: 'ERROR'
    }
    expect(getVisibleTodos(todos, filter.SHOW_ACTIVE)).toMatchSnapshot()
  })
  it('getVisibleTodos should handle SHOW_COMPLETED filter', () => {
    const todos = [
      { id: 0, text: 'First Thing To Do', completed: true },
      { id: 1, text: 'Second Thing To Do', completed: false },
      { id: 2, text: 'Third Thing To Do', completed: false }
    ]
    const filter = {
      SHOW_ALL: 'SHOW_ALL',
      SHOW_COMPLETED: 'SHOW_COMPLETED',
      SHOW_ACTIVE: 'SHOW_ACTIVE',
      ERROR: 'ERROR'
    }
    expect(getVisibleTodos(todos, filter.SHOW_COMPLETED)).toMatchSnapshot()
  })
  it('Should have mapStateToProps defined', () => {
    expect(mapStateToProps).toBeDefined()
  })
  it('mapStateToProps should return all todos prop when called with state with visibility set to `SHOW_ALL`', () => {
    const state = {
      todos: [
        { id: 0, text: 'First Thing To Do', completed: true },
        { id: 1, text: 'Second Thing To Do', completed: false },
        { id: 2, text: 'Third Thing To Do', completed: false }
      ],
      visibility: 'SHOW_ALL'
    }
    expect(mapStateToProps(state)).toMatchSnapshot()
  })
  it('mapStateToProps should return all todos prop when called with state with visibility set to `SHOW_ALL`', () => {
    const state = {
      todos: [
        { id: 0, text: 'First Thing To Do', completed: true },
        { id: 1, text: 'Second Thing To Do', completed: false },
        { id: 2, text: 'Third Thing To Do', completed: false }
      ],
      visibility: 'SHOW_ALL'
    }
    expect(mapStateToProps(state)).toMatchSnapshot()
  })
  it('mapStateToProps should return todos prop containing `all todos` when called with state with visibility set to `SHOW_ACTIVE`', () => {
    const state = {
      todos: [
        { id: 0, text: 'First Thing To Do', completed: true },
        { id: 1, text: 'Second Thing To Do', completed: false },
        { id: 2, text: 'Third Thing To Do', completed: false }
      ],
      visibility: 'SHOW_ALL'
    }
    expect(mapStateToProps(state)).toMatchSnapshot()
  })
  it('mapStateToProps should return todos prop containing only `active todos` when called with state with visibility set to `SHOW_ACTIVE`', () => {
    const state = {
      todos: [
        { id: 0, text: 'First Thing To Do', completed: true },
        { id: 1, text: 'Second Thing To Do', completed: false },
        { id: 2, text: 'Third Thing To Do', completed: false }
      ],
      visibility: 'SHOW_ACTIVE'
    }
    expect(mapStateToProps(state)).toMatchSnapshot()
  })
  it('mapStateToProps should return todos prop containing only `completed todos` when called with state with visibility set to `SHOW_COMPLETED`', () => {
    const state = {
      todos: [
        { id: 0, text: 'First Thing To Do', completed: true },
        { id: 1, text: 'Second Thing To Do', completed: false },
        { id: 2, text: 'Third Thing To Do', completed: false }
      ],
      visibility: 'SHOW_COMPLETED'
    }
    expect(mapStateToProps(state)).toMatchSnapshot()
  })
  it('Should have mapDispatchToProps defined', () => {
    expect(mapDispatchToProps).toBeDefined()
  })
  it('mapDispatchToProps defined', () => {
    expect(mapDispatchToProps).toBeDefined()
  })
  it('mapDispatchToProps should return toggleTodo prop when called with dispatch', () => {
    const dispatch = jest.fn()
    const toggleTodo = jest.fn()
    const result = {
      toggleTodo: (id) => dispatch(toggleTodo(id))
    }
    expect(JSON.stringify(mapDispatchToProps(dispatch))).toEqual(JSON.stringify(result))
  })
})
