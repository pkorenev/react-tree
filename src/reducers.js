const addItem = (data, path, name) => {
  if (path.length === 1) {
    return data.children.concat([{name, children: []}])
  }
  else if (path.length === 0) {
    return data.concat([{name, children: []}])
  }
  else {
    return addItem(data.children[path[0]], path.slice(1), name)
  }
}

const removeItem = (data, path) => {
  const node = this.findNodeByPath(path)
  }

const moveUp = (data, path) => {

}

const moveDown = (data, path) => {

}

export {
  addItem,
  removeItem,
  moveUp,
  moveDown
}
