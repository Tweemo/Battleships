export const FORM_GUESS = 'FORM_GUESS'

export function formGuess(coords) {
  return {
    type: FORM_GUESS,
    coords,
  }
}
