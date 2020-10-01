import React, { Component } from 'react'
import ListItem from './ListItem'
import { getListItems } from './reducers'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newListItemName: ''
    }
  }

  renderListItems = () => {
    const { addItem, removeItem, moveUp, moveDown, addSublist, removeSublist } = this.props
    const listItems = getListItems(this.props.data, this.props.parentId)

    if (!listItems) return []

    return listItems.map( (item, itemIndex) => (
        <ListItem
          data={this.props.data}
          key={item.id}
          id={item.id}
          name={item.name}
          addItem={addItem}
          hasSublist={item.hasSublist}
          canMoveUp={itemIndex > 0}
          canMoveDown={itemIndex < listItems.length - 1}
          removeItem={removeItem}
          moveUp={moveUp}
          moveDown={moveDown}
          addSublist={addSublist}
          removeSublist={removeSublist}
        />
      )
    )
  }

  handleNewListItemNameInput = (e) => {
    this.setState({newListItemName: e.target.value})
  }

  isValidNewListItemName = () => {
    return !!this.state.newListItemName
  }

  addItem = () => {
    const { addItem, parentId } = this.props
    addItem(parentId, this.state.newListItemName);
    this.setState({newListItemName: ''})
  }

  render() {
    return (
      <ul>
        { this.renderListItems() }

        <li>
          <input
            placeholder="Enter name"
            type="text"
            onChange={this.handleNewListItemNameInput}
            value={this.state.newListItemName}
          />
          <button
            disabled={!this.isValidNewListItemName()}
            onClick={this.addItem}
          >
            Add
          </button>
        </li>
      </ul>
    );
  }
}
