export const GUESS = 'GUESS'

export function guess(pos) {
  return {
    type: GUESS,
    coords: [pos.row, pos.col],
  }
}
