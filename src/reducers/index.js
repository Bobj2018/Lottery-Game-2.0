import { UPDATE_LOTTERY, UPDATE_PLAYER } from "../actions";

export const initialState = {
  lotteryNumbers: [],
  playerNumbers: [],
  isGenerating: false,
  numberOfGames: 0,
  isCorrect: false,
  isGuessing: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOTTERY:
      return {
        ...state,
        lotteryNumbers: action.payload
      };
    case UPDATE_PLAYER:
      return {
        ...state,
        playerNumbers: action.payload
      };
    default:
      return state;
  }
};
