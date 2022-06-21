export const getShipPositions = (board) => {
  let shipArr = []

  board.map((tile) => {
    if (tile.isShip === true) {
      shipArr.push(tile)
    } else {
      return 'no ship'
    }
    return 'Ships Positions are working'
  })
  return shipArr
}
