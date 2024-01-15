// start with the model
const mongoose = require('mongoose') // imports mongoose library

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    } // defines the structure of each new document put into the collection
})

const User = mongoose.model('User', UserSchema) // takes blueprint from the UserSchema object and creates the necessary database collection

module.exports = User