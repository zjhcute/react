import React, { Component } from 'react'
import propTypes  from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: propTypes.string,
  }

  static defaultProps = {
    btnText: 'ADD',
  }

  render() {
    return (
      <>
        <input type="text" placeholder="请输入待办事项"/>
        <button>{this.props.btnText}</button>
      </>
    )
  }
}
