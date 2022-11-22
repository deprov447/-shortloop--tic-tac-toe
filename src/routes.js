const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Functions
const createNewGame = require("./business/createNewGame");
const joinPlayer = require("./business/joinPlayer");
const move = require("./business/move");
const stateGame = require("./business/stateGame");
const abortGame = require("./business/abortGame");
const checkInvalidGame = require("./business/checkInvalidGame");
const undoMove = require("./business/undoMove");

// takes player id, gives game id
app.post("/game/new", createNewGame);

// takes game id as url param, and player id as normal
app.post("/game/:gameId/join", checkInvalidGame, joinPlayer);

// move
app.post("/game/:gameId/move", checkInvalidGame, move);

// undo
app.get("/game/:gameId/undo", checkInvalidGame, undoMove);

// return game status
app.get("/game/:gameId/status", checkInvalidGame, stateGame);

// abort game
app.get("/game/:gameId/abort", checkInvalidGame, abortGame);

module.exports = app;
