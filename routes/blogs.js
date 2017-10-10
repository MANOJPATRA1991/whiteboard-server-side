var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Blog = require('../models/blog');
var Verify = require('./verify');
var User = require('../models/users');

var blogRouter = express.Router();

blogRouter.use(bodyParser.json());

const categories = [
    'Style',
    'Tech & Science',
    'Sports',
    'Arts & Culture',
    'Travel',
    'Music',
    'Books',
    'Business',
    'Photos & Design',
    'Living'
 ]

blogRouter.route('/')
// get top 10 blogs from all categories
.get(function(req, res, next){
    let query = Blog.find({'category': { '$in': categories}});
    // sort by updatedAt data and limit to 10 queries
    query.sort({ 'updatedAt': -1}).limit(10);
    query.exec(function(err, blogs) {
        if (err) next(err);
        res.json(blogs);
    });
})

// post a new blog by a signed in user
.post(Verify.verifyOrdinaryUser, function(req, res, next) {
    // create new blog
    var blog = new Blog({
        category: req.body.category,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    })
    Blog.create(blog, function(err, blog){
        if(err){
            next(err);
        }
        res.status(200).json({ message: 'Blog created', id: blog._id });
    })
});


blogRouter.route('/author/:author/posts')
// get all blogs by an author
.get(Verify.verifyOrdinaryUser, function(req, res, next) {
    Blog.find({'author': req.params.author}, function(err, blogs) {
        if (err) next(err);
        res.json(blogs);
    });
})

blogRouter.route('/author/posts/:id')
    // edit blog belonging to a particular author
    .put(Verify.verifyOrdinaryUser, function (req, res, next) {
        Blog.findById(req.params.id, function(err, blog){
            if(err) next(err);
            // edit only if blog's author is the same as one who is requesting
            if(blog.author === req.body.author){
                blog.category =  req.body.category,
                blog.title = req.body.title,
                blog.content = req.body.content,
                blog.author = req.body.author
            }
            blog.save(function(err, data){
                if(err) next(err);
                // return response as likesEntry
                res.status(200).json("Blog updated");
            });
        });
    })

    // delete blog belonging to a particular author
    .delete(Verify.verifyOrdinaryUser, function (req, res, next) {
        Blog.findByIdAndRemove(req.params.id, function (err, blog) {
            if (err) next(err);
            res.json(blog);
        });
    });

blogRouter.route('/category/:category')
// get all blogs by category
.get(function(req, res, next) {
    let skip = +req.query.skip;
    let query = Blog.find({'category': req.params.category});
    query.sort({ 'updatedAt': -1}).skip(skip*10).limit(10);
    query.exec(function(err, blogs) {
        if (err) next(err);
        res.json(blogs);
    });
});

blogRouter.route('/category/:category/count')
// get number of documents for the given category
.get(function(req, res, next) {
    Blog.count({'category': req.params.category}, function(err, result){
        if(err) next(err);
        res.status(200).json(result);
    });
});

blogRouter.route('/post/:id')
// get particular blog details by id
.get(function(req, res, next) {
    Blog.findById(req.params.id, function(err, blogs) {
        if (err) next(err);
        res.json(blogs);
    });
});

blogRouter.route('/:blogId/comments')
// Get all comments for the blog
.get((req, res, next) => {
    Blog.findById(req.params.blogId)
        .populate('comments.postedBy')
        .exec((err, blog) => {
            if (err) next(err);
            res.json(blog.comments);
        });
})

// Save comments for the blog into the database
.post(Verify.verifyOrdinaryUser, (req, res, next) => {
    Blog.findById(req.params.blogId, (err, blog) => {
        if (err) next(err);
        console.log(blog);
        req.body.postedBy = req.decoded._id;

        blog.comments.push(req.body);
        blog.save((err, blog) => {
            if (err) next(err);
            let user = [];
            for (var i = 0; i < blog.comments.length; i++) {
                user.push
            }
            console.log(blog.comments[0].postedBy);
            console.log('Updated Comments!');
            res.status(200).json(blog.comments);
        });
    });
});

blogRouter.route('/:blogId/comments/:commentId')
.get(Verify.verifyOrdinaryUser, (req, res, next) => {
    Blog.findById(req.params.blogId)
        .populate('comments.postedBy')
        .exec((err, blog) => {
            if (err) next(err);
            res.json(blog.comments.id(req.params.commentId));
        });
})

.put(Verify.verifyOrdinaryUser, (req, res, next) => {
    // We delete the existing commment and insert the updated
    // comment as a new comment
    Blog.findById(req.params.blogId, (err, blog) => {
        if (err) next(err);
        blog.comments.id(req.params.commentId).remove();

        req.body.postedBy = req.decoded._id;

        blog.comments.push(req.body);
        blog.save((err, blog) => {
            if (err) next(err);
            res.json(blog);
        });
    });
})

.delete(Verify.verifyOrdinaryUser, (req, res, next) => {
    Blog.findById(req.params.blogId, (err, blog) => {
        if (err) next(err);
        blog.comments.id(req.params.commentId).remove();
        blog.save((err, resp) => {
            if (err) next(err);
            res.json(resp);
        });
    });
});

module.exports = blogRouter;