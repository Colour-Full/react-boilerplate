import { FETCH_HELLO_WORLD } from '../actions/fetch_hello_world.js'

function getHelloWorld (
  state = {
    loading: true,
    string: {
      hello: undefined
    }
  },
  action) {
  switch (action.type) {
    case FETCH_HELLO_WORLD:
      return {
        ...state,
        loading: false,
        string: action.data
      }
  }
  console.log(state)
  return state
}

export default getHelloWorld
