import { useDispatch } from 'react-redux'
import '../App.css';
import React, { useEffect } from "react";
import { 
  Container, 
  Heading, 
  Center, 
} from '@chakra-ui/react'
import ManualClose from './Instructions';
import { createBoard } from '../funcs';
import { setBoard } from '../actions';
import HomePage from './homepage';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setBoard(createBoard()))
  },[dispatch])

  return (
    <>
      <Container maxW="container.xl" bg="yellow.500"p={0}>
        <Center>
          <Heading p={5}>Battleships</Heading>
        </Center>
        <HomePage />
      </Container>
      <ManualClose />
    </>
  )
}

export default App;
