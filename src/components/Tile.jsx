import '../App.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { checkDist } from "../funcs/func";
import { Box, Image } from '@chakra-ui/react'

import { guess } from '../actions/guess'
import { closestShip } from '../actions/closeShip'

function Tile(tile) {
  const dispatch = useDispatch()
  const ships = useSelector(state => state.shipPos)
  const formGuess = useSelector(state => state.oneGuess)
  const [visible, setVisible] = useState(false)
  
  const empty = tile.pos
  let currentShip = {row: empty.row, col: empty.col}

  useEffect(() => {
    if(formGuess.row === empty.row && formGuess.col === empty.col) {
      empty.isVisible = true
      setVisible(true)
    }
  },[formGuess.row, formGuess.col, empty])

  function clickHandler() {
    setVisible(true)
    empty.isVisible = true
    dispatch(guess(currentShip))
    dispatch(closestShip(checkDist(ships, empty)))
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