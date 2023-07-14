const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: String,
    team: String,
    position: String,
    height: Number,
    age: Number,
    nationality: String,
    jerseyNumber: Number
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
