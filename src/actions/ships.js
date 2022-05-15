export const BOTH_SHIPS = 'BOTH_SHIPS'

export function bothShipPos(arrShips) {
  return {
    type: BOTH_SHIPS,
    arrShips,
  }
}
