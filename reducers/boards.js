const boards = (state=[] , action) => {
  switch (action.type) {
    case "BOARDS_READ":
      return action.boards
    default:
      return state
  }

}

export default boards
