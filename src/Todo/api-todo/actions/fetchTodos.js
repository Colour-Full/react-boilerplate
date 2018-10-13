// @flow
import { getJSON, extractJSON } from 'src/api-utils'
import { singleArgumentPipe } from 'src/async-fp'
import { dispatchServiceUnavailable, serviceUnavailable, type ServiceUnavailableAction } from './serviceUnavailable'

export const GET_TODO_ACTION = 'GET_TODO_ACTION'

type GetTodos = {
  type: string,
  data: Object
}

export const getTodos = (data: Object): GetTodos => {
  return {
    type: GET_TODO_ACTION,
    data: data
  }
}

const dispatchGetToDoAction = (dispatch: ((GetTodos) => any), getTodos: (Object) => GetTodos): ((Object) => Promise<*>) => async (response: Object): Promise<*> => {
  const data = await extractJSON(response)
  dispatch(getTodos(data))
}

export const fetchTodos = (dispatch: (ServiceUnavailableAction | GetTodos) => any): ((string) => Promise<ServiceUnavailableAction | GetTodos>) => async (url: string): Promise<ServiceUnavailableAction | GetTodos> => (
  singleArgumentPipe(
    getJSON,
    dispatchServiceUnavailable(dispatch, serviceUnavailable),
    // We can pipe more function here to handle other errors
    dispatchGetToDoAction(dispatch, getTodos)
  )(url)
)
