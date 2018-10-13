// @flow

import { combineReducers } from 'redux'
import todoReducer, { type TodoList } from '../Todo/api-todo/reducers/todo'
import visibilityReducers, { type VisibilityState } from '../Todo/api-todo/reducers/visibilityFilter'
import errorHandlerReducer, { type ToDoErrors } from '../Todo/api-todo/reducers/errorHandler'

export type AppState = {
  todos: TodoList,
  visibility: VisibilityState,
  errors: ToDoErrors
}

export default combineReducers({
  todos: todoReducer,
  visibility: visibilityReducers,
  errors: errorHandlerReducer
})
