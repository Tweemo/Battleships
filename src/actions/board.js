export const BOARD = 'BOARD'

export function setBoard(shipArr) {
  return {
    type: BOARD,
    board: [shipArr],
  }
}
