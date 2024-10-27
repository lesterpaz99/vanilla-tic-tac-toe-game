import './style.css';
import { startGame, askUserChoice } from './updateGameUI.js';

const startBtn = document.querySelector('#playBtn');
startBtn.addEventListener('click', () => {
	startBtn.textContent = 'Restart Game';
	const board = document.querySelector('#board');
	board.addEventListener('click', askUserChoice);
	startGame();
});
