const express = require('express');
const router = express.Router();
const playersData = require('../models/playersData');

// Original route: /players/:playerName
router.get('/players/:playerName', (req, res) => {
    try {
        const playerName = req.params.playerName.toLowerCase();
        const player = playersData.find(player => player.name.toLowerCase() === playerName);
        if (player) {
            res.json(player);
        } else {
            res.status(404).json({ error: 'Player not found' });
        }
    } catch (error) {
        console.error('Error retrieving player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;