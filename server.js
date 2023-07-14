const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const Player = require('./models/playerModel')
// PORT = 1991

// Load config
dotenv.config({path: './config/config.env'})

connectDB()

app.use(express.json())

app.get('/', (req,res) => {
    res.send("Working")
})

app.post('/player', async (req,res) => {
        try {
             const player = await Player.create(req.body)
             res.status(200).json(player)
            // res.send('Ajmo Zvezdo')
        } catch (error) {
            console.error(error)
            res.status(500).json({message: error.message})
        }
})

const PORT = process.env.PORT || 1991


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})