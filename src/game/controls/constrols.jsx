import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './controls.css';

import Button from './button/Button';
import Die from './die/die';
import FinalScoreInput from './finalScoreInput/FinalScoreInput';

import { rollDice, increaseCurrentScore, hold, newGame } from '../gameSlice';

export default function Controls(props) {
  const dispatch = useDispatch();
  const dice = useSelector((state) => state.game.dice);
  const actionsDisabled = useSelector((state) => state.game.winner !== -1);
  const handleRollDiceClick = () => {
    dispatch(rollDice(dice));
    dispatch(increaseCurrentScore(10));
  };
  const handleHoldClick = () => {
    dispatch(hold());
  };
  const handleNewGameClick = () => {
    dispatch(newGame());
  };
  return (
    //for mobile compatibility (responsiveness) move grid rows/columns to scss and create different media queries :)
    <div className="controls">
      <Button icon="new" onClick={handleNewGameClick} style={{ gridRow: '1/3' }}>
        NEW GAME
      </Button>
      {dice.map((die, i) => {
        const cols = [i ? 3 : 7, i ? 7 : 11];
        return <Die number={die} key={`die-${i}`} style={{ gridRow: `${cols[0]}/${cols[1]}` }}></Die>;
      })}
      <Button icon="roll" onClick={handleRollDiceClick} style={{ gridRow: '12/13' }} disabled={actionsDisabled}>
        ROLL DICE
      </Button>
      <Button icon="hold" onClick={handleHoldClick} style={{ gridRow: '14/15' }} disabled={actionsDisabled}>
        HOLD
      </Button>
      <FinalScoreInput style={{ gridRow: '16/17' }} />
    </div>
  );
}
