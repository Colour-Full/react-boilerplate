// @flow
import React, { type Element } from 'react'
import { type TodoTypeFromReducer } from '../api-todo/reducers/todo'
import Todo from './ToDo'
import { ItemGroup } from '@atlaskit/item'
import { Grid, GridColumn } from '@atlaskit/page'

export type TodoListProps = {
  todos: Array<TodoTypeFromReducer>,
  toggleTodo: (number) => any
}

const TodoList = ({ todos, toggleTodo }: TodoListProps): Element<any> => (
  <Grid>
    <GridColumn medium={4}>
      <ItemGroup>
        {todos.map((todo: TodoTypeFromReducer): Element<any> =>
          <Todo
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onClick={(): Object => toggleTodo(todo.id)}
          />
        )}
      </ItemGroup>
    </GridColumn>
  </Grid>
)

export default TodoList
