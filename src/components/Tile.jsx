import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {guess} from '../actions/guess'
import '../App.css';

function Tile(tile) {
  const guesses = useSelector(state => state.guesses)
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()
  
  const ship = tile.pos
  let splitStr = [ship.row, ship.col]

  useEffect(() => {
    if(ship.isVisible) {
      setVisible(true)
    }
  },[ship.isVisible])
  
  function clickHandler() {
    if (guesses.length === 20) {
      alert(`That's all the guesses you have. You may continue if you like`)
    }
    ship.isVisible = true
    setVisible(true)
    dispatch(guess(splitStr))
  }

  return (
  <div onClick={clickHandler} className="tile">
    {visible && ship.isShip === true ? <img className='shot' alt='hit' src="/red-circle.png"/> : visible && ship.isShip === false ? <img className='shot' alt='miss' src="/black-circle.png"/> : <></>}
  </div>
  )
}

export default Tile