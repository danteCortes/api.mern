const mongoose = require('mongoose')

const DBconnection = () => {

    const DB_CONNECTION = process.env.DB_CONNECTION
    const mongodbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    const mongodbCallback = (err) => {
        !err ? console.log('connection successfully') : console.log('connection failed')
    }
    
    mongoose.connect(DB_CONNECTION, mongodbOptions, mongodbCallback)
}

module.exports = DBconnection