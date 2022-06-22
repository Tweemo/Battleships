export function shipTemp(nearestShip) {
  if (nearestShip === 0) {
    return 'Hit'
  } else if (nearestShip === 1 || nearestShip === 2) {
    return 'Hot'
  } else if (nearestShip === 3 || nearestShip === 4) {
    return 'Warm'
  } else {
    return 'Cold'
  }
}
