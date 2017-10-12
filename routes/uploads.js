var express = require('express');
var bodyParser = require('body-parser');

var fs = require('fs');

// import froala sdk
var FroalaEditor = require('../node_modules/wysiwyg-editor-node-sdk/lib/froalaEditor.js');

var imageRouter = express.Router();

imageRouter.use(bodyParser.json());

imageRouter.route('/upload_image')
.post(function(req, res){

	FroalaEditor.Image.upload(req, '../blog-images/', function(err, data){
	    // Return data
	    if(err) {
	      return res.send(JSON.stringify(err));
	    }
	    res.send(data);
	});
});

module.exports = imageRouter;