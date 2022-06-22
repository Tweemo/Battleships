import { BOARD } from '../actions/board'

export default function board(state = [], action) {
  switch (action.type) {
    case BOARD:
      return action.board

    default:
      return state
  }
}
