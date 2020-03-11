import React, { Component } from 'react'

export default class TodoItem extends Component {
  handleDeleteClick = () => {
    this.props.deleteTodo(this.props.id)
  }
  handleCheckboxClick = () => {
    this.props.handleCheckboxClick(this.props.id)
  }

  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.isCompleted}
        onChange={this.handleCheckboxClick}/>
        {this.props.id+'.'}
        {this.props.todoName}  {this.props.isCompleted ? '已完成' : '未完成'} 
        &nbsp;<span onClick={this.handleDeleteClick}>删除</span>
      </li>
    )
  }
}
