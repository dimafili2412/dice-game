import './playerHeader.css';

export default function PlayerHeader({ index = 0, score = 0, active = false, winner = false, wins = 0 }) {
  const titleClassName = winner ? ' winner' : active ? ' active' : '';
  const titleText = winner ? 'WINNER!' : `PLAYER ${index}`;
  const redDot = active && !winner ? <div className="red-dot" aria-label="Active Player"></div> : null;
  return (
    <div className="player-header-container">
      <h1 className={`title${titleClassName}`}>
        {titleText} {redDot}
      </h1>
      <h3>Total Wins: {wins}</h3>
      <div className="score">{score}</div>
    </div>
  );
}
