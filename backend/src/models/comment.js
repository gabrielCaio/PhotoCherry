const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    author: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    content: String,
    cherryshed: Number,
    isEdited: Boolean
})

module.exports = mongoose.model('Comment', commentSchema)