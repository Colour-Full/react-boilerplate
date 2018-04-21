import { combineReducers } from 'redux'
import getHelloWorld from './fetch_hello_world_reducer'

const rootReducer = combineReducers({
  helloWorld: getHelloWorld
})

export default rootReducer
