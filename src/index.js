import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import Logger, {browserSerializer} from 'rulsoft-browser-logger'

const mode = process.env.LOGGING_MODE
const logstashHost = process.env.LOGSTASH_HOST
const serviceName = 'rulsoft-front-end'
const logger = Logger(serviceName, mode, 'info', { logstashHost: logstashHost, serializers: {browser: browserSerializer} })

const store = configureStore()

ReactDOM.render(
  <Provider store={store} >
    <App logger={logger} />
  </Provider>,
  document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log(browserSerializer())
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
if (mode !== 'production') {
  const showDevTools = require('./ShowDevTools').default
  showDevTools(store)
}
