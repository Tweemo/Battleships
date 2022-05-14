import { FORM_GUESS } from '../actions/oneGuess'

const singleGuess = ''

export default function oneGuess(state = singleGuess, action) {
  switch (action.type) {
    case FORM_GUESS:
      return { row: action.coords[0], col: action.coords[1] }

    default:
      return state
  }
}
