import './App.css';
import Player from './components/Player/Player';
import Die from './components/Die/Die';
import Button from './components/Button/Button';
import FinalScoreInput from './components/FinalScoreInput/FinalScoreInput';

function App() {
  return (
    <div className="game">
      <Player active={true} />
      <Player active={false} />
      <Die number={1} />
      <Die number={3} />
      <Button text="NEW GAME" icon="new" className="new-game-button" />
      <Button text="ROLL DICE" icon="roll" className="roll-dice-button" />
      <Button text="HOLD" icon="hold" className="hold-button" />
      <FinalScoreInput />
    </div>
  );
}

export default App;
