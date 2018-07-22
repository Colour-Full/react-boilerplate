// @flow

import React from 'react'
import type { Element } from 'react'
import Todo from 'src/Todo'

const App = (): Element<any> => {
  // TODO: get this from context or props
  // Logger.warn('App is now really running wild')
  return (
    <div>
      <h1>Flow Demo</h1>
      <Todo />
    </div>
  )
}

export default App
