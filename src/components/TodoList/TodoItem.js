import React, { Component } from 'react'

export default class TodoItem extends Component {
  handleDeleteClick = () => {
    this.props.deleteTodo(this.props.id)
  }

  render() {
    return (
      <li>
        {this.props.id+'.'}{this.props.todoName}  {this.props.isCompleted ? '已完成' : '未完成'} 
        &nbsp;<span onClick={this.handleDeleteClick}>删除</span>
      </li>
    )
  }
}
