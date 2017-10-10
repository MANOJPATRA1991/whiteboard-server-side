var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookmarksSchema = new Schema({
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    }],
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
});

module.exports = mongoose.model('Bookmarks', bookmarksSchema);