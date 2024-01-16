const JokeController = require('../controllers/joke.controller') 

module.exports = (app) => {
    app.get('/api/allJokes', JokeController.findAllJokes)
    app.post('/api/createJoke', JokeController.createJoke)
    app.get('/api/findOneJoke/:id', JokeController.findOneJoke)
    app.put('/api/updateJoke/:id', JokeController.updateJoke)
    app.delete('/api/deleteJoke/:id', JokeController.deleteJoke)
}