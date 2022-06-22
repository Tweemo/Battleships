export function checkDist(bothShips, currentShip) {
  let distArr = []
  bothShips.map((ship) =>
    distArr.push(
      Math.abs(parseInt(ship.row) - parseInt(currentShip.row)) +
        Math.abs(parseInt(ship.col) - parseInt(currentShip.col))
    )
  )
  let closestShip = Math.min(...distArr)
  return closestShip
}
