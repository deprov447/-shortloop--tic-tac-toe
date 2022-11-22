const { games } = require("./gameStates");

const responses = [
  "PLAYER-A TO PLAY",
  "PLAYER-B TO PLAY",
  "PLAYER-A WINS",
  "PLAYER-B WINS",
  "DRAW",
  "INVALID MOVE PLAY AGAIN",
];

const rowCheck = (grid, char) => {
  for (let i = 0; i < 5; ++i) {
    let full = true;
    for (let j = 0; j < 5; ++j) if (grid[i][j] !== char) full = false;
    if (full) return true;
  }
};

const colCheck = (grid, char) => {
  for (let i = 0; i < 5; ++i) {
    let full = true;
    for (let j = 0; j < 5; ++j) if (grid[j][i] !== char) full = false;
    if (full) return true;
  }
};

const diagACheck = (grid, char) => {
  return !(
    grid[0][0] !== char ||
    grid[1][1] !== char ||
    grid[2][2] !== char ||
    grid[3][3] !== char ||
    grid[4][4] !== char
  );
};

const diagBCheck = (grid, char) => {
  return !(
    grid[0][4] !== char ||
    grid[1][3] !== char ||
    grid[2][2] !== char ||
    grid[3][1] !== char ||
    grid[4][0] !== char
  );
};

const someoneWon = (grid) => {
  return (
    rowCheck(grid, "*") ||
    rowCheck(grid, "o") ||
    colCheck(grid, "*") ||
    colCheck(grid, "o") ||
    diagACheck(grid, "*") ||
    diagACheck(grid, "o") ||
    diagBCheck(grid, "*") ||
    diagBCheck(grid, "o")
  );
};

const move = (req, res) => {
  const { gameId } = req.params;
  const { moveX, moveY } = req.body;
  console.log(req.body);

  if (moveX > 4 || moveY > 4 || moveX < 0 || moveY < 0) {
    res.send(responses[5]);
  } else if (games[gameId].gameGrid[moveX][moveY] !== "_") {
    res.send(responses[5]);
  } else {
    games[gameId].gameGrid[moveX][moveY] = games[gameId].playerMove ? "*" : "o";
    console.log(games[gameId].gameGrid);
    if (someoneWon(games[gameId].gameGrid)) {
      games[gameId].currGameState = 2 + games[gameId].playerMove;
      res.send(responses[games[gameId].currGameState]);
    } else if (draw(grid)) {
      games[gameId].currGameState = 4;
      res.send(responses[4]);
    } else {
      games[gameId].playerMove = !games[gameId].playerMove;
      res.send(responses[0 + games[gameId].playerMove]);
    }
  }
};

module.exports = move;
