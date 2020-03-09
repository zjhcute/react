import React, { Component } from 'react'
import { TodoHeader, TodoInput, TodoList, Liked } from './Components'
import { getTodos } from './services'
export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '待办事项',
      subTitle: '今日事今日毕',
      btnText: 'ADD',
      todoList: [],
      isLoading: true,
    }
  }

  getTodosData = () => {
    getTodos()
    .then(res => {
      if(res.status === 200) {
        this.setState({
          todoList: res.data,
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      this.setState({
        isLoading: false,
      })
    })
  }

  componentDidMount() {
    this.getTodosData()
  }

  addTodoItem = (todoItem) => {
    const todoList = [...this.state.todoList]
    const id = Math.random() * 10 ** 17
    todoList.push({
      content: todoItem,
      completed: false,
      id: id,
    })
    this.setState({
      todoList,
    })
  }

  handleCheckChange = (id) => {
    this.setState((prevState) => {
      return {
        todoList: prevState.todoList.map(todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    })
  }

  handleDelClick = (id) => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.filter(todo => todo.id !== id)
      }
    })
  }

  render() {
    const { title, subTitle, btnText, todoList, isLoading } = this.state 
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
          handleCheckChange={this.handleCheckChange}
          handleDelClick={this.handleDelClick}
          isLoading={isLoading}
        />
        <Liked />
      </>
    )
  }
}