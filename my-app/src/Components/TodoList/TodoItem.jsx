import React, { Component } from 'react'
const noop = () => {}
export default class TodoItem extends Component {

  // componentDidMount() {
  //   console.log(this.props.id, 'DidMount')
  // }

  // componentDidUpdate() {
  //   console.log(this.props.id, 'DidUpdate')
  // }

  // componentWillUnmount() {
  //   console.log(this.props.id, 'WillUnmoust')
  // }

  shouldComponentUpdate(nextProps) {
    return nextProps.isCompleted !== this.props.isCompleted
  }

  handleCheckChange = () => {
    const { 
      handleCheckChange = noop,
      id,
    } = this.props
    handleCheckChange(id)
  }

  handleDelClick = () => {
    const {
      handleDelClick,
      id,
    } = this.props
    handleDelClick(id)
  }

  render() {
    const { content, isCompleted, id } = this.props
    console.log(id, 'render')
    return (
      <div>
        <input 
          type="checkbox"
          checked={isCompleted}
          onChange={this.handleCheckChange}
        />
        <li style={{display: 'inline-block', paddingRight: '10px'}}>{content}</li>
        <span>{isCompleted ? '完成' : '未完成'}</span>
        <button
          onClick={this.handleDelClick}
        >删除</button>
      </div>
    )
  }
}
