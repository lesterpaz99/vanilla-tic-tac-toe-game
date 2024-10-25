const gameBoard = {
	board: [
		[null, null, null],
		[null, null, null],
		[null, null, null],
	],
};

const playerX = 'X';
const player0 = '0';

const players = {
	[playerX]: playerX,
	[player0]: player0,
};

const game = {
	currentTurn: playerX,
	winner: null,
};

const setMark = ({ row, col }, playerMark) => {
	gameBoard.board[row].splice(col, 1, playerMark);
};

const checkWinner = () => {
	// rows winner validation
	const rows = gameBoard.board.map((boardRow) => boardRow.join(''));

	if (rows.includes('XXX')) {
		game.winner = playerX;
		return;
	}

	if (rows.includes('000')) {
		game.winner = player0;
		return;
	}

	// columns winner validation
	const [row1, row2, row3] = gameBoard.board;

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

const checkRow = () => {
	const result = {
		isThreat: false,
		isOpportunity: false,
		position: { row: null, col: null },
	};

	const rowToAttack = gameBoard.board.findIndex((row) => row.join('') === '00');
	if (rowToAttack !== -1) {
		const targetCol = gameBoard.board[rowToAttack].findIndex(
			(col) => col === null
		);

		result.isOpportunity = true;
		result.position = { row: rowToAttack, col: targetCol };
		return result;
	}

	const rowToDefend = gameBoard.board.findIndex((row) => row.join('') === 'XX');
	if (rowToDefend !== -1) {
		const targetCol = gameBoard.board[rowToDefend].findIndex(
			(col) => col === null
		);

		result.isThreat = true;
		result.position = { row: rowToDefend, col: targetCol };
	}

	return result;
};

const checkCol = () => {
	const [row1, row2, row3] = gameBoard.board;
	const result = {
		isThreat: false,
		isOpportunity: false,
		position: { row: null, col: null },
	};

	// opportunities first
	for (let [i, row] of gameBoard.board.entries()) {
		if (row1[i] === '0' && row2[i] === '0' && row3[i] === null) {
			result.isOpportunity = true;
			result.position = { row: 2, col: i };
			break;
		}
		if (row1[i] === '0' && row3[i] === '0' && row2[i] === null) {
			result.isOpportunity = true;
			result.position = { row: 1, col: i };
			break;
		}
		if (row2[i] === '0' && row3[i] === '0' && row1[i] === null) {
			result.isOpportunity = true;
			result.position = { row: 0, col: i };
			break;
		}
	}

	if (!result.isOpportunity) {
		for (let [i, row] of gameBoard.board.entries()) {
			if (row1[i] === 'X' && row2[i] === 'X' && row3[i] === null) {
				result.isThreat = true;
				result.position = { row: 2, col: i };
				break;
			}
			if (row1[i] === 'X' && row3[i] === 'X' && row2[i] === null) {
				result.isThreat = true;
				result.position = { row: 1, col: i };
				break;
			}
			if (row2[i] === 'X' && row3[i] === 'X' && row1[i] === null) {
				result.isThreat = true;
				result.position = { row: 0, col: i };
				break;
			}
		}
	}

	return result;
};

const checkDiagonal = () => {
	let result = {
		isThreat: false,
		isOpportunity: false,
		position: { row: null, col: null },
	};
	const [row1, row2, row3] = gameBoard.board;
	const lineTopLeftToBottom = [row1[0], row2[1], row3[2]];
	const lineTopRightToBottom = [row1[2], row2[1], row3[0]];

	if (lineTopLeftToBottom.join('') === '00') {
		const colToAttack = lineTopLeftToBottom.findIndex((col) => col === null);
		result.isOpportunity = true;
		result.position = { row: colToAttack, col: colToAttack };
	}

	if (lineTopRightToBottom.join('') === 'XX') {
		const colToDefend = lineTopRightToBottom
			.reverse()
			.findIndex((col) => col === null);
		const rowToDefend = colToDefend === 2 ? 0 : colToDefend === 0 ? 2 : 1;
		result.isThreat = true;
		result.position = { row: rowToDefend, col: colToDefend };
	}

	return result;
};

const computerLogic = () => {
	debugger;
	const {
		isThreat: isRowThreat,
		isOpportunity: isRowOpportunity,
		position: rowTargetPosition,
	} = checkRow();

	if (isRowThreat || isRowOpportunity) {
		setMark(rowTargetPosition, player0);
		checkWinner();
		return true;
	}

	const {
		isThreat: isColThreat,
		isOpportunity: isColOpportunity,
		position: colTargetPosition,
	} = checkCol();

	if (isColThreat || isColOpportunity) {
		setMark(colTargetPosition, player0);
		checkWinner();
		return true;
	}

	const {
		isThreat: isDiagonalThreat,
		isOpportunity: isDiagOpportunity,
		position: diagTargetPosition,
	} = checkDiagonal();

	if (isDiagonalThreat || isDiagOpportunity) {
		setMark(diagTargetPosition, player0);
		checkWinner();
		return true;
	}
	return false;
};

const hasWinner = () => (game.winner !== null ? true : false);

// start game / play turns / game flow
const play = () => {
	debugger;
	let flattenedBoard = gameBoard.board.flat(Infinity);

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
			if (gameBoard.board[row][col] === null) {
				setMark({ row, col }, playerX);
				console.log('Board: ', gameBoard.board);
				checkWinner();
				console.log('Winner: ', game.winner);
				flattenedBoard = gameBoard.board.flat(Infinity);
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
			if (gameBoard.board[row][col] === null) {
				setMark({ row, col }, player0);
				console.log('Board: ', gameBoard.board);
				checkWinner();
				console.log('Winner: ', game.winner);
				flattenedBoard = gameBoard.board.flat(Infinity);
				return;
			}

			// ask computer choose another cell
			setComputerMark();
		};
		setComputerMark();
	}
};

play();
