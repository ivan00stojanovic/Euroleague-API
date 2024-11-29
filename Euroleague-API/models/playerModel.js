const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: String,
    team: Array,
    position: Array,
    height: Number,
    age: Number,
    jerseyNumber: Number
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
