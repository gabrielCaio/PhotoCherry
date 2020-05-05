const mongoose = require('mongoose')
const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
    async store(req, res) {
        const user = await User.create(req.body)

        return res.json(user)
    },

    async destroy(req, res) {
        await User.findByIdAndDelete(req.params.id)

        return res.send("User Deleted Successfully")
    },

    async showOne(req, res) {
        const user = await User.findById(req.params.id)

        return res.json(user)
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(user)
    },

    async login(req, res) {
        var username = req.body.username
        var password = req.body.password

        const user = await User.findOne({username: username, password: password})

        if(!user) return res.send("User not found")

        return res.send(user)
    },

    async showAll(req, res) {
        const users = await User.find()

        return res.json(users)
    },

    async userPosts(req, res) {
        const userID = req.headers.authorization

        const { username } = await User.findById(userID)

        const posts = await Post.find({ author: username })

        return res.json(posts)
    }

}
