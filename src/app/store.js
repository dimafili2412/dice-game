import { configureStore } from '@reduxjs/toolkit';

import gameReducer from '../game/gameSlice';

const customMiddleware = (store) => (next) => (action) => {
  //1st render will trigger 'game/loadState' which will read state from localstorage and replace initial state.
  if (action.type === 'game/loadState') {
    const state = JSON.parse(localStorage.getItem('state'));
    if (state) {
      next({ type: action.type, payload: state });
    }
  } else {
    //any action will trigger copying the up to date state to localstorage after the reducer has been run
    next(action);
    localStorage.setItem('state', JSON.stringify(store.getState()));
  }
};

const store = configureStore({
  reducer: { game: gameReducer },
  middleware: [customMiddleware],
});

export default store;
