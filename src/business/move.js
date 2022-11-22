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
    let last = false;
    let secondLast = false;
    for (let j = 0; j < 5; ++j) {
      if (grid[i][j] === char) {
        if (last && secondLast) return true;
      }
      secondLast = last;
      last = grid[i][j] === char;
    }
  }
  return false;
};

const colCheck = (grid, char) => {
  for (let i = 0; i < 5; ++i) {
    let last = false;
    let secondLast = false;
    for (let j = 0; j < 5; ++j) {
      if (grid[j][i] === char) {
        if (last && secondLast) return true;
      }
      secondLast = last;
      last = grid[j][i] === char;
    }
  }
  return false;
};

const diagACheck = (grid, char) => {
  let last = false;
  let secondLast = false;
  for (let i = 0; i < 5; ++i) {
    if (grid[i][i] === char) {
      if (last && secondLast) {
        return true;
      }
    }
    secondLast = last;
    last = grid[i][i] === char;
  }
  return false;
};

const diagBCheck = (grid, char) => {
  let last = false;
  let secondLast = false;
  for (let i = 0; i < 5; ++i) {
    if (grid[i][4 - i] === char) {
      if (last && secondLast) {
        return true;
      }
    }
    secondLast = last;
    last = grid[i][4 - i] === char;
  }
  return false;
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
    games[gameId].moves.push({ x: moveX, y: moveY });
    console.log(games[gameId].gameGrid);
    if (someoneWon(games[gameId].gameGrid)) {
      games[gameId].currGameState = 2 + games[gameId].playerMove;
      res.send(responses[games[gameId].currGameState]);
      // } else if (draw(grid)) {
      //   games[gameId].currGameState = 4;
      //   res.send(responses[4]);
    } else {
      games[gameId].playerMove = !games[gameId].playerMove;
      res.send(responses[0 + games[gameId].playerMove]);
    }
  }
};

module.exports = move;
