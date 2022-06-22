import { CLOSE_SHIP } from '../actions/closeShip'

export default function nearbyShip(state = '', action) {
  switch (action.type) {
    case CLOSE_SHIP:
      return action.number

    default:
      return state
  }
}
