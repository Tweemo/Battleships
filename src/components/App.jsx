import { useSelector } from 'react-redux'
import '../App.css';
import Board from './Board'


function App() {
  const allShips = useSelector(state => state.shipPos)
  const guesses = useSelector(state => state.guesses)

  function resetGame() {
    window.location.reload()
  }

  return (
    <div>
      <h1 className='title'>Battleships</h1>
      {(guesses.length <= 20 && allShips.length !== 3) 
      ? <Board /> 
      : (guesses.length <= 20 && allShips.length === 3) 
      ? 
      <>
        <div className='message'>
        <h1>Congratulations! You found all the ships in less than 20 guesses!</h1>
        </div>
        <div className='reset'>
          <button onClick={resetGame}>Reset</button>
        </div>
      </>
      : 
      <>
        <div className='message'>
          <h1>Unfortunately you didn't find all the ships.</h1>
        </div>
        <div className='reset'>
          <button onClick={resetGame}>Reset</button>
        </div>      
      </>
      }
    </div>
  )
}

export default App;
