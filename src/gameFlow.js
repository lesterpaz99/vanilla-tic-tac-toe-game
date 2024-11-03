import JSConfetti from 'js-confetti';
import { updateBoard, inactiveBoard, askUserChoice } from './updateGameUI.js';

const confetti = new JSConfetti();

export const game = {
	board: [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	],
	winner: null,
};

export const playerX = 'X';
export const player0 = '0';

const players = {
	[playerX]: playerX,
	[player0]: player0,
};

export const setMark = ([row, col], playerMark) => {
	game.board[row].splice(col, 1, playerMark);
	updateBoard([row, col], playerMark);
};

export const checkWinner = () => {
	// rows winner validation
	const rows = game.board.map((boardRow) => boardRow.join(''));

	if (rows.includes('XXX')) {
		game.winner = playerX;
		return;
	}

	if (rows.includes('000')) {
		game.winner = player0;
		return;
	}

	// columns winner validation
	const [row1, row2, row3] = game.board;

	row1.forEach((col, i) => {
		if (row1[i] !== null && row1[i] === row2[i] && row1[i] === row3[i]) {
			game.winner = players[col];
			return;
		}
	});

	// diagonal winner validation
	if (
		(row1[0] !== null && row1[0] === row2[1] && row1[0] === row3[2]) ||
		(row1[2] !== null && row1[2] === row2[1] && row1[2] === row3[0])
	) {
		const player =
			row1[0] !== null && row1[0] === row2[1] && row1[0] === row3[2]
				? row1[0]
				: row1[2];
		game.winner = players[player];
		return;
	}
};

export const hasWinner = () => (game.winner !== null ? true : false);

export const isFullBoard = () => {
	const flattedBoard = game.board.flat(Infinity);
	return flattedBoard.every((cell) => cell !== null);
};

export const endGame = () => {
	inactiveBoard(askUserChoice);

	if (game.winner === null) return;

	confetti.addConfetti();
};
