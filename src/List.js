import React, { Component } from 'react'
import ListItem from './ListItem'
import { getListItemsByParentId } from './selectors'
import TreeContext from './TreeContext'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newListItemName: ''
    }
  }

  renderListItems = () => {
    const { data } = this.context
    const listItems = getListItemsByParentId(data, this.props.parentId)

    if (!listItems) return []

    return listItems.map( (item, itemIndex) => (
        <ListItem
          key={item.id}
          id={item.id}
          name={item.name}
          hasSublist={item.hasSublist}
          canMoveUp={itemIndex > 0}
          canMoveDown={itemIndex < listItems.length - 1}
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
    this.context.addItem(this.props.parentId, this.state.newListItemName);
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

List.contextType = TreeContext
