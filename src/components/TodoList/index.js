import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} deleteTodo={this.props.deleteTodo}/>
        })}
      </ul>
    )
  }
}
