import { BOARD } from '../actions/board'

const initialBoard = []

export default function board(state = initialBoard, action) {
  switch (action.type) {
    case BOARD:
      return action.board

    default:
      return state
  }
}
