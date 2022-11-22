const express = require("express");
const app = express();

// takes player id, gives game id
app.post("/game/new", createNewGame);

// takes game id as url param, and player id as normal
app.post("/game/:gameId/join", joinPlayer);

// move
app.post("game/:gameId/move", move);

// return game status
app.get("/game/:gameId/status", stateGame);

// abort game
app.get("/game/:gameId/abort", abortGame);

module.exports = app;
