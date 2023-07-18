const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors = require('cors')
const Player = require('./models/playerModel')
const playersData = require('./models/playersData')
// const userInput = document.getElementById('userInput')
// const bodyParser = require('body-parser')
// PORT = 1991

app.use(express.static('public'))
// Load config
dotenv.config({path: './config/config.env'})

//Handle CORS error
app.use(cors())

connectDB()

const pushPlayers = async () => {
    try {
        for(let igrach of playersData){
        //check if existing player already exists
        const existingPlayer = await Player.findOne({ name: igrach.name });
      if (existingPlayer) {
        // console.log(`Player '${igrach.name}' already exists. Skipping.`);
        continue;``
      } 
            const player = await Player.create(igrach);
            console.log(`Created player: ${player.name}`)
        }
    } catch (error) {
        console.error(error)
    }
}

pushPlayers()


// app.use(express.static('public'))
app.use(express.json())

// app.get('/', (req,res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })
// app.get('/test', async (req,res) => {
//     res.sendFile(__dirname + '/views/index.html')
//     const proba =   await Math.floor(Math.random() * playersData.length)
// })



// app.post('/player', async (req,res) => {
//         try {
//              const player = await Player.create(req.body)
//              res.status(200).json(player)
//         } catch (error) {
//             console.error(error)
//             res.status(500).json({message: error.message})
//         }
// })

const PORT = process.env.PORT || 1991


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})