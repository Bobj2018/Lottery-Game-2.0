import {
	UPDATE_LOTTERY,
	UPDATE_PLAYER,
	PLAY_GAME,
	GENERATE_LOTTERY,
	WIN_GAME
} from '../actions';

export const initialState = {
	lotteryNumbers: [],
	playerNumbers: [],
	isGenerating: false,
	numberOfGames: 0,
	isCorrect: false,
	isGuessing: false,
	attempts: 0
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
				playerNumbers: action.payload,
				attempts: ++state.attempts
			};
		case PLAY_GAME:
			return {
				...state,
				playerNumbers: [],
				isGuessing: true,
				isCorrect: false,
				attempts: 0,
				numberOfGames: ++state.numberOfGames
			};
		case GENERATE_LOTTERY:
			return {
				...state,
				lotteryNumbers: [],
				isGenerating: true
			};
		case WIN_GAME:
			return {
				...state,
				lotteryNumbers: [],
				playerNumbers: [],
				isGenerating: false,
				isCorrect: true,
				isGuessing: false
			};
		default:
			return state;
	}
};
