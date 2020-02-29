import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    const { content, isCompleted } = this.props
    return (
      <div>
        <li style={{display: 'inline-block', paddingRight: '10px'}}>{content}</li>
        <span>{isCompleted ? '完成' : '未完成'}</span>
      </div>
    )
  }
}
