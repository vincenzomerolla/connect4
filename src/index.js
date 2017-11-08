import { Board } from './Board';
import { Game } from './Game';
import { Player } from './Player';

const ROWS = 6;
const COLS = 7;
const HUMAN_SYMBOL = '🔴';
const AI_SYMBOL = '🔵';

let board = new Board(ROWS, COLS);
let game = new Game(board);
let human = new Player(HUMAN_SYMBOL);
let ai = new Player(AI_SYMBOL);

board.drop(human.symbol, 0);
board.drop(ai.symbol, 1);
board.drop(human.symbol, 1);
board.drop(ai.symbol, 2);
board.drop(human.symbol, 2);
board.drop(ai.symbol, 2);
board.drop(human.symbol, 3);
board.drop(ai.symbol, 3);
