import './Player.css';

import CurrentScore from './CurrentScore/CurrentScore';
import TotalScore from './TotalScore/TotalScore';

export default function Player(props) {
  const { active = false } = props;
  return (
    <div className={`player-wrapper${active ? ' active' : ''}`}>
      <div className="player">
        <TotalScore active={true} index={1} />
        <CurrentScore score={6} />
      </div>
    </div>
  );
}
