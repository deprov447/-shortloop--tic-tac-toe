const checkInvalidGame = require("./checkInvalidGame");
const { games } = require("./gameStates");

const joinPlayer = (req, res) => {
  const { gameId } = req.params;

  if (games[gameId].isPlayerBThere) {
    res.json({
      Error: "Player B already joined for this game. Try another game",
    });
  } else {
    games[gameId].isPlayerBThere = true;
    games[gameId].currGameState = 1;
    res.send("Ready to start the game");
  }
};

module.exports = joinPlayer;
