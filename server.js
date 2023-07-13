const express = require('express')
const app = express()
PORT = 1991

app.get('/', (req,res) => {
    res.send("Working")
})

app.listen(PORT, () => {
    console.log('Listening on PORT ' + PORT)
})