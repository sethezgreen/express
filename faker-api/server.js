const express = require('express') // same as importing express
const { faker } = require('@faker-js/faker')
const app = express()

const createUser = () => {
    const newUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    }
    return newUser
}

const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newCompany
}

// hello world request
app.get('/api/hello', (request, response) => {
    response.json({message:'Hello World'})
})

// returns a new user
app.get('/api/users/new', (request, response) => {
    response.json(createUser())
})

// returns a new company
app.get('/api/companies/new', (request, response) => {
    response.json(createCompany())
})

// returns both a new user and company
app.get('/api/user/company', (request, response) => {
    userCompanyObject = {
        user: createUser(),
        company: createCompany()
    }
    response.json(userCompanyObject)
})

app.listen(8000, () => console.log("listening on port 8000")) // starts the server, pass in the port and callback function