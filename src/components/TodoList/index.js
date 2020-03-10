import React, { Component } from 'react'
import TodoItem from './TodoItem.js'
import PropTypes from 'prop-types'

export default class TodoLists extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    })).isRequired,
    onCompletedChange: PropTypes.func
  }
  render() {
    const { todos, onCompletedChange } = this.props
    return (
      <ul>
        {
          todos.map(todo => {
            return (
              <TodoItem key={todo.id}
                        {...todo} 
                        onCompletedChange={onCompletedChange}/>
            )
          })
        }
      </ul>
    )
  }
}
