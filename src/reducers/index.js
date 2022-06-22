import { combineReducers } from 'redux'

import guesses from './guesses.js'
import nearbyShip from './closeShip'
import gameState from './game'
import board from './board'

export default combineReducers({
  guesses,
  nearbyShip,
  gameState,
  board,
})
