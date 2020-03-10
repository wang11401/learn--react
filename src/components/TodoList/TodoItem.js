import React, { Component } from 'react'

export default class TodoItem extends Component {
  handleCheckboxChange = () => {
    const {onCompletedChange = () => {}, id} = this.props
    onCompletedChange(id)
  }
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.isCompleted} onChange={this.handleCheckboxChange}/>
        <span>
          {this.props.title} {this.props.isCompleted ? '已完成' : '未完成'}
        </span>
      </li>
    )
  }
}
