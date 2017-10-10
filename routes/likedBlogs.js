var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var LikedBlogs = require('../models/likes');
var Verify = require('./verify');
var User = require('../models/users');
var Blog = require('../models/blog');

var likedblogsrouter = express.Router();

likedblogsrouter.use(bodyParser.json());

likedblogsrouter.route('/')
.get(Verify.verifyOrdinaryUser, function(req, res, next){
    // get user id
    req.body.postedBy = req.decoded._id;
    // find one entry for the user and populate blogs and postedBy
    LikedBlogs.findOne({'postedBy': req.body.postedBy})
    .populate('blogs')
    .populate('postedBy')
    .exec(function (err, likesEntry) {
            if (err) next(err);
            res.json(likesEntry);
    });
})
.post(Verify.verifyOrdinaryUser, function(req, res, next){
    // get user id
    req.body.postedBy = req.decoded._id;
    // find one entry for the user
    LikedBlogs.findOne({'postedBy': req.body.postedBy}, function (err, likesEntry) {
        if (err) {
            next(err);
        // if likesEntry exists
        }else if(!err && likesEntry !== null){
            // if blog with _id is not in likesEntry
            if(likesEntry.blogs.indexOf(req.body._id) === -1){
                // push blog into likesEntry
                likesEntry.blogs.push(req.body._id);
                // save the data
                likesEntry.save(function (err, likesEntry) {
                    if (err) next(err);
                    // increment likes count for the blog
                    Blog.findById({_id: req.body._id}, function(err, result){
                        if(err) next(err);
                        result.likes += 1;
                        result.save(function(err, data){
                            if(err) next(err);
                            // return response as likesEntry
                            res.json(data.likes);
                        });
                    });
                });
            // if blog with _id already in likesEntry
            }else{
                // remove it from the likesEntry
                LikedBlogs.findOneAndUpdate({'postedBy': req.body.postedBy},
                    {$pull: {blogs: req.body._id}}, function(err, resp){
                    if (err) next(err);
                    // decrement likes count for the blog
                    Blog.findById({_id: req.body._id}, function(err, result){
                        if(err) next(err);
                        result.likes -= 1;
                        result.save(function(err, data){
                            if(err) next(err);
                            // return response as likesEntry
                            res.json(data.likes);
                        });
                    });
                });
            }
        }
        // if likesEntry doesn't exist
        else {
            // create new LikedBlogs instance
            var newUser = new LikedBlogs({blogs: [req.body._id], postedBy: req.body.postedBy});
            // save the data
            newUser.save(function(err, newUser){
                if(err) next(err);
                // increment likes count for the blog
                Blog.findById({_id: req.body._id}, function(err, result){
                    if(err) next(err);
                    result.likes += 1;
                    result.save(function(err, data){
                        if(err) next(err);
                        // return response as likesEntry
                        res.json(data.likes);
                    });
                });
            });
        }
    });
});


likedblogsrouter.route('/:blog_id')
.delete(Verify.verifyOrdinaryUser, function(req, res, next){
    // get user id
    req.body.postedBy = req.decoded._id;
    // remove the blog with given id from blogs array in likes entry
    // identified by user id
    LikedBlogs.findOneAndUpdate({'postedBy': req.body.postedBy},
        {$pull: {blogs: req.params.blog_id}}, function(err, resp){
        if (err) next(err);
        Blog.findById({_id: req.body._id}, function(err, res){
            if(err) next(err);
            res.likes += 1;
        });
        console.log("Removed blog from your likes list.");
        res.json(resp);
    });
});

module.exports = likedblogsrouter;