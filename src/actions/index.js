export const UPDATE_LOTTERY = 'UPDATE_LOTTERY';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const PLAY_GAME = 'PLAY_GAME';
export const GENERATE_LOTTERY = 'GENERATE_LOTTERY';
export const WIN_GAME = 'WIN_GAME';

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

export const playGame = () => {
	return {
		type: PLAY_GAME
	};
};

export const generateLottery = () => {
	return {
		type: GENERATE_LOTTERY
	};
};

export const winGame = () => {
	return {
		type: WIN_GAME
	};
};
