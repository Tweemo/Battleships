import React, { useState } from "react";
import Tile from './Tile'
import '../App.css';

function Board() {
  const [game, setGame] = useState(false)
  const [liveBoard, setLiveBoard] = useState([])
  
  let board = []
  function genBoard() {
    let boardSize = 8

      for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
          board.push({
            row: r,
            col: c,
            isVisible: false,
            isShip: false,
            isClicked: false
          })
        }
      }

    setLiveBoard(board)
    setGame(true)
  }
  
  return (
    <>
      <button onClick={genBoard}>Start Game</button>
      <div className="board">
      {game ? liveBoard.map((tile) => <Tile pos={tile} /> ) : <h1>Press Start to generate the board!</h1>}
      </div>
    </>
  )
}

export default Board;
