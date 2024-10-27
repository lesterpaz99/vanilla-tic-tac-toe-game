import { computerLogic } from './computerTurn.js';
import {
	game,
	playerX,
	player0,
	setMark,
	checkWinner,
	hasWinner,
} from './gameFlow.js';
import { switchTurn } from './updateGameUI.js';

export const resetGame = () => {
	game.board = [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	];
	game.winner = null;
};

const playerXMove = (cellPosition) => {
	const [row, col] = cellPosition;
	setMark([row, col], playerX);
	checkWinner();
};

const player0Move = () => {
	if (computerLogic()) return;

	const getRandomPosition = () => {
		return Math.floor(Math.random() * 3);
	};

	const row = getRandomPosition();
	const col = getRandomPosition();

	// if the space is free, cool. If not, don't pass the turn.
	if (game.board[row][col] === null) {
		setMark([row, col], player0);
		checkWinner();
		return;
	}

	// ask computer choose another cell
	player0Move();
};

// game flow
export const playTurn = (cellPosition) => {
	switchTurn('X');
	playerXMove(cellPosition);
	if (hasWinner()) {
		// end game
		return;
	}

	switchTurn('0');
	setTimeout(() => {
		player0Move();
		if (hasWinner()) {
			// end game
			return;
		}
		switchTurn('X');
	}, 1000);
};
