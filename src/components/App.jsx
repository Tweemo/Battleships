import '../App.css';
import Board from './Board'
import GuessForm from './GuessForm';

function App() {


  return (
    <div>
      <h1 className='title'>Battleships</h1>
      <Board />
      <GuessForm />
    </div>
  )
}

export default App;
