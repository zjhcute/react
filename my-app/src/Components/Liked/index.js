import React, { Component } from 'react'

export default class Liked extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLiked: false,
    }
  }

  handleLikedCLick = () => {
    this.setState((prevState) => {
      return {
        isLiked: !prevState.isLiked,
      }
    })
  }

  render() {
    return (
      <div>
        <span 
          onClick={this.handleLikedCLick}
        >
          {this.state.isLiked ? '喜欢💗' : '不喜欢🖤'}
        </span>
      </div>
    )
  }
}
