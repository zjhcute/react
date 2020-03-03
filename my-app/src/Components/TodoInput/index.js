import React, { Component } from 'react'
import propTypes  from 'prop-types'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  static propTypes = {
    btnText: propTypes.string,
  }

  static defaultProps = {
    btnText: 'ADD',
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value
    this.setState({
      inputValue,
    })

  }

  handleAddClick = () => {
    this.props.addTodoItem(this.state.inputValue)
  }

  render() {
    return (
      <>
        <input 
          type="text" 
          placeholder="请输入待办事项"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button
          onClick={this.handleAddClick}
        >{this.props.btnText}</button>
      </>
    )
  }
}
