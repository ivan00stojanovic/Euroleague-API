const express = require('express');
const router = express.Router();
const playersData = require('../models/playersData');

// Original route: /players/:playerName
router.get('/players/team/:teamName', (req, res) => {
    try {
        const teamName = req.params.teamName.toUpperCase(); // Convert to uppercase for case-insensitivity
  
        // Filter players based on the teamName
        const filteredPlayers = playersData.filter(player => player.team[1].toUpperCase() === teamName);
  
        if (filteredPlayers.length > 0) {
            res.json(filteredPlayers);
        } else {
            res.status(404).json({ error: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;