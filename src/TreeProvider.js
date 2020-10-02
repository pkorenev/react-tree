import React, { Component } from 'react'
import { addItem, removeItem, moveUp, moveDown, addSublist, removeSublist } from './reducers'
import TreeContext from './TreeContext'

export default class TreeProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  addItem = (parentId, name) => {
    const data = addItem(this.state.data, parentId, name)
    this.setState({data})
  }

  removeItem = (id) => {
    const data = removeItem(this.state.data, id)
    this.setState({data})
  }

  moveUp = (listItemId) => {
    const data = moveUp(this.state.data, listItemId)
    this.setState({data})
  }

  moveDown = (listItemId) => {
    const data = moveDown(this.state.data, listItemId)
    this.setState({data})
  }

  addSublist = (listItemId) => {
    console.log("RootList#addSublist: ", {listItemId})
    const data = addSublist(this.state.data, listItemId)
    this.setState({data})
  }

  removeSublist = (listItemId) => {
    const data = removeSublist(this.state.data, listItemId)
    this.setState({data})
  }

  render() {
    const providerValue = {
      data: this.state.data,
      addItem: this.addItem,
      removeItem: this.removeItem,
      moveUp: this.moveUp,
      moveDown: this.moveDown,
      addSublist: this.addSublist,
      removeSublist: this.removeSublist
    }

    return (
      <TreeContext.Provider value={providerValue}>
        { this.props.children }
      </TreeContext.Provider>
    );
  }
}
