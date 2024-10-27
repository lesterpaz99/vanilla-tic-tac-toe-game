import { computerLogic } from './computerTurn.js';
import {
	game,
	playerX,
	player0,
	setMark,
	checkWinner,
	hasWinner,
} from './gameFlow.js';

const resetGame = () => {
	game.board = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	game.winner = null;
};

// start
export const startGame = () => {
	const inactiveCells = document.querySelectorAll('.cell');
	const arrCells = Array.from(inactiveCells);

	arrCells.forEach((cell) => {
		cell.textContent = '';
		cell.classList.remove('inactive');
	});

	resetGame();
};

// game flow
export const playTurn = (cellPosition) => {
	// Player X move
	const [row, col] = cellPosition;
	if (game.board[row][col] === null) {
		setMark([row, col], playerX);
		checkWinner();
	}

	if (hasWinner()) {
		return;
	}

	// Player 0 move
	const setComputerMark = () => {
		if (computerLogic()) return;

		const getRandomPosition = () => {
			return Math.floor(Math.random() * 3);
		};

		const row = getRandomPosition();
		const col = getRandomPosition();

		// if the space is free, cool. If not, dont pass the turn.
		if (game.board[row][col] === null) {
			setMark([row, col], player0);
			checkWinner();
			return;
		}

		// ask computer choose another cell
		setComputerMark();
	};

	setTimeout(setComputerMark, 1300);
};
