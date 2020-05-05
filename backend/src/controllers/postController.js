const Post = require('../models/post')

module.exports = {
    async store(req, res) {
        const post = await Post.create(req.body)

        return res.json(post)
    }
}