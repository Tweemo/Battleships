import { GUESS } from '../actions/guess'

const guess = {
  row: '',
  col: '',
}

export default function user(state = guess, action) {
  switch (action.type) {
    case GUESS:
      return { row: action.coords[0], col: action.coords[1] }

    default:
      return state
  }
}
