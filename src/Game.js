export class Game {
	constructor(board) {
		this.board = board;
		this.done = false;
	}

	move() {
		this.done = true;
	}
}
