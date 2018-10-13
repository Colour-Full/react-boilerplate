// @flow

import { multiArgumentPipe } from 'src/async-fp'
import { postJSON } from 'src/api-utils'
import { type Dispatch } from 'redux'
export const ADD_TODO: string = 'ADD_TODO'

type AddTodoAction = {
  type: string,
  id: number,
  text: string
}

type PostTodoBody = {
  text: string
}

const dispatchAction = (dispatch: Dispatch<AddTodoAction>, action: ((Object) => any)): ((Object) => any) => (value: Object): any => dispatch(action(value))

const unpackJSON = (response: Object): Object | void => {
  console.log('POST RESPONSE', response.json())
  if (response.status === 200) return response.json()
}

export const addTodo = (data: Object): AddTodoAction => ({
  type: ADD_TODO,
  id: data.id,
  text: data.text
})

// export const determineAddTodoAction = (dispatch, action) => request => {
//   if (request.status === 200) {
//     const data = extractJSON(request)

//   }

//   if (request.status === 400) {
//     errorHandlingActions[request.status]()
//   }
// }

export const postTodo = (dispatch: Dispatch<*>, action: ((Object) => any)): ((string, Object) => any) => async (url: string, body: PostTodoBody): any => (
  multiArgumentPipe(
    postJSON,
    // determineAddTodoAction(dispatch, action)
    unpackJSON,
    dispatchAction(dispatch, action)
  )(url, body)
)
