import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'src/reducers'
import thunkMiddleware from 'redux-thunk'

// Middleware we want to use in development
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware
  )
)

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  return store
}
