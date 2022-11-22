const checkInvalidGame = require("./checkInvalidGame");
const { gameStates, games } = require("./gameStates");

const stateGame = (req, res) => {
  const { gameId } = req.params;
  res.json({
    board: games[gameId].gameGrid,
    status: gameStates[games[gameId].currGameState],
  });
};

module.exports = stateGame;
