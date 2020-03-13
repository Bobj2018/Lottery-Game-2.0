import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updatePlayer } from '../../actions';

function Player(props) {
	const [userInput, setUserInput] = useState({});

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
	}

	return (
		<div>
			<h2>Player</h2>
			<form onSubmit={handleSubmit}>
				{props.lotteryNumbers.map((num, index) => (
					<input
						key={index}
						name={`${index}`}
						id={`${index}`}
						type='number'
						placeholder={props.lotteryNumbers[index]}
						value={String(userInput[index])}
						onChange={handleChange}
						required
						min={0}
						max={50}
					/>
				))}
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		playerNumbers: state.playerNumbers,
		lotteryNumbers: state.lotteryNumbers
	};
}

export default connect(mapStateToProps, { updatePlayer })(Player);
