// @flow

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../api-todo/actions/addTodo'
import type { Element } from 'react'
import { bindActionCreators, type Dispatch } from 'redux'
import Button from '@atlaskit/button'
import { Grid, GridColumn } from '@atlaskit/page'
import FieldText from '@atlaskit/field-text'

type State = {
  value: string
}
type AddTodoProps = {
  addTodo: (string) => any
}

export class AddTodo extends Component<AddTodoProps, State> {
  constructor (props: AddTodoProps) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  /*:: handleChange: (SyntheticEvent<HTMLInputElement>) => void */
  handleChange (event: SyntheticEvent<HTMLInputElement>) {
    this.setState({ value: event.currentTarget.value })
  }
  /*:: handleSubmit: (SyntheticEvent<HTMLFormElement>) => void */
  handleSubmit (event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!this.state.value.trim()) return

    this.props.addTodo(this.state.value)
  }

  render (): Element<any> {
    return (
      <form
        onSubmit={(event: SyntheticEvent<HTMLFormElement>): void => this.handleSubmit(event)}
      >
        <Grid>
          <GridColumn medium={4}>
            <FieldText type='text' value={this.state.value} onChange={this.handleChange} shouldFitContainer isLabelHidden />
          </GridColumn>
          <GridColumn medium={4}>
            <Button appearance='primary' type='submit'>
          Add To Do
            </Button>
          </GridColumn>
        </Grid>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<*>): any => bindActionCreators({
  addTodo
}, dispatch)

export default connect(null, mapDispatchToProps)(AddTodo)
