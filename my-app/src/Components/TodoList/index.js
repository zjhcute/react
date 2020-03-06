import React, { Component } from 'react'
import propTypes from 'prop-types'
import './TodoItem'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

  static propTypes = {
    todoList: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      content: propTypes.string.isRequired,
      isCompleted: propTypes.bool.isRequired,
    })).isRequired
  }

  renderTodoList = () => {
    const { todoList } = this.props
    return todoList.map(item => {
      return <TodoItem {...item} key={item.id} handleCheck={this.props.handleCheck}/>
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

