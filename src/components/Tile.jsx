import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { guess } from '../actions/guess'
import { checkDist } from "../func";
import { closestShip } from '../actions/closeShip'
import '../App.css';

function Tile(tile) {
  const guesses = useSelector(state => state.guesses)
  const allShips = useSelector(state => state.shipPos)
  const [visible, setVisible] = useState(false)
  
  const dispatch = useDispatch()
  
  const empty = tile.pos
  let currentShip = [empty.row, empty.col]
  
  useEffect(() => {
    if(empty.isVisible) {
      setVisible(true)
    }
  },[empty.isVisible])
  
  function clickHandler() {
    if (guesses.length === 20) {
      alert(`That's all the guesses you have. You may continue if you like`)
    }
    empty.isVisible = true
    setVisible(true)
    dispatch(guess(currentShip))

    let bothShips = [...allShips[0], ...allShips[1]]
    dispatch(closestShip(checkDist(bothShips, empty)))
  }

  return (
  <div onClick={clickHandler} className="tile">
    {visible && empty.isShip === true ? <img className='shot' alt='hit' src="/red-circle.png"/> : visible && empty.isShip === false ? <img className='shot' alt='miss' src="/black-circle.png"/> : <></>}
  </div>
  )
}

export default Tile