import React, { Component } from 'react'
import { TodoHeader, TodoInput, TodoList } from './Components'

export default class Todo extends Component {
  render() {
    return (
      <>
        <TodoHeader title="待办事项">
          <h3>今日事今日毕</h3>
        </TodoHeader>
        <TodoInput btnText='ADD' />
        <TodoList />
      </>
    )
  }
}