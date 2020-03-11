import React, { Component, Fragment } from 'react'

export default class TodeInput extends Component {

  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
    this.inputRef = React.createRef()
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick = () => {
    if(this.state.inputValue === ''){
      return
    }
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    },() => {
      this.inputRef.current.focus()
    })
  }

  handleKeyup = (e) => {
    if(e.keyCode !== 13 || this.state.inputValue === '') {
      return
    }
    this.props.addTodo(this.state.inputValue)
  }

  render() {
    return (
      <Fragment>
        <input type="text" ref={this.inputRef} 
        onChange={this.handleInputChange} 
        value={this.state.inputValue}
        onKeyUp={this.handleKeyup}/>
        <button onClick={this.handleClick}>{this.props.btnText}</button>
      </Fragment>
    )
  }
}
