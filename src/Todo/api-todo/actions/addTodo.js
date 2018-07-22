// @flow

export const ADD_TODO: string = 'ADD_TODO'

let nextTodoId = 0

type AddTodoAction = {
  type: string,
  id: number,
  text: string
}

export const addTodo = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})
