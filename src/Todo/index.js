// @flow
import React, { type Element } from 'react'

// Import Components
import Footer from './components/Footer'

// Import Containers
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'


const Todo = (): Element<any> => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default Todo
