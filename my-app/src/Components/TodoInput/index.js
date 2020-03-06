import React, { Component, createRef } from 'react'
import propTypes  from 'prop-types'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
    this.input = createRef()
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
    const { inputValue } = this.state
    if(inputValue) {
      this.props.addTodoItem(inputValue)
      this.setState({
        inputValue: '',
      }, () => {
        this.input.current.focus()
      })
    }
  }

  handleEnterUp = (e) => {
    const { inputValue } = this.state
    if(e.keyCode === 13 && inputValue) {
      this.props.addTodoItem(inputValue)
      this.setState({
        inputValue: '',
      })
    }
  }

  render() {
    return (
      <>
        <input 
          type="text" 
          placeholder="请输入待办事项"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyUp={this.handleEnterUp}
          ref={this.input}
        />
        <button
          onClick={this.handleAddClick}
        >{this.props.btnText}</button>
      </>
    )
  }
}
