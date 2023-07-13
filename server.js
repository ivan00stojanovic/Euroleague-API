const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
// PORT = 1991

// Load config
dotenv.config({path: './config/config.env'})

connectDB()

app.get('/', (req,res) => {
    res.send("Working")
})

const PORT = process.env.PORT || 1991


app.listen(PORT, () => {
    console.log(`Server running in  ${process.env.NODE_ENV} mode on port ${PORT}`)
})