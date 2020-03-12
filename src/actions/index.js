export const UPDATE_LOTTERY = "UPDATE_LOTTERY";
export const UPDATE_PLAYER = "UPDATE_PLAYER";

export const updateLottery = lottery => {
  return {
    type: UPDATE_LOTTERY,
    payload: lottery
  };
};

export const updatePlayer = player => {
  return {
    type: UPDATE_PLAYER,
    payload: player
  };
};
