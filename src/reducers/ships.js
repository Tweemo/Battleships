import { BOTH_SHIPS } from '../actions/ships'

const ship = []

export default function shipPos(state = ship, action) {
  switch (action.type) {
    case BOTH_SHIPS:
      return action.arrShips

    default:
      return state
  }
}
