import React, { Component } from 'react'

export default class Node extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name || '',
      isCreated: props.name && props.name.length > 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      this.setState({
        name: this.props.name,
        isCreated: this.props.name && this.props.name.length > 0
      })

    }
  }

  handleNameInput = (e) => {
    this.setState({name: e.target.value})
  }

  renderChildren = () => {
    const { children } = this.props
    if (children.length) return
    return children.map(node => <Node {...node} />)
  }

  render() {
    const { addItem } = this.props
    const path = this.props.path || []
    const name = this.state.name
    const isCreated = this.state.isCreated

    return (
      <li>
        <span>{name}</span>
        <button>&uarr;</button>
        <button>&darr;</button>
        <button>Add Sublist</button>
        <button>Remove Sublist</button>
        <button>Remove</button>
        <ul>
          { this.renderChildren() }

          <li>
            <input
              placeholder="Enter name"
              type="text"
              onChange={this.handleNameInput}
              value={name}

            />
            <button onClick={() => { addItem(path, name) }}>Add</button>
          </li>
        </ul>
      </li>
    )
  }
}
