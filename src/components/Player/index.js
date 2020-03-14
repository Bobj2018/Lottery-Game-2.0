import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	correct: {
		color: 'green'
	},
	incorrect: {
		color: 'red'
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
			console.log('Winner');
		} else {
			lottery.map((num, index) => {
				if (num === player[index]) {
					correctGuessArr.push(true);
				} else {
					correctGuessArr.push(false);
				}
			});
			setIsCorrectGuess(correctGuessArr);
			console.log(correctGuessArr);
		}
	}

	function inputGuess(index) {
		if (JSON.stringify(isCorrectGuess) === JSON.stringify([])) {
			return 'inactive';
		} else {
			if (isCorrectGuess[index]) {
				return 'correct';
			} else {
				return 'incorrect';
			}
		}
	}

	return (
		<div>
			<h2>Guess a number between 1 and 50!</h2>

			{props.isGenerating ? (
				<CircularProgress />
			) : (
				<form className={classes.root} onSubmit={handleSubmit}>
					{props.lotteryNumbers.map((num, index) => (
						<>
							<TextField
								className={inputGuess(index)}
								key={index}
								name={`${index}`}
								id={`${index}`}
								type='number'
								value={String(userInput[index])}
								onChange={handleChange}
								required
								inputProps={{ min: '0', max: '50', step: '1' }}
							/>
						</>
					))}
					<br />
					<Button variant='outlined' color='primary' size='large' type='submit'>
						Submit
					</Button>
				</form>
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		playerNumbers: state.playerNumbers,
		lotteryNumbers: state.lotteryNumbers,
		isGenerating: state.isGenerating
	};
}

export default connect(mapStateToProps, { updatePlayer })(Player);
