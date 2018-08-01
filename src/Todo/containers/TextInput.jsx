// @flow
import React, { Component, type Element } from 'react'
import SingleLineTextInput from '@atlaskit/input'
import InlineEdit from '@atlaskit/inline-edit'

type State = {
  editValue: string | number,
  readValue: string | number
}
type Props = {
  isFitContainerWidthReadView: boolean
}

export default class TextInput extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      editValue: 'Read value of the field',
      readValue: 'Read value of the field'
    }
    this.onConfirm = this.onConfirm.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onChange = this.onChange.bind(this)
    this.renderInput = this.renderInput.bind(this)
  }
  /*:: onConfirm: () => void */
  onConfirm () {
    this.setState((state: State): Object => ({ readValue: state.editValue }))
  }
  /*:: onCancel: () => void */
  onCancel () {
    this.setState((state: State): Object => ({ editValue: state.readValue }))
  };
  /*:: onChange: () => void */
  onChange (event: any) {
    this.setState({
      editValue: event.target.value
    })
  }
  /*:: renderInput: (Object) => void */
  renderInput (options: { isEditing: boolean, id: string }): Element<any> {
    return (
      <SingleLineTextInput
        id={options.id}
        isEditing={options.isEditing}
        isInitiallySelected
        value={this.state.editValue}
        onChange={this.onChange}
      />
    )
  }

  render (): Element<any> {
    const id = 'inline-edit-single'
    return (
      <div>
        <InlineEdit
          isFitContainerWidthReadView
          labelHtmlFor={id}
          editView={this.renderInput({ isEditing: true, id })}
          readView={this.renderInput({ isEditing: false, id })}
          onConfirm={this.onConfirm}
          onCancel={this.onCancel}
          {...this.props}
        />
      </div>
    )
  }
}
