var express = require('express');

var cors = require('cors');

var router = express.Router();

var passport = require('passport');
var bodyParser = require('body-parser');

var User = require('../models/users');
var Verify = require('./verify');
var agenda = require('agenda')({ db: { address: 'mongodb://MANOJ_PATRA:MAN1991@ds113825.mlab.com:13825/blogapp' } });
var sugar = require('sugar');
var nodemailer = require('nodemailer');

router.use(bodyParser.json());

/* GET users listing. */
router.route('/')
.get(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
    User.find({}, function (err, user) {
        if (err) next(err);
        res.json(user);
    });
});

// user registration
router.post('/register', function(req, res, next){
    User.register(new User({
                      username: req.body.username,
                      email: req.body.email
                    }), req.body.password, function(err, user){
        if(err){
            if(err.code === 11000){
                return res.status(500).json({err: "Email id already registered. Continue to log in"});
            }
            return res.status(500).json({err: 'Usernam or password is invalid. Go to signup page if not registered.'});
        }

        if(req.body.firstname){
            user.firstname = req.body.firstname;
        }

        if(req.body.lastname){
            user.lastname = req.body.lastname;
        }

        user.tempToken = Verify.getToken({"username":req.body.username, "_id":user._id, "admin":user.admin});
        console.log(user.tempToken);
        agenda.define('verify user email', {concurrency: 1}, function(job, done){
          var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: { user: 'patra.manoj0@gmail.com', pass: 'MAN@1991' }
            });

            var mailOptions = {
              from: 'Manoj Patra 👻 <patra.manoj0@gmail.com>',
              to: user.email,
              subject: 'Confirm Registration ✔',
              text: 'Hello ' + user.username,
              html: '<p>Hello ' + user.username + '<br> Greetings from watchHours' +
              'Click on the link below to verify email address.</p>'
                    + '<a href="https://localhost:3443/users/verify?authToken=' +
                    user.tempToken + '">Click Here to Verify Your Account</a>'
            };

            transporter.sendMail(mailOptions, function(error, response) {
                  if(error){
                    next(error);
                  }
                  console.log('Message sent: ' + response);
                  done();
            });
        });

        agenda.on('start', function(job) {
          console.log("Job %s starting", job.attrs.name);
        });

        agenda.on('complete', function(job) {
          console.log("Job %s finished", job.attrs.name);
        });

        user.save(function(err, user){
          passport.authenticate('local')(req, res, function(){
              agenda.start();
              agenda.schedule('now', 'verify user email');
              return res.status(200).json({status: 'Account Registered! Please check your email for activation'});
          });
        });
    });
});

// login user
router.post('/login', function(req, res, next){
    // An optional info argument will be passed, containing additional details provided by the strategy's verify callback.
   passport.authenticate('local', function(err, user, info){
       if(err){
           return next(err);
       }
       if(!user){
           return res.status(401).json({
               err: info
           });
       }
       // user will be assigned to req.user if login completes
       req.logIn(user, function(err){
           if(err){
               return res.status(500).json({
                   err: 'Could not log in user.'
               });
           }

           console.log('User in users: ', user);

           var token = Verify.getToken({"username":user.username, "_id":user._id, "admin":user.admin});

           res.status(200).json({
               status: 'Login successful!',
               success: true,
               token: token,
               admin: user.admin,
               _id: user._id,
               isVerified: user.isVerified
           });
       });
   })(req, res, next); //on success req.user contains the authenticated user
});

// logout user
router.get('/logout', function(req, res){
    //removes the req.user property and clear the login session
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

// facebook authentication with passport
router.get('/facebook', passport.authenticate('facebook'));

router.get('/facebook/callback', function(req, res, next){
    passport.authenticate('facebook', function(err, user, info){
        if(err){
            return next(err);
        }
        if(!user){
            return res.status(401).json({
                err: info
            });
        }
        req.logIn(user, function(err){
            if(err){
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }
            user.isVerified = true;
            var token = Verify.getToken({"username":user.username, "_id":user._id, "admin":user.admin});

            res.redirect(303, 'https://whiteboard-app.herokuapp.com/?token=' + token + '&user=' + user.username + '&_id=' + user._id + '&isVerified=' + user.isVerified);
        });
    })(req, res, next);
});


module.exports = router;
