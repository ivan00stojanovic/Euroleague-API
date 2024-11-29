const express = require('express');
const router = express.Router();
const playersData = require('../models/playersData');

// Original route: /players/age/:age
router.get('/players/age/:age', (req, res) => {
    try {
        const ageWanted = Number(req.params.age);
  
        const nAgePlayers = playersData.filter(player => player.age == ageWanted);
  
        if (nAgePlayers.length > 0) {
            res.json(nAgePlayers);
            // console.log(res.json)
        } else {
            res.status(404).json({ error: `We have no ${ageWanted} year old players in the Euroleague` });
        }
    } catch (error) {
        res.status(500).json({ error: `Internal server error` });
    }
  });

  module.exports = router