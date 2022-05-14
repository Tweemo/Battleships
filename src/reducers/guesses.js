import { GUESS } from '../actions/guess'

const guess = []

export default function guesses(state = guess, action) {
  switch (action.type) {
    case GUESS:
      return guess.push({ row: action.coords[0], col: action.coords[1] }), guess

    default:
      return state
  }
}
