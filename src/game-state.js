const gameStates = [
  UNINITIALISED,
  GAME_IN_PROGRESS,
  PLAYER_A_WINS,
  PLAYER_B_WINS,
  DRAW,
  ABORTED,
];

let currGameState = 0;

let gameGrid = [
  ["_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_"],
];

let playerMove = false;

module.exports = {
  gameStates,
  currGameState,
  gameGrid,
  playerMove,
};
