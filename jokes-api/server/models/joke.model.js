// start with the model
const mongoose = require('mongoose') // imports mongoose library

const JokeSchema = new mongoose.Schema({
    setup:String,
    punchline:String

    // for created at and updated at
}, {timestamps:true})

const Joke = mongoose.model('joke', JokeSchema)

module.exports = Joke