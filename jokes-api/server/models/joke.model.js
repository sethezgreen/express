// start with the model
const mongoose = require('mongoose') // imports mongoose library

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true, "setup is required"]
    },
    punchline:{
        type:String,
        required:[true, "punchline is required"]
    }

    // for created at and updated at
}, {timestamps:true})

const Joke = mongoose.model('joke', JokeSchema)

module.exports = Joke