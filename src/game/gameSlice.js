import { createSlice } from '@reduxjs/toolkit';

//all reducers (and handlres) mutate state thanks to immer :)

const handleHideDice = (dice) => {
  for (let i = 0; i < dice.length; i++) {
    dice[i] = -1;
  }
};

const handleNextPlayer = (state) => {
  state.activePlayer++;
  if (state.activePlayer >= state.players.length) {
    state.activePlayer = 0;
  }
  handleHideDice(state.dice);
};

//pass -1 for all player scores and a player index for a single player
const handleResetCurrentScore = (players, playerIndex = -1) => {
  if (playerIndex > 0) {
    players[playerIndex].currentScore = 0;
  } else {
    players.forEach((player) => {
      player.currentScore = 0;
    });
  }
};
//will reset score for both players
const handleReseTotalScore = (players) => {
  players.forEach((player) => {
    player.finalScore = 0;
  });
};

const handleWin = (state) => {
  handleResetCurrentScore(state.players);
  handleReseTotalScore(state.players);
  state.winner = state.activePlayer;
  handleHideDice(state.dice);
  state.players[state.activePlayer].wins++;
};

const handleHold = (state) => {
  const activePlayer = state.players[state.activePlayer];
  activePlayer.totalScore += activePlayer.currentScore;
  activePlayer.currentScore = 0;
  //if final score was not input by user it will default to 100
  const finalScore = state.finalScore || 100;
  if (activePlayer.totalScore > finalScore) {
    handleWin(state);
  } else {
    handleNextPlayer(state);
  }
};

const handleSetFinalScore = (state, score) => {
  state.finalScore = score;
};

const initialPlayerState = {
  currentScore: 0,
  totalScore: 0,
  wins: 0,
};

const options = {
  name: 'game',
  initialState: {
    //for more players increase players array length
    players: Array.from({ length: 2 }, () => {
      return { ...initialPlayerState };
    }),
    //to add more dice increase array size
    dice: [-1, -1],
    activePlayer: 0,
    winner: -1,
    finalScore: '',
  },
  reducers: {
    hold: (state, action) => {
      handleHold(state);
    },
    increaseCurrentScore: (state, action) => {
      //test if all dice equals 6
      const diceTotal = state.dice.reduce((acc, val) => acc + val, 0);
      if (Math.floor(diceTotal / state.dice.length) === 6) {
        state.players[state.activePlayer].currentScore = 0;
        handleHold(state);
      }
      state.players[state.activePlayer].currentScore += diceTotal;
    },
    setDice: (state, action) => {
      state.dice = action.payload;
    },
    newGame: (state, action) => {
      handleSetFinalScore(state, '');
      state.winner = -1;
      handleNextPlayer(state);
      handleResetCurrentScore(state.players);
      state.players.forEach((player) => (player.totalScore = 0));
    },
    setFinalScore: (state, action) => {
      //validate score - if not numeric or under 1 set to empty string both falsy and displays palceholder
      const int = parseInt(action.payload);
      if (typeof int === 'number' && int > 0) {
        handleSetFinalScore(state, parseInt(int));
      } else {
        handleSetFinalScore(state, '');
      }
    },
    loadState: (state, action) => {
      if (action.payload) {
        return { ...action.payload.game };
      }
    },
  },
};
const gameSlice = createSlice(options);

//custom actions
export const rollDice = (dice = []) => {
  //requires original dice array to prevent accidental mismtach in die numbers while allowing expansion for more dies
  if (dice.length) {
    return {
      type: 'game/setDice',
      payload: Array.from({ length: dice.length }, () => Math.floor(Math.random() * 6) + 1),
    };
  }
};

export const { hold, increaseCurrentScore, newGame, setFinalScore, loadState } = gameSlice.actions;
export default gameSlice.reducer;
