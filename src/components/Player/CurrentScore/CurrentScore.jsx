import './CurrentScore.css';
import React from 'react';

/*
Props: 
  score = num/str (drault 0)
*/
export default function CurrentScore(props) {
  const { score = 0 } = props;
  return (
    <div className="current-score-container">
      <div className="current-score-tag">CURRENT</div>
      <div className="current-score-number">{score}</div>
    </div>
  );
}
