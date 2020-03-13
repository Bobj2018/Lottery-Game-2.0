import {
	UPDATE_LOTTERY,
	UPDATE_PLAYER,
	PLAY_GAME,
	GENERATE_LOTTERY
} from '../actions';

export const initialState = {
	lotteryNumbers: [],
	playerNumbers: [],
	isGenerating: false,
	numberOfGames: 0,
	isCorrect: false,
	isGuessing: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_LOTTERY:
			return {
				...state,
				lotteryNumbers: action.payload,
				isGenerating: false
			};
		case UPDATE_PLAYER:
			return {
				...state,
				playerNumbers: action.payload
			};
		case PLAY_GAME:
			return {
				...state,
				isGuessing: true
			};
		case GENERATE_LOTTERY:
			return {
				...state,
				lotteryNumbers: [],
				isGenerating: true
			};
		default:
			return state;
	}
};
