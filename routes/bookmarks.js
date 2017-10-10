var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bookmarks = require('../models/bookmarks');
var Blog = require('../models/blog');
var Verify = require('./verify');
var User = require('../models/users');

var bookmarksrouter = express.Router();

bookmarksrouter.use(bodyParser.json());

bookmarksrouter.route('/user')
.get(Verify.verifyOrdinaryUser, function(req, res, next){
    // get user id
    req.body.postedBy = req.decoded._id;
    // find one entry for the user and populate blogs and postedBy
    Bookmarks.findOne({'postedBy': req.body.postedBy})
    .populate('blogs')
    .populate('postedBy')
    .exec(function (err, bookmark) {
            if (err) next(err);
            res.json(bookmark);
    });
})
.post(Verify.verifyOrdinaryUser, function(req, res, next){
    // get user id
    req.body.postedBy = req.decoded._id;
    // find one entry for the user
    Bookmarks.findOne({'postedBy': req.body.postedBy}, function (err, bookmark) {
        if (err) {
            next(err);
        // if bookmark exists
        }else if(!err && bookmark !== null){
            // if blog with _id is not in bookmark
            if(bookmark.blogs.indexOf(req.body._id) === -1){
                // push blog into bookmark
                bookmark.blogs.push(req.body._id);
                // save the data
                bookmark.save(function (err, bookmark) {
                    if (err) next(err);
                    Blog.findById({_id: req.body._id}, function(err, result){
                        if(err) next(err);
                        result.bookmarks += 1;
                        result.save(function(err, data){
                            if(err) next(err);
                            // return response as likesEntry
                            res.json(data.bookmarks);
                        });
                    });
                });
            // if blog with _id already in bookmark
            }else{
                Bookmarks.findOneAndUpdate({'postedBy': req.body.postedBy},
                    {$pull: {blogs: req.body._id}}, function(err, resp){
                    if (err) next(err);
                    Blog.findById({_id: req.body._id}, function(err, result){
                        if(err) next(err);
                        result.bookmarks -= 1;
                        result.save(function(err, data){
                            if(err) next(err);
                            // return response as likesEntry
                            res.json(data.bookmarks);
                        });
                    });
                });
            }
        }
        // if bookmark entry doesn't exist
        else {
            // create new bookmark instance
            var newUser = new Bookmarks({blogs: [req.body._id], postedBy: req.body.postedBy});
            // save the data
            newUser.save(function(err, newUser){
                if(err) next(err);
                Blog.findById({_id: req.body._id}, function(err, result){
                    if(err) next(err);
                    result.bookmarks += 1;
                    result.save(function(err, data){
                        if(err) next(err);
                        // return response as likesEntry
                        res.json(data.bookmarks);
                    });
                });
            });
        }
    });
});


bookmarksrouter.route('/user/:blog_id')
.delete(Verify.verifyOrdinaryUser, function(req, res, next){
    // get user id
    req.body.postedBy = req.decoded._id;
    // remove the blog with given id from blogs array in bookmark entry
    // identified by user id
    Bookmarks.findOneAndUpdate({'postedBy': req.body.postedBy},
        {$pull: {blogs: req.params.blog_id}}, function(err, resp){
        if (err) next(err);
        Blog.findById({_id: req.body._id}, function(err, result){
            if(err) next(err);
            result.bookmarks -= 1;
            result.save(function(err, data){
                if(err) next(err);
                // return response as likesEntry
                res.json(data.bookmarks);
            });
        });
    });
});

module.exports = bookmarksrouter;
