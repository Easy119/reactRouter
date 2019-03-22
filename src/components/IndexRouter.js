import React, { Component } from 'react'

export default class IndexRouter extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
    // console.log(this.props.history.location.state);
  }
  render() {
    return (
      <div>
        <h1>我是Index组件</h1>
        <a href="/about">我要去About</a>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}
