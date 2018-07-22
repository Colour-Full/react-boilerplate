// @flow

import { combineReducers } from 'redux'
import todoReducer, { type TodoList } from '../Todo/api-todo/reducers/todo'
import visibilityReducers, { type VisibilityState } from '../Todo/api-todo/reducers/visibilityFilter'

export type AppState = {
  todos: TodoList,
  visibility: VisibilityState

}

export default combineReducers({
  todos: todoReducer,
  visibility: visibilityReducers
})
