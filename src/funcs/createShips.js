import { checkEdge, findShipPositions } from '../funcs'

export function addShips(board) {
  function getRandomInt() {
    return Math.floor(Math.random() * board.length)
  }
  const ship1 = board[getRandomInt()]
  const ship2 = board[getRandomInt()]
  checkEdge(ship1)
  checkEdge(ship2)

  const arrShips = [...findShipPositions(ship1), ...findShipPositions(ship2)]

  board.map((tile) => {
    arrShips.map((ship) => {
      if (ship.row === tile.row && tile.col === ship.col) {
        tile.isShip = true
        return tile
      }
      return tile
    })
    return 'Ships Added!'
  })
  return board
}
