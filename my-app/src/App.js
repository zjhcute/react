import React, { Component } from 'react'
import { TodoHeader, TodoInput, TodoList, Liked } from './Components'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '待办事项',
      subTitle: '今日事今日毕',
      btnText: 'ADD',
      todoList: [{
        content: '吃饭',
        isCompleted: true,
        id: 0,
      }, {
        content: '睡觉',
        isCompleted: false,
        id: 1,
      }, {
        content: '摸鱼',
        isCompleted: true,
        id: 2,
      }]
    }
  }

  addTodoItem = (todoItem) => {
    const todoList = [...this.state.todoList]
    const len = todoList.length
    todoList.push({
      content: todoItem,
      isCompleted: false,
      id: len,
    })
    this.setState({
      todoList,
    })
  }

  render() {
    const { title, subTitle, btnText, todoList } = this.state 
    return (
      <>
        <TodoHeader title={title}>
          <h3>{subTitle}</h3>
        </TodoHeader>
        <TodoInput 
          btnText={btnText}
          addTodoItem={this.addTodoItem}
        />
        <TodoList 
          todoList={todoList}
        />
        <Liked />
      </>
    )
  }
}