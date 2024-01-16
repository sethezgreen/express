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

    // Find One Joke
    findOneJoke: (req, res) => {
        Joke.findOne({_id: req.params.id})
            .then((oneJoke) => {
                res.status(200).json(oneJoke)
            })
            .catch((err) => {
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
    },

    // Update Joke
    updateJoke: (req, res) => {
        Joke.findOneAndUpdate(
            {_id: req.params.id}, // find one 
            req.body, // info from the request
            {new: true, runValidators: true}) // new: true ensures the updatedJoke gets sent
            .then((updatedJoke) => {
                res.json(updatedJoke)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    // Delete Joke
    deleteJoke: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    }
}