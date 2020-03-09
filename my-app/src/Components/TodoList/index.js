import React, { Component } from 'react'
import propTypes from 'prop-types'
import './TodoItem'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

  static propTypes = {
    todoList: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      completed: propTypes.bool.isRequired,
    })).isRequired
  }

  renderTodoList = () => {
    const { todoList } = this.props
    return todoList.map(item => {
      return <TodoItem 
              {...item} 
              key={item.id} 
              handleCheckChange={this.props.handleCheckChange}
              handleDelClick={this.props.handleDelClick}
              />
    })
  }

  renderLoading = () => {
    return <div>isLoading...</div>
  }

  render() {
    const { isLoading } = this.props
    return (
      <ul>
        {isLoading ? this.renderLoading() : this.renderTodoList()}
      </ul>
    )
  }
}

