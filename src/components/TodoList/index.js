import React, { Component } from 'react'
import TodoItem from './TodoItem.js'

export default class TodoLists extends Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return (
              <TodoItem key={todo.id} {...todo}/>
            )
          })
        }
      </ul>
    )
  }
}
