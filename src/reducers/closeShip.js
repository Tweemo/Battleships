import { CLOSE_SHIP } from '../actions/closeShip'

const nearestShip = ''

export default function nearbyShip(state = nearestShip, action) {
  switch (action.type) {
    case CLOSE_SHIP:
      return action.number

    default:
      return state
  }
}
