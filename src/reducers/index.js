import { combineReducers } from 'redux'

import guesses from './guesses.js'
import oneGuess from './oneGuess.js'
import shipPos from './ships.js'
import nearbyShip from './closeShip'
import gameState from './game'
import board from './board'

export default combineReducers({
  guesses,
  oneGuess,
  shipPos,
  nearbyShip,
  gameState,
  board,
})
