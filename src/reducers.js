const findItemById = (data, id) => {
  return data.find( item => item.id === id )
}

const arrayIndexOf = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return i
    }
  }

  return -1
}

let idCounter = 10

const addItem = (data, parentId, name) => {
  return data.concat({id: idCounter++, name, parentId})
}

// TODO: make recursive deletion of child lists
const removeItem = (data, id) => {
  return data.filter(item => item.id !== id )
}

const moveUp = (data, id) => {
  const currentItemIndex = arrayIndexOf(data, item => item.id === id )
  const currentItem = data[currentItemIndex]

  const prevItemIndex = getPrevItemIndexByItemIndex(data, currentItemIndex)
  const prevItem = data[prevItemIndex]

  return data.map( (item, itemIndex) => {
    if (itemIndex === prevItemIndex) {
      return {...currentItem}
    }
    else if (itemIndex === currentItemIndex ) {
      return {...prevItem}
    }
    else {
      return item
    }
  })
}

const moveDown = (data, id) => {
  const currentItemIndex = arrayIndexOf(data, item => item.id === id )
  const currentItem = data[currentItemIndex]

  const nextItemIndex = getNextItemIndexByItemIndex(data, currentItemIndex)
  const nextItem = data[nextItemIndex]

  return data.map( (item, itemIndex) => {
    if (itemIndex === nextItemIndex) {
      return {...currentItem}
    }
    else if (itemIndex === currentItemIndex ) {
      return {...nextItem}
    }
    else {
      return item
    }
  })
}

const addSublist = (data, listItemId) => {
  console.log("reducers/addSublist: ", {data, listItemId})
  return data.map( item => {
    if (item.id === listItemId) {
      return {
        ...item,
        hasSublist: true
      }
    }
    else {
      return item
    }
  })
}

// TODO: make recursive deletion of child lists
const removeSublist = (data, listItemId) => {
  return data.map( item => {
    if (item.id === listItemId) {
      return {
        ...item,
        hasSublist: false
      }
    }
    else if (item.parentId === listItemId) {
      return undefined
    }
    else {
      return item
    }
  }).filter( item => item !== undefined )
}

const getPrevItemIndexByItemIndex = (data, itemIndex) => {
  const paramItem = data[itemIndex]
  let prevItemIndex = 0

  const allPrevItems = data.slice(0, itemIndex)
  for(let i = itemIndex - 1; i >= 0; i--) {
    const item = allPrevItems[i]
    if (item.parentId === paramItem.parentId ) {
      return i
    }
  }

  return -1
}

const getNextItemIndexByItemIndex = (data, itemIndex) => {
  const paramItem = data[itemIndex]
  let nextItemIndex = 0

  const allNextItems = data.slice(itemIndex + 1)
  for(let i = 0; i < allNextItems.length; i++) {
    const item = allNextItems[i]
    if (item.parentId === paramItem.parentId ) {
      return itemIndex + 1 + i
    }
  }

  return -1
}

const getListItems = (data, parentId) => {
  return data.filter(item => item.parentId === parentId)
}

export {
  addItem,
  removeItem,
  moveUp,
  moveDown,
  addSublist,
  removeSublist,
  getListItems
}
