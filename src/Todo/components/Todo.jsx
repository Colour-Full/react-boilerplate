// @flow
import * as React from 'react'
import type { Element } from 'react'

export type TodoProps = {
  onClick: () => void,
  completed: boolean,
  text: string
}

const Todo = ({onClick, completed, text}: TodoProps): Element<'li'> => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
