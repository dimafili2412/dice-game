import './TotalScore.css';

/* 
Props: 
  index = num/str (default 0)
  score = num/str (default 0)
  active = bool (default false)
  winner = bool (default false)
*/

export default function TotalScore(props) {
  const { index = 0, score = 0, active = false, winner = false } = props;
  const titleClassName = winner ? ' winner' : active ? ' active' : '';
  const titleText = winner ? 'WINNER!' : `PLAYER ${index}`;
  const redDot = active ? <div className="red-dot" aria-label="Active Player"></div> : null;
  return (
    <div className="total-score-container">
      <h1 className={`title${titleClassName}`}>
        {titleText} {redDot}
      </h1>
      <div className="score">{score}</div>
    </div>
  );
}
