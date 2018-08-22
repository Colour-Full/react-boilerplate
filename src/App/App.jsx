// @flow

import React from 'react'
import type { Element } from 'react'
import Todo from 'src/Todo'

const App = (): Element<any> => {
  return (
    <div>
      <h1>React Boilerplate Demo</h1>
      <Todo />
    </div>
  )
}

export default App
