import './playerCurrentScore.css';

export default function PlayerCurrentScore({ score = 0 }) {
  return (
    <div className="current-score-container">
      <div className="current-score-tag">CURRENT</div>
      <div className="current-score-number">{score}</div>
    </div>
  );
}
