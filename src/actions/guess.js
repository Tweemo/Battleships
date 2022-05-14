export const GUESS = 'GUESS'

export function guess(coords) {
  console.log(coords)
  return {
    type: GUESS,
    coords,
  }
}
