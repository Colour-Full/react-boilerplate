import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'redux-devtools'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer>
          <NextApp />
        </AppContainer>
      </Provider>,
      document.getElementById('root'))
  })
}

// Open DevTools in new window you need pop ups allowed in Chrome for this to work
if (process.env.OPEN_REDUX_DEV_TOOLS === 'true') {
  const showDevTools = require('src/DevTools').default
  showDevTools(store)
}
