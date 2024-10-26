import { computerLogic } from './computerTurn.js';
import {
	game,
	playerX,
	player0,
	setMark,
	checkWinner,
	hasWinner,
} from './gameFlow.js';

// start game / play turns / game flow
export const play = () => {
	debugger;
	let flattenedBoard = game.board.flat(Infinity);

	while (flattenedBoard.includes(null) && game.winner === null) {
		// debugger;

		// Player X turn
		const setUserMark = () => {
			const row = Number(prompt('row'));
			const col = Number(prompt('column'));

			// validate here that the number is lower than 3
			// probably it wont be need since in the html each grid will be set to a fixed number
			// I'll have to disable the grid cell button when is not null so the user cannot select that number

			// if the space is free, cool. If not, dont pass the turn.
			// DRY - pass this into a function => validateEmptyCell
			if (game.board[row][col] === null) {
				setMark({ row, col }, playerX);
				console.log('Board: ', game.board);
				checkWinner();
				console.log('Winner: ', game.winner);
				flattenedBoard = game.board.flat(Infinity);
				return;
			}

			// ask user again
			setUserMark();
		};
		setUserMark();

		if (hasWinner()) {
			return;
		}

		// Player 0 turn
		const setComputerMark = () => {
			if (computerLogic()) return;

			const getRandomPosition = () => {
				return Math.floor(Math.random() * 3);
			};

			const row = getRandomPosition();
			const col = getRandomPosition();

			// if the space is free, cool. If not, dont pass the turn.
			if (game.board[row][col] === null) {
				setMark({ row, col }, player0);
				console.log('Board: ', game.board);
				checkWinner();
				console.log('Winner: ', game.winner);
				flattenedBoard = game.board.flat(Infinity);
				return;
			}

			// ask computer choose another cell
			setComputerMark();
		};
		setComputerMark();
	}
};
