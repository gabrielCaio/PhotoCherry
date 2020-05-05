const Comment = require('../models/comment')

module.exports = {
    async store(req, res) {
        const comment = await Comment.create(req.body)

        return res.json(comment)
    },

    async edit(req, res) {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(comment)
    }
}