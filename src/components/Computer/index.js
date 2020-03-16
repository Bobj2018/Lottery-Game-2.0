/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { updateLottery, generateLottery } from '../../actions';
import { connect } from 'react-redux';

function Computer(props) {
	const createRandomLottery = (fieldNumber, maxNumber) => {
		props.generateLottery();
		const randomLotto = [];

		for (let i = 0; i < fieldNumber; i++) {
			randomLotto.push(Math.floor(Math.random() * maxNumber));
		}

		setTimeout(() => {
			props.updateLottery(randomLotto);
		}, 3000);
	};

	useEffect(() => {
		createRandomLottery(props.fieldNumber, props.maxNumber);
	}, []);

	return (
		<>
			{
				//<h2>Computer</h2>
				// <button onClick={createRandomLottery}>Generate</button>
				// {props.isGenerating ? (
				// 	<p>Generating</p>
				// ) : (
				// 	props.lotteryNumbers.map((number, index) => (
				// 		<p key={index}> {number}</p>
				// 	))
				// )}
			}
		</>
	);
}

function mapStateToProps(state) {
	return {
		playerNumbers: state.playerNumbers,
		lotteryNumbers: state.lotteryNumbers,
		isGenerating: state.isGenerating
	};
}

export default connect(mapStateToProps, { updateLottery, generateLottery })(
	Computer
);
