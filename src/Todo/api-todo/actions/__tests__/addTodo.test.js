import { addTodo } from '../addTodo'

describe('A addTodo action ', () => {
  // Jest module test
  it('It should return an action of type ADD_TODO', () => {
    const text = 'I have stuff to do'
    const expectedAction = {
      type: 'ADD_TODO',
      id: 0,
      text: 'I have stuff to do'
    }
    expect(addTodo(text)).toEqual(expectedAction)
  })
})
