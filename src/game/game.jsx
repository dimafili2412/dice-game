import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import './game.css';

import Player from './player/player';
import Controls from './controls/constrols';
import { loadState } from './gameSlice';

export default function Game(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadState());
  }, []);

  return (
    <div className="game">
      <Player index={0} />
      <Player index={1} />
      <Controls />
    </div>
  );
}
