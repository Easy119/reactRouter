import React, { Component } from 'react'

export default class Message extends Component {
  render() {
    return (
      <div>
        <h3>Message {this.props.params.id}</h3>
      </div>
    )
  }
}
