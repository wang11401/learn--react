import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }
  static defaultProps = {
    btnText: '添加TODO'
  }
  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    this.inputDom = createRef()
  }
  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleADDClick = () => {
    if(this.state.inputValue === ''){
      return 
    }
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    }, () => {
      this.inputDom.current.focus()
    })
  }
  handKeyUp = (e) => {
    if(e.keyCode === 13){
      this.props.addTodo(this.state.inputValue)
      this.setState({
        inputValue: ''
      })
    }
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} 
          onChange={this.handleInputValue}
          onKeyUp={this.handKeyUp}
          ref={this.inputDom}/>
        <button onClick={this.handleADDClick} >{this.props.btnText}</button>
      </div>
    )
  }
}
