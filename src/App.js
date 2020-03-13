import React from 'react';
import { connect } from 'react-redux';
import { playGame } from './actions';
import Player from './components/Player';
import Computer from './components/Computer';

function App(props) {
	return (
		<div className='App'>
			{props.isGuessing ? (
				<>
					<Player limitNumber={5} maxNumber={50} />
					<Computer />
				</>
			) : (
				<button onClick={props.playGame}>Play Game</button>
			)}
		</div>
	);
}

function mapStateToProps(state) {
	return {
		isGuessing: state.isGuessing
	};
}

export default connect(mapStateToProps, { playGame })(App);
