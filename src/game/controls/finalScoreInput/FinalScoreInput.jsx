import { useSelector, useDispatch } from 'react-redux';

import './FinalScoreInput.css';

import { setFinalScore } from '../../gameSlice';

export default function FinalScoreInput({ style = {} }) {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.game.finalScore);
  const handleScoreChange = (event) => {
    dispatch(setFinalScore(event.target.value));
  };
  return <input placeholder="FINAL SCORE" className="final-score-input" value={score} onChange={handleScoreChange} style={style} />;
}
