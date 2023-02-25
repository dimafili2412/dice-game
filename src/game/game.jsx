import './game.css';

import Player from './player/player';
import Controls from './controls/constrols';

export default function Game(props) {
  return (
    <div className="game">
      <Player index={0} />
      <Player index={1} />
      <Controls />
    </div>
  );
}
