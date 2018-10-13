// @flow

import { SERVICE_UNAVAILABLE_ACTION } from '../actions/serviceUnavailable'

export type ToDoErrors = {
  serviceUnavailable: boolean
}

type ActionType = {
  type: string,
  serviceUnavailable: boolean
}

const defaultState = {
  serviceUnavailable: false
}

const errorHandlerReducer = (state: ToDoErrors = defaultState, action: ActionType): ToDoErrors => {
  switch (action.type) {
    case SERVICE_UNAVAILABLE_ACTION:
      return {
        ...state,
        serviceUnavailable: action.serviceUnavailable
      }
    default:
      return state
  }
}

export default errorHandlerReducer
