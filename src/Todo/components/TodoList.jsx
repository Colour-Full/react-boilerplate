// @flow
import React, { type Element } from 'react'
import { type TodoTypeFromReducer } from '../api-todo/reducers/todo'
import Todo from './ToDo'

export type TodoListProps = {
  todos: Array<TodoTypeFromReducer>,
  toggleTodo: () => any
}

const TodoList = ({ todos, toggleTodo }: TodoListProps): Element<'ul'> => (
  <ul>
    {todos.map((todo: TodoTypeFromReducer): Element<any> =>
      <Todo
        key={todo.id}
        completed={todo.completed}
        text={todo.text}
        onClick={toggleTodo}
      />
    )}
  </ul>
)

export default TodoList
