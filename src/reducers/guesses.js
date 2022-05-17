import { GUESS } from '../actions/guess'

const guess = []

function filter(arr) {
  return arr.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.row === value.row && t.col === value.col)
  )
}

export default function guesses(state = guess, action) {
  switch (action.type) {
    case GUESS:
      guess.push({ row: action.coords[0], col: action.coords[1] })
      return filter(guess)

    default:
      return state
  }
}
