import React, { Component } from 'react'
import './TodoItem'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

  renderTodoList = () => {
    const { todoList } = this.props
    return todoList.map(item => {
      return <TodoItem {...item} key={item.id}/>
    })
  }

  render() {
    return (
      <ul>
        {this.renderTodoList()}
      </ul>
    )
  }
}

