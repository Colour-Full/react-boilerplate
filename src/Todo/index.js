// @flow
import React, { type Element } from 'react'
import Page, { Grid, GridColumn } from '@atlaskit/page'

// Import Components
import Footer from './components/Footer'

// Import Containers
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'


const Todo = (): Element<any> => (
  <Page>
    <Grid>
      <GridColumn medium={2} />
      <GridColumn medium={8}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </GridColumn>
    </Grid>
  </Page>
)

export default Todo
