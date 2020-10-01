import React, { Component } from 'react'
import List from './List'
import { addItem, removeItem, moveUp, moveDown, addSublist, removeSublist } from './reducers'

export default class RootList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: [{"id":1,"name":"1"},{"id":2,"name":"2"},{"id":3,"name":"3"},{"id":4,"name":"4"},{"id":5,"name":"5"}]
    }
  }

  addItem = (parentId, name) => {
    const listItems = addItem(this.state.listItems, parentId, name)
    this.setState({listItems})
  }

  removeItem = (id) => {
    const listItems = removeItem(this.state.listItems, id)
    this.setState({listItems})
  }

  moveUp = (listItemId) => {
    const listItems = moveUp(this.state.listItems, listItemId)
    this.setState({listItems})
  }

  moveDown = (listItemId) => {
    const listItems = moveDown(this.state.listItems, listItemId)
    this.setState({listItems})
  }

  addSublist = (listItemId) => {
    console.log("RootList#addSublist: ", {listItemId})
    const listItems = addSublist(this.state.listItems, listItemId)
    this.setState({listItems})
  }

  removeSublist = (listItemId) => {
    const listItems = removeSublist(this.state.listItems, listItemId)
    this.setState({listItems})
  }

  render() {
    return (
      <div>
        <List
          data={this.state.listItems}
          addItem={this.addItem}
          removeItem={this.removeItem}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          addSublist={this.addSublist}
          removeSublist={this.removeSublist}
        />
      </div>
    );
  }
}
