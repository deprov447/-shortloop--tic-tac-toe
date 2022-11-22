const { games } = require("./gameStates");

const abortGame = (req, res) => {
  const { gameId } = req.params;
  games[gameId].currGameState = 5;
  res.send("Aborted");
};

module.exports = abortGame;
