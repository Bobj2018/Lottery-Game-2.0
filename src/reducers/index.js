export const initialState = {
  lotteryNumbers: [1, 2, 3, 4, 5],
  playerNumbers: [],
  isGenerating: false,
  numberOfGames: 0
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
