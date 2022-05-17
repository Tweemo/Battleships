/* eslint-disable react-hooks/exhaustive-deps */
import { VStack, SimpleGrid, Button, Heading, Text, GridItem } from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { checkEdge, makeShip, shipTemp, getShips, shipCount } from "../func";
import {bothShipPos} from '../actions/ships'

import GuessForm from './GuessForm';
import Tile from './Tile'

function Board() {
  const [game, setGame] = useState(false)
  const [liveBoard, setLiveBoard] = useState([])
  const [shipOne, setShipOne] = useState([])
  const [shipTwo, setShipTwo] = useState([])
  
  const guesses = useSelector(state => state.guesses)
  const nearestShip = useSelector(state => state.nearbyShip)
  const allShips = useSelector(state => state.shipPos)

  function resetGame() {
    window.location.reload()
  }

  let shipObj = []
  allShips.map((ship) => {
    if (ship.isVisible !== true) {
      shipObj.push(ship)
    }
    return 'Ships working'
  })
  
  let board = []
  const dispatch = useDispatch()
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8']
  
  function getRandomInt() {
    return Math.floor(Math.random() * board.length)
  }

  function genBoard() {
    let boardSize = 9
    
    for (let r = 1; r < boardSize; r++) {
      for (let c = 1; c < boardSize; c++) {
        board.push({
          row: r,
          col: c,
          isShip: false,
          isVisible: false,
          id: Math.floor(Math.random() * 1000000) 
        })
      }
    }
    setGame(true)
    const ship1 = board[getRandomInt()]
    const ship2 = board[getRandomInt()]
    checkEdge(ship1)
    checkEdge(ship2)
    setShipOne(makeShip(ship1))
    setShipTwo(makeShip(ship2))
    setLiveBoard(board)
  }

  useEffect(() => {
    game ? 
    dispatch(bothShipPos(getShips(shipOne, shipTwo))) 
    : <></>
  },[liveBoard, guesses.length])

  return (
    <VStack w="full" h="full" p={5}>
        <div>
          <Button onClick={genBoard}>Start Game</Button>
          <Button onClick={resetGame}>Reset</Button>
        </div>
      <div className='start'>
        <div className="top-line">
        Guesses remaining: {20 - guesses.length}
        </div>
        <div className="top-line">
        Proximity: {shipTemp(nearestShip)}
        </div>
        <div className="top-line">
        Ships Remaining: {shipCount(shipObj.length)}
        </div>
      </div>
      <div className="horizontal-number-container">
       {game ? numbers.map((number) => {
        return (
          <Text p={{base: 4, md: 5}} w={{base: '3vh', md: '4vw'}} h={{base: '4vh', md: '4vw'}}>
            {number}
          </Text> )
        })
         : <></>
      }
      </div>
      <SimpleGrid  columns={8} columnGap={1} rowGap={1}>
        {game ? liveBoard.map((tile) => 
        (tile.row === shipOne[0].row && tile.col === shipOne[0].col) ?
        <Tile key={tile.id} pos={shipOne[0]} /> 
        :
        (tile.row === shipOne[1].row && tile.col === shipOne[1].col) ?
        <Tile key={tile.id} pos={shipOne[1]} /> 
        :
        (tile.row === shipTwo[0].row && tile.col === shipTwo[0].col) ?
        <Tile key={tile.id} pos={shipTwo[0]} /> 
        :
        (tile.row === shipTwo[1].row && tile.col === shipTwo[1].col) ?
        <Tile key={tile.id} pos={shipTwo[1]} /> 
        :
        <Tile key={tile.id} pos={tile} /> 
        )
        : 
        <GridItem colSpan={8}>
          <Heading>
              How to play:
          </Heading>
          <Text fontSize='xl'>
            <br></br>
              You have 20 attempts to locate and sink the 2 ships on the map. 
              <br></br>
              After each shot, you will be able to see how close you are based on the proximity meter above.
              <br></br>
              That map will have TWO 1x2 ships.
              <br></br>
          </Text>
        </GridItem>
        }
      </SimpleGrid>
      {game ? <GuessForm className='form'/> : <></>}
    </VStack>
  )
}

export default Board;
