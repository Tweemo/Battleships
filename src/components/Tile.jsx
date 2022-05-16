import '../App.css';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { checkDist } from "../func";

import { guess } from '../actions/guess'
import { closestShip } from '../actions/closeShip'

function Tile(tile) {
  const dispatch = useDispatch()
  const allShips = useSelector(state => state.shipPos)
  const [visible, setVisible] = useState(false)

  let bothShips = []
  allShips.length === 1 ? bothShips = [...allShips[0]] 
  : allShips.length === 2 ? bothShips = [...allShips[0], ...allShips[1]] 
  : <></>
  
  const empty = tile.pos
  let currentShip = {row: empty.row, col: empty.col}
  
  useEffect(() => {
    if(empty.isVisible) {
      setVisible(true)
    }
  },[empty.isVisible])

  function clickHandler() {
    empty.isVisible = true
    setVisible(true)
    dispatch(guess(currentShip))
    dispatch(closestShip(checkDist(bothShips, empty)))
  }

  return (
  <div onClick={clickHandler} className="tile">
    {visible && empty.isShip === true ? <img className='shot' alt='hit' src="/red-circle.png"/> : visible && empty.isShip === false ? <img className='shot' alt='miss' src="/black-circle.png"/> : <></>}
  </div>
  )
}

export default Tile