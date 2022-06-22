export const FORM_GUESS = 'FORM_GUESS'

export function formGuess(pos) {
  return {
    type: FORM_GUESS,
    coords: [pos.row, pos.col],
  }
}
