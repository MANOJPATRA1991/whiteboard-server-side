var express = require('express');
var cors = require('cors');
var path = require('path');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var async = require('async');
var mongoose = require('mongoose');

//set up passport
var passport = require('passport');
var config = require('./config');
//require authenticate.js file
var authenticate = require('./authenticate');

mongoose.connect(config.mongoUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //we're connected
    console.log("Connected correctly to the server");
});

var index = require('./routes/index');
var users = require('./routes/users');
var blogs = require('./routes/blogs');
var uploads = require('./routes/uploads');
var bookmarks = require('./routes/bookmarks');
var likedBlogs = require('./routes/likedBlogs');

var app = express();

//Secure traffic only
app.all('*', function(req, res, next){
   if (req.get('X-Forwarded-Proto')=='https' || req.hostname == 'localhost') {
        //Serve Angular App by passing control to the next middleware
        next();
    } else if(req.get('X-Forwarded-Proto')!='https' && req.get('X-Forwarded-Port')!='443'){
        //Redirect if not HTTP with original request URL
        res.redirect('https://' + req.hostname + req.url);
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//passport config
//middleware required to initialize passport
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/blogs', blogs);
app.use('/uploads', uploads);
app.use('/bookmarks', bookmarks);
app.use('/likedBlogs', likedBlogs);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
