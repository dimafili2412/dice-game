import { useSelector } from 'react-redux';

import './player.css';

import PlayerHeader from './playerHeader/playerHeader';
import PlayerCurrentScore from './playerCurrentScore/playerCurrentScore';

export default function Player({ index }) {
  const player = useSelector((state) => state.game.players[index]);
  const active = useSelector((state) => state.game.activePlayer === index);
  const winner = useSelector((state) => state.game.winner === index);
  //supports 2 columns to add more players add row logic :)
  const column = Math.floor(8 * index) + 1;
  return (
    <div className={`player${active ? ' active' : ''}`} style={{ gridRow: '1/-1', gridColumn: `${column}/${column + 8}` }}>
      <PlayerHeader index={index + 1} score={player.totalScore} active={active} winner={winner} wins={player.wins} />
      <PlayerCurrentScore score={player.currentScore} />
    </div>
  );
}
