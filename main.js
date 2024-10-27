import { playTurn, startGame } from './play.js';

const startBtn = document.querySelector('#playBtn');
startBtn.addEventListener('click', () => {
	startBtn.textContent = 'Restart Game';
	startGame();
});

const board = document.querySelector('#board');
board.addEventListener('click', (e) => {
	const cellValue = e.target;
	if (cellValue.className === 'cell') {
		let userChoice = cellValue.dataset.cell.split(',');
		let row = Number(userChoice[0]);
		let col = Number(userChoice[1]);

		playTurn([row, col]);
	}
});
