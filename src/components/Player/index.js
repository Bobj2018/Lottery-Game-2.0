import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { updatePlayer, winGame } from '../../actions';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	}
}));

function Player(props) {
	const [userInput, setUserInput] = useState({});
	const [isCorrectGuess, setIsCorrectGuess] = useState([]);
	const classes = useStyles();

	function handleChange(e) {
		setUserInput({
			...userInput,
			[e.target.name]: Number(e.target.value)
		});
	}

	function handleSubmit(e) {
		e.preventDefault();
		const playerArr = [];
		for (let i = 0; i < 6; i++) {
			playerArr.push(userInput[i]);
		}
		props.updatePlayer(playerArr);
		isGuessCorrect(props.lotteryNumbers, playerArr);
	}

	function isGuessCorrect(lottery, player) {
		const correctGuessArr = [];
		if (JSON.stringify(lottery) === JSON.stringify(player)) {
			props.winGame();
		} else {
			lottery.map((num, index) => {
				if (num === player[index]) {
					correctGuessArr.push(true);
				} else {
					if (lottery.includes(player[index])) {
						correctGuessArr.push('close');
					} else {
						correctGuessArr.push(false);
					}
				}
			});
			setIsCorrectGuess(correctGuessArr);
		}
	}

	function inputGuess(index) {
		if (JSON.stringify(isCorrectGuess) === JSON.stringify([])) {
			return 'inactive';
		} else {
			if (isCorrectGuess[index]) {
				if (isCorrectGuess[index] === 'close') {
					return 'close';
				} else {
					return 'correct';
				}
			} else {
				return 'incorrect';
			}
		}
	}

	return (
		<div>
			<h2>Guess a number between 0 and {props.limitNumber}!</h2>
			<h3>Game {props.numberOfGames}</h3>
			{props.isGenerating ? (
				<CircularProgress />
			) : (
				<form className={classes.root} onSubmit={handleSubmit}>
					{props.lotteryNumbers.map((num, index) => (
						<>
							<TextField
								key={index}
								name={`${index}`}
								id={`${index}`}
								type='number'
								value={String(userInput[index])}
								onChange={handleChange}
								required
								inputProps={{
									min: '0',
									max: String(props.limitNumber),
									step: '1',
									className: inputGuess(index)
								}}
							/>
						</>
					))}
					<br />
					{props.isGuessing ? (
						<Button
							variant='outlined'
							color='primary'
							size='large'
							type='submit'
						>
							Submit
						</Button>
					) : (
						<Button
							disabled
							variant='outlined'
							color='primary'
							size='large'
							type='submit'
						>
							Checking Numbers
						</Button>
					)}
				</form>
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		playerNumbers: state.playerNumbers,
		lotteryNumbers: state.lotteryNumbers,
		isGenerating: state.isGenerating,
		isGuessing: state.isGuessing,
		numberOfGames: state.numberOfGames
	};
}

export default connect(mapStateToProps, { updatePlayer, winGame })(Player);
