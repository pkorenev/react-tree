import React, { PureComponent } from 'react'
import List from './List'

export default class ListItem extends PureComponent {
  render() {
    const {
      id, name, listItems, canMoveUp, canMoveDown, hasSublist, removeItem,
      moveUp, moveDown, addSublist, removeSublist
    } = this.props

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
            data={this.props.data}
            parentId={id}
            addItem={this.props.addItem}
            removeItem={removeItem}
            moveUp={moveUp}
            moveDown={moveDown}
            addSublist={addSublist}
            removeSublist={removeSublist}
          />
        }
      </li>
    );
  }
}
