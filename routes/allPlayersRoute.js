const express = require('express');
const router = express.Router();
const playersData = require('../models/playersData');

// Original route: /players/:playerName
router.get('/players/all', (req, res) => {
    try {
        res.send(playersData);
    } catch (error) {
        console.error('Error sending player data:', error);
        res.status(500).send('Internal Server Error');
    }
  });
  

module.exports = router;