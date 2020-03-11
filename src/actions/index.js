export const UPDATE_LOTTERY = "UPDATE_LOTTERY";

export const updateLottery = lottery => {
  return {
    type: UPDATE_LOTTERY,
    payload: lottery
  };
};
