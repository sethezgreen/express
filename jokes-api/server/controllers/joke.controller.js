const Joke = require('../models/joke.model') // imports the model

module.exports = { // exports all functions
    // Find All Jokes (Read All)
    findAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => { // returns json of all jokes if successful
                res.status(200).json(allJokes)
            })
            .catch((err) => { // returns error if unsuccessful
                res.status(500).json(err)
            })
    },

    // Create Joke (Create)
    createJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJoke) => {
                res.status(201).json(newJoke)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}