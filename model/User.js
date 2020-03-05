const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmation: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model('user', UserSchema)