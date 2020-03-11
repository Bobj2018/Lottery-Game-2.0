import { UPDATE_LOTTERY } from "../actions";

export const initialState = {
  lotteryNumbers: [1, 2, 3],
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
    default:
      return state;
  }
};
