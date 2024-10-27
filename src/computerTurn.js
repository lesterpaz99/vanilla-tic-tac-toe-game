import { game, player0, setMark, checkWinner } from './gameFlow.js';

const checkRow = () => {
	const result = {
		isThreat: false,
		isOpportunity: false,
		position: [null, null],
	};

	const rowToAttack = game.board.findIndex((row) => row.join('') === '00');
	if (rowToAttack !== -1) {
		const targetCol = game.board[rowToAttack].findIndex((col) => col === null);

		result.isOpportunity = true;
		result.position = [rowToAttack, targetCol];
		return result;
	}

	const rowToDefend = game.board.findIndex((row) => row.join('') === 'XX');
	if (rowToDefend !== -1) {
		const targetCol = game.board[rowToDefend].findIndex((col) => col === null);

		result.isThreat = true;
		result.position = [rowToDefend, targetCol];
	}

	return result;
};

const checkCol = () => {
	const [row1, row2, row3] = game.board;
	const result = {
		isThreat: false,
		isOpportunity: false,
		position: [null, null],
	};

	// opportunities first
	for (let [i, row] of game.board.entries()) {
		if (row1[i] === '0' && row2[i] === '0' && row3[i] === null) {
			result.isOpportunity = true;
			result.position = [2, i];
			break;
		}
		if (row1[i] === '0' && row3[i] === '0' && row2[i] === null) {
			result.isOpportunity = true;
			result.position = [1, i];
			break;
		}
		if (row2[i] === '0' && row3[i] === '0' && row1[i] === null) {
			result.isOpportunity = true;
			result.position = [0, i];
			break;
		}
	}

	if (!result.isOpportunity) {
		for (let [i, row] of game.board.entries()) {
			if (row1[i] === 'X' && row2[i] === 'X' && row3[i] === null) {
				result.isThreat = true;
				result.position = [2, i];
				break;
			}
			if (row1[i] === 'X' && row3[i] === 'X' && row2[i] === null) {
				result.isThreat = true;
				result.position = [1, 0];
				break;
			}
			if (row2[i] === 'X' && row3[i] === 'X' && row1[i] === null) {
				result.isThreat = true;
				result.position = [0, i];
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
		position: [null, null],
	};
	const [row1, row2, row3] = game.board;
	const lineTopLeftToBottom = [row1[0], row2[1], row3[2]];
	const lineTopRightToBottom = [row1[2], row2[1], row3[0]];

	if (lineTopLeftToBottom.join('') === '00') {
		const colToAttack = lineTopLeftToBottom.findIndex((col) => col === null);
		result.isOpportunity = true;
		result.position = [colToAttack, colToAttack];
	}

	if (lineTopRightToBottom.join('') === 'XX') {
		const colToDefend = lineTopRightToBottom
			.reverse()
			.findIndex((col) => col === null);
		const rowToDefend = colToDefend === 2 ? 0 : colToDefend === 0 ? 2 : 1;
		result.isThreat = true;
		result.position = [rowToDefend, colToDefend];
	}

	return result;
};

export const computerLogic = () => {
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
