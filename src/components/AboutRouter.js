import React, { Component } from 'react'

export default class AboutRouter extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div>
        <h1>我是about组件</h1>
        <a href="/index/12">我要去Index</a>
        <button onClick={()=> this.props.history.push({
            pathname:"/index",
            state:{
                id:15
            }
        })}>通过函数去Index</button>
      </div>
    )
  }
}
