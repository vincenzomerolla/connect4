class Tile {
	static EMPTY = '⚪️';
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
		this.width = this.height = 50;
		this.symbol = Tile.EMPTY;
	}

	fill(symbol) {
		this.symbol = symbol;
	}

	toString() {
		return this.symbol;
	}
}

export class Board {
	constructor(rows, columns) {
		this.rows = rows;
		this.columns = columns;
		this.tiles = [];

		for (let i = rows - 1; i > -1; i--) {
			console.log(i);
			this.tiles[i] = [];
			for (let j = 0; j < columns; j++) {
				this.tiles[i][j] = new Tile(rows - i - 1, j);
			}
		}
	}

	coords(x, y) {
		return { x: this.rows - x - 1, y };
	}

	getTile(row, col) {
		let { x, y } = this.coords(row, col);
		return this.tiles[x][y];
	}

	drop(symbol, column) {
		let row = 0;
		let tile = this.getTile(row, column);

		while (tile.symbol !== Tile.EMPTY) {
			tile = this.getTile(++row, column);
		}

		tile.fill(symbol);
		this.print();
		this.possibleTurns();
	}

	possibleTurns() {
		let turns = [];
		let row = 0;

		for (let i = 0; i < this.columns; i++) {
			let tile = this.getTile(row, i);

			//Check if empty
			while (tile.symbol !== Tile.EMPTY) {
				row++;
				tile = this.getTile(row, i);
			}

			row = 0;

			turns.push(tile);
		}
		console.log(turns);
	}

	getWeight() {}

	print() {
		let board = '';
		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.columns; j++) {
				board += this.tiles[i][j];
			}
			board += '\n';
		}
		console.log(board);
	}
}

/*
Check available spots: empty spot in row or row above are only possible moves

Red to go

Input:
⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ ⚪️ 🔵 ⚪️ ⚪️ ⚪️ ⚪️
⚪️ 🔴 🔴 🔵 ⚪️ ⚪️ ⚪️
🔴 🔵 🔵 🔴 ⚪️ ⚪️ ⚪️

Possible:
⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ ⚪️ ⚫️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ ⚫️ 🔵 ⚫️ ⚪️ ⚪️ ⚪️
⚫️ 🔴 🔴 🔵 ⚪️ ⚪️ ⚪️
🔴 🔵 🔵 🔴 ⚫️ ⚫️ ⚫️

Output:
⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️ ⚪️
⚪️ 🔴 🔵 ⚪️ ⚪️ ⚪️ ⚪️
⚪️ 🔴 🔴 🔵 ⚪️ ⚪️ ⚪️
🔴 🔵 🔵 🔴 ⚪️ ⚪️ ⚪️
*/
