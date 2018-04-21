// @flow

import React from 'react'
import HelloWorld from './HelloWorld'

type Props = {
  logger: () => mixed
}
const App = (props: Props) => {
  // TODO: get this from context or props
  // Logger.warn('App is now really running wild')
  return (
    <div>
      <HelloWorld logger={props.logger} />
    </div>
  )
}

export default App
