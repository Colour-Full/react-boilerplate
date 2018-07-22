// @flow
import { type AppState } from 'src/reducers'
import { type VisibilityState } from '../reducers/visibilityFilter'
import { type TodoList } from '../reducers/todo'

// these are the getter functions for accessing state.
export const getTodoListFromState = (state: AppState): TodoList => state.todos
export const getVisibilityFilterFromState = (state: AppState): VisibilityState => state.visibility
