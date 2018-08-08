// @flow
import * as React from 'react'
import type { Element } from 'react'
import Item from '@atlaskit/item'

export type TodoProps = {
  onClick: () => any,
  completed: boolean,
  text: string
}

const Todo = ({onClick, completed, text}: TodoProps): Element<any> => (
  <Item
    isCompact
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </Item>
)

export default Todo
