import { useSelector } from 'react-redux'
import '../App.css';
import Board from './Board'
import { Container, Flex, Heading, Button, Center } from '@chakra-ui/react'


function App() {
  const allShips = useSelector(state => state.shipPos)
  const guesses = useSelector(state => state.guesses)


  function resetGame() {
    window.location.reload()
  }

  return (
    <Container maxW="container.xl" bg="yellow.500"p={0}>
      <Center>
        <Heading p={5}>Battleships</Heading>
      </Center>
      <Flex h={{base: 'auto', md:'100vh'}} py={0}>
        {(guesses.length <= 20 && allShips.length !== 3) 
          ?
            <Board /> 
          : (guesses.length <= 20 && allShips.length === 3) 
          ? 
          <>
            <div className='message'>
            <h1>Congratulations! You found all the ships in less than 20 guesses!</h1>
            </div>
            <div className='reset'>
              <Button onClick={resetGame}>Reset</Button>
            </div>
          </>
          : 
          <>
            <div className='message'>
              <h1>Unfortunately you didn't find all the ships.</h1>
            </div>
            <div className='reset'>
              <Button onClick={resetGame}>Reset</Button>
            </div>      
          </>
          }
      </Flex>
    </Container>
  )
}

export default App;
