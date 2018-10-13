// @flow
import React, { type Element, Component } from 'react'
import { type TodoTypeFromReducer } from '../api-todo/reducers/todo'
import Todo from './Todo'
import { ItemGroup } from '@atlaskit/item'
import { Grid, GridColumn } from '@atlaskit/page'

export type TodoListProps = {
  todos: Array<TodoTypeFromReducer>,
  toggleTodo: (number) => any,
  fetchTodos: (string) => any,
  serviceUnavailable: boolean
}

class TodoList extends Component<TodoListProps> {
  componentWillMount () {
    this.props.fetchTodos('http://localhost:9001/todos')
  }
  render (): Element<any> {
    if (this.props.serviceUnavailable) {
      return (
        <Grid>
          <GridColumn medium={4}>
            <h1>The service is currently unavailable please try again later</h1>
          </GridColumn>
        </Grid>
      )
    }
    return (
      <Grid>
        <GridColumn medium={4}>
          <ItemGroup>
            {this.props.todos.map((todo: TodoTypeFromReducer): Element<any> =>
              <Todo
                key={todo.id}
                completed={todo.completed}
                text={todo.text}
                onClick={(): Object => this.props.toggleTodo(todo.id)}
              />
            )}
          </ItemGroup>
        </GridColumn>
      </Grid>
    )
  }
}

export default TodoList
