// @flow
export const TOGGLE_TODO: string = 'TOGGLE_TODO'

export type ToggleTodoAction = {
  type: string,
  id: number
}

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  id
})
