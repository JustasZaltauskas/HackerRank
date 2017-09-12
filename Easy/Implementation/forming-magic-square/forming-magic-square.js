let {
	square
} = require('./data.js');

class magicSquare {
	constructor(square) {
		this.matrix = square;

		this.squares = [
			[
				[8, 1, 6],
				[3, 5, 7],
				[4, 9, 2]
			],
			[
				[6, 1, 8],
				[7, 5, 3],
				[2, 9, 4]
			],
			[
				[4, 9, 2],
				[3, 5, 7],
				[8, 1, 6]
			],
			[
				[2, 9, 4],
				[7, 5, 3],
				[6, 1, 8]
			],
			[
				[8, 3, 4],
				[1, 5, 9],
				[6, 7, 2]
			],
			[
				[4, 3, 8],
				[9, 5, 1],
				[2, 7, 6]
			],
			[
				[6, 7, 2],
				[1, 5, 9],
				[8, 3, 4]
			],
			[
				[2, 7, 6],
				[9, 5, 1],
				[4, 3, 8]
			],
		];
	}

	calculateMinNetCost() {
		let netCosts = new Array(this.squares.length).fill(0);

		for(const [i, row ] of this.matrix.entries()) {
			for(const [j, col] of row.entries()) {
				for (const [z, square] of this.squares.entries()) {
					netCosts[z] += this.calculateCost(col, square[i][j]);
				}
			}
		}

		return Math.min(...netCosts);
	}

	calculateCost(prevVal, newVal) {
		return Math.abs(newVal - prevVal);
	}
}

square = new magicSquare(square);

console.log(square.calculateMinNetCost());
