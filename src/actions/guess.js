export const GUESS = 'GUESS'

export function guess(coords) {
  return {
    type: GUESS,
    coords,
  }
}
