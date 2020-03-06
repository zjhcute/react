import React, { Component } from 'react'
const noop = () => {}
export default class TodoItem extends Component {

  handleChange = () => {
    const { 
      handleCheck = noop,
      id
    } = this.props
    handleCheck(id)
  }

  render() {
    const { content, isCompleted } = this.props
    return (
      <div>
        <input 
          type="checkbox"
          checked={isCompleted}
          onChange={this.handleChange}
        />
        <li style={{display: 'inline-block', paddingRight: '10px'}}>{content}</li>
        <span>{isCompleted ? '完成' : '未完成'}</span>
      </div>
    )
  }
}
