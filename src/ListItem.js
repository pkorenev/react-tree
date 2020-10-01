import React, { PureComponent } from 'react'
import List from './List'
import TreeContext from './TreeContext'

export default class ListItem extends PureComponent {
  render() {
    const { removeItem, moveUp, moveDown, addSublist, removeSublist } = this.context

    const { id, name, canMoveUp, canMoveDown, hasSublist } = this.props

    return (
      <li>
        <span>{this.props.name}</span>
        { canMoveUp && <button onClick={() => moveUp(id)}>&uarr;</button> }
        { canMoveDown && <button onClick={() => moveDown(id)}>&darr;</button> }
        {
          hasSublist
          ?
            <button onClick={() => removeSublist(id)}>Remove Sublist</button>
          :
            <button onClick={() => addSublist(id)}>Add Sublist</button>
        }
        <button onClick={() => removeItem(id)}>Remove</button>
        { hasSublist &&
          <List
            parentId={id}
          />
        }
      </li>
    );
  }
}

ListItem.contextType = TreeContext
