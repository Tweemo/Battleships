export const CLOSE_SHIP = 'CLOSE_SHIP'

export function closestShip(number) {
  return {
    type: CLOSE_SHIP,
    number,
  }
}
