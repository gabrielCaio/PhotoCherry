const mongoose = require('mongoose')
const User = require('../models/user')

module.exports = {
    async store(req, res) {
        const user = await User.create(req.body)

        return res.json(user)
    },

    async destroy(req, res) {
        await User.findByIdAndDelete(req.params.id)

        return res.send("User Deleted Successfully")
    },

    async show(req, res) {
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

        return res.send("User Logged Successfully")
    }

}
