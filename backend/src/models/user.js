const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        max: 30,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        max: 16
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    urlProfilePicture: {
        type: String,
    },
    bio: String,
    age: Number,
    posts: [String]

})

module.exports = mongoose.model('user', userSchema)