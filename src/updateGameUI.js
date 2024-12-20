import { game } from './gameFlow';
import { resetGame, playTurn } from './play';

const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');
const arrCells = Array.from(cells);
const players = document.querySelectorAll('.player');
const vsText = document.querySelector('.vs');
const playerX = players[0];
const player0 = players[1];

export const startGame = () => {
	arrCells.forEach((cell) => {
		cell.textContent = '';
		cell.classList.remove('inactive');

		// class 'blocked' just to remove listener
		cell.classList.remove('blocked');
	});

	playerX.classList.add('player-x');
	playerX.textContent = 'Player X Turn';
	player0.classList.remove('player-0');
	player0.textContent = 'Player 0 Turn';

	playerX.classList.remove('hide');
	player0.classList.remove('hide');
	vsText.classList.remove('draw');
	vsText.textContent = 'vs';

	resetGame();
};

export const switchTurn = (playerTurn) => {
	if (playerTurn === 'X') {
		playerX.classList.add('player-x');
		player0.classList.remove('player-0');
		return;
	}
	playerX.classList.remove('player-x');
	player0.classList.add('player-0');
};

export const updateBoard = ([row, col], player) => {
	const cell = document.querySelector(`[data-cell="${row},${col}"]`);
	cell.textContent = player;

	// class 'blocked' just to remove listener
	cell.classList.toggle('blocked');
};

// reminder when it's a draw

const updateWinnerText = () => {
	if (game.winner == 'X') {
		playerX.textContent = 'Player X Wins';
		return;
	}
	if (game.winner == '0') {
		player0.textContent = 'Computer 0 Wins';
		return;
	}

	playerX.classList.toggle('hide');
	player0.classList.toggle('hide');
	vsText.classList.toggle('draw');
	vsText.textContent = "It's a draw";
};

export const inactiveBoard = (listener) => {
	board.removeEventListener('click', listener);

	const loseCells = arrCells.filter((cell) => cell.textContent !== game.winner);

	loseCells.forEach((cell) => {
		cell.classList.add('inactive');
	});

	updateWinnerText();
};

export const askUserChoice = (e) => {
	const cellValue = e.target;
	if (cellValue.className === 'cell') {
		let userChoice = cellValue.dataset.cell.split(',');
		let row = Number(userChoice[0]);
		let col = Number(userChoice[1]);

		playTurn([row, col]);
	}
};
