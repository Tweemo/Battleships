import React from 'react'

function getRandomCornerInt() {
  return Math.floor(Math.random() * 2)
}
function getRandomEdgeInt() {
  return Math.floor(Math.random() * 3)
}
function getRandomMiddleInt() {
  return Math.floor(Math.random() * 4)
}

export function checkEdge(ship) {
  if (ship.col === 0 && ship.row === 0) {
    ship.position = 'topLeftCorner'
  } else if (ship.col === 0 && ship.row === 7) {
    ship.position = 'botLeftCorner'
  } else if (ship.col === 7 && ship.row === 0) {
    ship.position = 'topRightCorner'
  } else if (ship.col === 7 && ship.row === 7) {
    ship.position = 'botRightCorner'
  } else if (ship.row === 0) {
    ship.position = 'topEdge'
  } else if (ship.row === 7) {
    ship.position = 'bottomEdge'
  } else if (ship.col === 0) {
    ship.position = 'leftEdge'
  } else if (ship.col === 7) {
    ship.position = 'rightEdge'
  } else {
    ship.position = 'middle'
  }
}

export function makeShip(ship) {
  let nearbyShip1 = { ...ship }
  let nearbyShip2 = { ...ship }
  let nearbyShip3 = { ...ship }
  let nearbyShip4 = { ...ship }

  if (ship.position === 'topLeftCorner') {
    ship.isShip = true

    nearbyShip1.row = 1
    nearbyShip2.col = 1

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]

    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'botLeftCorner') {
    ship.isShip = true

    nearbyShip1.row = 6
    nearbyShip2.col = 1

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'topRightCorner') {
    ship.isShip = true

    nearbyShip1.row = 1
    nearbyShip2.col = 6

    let arrayOfShips = [nearbyShip1, nearbyShip2]
    let randomShip = arrayOfShips[getRandomCornerInt()]
    randomShip.isShip = true
    return [ship, randomShip]
  } else if (ship.position === 'botRightCorner') {
    ship.isShip = true

    nearbyShip1.row = 6
    nearbyShip2.col = 6

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

export function shipTemp(nearestShip) {
  if (nearestShip === 0) {
    return 'Hit'
  } else if (nearestShip === 1 || nearestShip === 2) {
    return 'Hot'
  } else if (nearestShip === 3 || nearestShip === 4) {
    return 'Warm'
  } else if (nearestShip === '') {
    return <></>
  } else {
    return 'Cold'
  }
}

export function getShips(shipOne, shipTwo) {
  if (
    shipOne[0].isVisible === true &&
    shipOne[1].isVisible === true &&
    shipTwo[0].isVisible !== true &&
    shipTwo[1].isVisible !== true
  ) {
    return [shipTwo]
  } else if (
    shipTwo[0].isVisible === true &&
    shipTwo[1].isVisible === true &&
    shipOne[0].isVisible !== true &&
    shipOne[1].isVisible !== true
  ) {
    return [shipOne]
  } else if (
    shipTwo[0].isVisible === true &&
    shipTwo[1].isVisible === true &&
    shipOne[0].isVisible === true &&
    shipOne[1].isVisible === true
  ) {
    return ['game', 'is', 'over']
  } else {
    return [shipOne, shipTwo]
  }
}

export function shipCount(ships) {
  if (ships === 2) {
    return '2'
  } else if (ships === 1) {
    return '1'
  }
}
