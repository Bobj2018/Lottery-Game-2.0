import React from 'react';
import { connect } from 'react-redux';
import { playGame } from './actions';
import Player from './components/Player';
import Computer from './components/Computer';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import './App.css';

function App(props) {
	return (
		<Container fixed className='App'>
			<h1>Lottery Game 2.0</h1>

			{props.isGuessing ? (
				<>
					<Player limitNumber={5} maxNumber={50} />
					<Computer />
				</>
			) : (
				<Button variant='contained' color='primary' onClick={props.playGame}>
					Play Game
				</Button>
			)}
		</Container>
	);
}

function mapStateToProps(state) {
	return {
		isGuessing: state.isGuessing
	};
}

export default connect(mapStateToProps, { playGame })(App);
