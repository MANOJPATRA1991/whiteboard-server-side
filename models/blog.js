var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment:  {
        type: String,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

var Blog = new Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    bookmarks: {
        type: Number,
        default: 0
    },
    comments: [commentSchema]
},
{
    timestamps: true
});

var Blog = mongoose.model('Blog', Blog);
module.exports = Blog;