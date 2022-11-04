const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    comment: String
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;