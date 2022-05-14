import React from "react";
import '../App.css';

function Tile(tile) {

  const position = tile.pos
  // console.log(tile.pos)
  console.log(position)


  return (
  <div className="tile">
  {position.row}
  {position.col}
  </div>
  )
}

export default Tile