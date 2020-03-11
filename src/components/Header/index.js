import React, { Component, Fragment } from 'react'

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <h3>{this.props.desc}</h3>
      </Fragment>
    )
  }
}
