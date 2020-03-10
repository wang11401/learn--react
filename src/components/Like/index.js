import React, { Component } from 'react'

export default class Like extends Component {
  constructor() {
    super()
    this.state = {
      isLike: false
    }
  }
  handleLikeClick = () => {
    // this.setState({
    //   isLike: !this.state.isLike
    // })
    this.setState((prevState) => {
      return {
        isLike: !prevState.isLike
      }
    }, () => {
      console.log(this.state.isLike)
    })
  }
  render() {
    return (
      <div>
        <span onClick={this.handleLikeClick}>
          {
            this.state.isLike ? '取消 ❤️' : '喜欢 💔'
          }
        </span>
      </div>
    )
  }
}
