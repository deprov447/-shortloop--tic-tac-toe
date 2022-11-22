const { games, gameStates } = require("./gameStates");

const checkInvalidGame = (req, res, next) => {
  const { gameId } = req.params;
  if (games[gameId].currGameState >= 2) {
    res.json(gameStates[games[gameId].currGameState]);
  } else if (gameId > games.length - 1 || gameId < 0) {
    res.status = 400;
    res.json({
      Error: "Invalid game",
    });
    console.log("Is game valid: nope");
  } else {
    console.log("Is game valid: yes");
    next();
  }
};

module.exports = checkInvalidGame;
