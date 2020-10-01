import React, { Component } from 'react'
import Node from './Node'
import { addItem, removeItem, moveUp, moveDown } from './reducers'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      children: []
    }
  }

  addItem = (path, name) => {
    const data = addItem(this.state.children, path, name)
    this.setState({children: data})
  }

  render() {
    return (
      <ul>
        <Node
          children={this.state.children}
          addItem={this.addItem}
          removeItem={this.removeItem}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          hasSublist={true}
        />

        <li>
          { JSON.stringify(this.state.children) }
        </li>
      </ul>
    );
  }
}
