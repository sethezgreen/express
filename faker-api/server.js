const express = require('express') // same as importing express
const { faker } = require('@faker-js/faker')

const createUser = () => {
    const newUser = {
        name: faker.person.firstName()
    }
    return newUser
}

const app = express()

app.get('/api/hello', (request, response) => {
    response.json({message:'Hello World'})
})

app.get('/api/users/new', (request, response) => {
    response.json(createUser())
})

app.listen(8000, () => console.log("listening on port 8000")) // starts the server, pass in the port and callback function