import React, { Component, Fragment } from 'react'
import {
  Header,
  TodoInput,
  TodoList
} from './components'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: "今日待办事项",
      desc: "今日事，今日毕",
      btnText: "ADD",
      todos: [
        {
          id: 1,
          todoName: "吃饭",
          isCompleted: false
        },
        {
          id: 2,
          todoName: "睡觉",
          isCompleted: false
        },
        {
          id: 3,
          todoName: "打豆豆",
          isCompleted: false
        }
      ]
    }
  }

  addTodo = (todoName) => {
    this.setState({
      todos: this.state.todos.concat({
        id: this.state.todos.length + 1,
        todoName: todoName,
        isCompleted: false
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return item.id !== id
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header title={this.state.title} desc={this.state.desc}/>
        <TodoInput btnText={this.state.btnText}  addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </Fragment>
    )
  }
}