export function createBoard() {
  let board = []
  let boardSize = 9

  for (let r = 1; r < boardSize; r++) {
    for (let c = 1; c < boardSize; c++) {
      board.push({
        row: r,
        col: c,
        isShip: false,
        isVisible: false,
        id: Math.floor(Math.random() * 1000000),
      })
    }
  }
  board.length = 64
  return board
}
