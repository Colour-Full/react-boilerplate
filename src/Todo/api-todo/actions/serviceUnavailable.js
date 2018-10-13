// @flow
import { type Dispatch } from 'redux'

export const SERVICE_UNAVAILABLE_ACTION = 'SERVICE_UNAVAILABLE_ACTION'


export type ServiceUnavailableAction = {
  type: string,
  serviceUnavailable: boolean
}

export const serviceUnavailable = (): ServiceUnavailableAction => ({
  type: SERVICE_UNAVAILABLE_ACTION,
  serviceUnavailable: true
})

export const dispatchServiceUnavailable = (dispatch: Dispatch<*>, serviceUnavailable: (() => ServiceUnavailableAction)): ((Object) => Object | void) => (response: Object): Object | void => {
  if (response.status !== 500) return response

  dispatch(serviceUnavailable())
}
