function getRandomCornerInt() {
  return Math.floor(Math.random() * 2)
}
function getRandomEdgeInt() {
  return Math.floor(Math.random() * 3)
}
function getRandomMiddleInt() {
  return Math.floor(Math.random() * 4)
}

export function findShipPositions(ship) {
  let nearbyShip1 = { ...ship }
  let nearbyShip2 = { ...ship }
  let nearbyShip3 = { ...ship }
  let nearbyShip4 = { ...ship }

  if (ship.position === 'topLeftCorner') {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row + 1
    nearbyShip2.col = nearbyShip2.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]

    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'botLeftCorner') {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.col = nearbyShip2.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'topRightCorner') {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row + 1
    nearbyShip2.col = nearbyShip2.col - 1

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'botRightCorner') {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.col = nearbyShip2.col - 1

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'topEdge') {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row + 1
    nearbyShip2.col = nearbyShip2.col - 1
    nearbyShip3.col = nearbyShip3.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3]
    let randomShip = arrayOfShips[getRandomEdgeInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'bottomEdge') {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.col = nearbyShip2.col - 1
    nearbyShip3.col = nearbyShip3.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3]
    let randomShip = arrayOfShips[getRandomEdgeInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'leftEdge') {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.row = nearbyShip2.row + 1
    nearbyShip3.col = nearbyShip3.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3]
    let randomShip = arrayOfShips[getRandomEdgeInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'rightEdge') {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.row = nearbyShip2.row + 1
    nearbyShip3.col = nearbyShip3.col - 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3]
    let randomShip = arrayOfShips[getRandomEdgeInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else {
    ship.isShip = true

    nearbyShip1.row = nearbyShip1.row - 1
    nearbyShip2.row = nearbyShip2.row + 1
    nearbyShip3.col = nearbyShip3.col - 1
    nearbyShip4.col = nearbyShip4.col + 1

    let arrayOfShips = [nearbyShip1, nearbyShip2, nearbyShip3, nearbyShip4]
    let randomShip = arrayOfShips[getRandomMiddleInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  }
}
