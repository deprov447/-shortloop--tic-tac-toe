const gameStates = [
  "UNINITIALISED",
  "GAME_IN_PROGRESS",
  "PLAYER_A_WINS",
  "PLAYER_B_WINS",
  "DRAW",
  "ABORTED",
];

class Game {
  constructor() {
    this.moves = [];
    this.isPlayerBThere = false;
    this.currGameState = 0;
    this.playerMove = false;
    this.gameGrid = [
      ["_", "_", "_", "_", "_"],
      ["_", "_", "_", "_", "_"],
      ["_", "_", "_", "_", "_"],
      ["_", "_", "_", "_", "_"],
      ["_", "_", "_", "_", "_"],
    ];
  }
}

let games = [];

module.exports = {
  gameStates,
  games,
  Game,
};
