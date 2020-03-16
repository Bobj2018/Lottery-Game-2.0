import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { playGame } from './actions';
import Player from './components/Player';
import Computer from './components/Computer';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import './App.css';

const useStyles = makeStyles(theme => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: 200
		}
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

function App(props) {
	const classes = useStyles();
	const [gameSettings, setGameSettings] = useState({
		maxNumber: 50,
		fieldNumber: 6
	});

	const [open, setOpen] = React.useState(false);

	useEffect(() => {
		if (props.isGuessing) {
			handleOpen();
		}
	}, [props.isGuessing]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	function handleChange(e) {
		setGameSettings({
			...gameSettings,
			[e.target.name]: Number(e.target.value)
		});
	}

	return (
		<Container fixed className='App'>
			<h1>Lottery Game 2.0</h1>

			{props.isGuessing ? (
				<>
					<Player limitNumber={gameSettings.maxNumber} />
					<Computer
						fieldNumber={gameSettings.fieldNumber}
						maxNumber={gameSettings.maxNumber}
					/>
				</>
			) : (
				<>
					<form className={classes.root}>
						<TextField
							id='max-number'
							type='number'
							name='maxNumber'
							label='Max Number'
							value={String(gameSettings.maxNumber)}
							onChange={handleChange}
						/>
						<TextField
							id='field-number'
							label='Number of Fields'
							name='fieldNumber'
							type='number'
							value={String(gameSettings.fieldNumber)}
							onChange={handleChange}
						/>
					</form>
					<Button variant='contained' color='primary' onClick={props.playGame}>
						Play Game
					</Button>

					<Modal
						aria-labelledby='transition-modal-title'
						aria-describedby='transition-modal-description'
						className={classes.modal}
						open={open}
						onClose={handleClose}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={open}>
							<div className={classes.paper}>
								<h2 id='transition-modal-title'>
									Congratulation! You won in {props.attempts} attempt
									<small>s</small>
								</h2>
								<Button
									variant='contained'
									color='primary'
									onClick={handleClose}
								>
									Play Again?
								</Button>
							</div>
						</Fade>
					</Modal>
				</>
			)}
		</Container>
	);
}

function mapStateToProps(state) {
	return {
		lottery: state.lottery,
		isGuessing: state.isGuessing,
		isCorrect: state.isCorrect,
		attempts: state.attempts
	};
}

export default connect(mapStateToProps, { playGame })(App);
