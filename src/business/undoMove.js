const { games } = require("./gameStates");

const undoMove = (req, res) => {
  const { gameId } = req.params;

  if (games[gameId].moves.length === 0) {
    res.send("Undo unsuccessful");
  } else {
    const move = games[gameId].moves[games[gameId].moves.length - 1];
    games[gameId].moves.pop();
    games[gameId].gameGrid[move.x][move.y] = "_";
    res.send("Undo successful");
  }
};

module.exports = undoMove;
