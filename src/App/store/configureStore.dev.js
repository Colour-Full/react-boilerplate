import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from 'src/reducers'
import DevTools from 'src/DevTools/DevTools'
import { persistState } from 'redux-devtools'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

// Middleware we want to use in development
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
)

function getDebugSessionKey (): any {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

export default function configureStore (initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store: any = createStore(rootReducer, initialState, enhancer)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('src/reducers', () => {
      const nextRootReducer = require('src/reducers').default
      store.replaceReducer(nextRootReducer)
    }
    )
  }

  return store
}
