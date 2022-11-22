const { Game, games } = require("./gameStates");

const createNewGame = (req, res) => {
  const newGame = new Game();
  games.push(newGame);

  res.json({
    gameId: games.length - 1,
  });
};

module.exports = createNewGame;
