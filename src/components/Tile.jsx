import '../App.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Box, Image } from '@chakra-ui/react'

import { guess, closestShip, startGame } from '../actions'
import { getShipPositions, shipCount, checkDist } from '../funcs';

function Tile(tile) {
  const dispatch = useDispatch()
  const guesses = useSelector(state => state.guesses)
  const board = useSelector(state => state.board)
  const [visible, setVisible] = useState(false)

  const empty = tile.pos
  let currentShip = {row: empty.row, col: empty.col}

  useEffect(() => {
    if(guesses[guesses.length - 1]?.row === empty.row && guesses[guesses.length - 1]?.col === empty.col) {
      empty.isVisible = true
      setVisible(true)
    }
  },[guesses, guesses.length, empty])
  
  function checkIfGameCompleted() {
    if ((shipCount(getShipPositions(board).length)) === 0) {
      dispatch(startGame(false))
    } 
    return 'Game still going'
  }

  function clickHandler() {
    dispatch(closestShip(checkDist(getShipPositions(board), empty)))
    setVisible(true)
    empty.isVisible = true
    dispatch(guess(currentShip))
    checkIfGameCompleted()
  }

  return (
  <Box w={{base: '4vh', md: '4vw'}} h={{base: '4vh', md: '4vw'}} onClick={clickHandler} className='tile'>
    {(visible && empty.isShip)
    ? 
    <Image w={{base: '4vh', md: '4vw'}} h={{base: '4vh', md: '4vw'}} className='shot' alt='hit' src="/red-circle.png"/> 
    : 
    (visible && !empty.isShip)
    ? 
    <Image w={{base: '4vh', md: '4vw'}} h={{base: '4vh', md: '4vw'}} className='shot' alt='miss' src="/black-circle.png"/> 
    : <></>
    }
  </Box>
  )
}

export default Tile