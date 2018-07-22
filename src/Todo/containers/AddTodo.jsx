// @flow

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../api-todo/actions/addTodo'
import type { Element } from 'react'
import { type Dispatch } from 'redux'

type AddTodoProps = {
  dispatch: Dispatch<*>
}

const AddTodo = ({ dispatch }: AddTodoProps): Element<'div'> => {
  let input: ?HTMLInputElement

  return (
    <div>
      <form
        onSubmit={(e: SyntheticEvent<HTMLFormElement>) => {
          e.preventDefault()
          if (input) {
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }
        }}
      >
        <input ref={(node: ?HTMLInputElement): ?HTMLInputElement => (input = node)} />
        <button type='submit'>
          Add To Do
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
