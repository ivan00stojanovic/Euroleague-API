// controllers/playerController.js
const Player = require('../models/playerModel');
const playersData = require('../models/playersData');



const pushPlayers = async () => {
    try {
      for (let igrach of playersData) {
        // Check if existing player already exists
        const existingPlayer = await Player.findOne({ name: igrach.name });
        if (existingPlayer) {
          console.log(`Player '${igrach.name}' already exists. Skipping.`);
          continue;
        }
        const player = await Player.create(igrach);
        console.log(`Created player: ${player.name}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

const removeNonExisting = async () => {
    try {
        const collectionPlayers = await Player.find({});
        const nonExistingPlayers = [];
  
        for (let collectionPlayer of collectionPlayers) {
            const playerExists = playersData.some(dataPlayer => dataPlayer.name === collectionPlayer.name);
            if (!playerExists) {
                console.log(`Player ${collectionPlayer.name} exists in the collection but not in playersData array`);
                nonExistingPlayers.push(collectionPlayer.name);
                await Player.deleteOne({name: collectionPlayer.name})
                
            }
        }
  
        // console.log('Players not in playersData array:', nonExistingPlayers);
         console.log(nonExistingPlayers)
    } catch (error) {
        console.error(error);
    }
  }
// Example Usage
// updatePlayerTeam('64b573b874ffb47eeb8a8db9', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png', 'RMB');

async function updatePlayerTeam(playerId, newImageUrl, newTeamName) {
    try {
      // Retrieve the player from the database
      const player = await Player.findById(playerId);
  
      if (!player) {
        console.log('Player not found');
        return;
      }
  
      // Modify the "team" array, edit the amount of ex-teams before calling the function
      player.team = [newImageUrl, newTeamName];
  
      // Save the updated document back to the database
      const updatedPlayer = await player.save();
  
      console.log('Player updated successfully:', updatedPlayer);
    } catch (error) {
      console.error('Error updating player:', error);
    }
  }

module.exports = {
  pushPlayers,
  removeNonExisting,
  updatePlayerTeam,
};