const getListItemsByParentId = (data, parentId) => {
  return data.filter(item => item.parentId === parentId)
}

export {
  getListItemsByParentId
}
