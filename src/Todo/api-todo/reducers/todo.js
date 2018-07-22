// @flow
import { ADD_TODO } from '../actions/addTodo'
import { TOGGLE_TODO } from '../actions/toggleTodo'

type ActionType = {
    type: string,
    id: number,
    text: string
}

export type TodoTypeFromReducer = {
    id: number,
    text: string,
    completed: boolean
}

export type TodoList = Array<TodoTypeFromReducer>

const todoReducer = (state: TodoList = [], action: ActionType): TodoList => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(
        (todo: TodoTypeFromReducer): TodoTypeFromReducer =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo)
    default:
      return state
  }
}

export default todoReducer
