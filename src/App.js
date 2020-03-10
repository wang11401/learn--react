import React, { Component, Fragment } from 'react'
import {
  TodoHeader,
  TodoInput,
  TodoList,
  Like
} from './components'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      title: '待办事项列表',
      desc: "今日事，今日毕",
      todos: [
        {id: 1, title: '吃饭', isCompleted: true},
        {id: 2, title: '睡觉', isCompleted: false}
      ]
    }
  }
  addTodo = (todoTitle) => {
    this.setState({
      todos: this.state.todos.concat({
        id: this.state.todos.length + 1,
        title: todoTitle,
        isCompleted: false
      })
    })
  }

  onCompletedChange = (id) => {
    this.setState((prevState) => {
      return prevState.todos.map((todo, index) => {
        if(todo.id === id){
          todo.isCompleted = !todo.isCompleted
        }
        return index
      })
    })
  }

  render() {
    return (
      <Fragment>
        <TodoHeader desc={this.state.desc}>
          {this.state.title}
        </TodoHeader>
        <TodoInput btnText="ADD" addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos} onCompletedChange={this.onCompletedChange} />
        <Like/>
      </Fragment>
    )
  }
}

