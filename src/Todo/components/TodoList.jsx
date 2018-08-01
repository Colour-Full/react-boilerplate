// @flow
import React, { type Element } from 'react'
import { type TodoTypeFromReducer } from '../api-todo/reducers/todo'
import Todo from './ToDo'
import { ItemGroup } from '@atlaskit/item'
import { Grid, GridColumn } from '@atlaskit/page'

export type TodoListProps = {
  todos: Array<TodoTypeFromReducer>,
  toggleTodo: () => any
}

const TodoList = ({ todos, toggleTodo }: TodoListProps): Element<any> => (
  <Grid>
    <GridColumn medium={4}>
      <ItemGroup>
        {todos.length === 0 ? 'You have nothing to do' : 'Now there is somthing to do'}
        {todos.map((todo: TodoTypeFromReducer): Element<any> =>
          <Todo
            key={todo.id}
            completed={todo.completed}
            text={todo.text}
            onClick={toggleTodo}
          />
        )}
      </ItemGroup>
    </GridColumn>
  </Grid>
)

export default TodoList
