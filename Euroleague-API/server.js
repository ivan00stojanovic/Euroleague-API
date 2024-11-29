const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const kurcina = require('./config/confing')
const cors = require('cors');
const Player = require('./models/playerModel');
const playersData = require('./models/playersData');
const path = require('path');
// console.log(playersData[playersData.length - 1])
console.log(playersData.length)
console.log(playersData[0])
app.use(express.static('public'));
app.use(express.json());

// Load config
dotenv.config({ path: './config/config.env' });

// Handle CORS error
app.use(cors());

//Controller
const playerController = require('./controllers/playerController')

//Routes
const singlePlayerRoute = require('./routes/singlePlayerRoute')
const ageRoute = require('./routes/ageRoute')
const allPlayersRoute = require('./routes/allPlayersRoute')
const teamRoute = require('./routes/teamRoute')

connectDB();

// pushPlayers()
// playerController.pushPlayers()  

// removeNonExisting()
// playerController.removeNonExisting()


app.get('/', (req, res) => {
  try {
      res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } catch (error) {
      console.error('Error loading index.html:', error);
      res.status(500).send('Internal Server Error');
  }
});

app.use('/api', allPlayersRoute)
app.use('/api', ageRoute)
app.use('/api', teamRoute)
app.use('/api', singlePlayerRoute);

  
const PORT = process.env.PORT || 1991;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, Hell Yea`);
});