const express = require('express')
require('dotenv').config()
const DBconnection = require('./config/database')

const app = express()

app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`this server is runing in http://localhost:${PORT}`)
})

DBconnection()