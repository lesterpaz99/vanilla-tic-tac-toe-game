import './style.css';
import { startGame, askUserChoice } from './updateGameUI.js';

const startBtn = document.querySelector('#playBtn');

const activeBoard = (startBtn) => {
	startBtn.textContent = 'Restart Game';
	const board = document.querySelector('#board');
	board.addEventListener('click', askUserChoice);
	startGame();
};

startBtn.addEventListener('click', () => activeBoard(startBtn));
