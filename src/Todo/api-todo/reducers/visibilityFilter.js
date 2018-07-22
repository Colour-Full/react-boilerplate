// @flow

import { SET_VISIBILITY_FILTER } from '../actions/setVisibilityFilter'

export const VisibilityFilters: {
  SHOW_ALL: string,
  SHOW_COMPLETED: string,
  SHOW_ACTIVE: string
} = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

type ActionType = {
  type: string,
  filter: string
}

export type VisibilityState = string

const visibilityReducers = (state: VisibilityState = VisibilityFilters.SHOW_ALL, action: ActionType): VisibilityState => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityReducers

