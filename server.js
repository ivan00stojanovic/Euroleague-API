const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const Player = require('./models/playerModel');
const playersData = require('./models/playersData');
const path = require('path');

app.use(express.static('public'));
app.use(express.json());

// Load config
dotenv.config({ path: './config/config.env' });

// Handle CORS error
app.use(cors());

connectDB();

const pushPlayers = async () => {
  try {
    for (let igrach of playersData) {
      // Check if existing player already exists
      const existingPlayer = await Player.findOne({ name: igrach.name });
      if (existingPlayer) {
        // console.log(`Player '${igrach.name}' already exists. Skipping.`);
        continue;
      }
      const player = await Player.create(igrach);
      console.log(`Created player: ${player.name}`);
    }
  } catch (error) {
    console.error(error);
  }
};

//pushPlayers()

// app.get('/playersData.js', (req, res) => {
//   try {
//     res.sendFile(path.join(__dirname, 'models', 'playersData.js'));
//   } catch (error) {
//     console.error('Error serving playersData.js:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

app.get('/getInfo', (req, res) => {
    try {
      res.send(playersData);
    } catch (error) {
      console.error('Error sending player data:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  app.get('/players/:playerName', (req, res) => {
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
  

const PORT = process.env.PORT || 1991;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`, ', Hell Yea');
});
